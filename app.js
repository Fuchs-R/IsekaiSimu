/**
 * IsekaiSimu - 異世界転生シミュレーター（β）
 * Author: Fuchs
 * Site: https://day-2-day.info/isekai/
 * Repo: https://github.com/Fuchs/IsekaiSimu
 *
 * MIT License
 * Copyright (c) 2026 Fuchs - 日々綴 (day-2-day.info)
 *
 * NOTE:
 * - 本ツールはフロントエンド完結（AI APIは呼びません）
 * - 生成されたプロンプトを外部AIに貼り付けて遊ぶ設計です
*/

(function () {
  // ---- Project constants ----
  const GENERATOR_NAME = "IsekaiSimu";
  const VERSION = "0.2-beta";
  const AUTHOR = "Fuchs";
  const SITE_URL = "https://day-2-day.info/isekai/";
  const REPO_URL = "https://github.com/Fuchs-R/IsekaiSimu";
  const LICENSE = "MIT";

  // ---- Helpers ----
  function nowISO() {
    return new Date().toISOString();
  }

  // mulberry32 PRNG
  function rngFromSeed(seed) {
    let t = seed >>> 0;
    return function () {
      t += 0x6D2B79F5;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
  function pick(rng, arr) { return arr[Math.floor(rng() * arr.length)]; }
  function fmtGold(n) {
    const s = Math.floor(n).toString();
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " G";
  }

  // Small non-crypto hash for build_id
  function fnv1a(str) {
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 0x01000193);
    }
    return (h >>> 0).toString(16).padStart(8, "0");
  }

  // ---- UI bindings ----
  const totalTarget = 100;
  const statDefs = [
    { key: "STR", name: "力", desc: "戦闘・肉体労働" },
    { key: "MAG", name: "魔力", desc: "魔法・特殊技能" },
    { key: "DEX", name: "器用", desc: "クラフト・手先" },
    { key: "INT", name: "知恵", desc: "研究・交渉・運営" },
    { key: "VIT", name: "体力", desc: "耐久・回復" },
    { key: "LUK", name: "運", desc: "レア・回避・偶然" },
  ];

  const els = {
    stats: document.getElementById("stats"),
    totalNow: document.getElementById("totalNow"),
    years: document.getElementById("years"),
    tone: document.getElementById("tone"),
    job: document.getElementById("job"),
    xMode: document.getElementById("xMode"),
    xTag: document.getElementById("xTag"),
    cheats: document.getElementById("cheats"),
    cheatMsg: document.getElementById("cheatMsg"),
    btnGenerate: document.getElementById("btnGenerate"),
    btnCopy: document.getElementById("btnCopy"),
    btnReroll: document.getElementById("btnReroll"),
    seedView: document.getElementById("seedView"),
    promptBox: document.getElementById("promptBox"),
    copyMsg: document.getElementById("copyMsg"),
    hiBox: document.getElementById("hiBox"),
    timelineBox: document.getElementById("timelineBox"),
    kLv: document.getElementById("kLv"),
    kTitle: document.getElementById("kTitle"),
    kGold: document.getElementById("kGold"),
    kRewind: document.getElementById("kRewind"),
    verView: document.getElementById("verView"),
    yearNow: document.getElementById("yearNow"),
  };

  // Footer display
  if (els.verView) els.verView.textContent = `${GENERATOR_NAME} v${VERSION} / by ${AUTHOR}`;
  if (els.yearNow) els.yearNow.textContent = String(new Date().getFullYear());

  // Default stats (sum 100)
  let statState = { STR: 18, MAG: 18, DEX: 16, INT: 16, VIT: 16, LUK: 16 };
  let seed = (Date.now() ^ (Math.random() * 1e9)) >>> 0;

  function renderStats() {
    els.stats.innerHTML = "";
    for (const s of statDefs) {
      const row = document.createElement("div");
      row.className = "row";
      row.innerHTML = `
        <div>
          <div class="label">${s.name} <span class="small">(${s.key})</span></div>
          <div class="small">${s.desc}</div>
        </div>
        <input type="range" min="0" max="40" step="1" value="${statState[s.key]}" data-key="${s.key}">
        <div class="num mono" id="v_${s.key}">${statState[s.key]}</div>
      `;
      els.stats.appendChild(row);
    }
    updateTotal();
  }

  function updateTotal() {
    const total = Object.values(statState).reduce((a, b) => a + b, 0);
    els.totalNow.textContent = total.toString();
  }

  // Keep total at 100 by auto-adjusting other stats
  function setStat(key, newVal) {
    newVal = clamp(newVal, 0, 40);
    statState[key] = newVal;

    let total = Object.values(statState).reduce((a, b) => a + b, 0);
    let diff = total - totalTarget;

    const others = statDefs.map(x => x.key).filter(k => k !== key);

    function adjustDown(k, amount) {
      const v = statState[k];
      const nv = clamp(v - amount, 0, 40);
      const actual = v - nv;
      statState[k] = nv;
      return actual;
    }

    if (diff > 0) {
      const sorted = [...others].sort((a, b) => statState[b] - statState[a]);
      for (const k of sorted) {
        if (diff <= 0) break;
        diff -= adjustDown(k, diff);
      }
    } else if (diff < 0) {
      let need = -diff;
      const sorted = [...others].sort((a, b) => statState[a] - statState[b]);
      for (const k of sorted) {
        if (need <= 0) break;
        const v = statState[k];
        const nv = clamp(v + need, 0, 40);
        const added = nv - v;
        statState[k] = nv;
        need -= added;
      }
    }

    // Update UI
    for (const s of statDefs) {
      const v = statState[s.key];
      const input = els.stats.querySelector(`input[data-key="${s.key}"]`);
      if (input) input.value = v;
      const lab = document.getElementById(`v_${s.key}`);
      if (lab) lab.textContent = v;
    }
    updateTotal();
  }

  els.stats.addEventListener("input", (e) => {
    const t = e.target;
    if (t && t.matches('input[type="range"][data-key]')) {
      setStat(t.dataset.key, parseInt(t.value, 10));
    }
  });

  function getSelectedCheats() {
    const boxes = els.cheats.querySelectorAll('input[type="checkbox"]');
    const arr = [];
    for (const b of boxes) if (b.checked) arr.push(b.value);
    return arr;
  }

  els.cheats.addEventListener("change", () => {
    const boxes = Array.from(els.cheats.querySelectorAll('input[type="checkbox"]'));
    let kept = 0;
    for (const b of boxes) {
      if (b.checked) {
        kept++;
        if (kept > 2) b.checked = false;
      }
    }
    const cc = getSelectedCheats();
    els.cheatMsg.textContent = cc.length === 0 ? "（未選択でもOK。選ぶなら最大2つ）" : `選択中：${cc.join("、")}`;
  });

  // ---- Events (same as prototype) ----
  const EVENT_POOLS =
    (window.IsekaiSimuData && window.IsekaiSimuData.EVENT_POOLS) || null;

  if (!EVENT_POOLS) {
    console.error("[IsekaiSimu] EVENT_POOLS is not loaded. Load events.js before app.js.");
  }


  
// ---- Anti-repeat decay (recent events are less likely to repeat) ----
// Window size (how many past years to consider)
const RECENT_EVENT_WINDOW = 4;
// Decay multipliers by recency (most recent first)
// Example: last year 5%, 2 years ago 15%, 3 years ago 35%, 4 years ago 60%
const RECENT_EVENT_DECAY = [0.05, 0.15, 0.35, 0.60];

function effectiveWeight(baseW, recencyIndex) {
  if (recencyIndex == null) return baseW;
  const m = RECENT_EVENT_DECAY[Math.min(recencyIndex, RECENT_EVENT_DECAY.length - 1)];
  return baseW * m;
}

function findRecencyIndex(recentNames, name) {
  // recentNames is oldest->newest (queue). Return 0 for most recent, 1 for 2nd most recent...
  for (let i = recentNames.length - 1, k = 0; i >= 0; i--, k++) {
    if (recentNames[i] === name) return k;
  }
  return null;
}

function weightedPick(rng, items, recentNames) {
  if (!items || items.length === 0) return null;

  // If pool is too small, don't over-decay (avoids "nothing feels selectable")
  const useDecay = Array.isArray(recentNames) && recentNames.length > 0 && items.length >= 6;

  let sum = 0;
  for (const it of items) {
    const baseW = (typeof it.w === "number" ? it.w : 1);
    if (!useDecay) { sum += baseW; continue; }
    const rec = findRecencyIndex(recentNames, it.name);
    sum += effectiveWeight(baseW, rec);
  }

  let r = rng() * sum;
  for (const it of items) {
    const baseW = (typeof it.w === "number" ? it.w : 1);
    const w = useDecay ? effectiveWeight(baseW, findRecencyIndex(recentNames, it.name)) : baseW;
    r -= w;
    if (r <= 0) return it;
  }
  return items[items.length - 1];
}

  function scoreFor(stats, keys) {
    const v = keys.map(k => stats[k] || 0);
    return v[0] * 0.45 + v[1] * 0.35 + v[2] * 0.20;
  }

  function simulate(build) {
    const rng = rngFromSeed(build.seed);
    let stats = { ...build.stats };
    let lv = 1;
    let xp = 0;
    let gold = 20;
    let base = "村";
    let companions = [];
    let rewindsLeft = build.cheats.includes("死に戻り") ? 1 : 0;
    let rewindsUsed = 0;

    const timeline = [];
    const highlights = [];

    // Recent event names (for anti-repeat decay)
    const recentEvents = [];

    const years = build.years;
    const has = (c) => build.cheats.includes(c);

    // ---- Tier (early/mid/late) ----
    // Tier: 1=序盤, 2=中盤, 3=終盤
    function tierForYear(y, totalYears) {
      const t = y / totalYears; // 0..1
      if (totalYears <= 10) {
        if (t <= 0.6) return 1;
        if (t <= 0.9) return 2;
        return 3;
      }
      if (totalYears <= 20) {
        if (t <= 0.35) return 1;
        if (t <= 0.75) return 2;
        return 3;
      }
      if (totalYears <= 30) {
        if (t <= 0.30) return 1;
        if (t <= 0.70) return 2;
        return 3;
      }
      // 40年想定
      if (t <= 0.25) return 1;
      if (t <= 0.65) return 2;
      return 3;
    }

    function gainStat() {
      const keys = ["STR", "MAG", "DEX", "INT", "VIT", "LUK"];
      const jobBias = {
        "冒険者": { STR: 1.2, VIT: 1.1, DEX: 1.0, LUK: 1.0, MAG: 0.9, INT: 0.9 },
        "農民": { VIT: 1.2, DEX: 1.1, INT: 1.0, LUK: 1.0, STR: 0.9, MAG: 0.8 },
        "鍛冶師": { DEX: 1.25, INT: 1.0, VIT: 1.0, STR: 0.95, LUK: 0.9, MAG: 0.8 },
        "商人": { INT: 1.25, LUK: 1.15, DEX: 1.0, VIT: 0.9, STR: 0.8, MAG: 0.8 },
        "研究者": { INT: 1.3, MAG: 1.15, LUK: 1.0, DEX: 0.9, VIT: 0.85, STR: 0.7 },
        "旅人": { LUK: 1.25, DEX: 1.05, INT: 1.0, VIT: 0.95, STR: 0.9, MAG: 0.9 },
      }[build.job] || { STR: 1, MAG: 1, DEX: 1, INT: 1, VIT: 1, LUK: 1 };

      for (let i = 0; i < 2; i++) {
        const totalW = keys.reduce((a, k) => a + (jobBias[k] || 1), 0);
        let r = rng() * totalW;
        let chosen = "STR";
        for (const k of keys) {
          r -= (jobBias[k] || 1);
          if (r <= 0) { chosen = k; break; }
        }
        const inc = (rng() < 0.75) ? 1 : 2;
        stats[chosen] = clamp(stats[chosen] + inc, 0, 99);
      }
    }

    function levelUp() {
      while (xp >= 100) {
        xp -= 100;
        lv += 1;
        gainStat();
      }
    }

    function calcSuccess(ev) {
      let s = scoreFor(stats, ev.test);
      if (has("ダメージ半減")) s += 3;
      if (has("無限成長")) s += Math.min(10, lv * 0.12);
      if (has("建築補正") && (ev.name.includes("建築") || ev.name.includes("運営") || ev.name.includes("開墾"))) s += 6;
      if (has("ドロップ倍率MAX") && (ev.name.includes("討伐") || ev.name.includes("探索") || ev.name.includes("交戦"))) s += 2;
      return clamp((s - 10) / 40, 0.05, 0.92);
    }

    function applyOutcome(success, ev) {
      const xpRange = ev.gain.xp;
      const gRange = ev.gain.gold;

      let x = xpRange[0] + (xpRange[1] - xpRange[0]) * rng();
      let g = gRange[0] + (gRange[1] - gRange[0]) * rng();

      if (has("ドロップ倍率MAX") && g > 0) g *= 1.35;

      if (!success) {
        x *= 0.35;
        g *= 0.45;
        if (rng() < 0.18) g -= 30 + rng() * 60;
      }

      if (success && ev.name === "良き仲間と出会う" && companions.length < 4) {
        const cand = ["剣士", "弓使い", "回復術師", "盗賊", "魔術師", "獣人", "ドワーフ鍛冶師"];
        const c = pick(rng, cand);
        if (!companions.includes(c)) companions.push(c);
      }
      if (success && ev.name === "小さな拠点を建築") {
        base = (base === "村") ? "小さな拠点" : (base === "小さな拠点" ? "町" : base);
      }
      if (success && ev.name === "王国の依頼を受ける" && rng() < 0.4) {
        base = "王都近郊";
      }

      xp += x;
      gold += g;
      gold = Math.max(0, gold);
      levelUp();

      return { xp: Math.round(x), gold: Math.round(g) };
    }

    function maybeDeath(success, ev) {
      const dangerous = (ev.name.includes("ドラゴン") || ev.name.includes("戦争") || ev.name.includes("交戦") || ev.name.includes("群れ"));
      if (!dangerous || success) return false;
      let p = 0.10;
      p += (ev.name.includes("ドラゴン") ? 0.12 : 0);
      p += (ev.name.includes("戦争") ? 0.08 : 0);
      p -= (stats.VIT * 0.002);
      p -= (has("ダメージ半減") ? 0.05 : 0);
      return rng() < clamp(p, 0.02, 0.28);
    }

    function importance(ev, success, delta) {
      let score = 0;
      if (ev.name.includes("ドラゴン") || ev.name.includes("魔王") || ev.name.includes("戦争")) score += 40;
      if (ev.name.includes("拠点") || ev.name.includes("町") || ev.name.includes("運営")) score += 18;
      if (ev.name.includes("王国")) score += 22;
      if (ev.name.includes("裏切り")) score += 18;
      score += Math.min(20, delta.xp / 8);
      score += Math.min(20, Math.abs(delta.gold) / 10);
      if (!success) score += 6;
      if (delta.gold < 0) score += 4;
      return score;
    }

    for (let y = 1; y <= years; y++) {
      const tier = tierForYear(y, years);
      let poolChoices = [];

      // Base pool weights by tier (keeps 1年=1イベントのまま展開に差を出す)
      const tierBias = (
        tier === 1 ? { adventure: 0.95, life: 1.20, relations: 0.90, disaster: 0.20 } :
        tier === 2 ? { adventure: 1.05, life: 1.00, relations: 0.90, disaster: 0.35 } :
                     { adventure: 1.20, life: 0.90, relations: 0.85, disaster: 0.55 }
      );

      poolChoices.push({ k: "adventure", w: (build.job === "冒険者" ? 1.25 : 1.0) * tierBias.adventure });
      poolChoices.push({ k: "life", w: ((build.job === "農民" || build.job === "鍛冶師") ? 1.25 : 1.0) * tierBias.life });
      poolChoices.push({ k: "relations", w: 0.85 * tierBias.relations });
      poolChoices.push({ k: "disaster", w: 0.35 * tierBias.disaster });
      if (has("建築補正")) poolChoices = poolChoices.map(p => p.k === "life" ? { ...p, w: p.w + 0.25 } : p);

      const poolSum = poolChoices.reduce((a, b) => a + b.w, 0);
      let r = rng() * poolSum;
      let poolKey = "adventure";
      for (const p of poolChoices) { r -= p.w; if (r <= 0) { poolKey = p.k; break; } }

      // Tier filter (events may define tier as number or array). If missing, it's treated as [1,2,3].
      const poolAll = EVENT_POOLS[poolKey] || [];
      const poolTiered = poolAll.filter(it => {
        const t = it.tier;
        if (t == null) return true;
        if (Array.isArray(t)) return t.includes(tier);
        return t === tier;
      });
      const poolUse = poolTiered.length ? poolTiered : poolAll;

      const ev = weightedPick(rng, poolUse, recentEvents);
// Update recent queue (oldest->newest)
if (ev && ev.name) {
  recentEvents.push(ev.name);
  if (recentEvents.length > RECENT_EVENT_WINDOW) recentEvents.shift();
}

      if (!ev) { timeline.push(`${y}年目：イベント選択失敗（データ不足）`); continue; }

      const pSuccess = calcSuccess(ev);
      const success = rng() < pSuccess;

      const death = maybeDeath(success, ev);
      let note = "";

      if (death) {
        if (rewindsLeft > 0) {
          rewindsLeft -= 1;
          rewindsUsed += 1;
          note = "（致命傷→死に戻り発動）";
          const delta = applyOutcome(true, ev);
          const line = `${y}年目：${ev.name}…失敗→やり直し成功 ${note} / XP+${delta.xp}, 資産${delta.gold >= 0 ? "+" : ""}${delta.gold}`;
          timeline.push(line);
          highlights.push({ year: y, text: line, success: true, impact: delta, score: importance(ev, false, delta) + 30 });
          continue;
        } else {
          note = "（死亡）";
          const delta = applyOutcome(false, ev);
          const line = `${y}年目：${ev.name}…失敗 ${note} / XP+${delta.xp}, 資産${delta.gold >= 0 ? "+" : ""}${delta.gold}`;
          timeline.push(line);
          highlights.push({ year: y, text: line, success: false, impact: delta, score: importance(ev, false, delta) + 50 });
          break;
        }
      }

      const delta = applyOutcome(success, ev);
      const line = `${y}年目：${ev.name}…${success ? "成功" : "失敗"} ${note} / XP+${delta.xp}, 資産${delta.gold >= 0 ? "+" : ""}${delta.gold}`;
      timeline.push(line);
      highlights.push({ year: y, text: line, success, impact: delta, score: importance(ev, success, delta) });
    }

    const archetype = (function () {
      const s = stats;
      const maxKey = Object.entries(s).sort((a, b) => b[1] - a[1])[0][0];
      if (base === "町" || base === "王都近郊") return "開拓者";
      if (maxKey === "STR" || maxKey === "VIT") return "英雄";
      if (maxKey === "INT") return "知恵者";
      if (maxKey === "DEX") return "職人";
      if (maxKey === "MAG") return "魔術師";
      if (maxKey === "LUK") return "幸運者";
      return "旅人";
    })();

    const title = (function () {
      const rng2 = rngFromSeed(build.seed ^ 0x9E3779B9);
      const t = [];
      if (archetype === "英雄") t.push("戦場の英雄", "王国の守護者", "剣の継承者");
      else if (archetype === "開拓者") t.push("開拓長官", "街づくりの旗手", "辺境の領主");
      else if (archetype === "知恵者") t.push("王国の参謀", "知の探究者", "賢者の卵");
      else if (archetype === "職人") t.push("伝説の鍛冶見習い", "匠の手", "工房の主");
      else if (archetype === "魔術師") t.push("深淵の魔術師", "王立魔術院の客員", "元素の使い手");
      else if (archetype === "幸運者") t.push("運命の寵児", "偶然を味方にする者", "宝箱の王");
      else t.push("放浪の旅人", "道標のない者", "地平線の先へ");
      if (has("スキルコピー")) t.push("百技の写し身");
      if (has("無限成長")) t.push("終わらぬ成長者");
      if (has("建築補正")) t.push("建築の加護を受けし者");
      return pick(rng2, t);
    })();

    const top = [...highlights]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .sort((a, b) => a.year - b.year);

    return {
      seed: build.seed,
      years: build.years,
      tone: build.tone,
      job: build.job,
      cheats: build.cheats,
      timeline,
      highlights: top,
      outcome: {
        level: lv,
        title,
        gold: Math.round(gold),
        base,
        companions,
        rewinds_used: rewindsUsed,
      },
      stats_final: stats,
      tags: {
        archetype,
        ended_early: timeline.length < build.years,
      }
    };
  }

  // ---- Prompt builder (meta included) ----
  function makePrompt(sim, build) {
    const generatedAt = nowISO();
    const buildId = fnv1a(JSON.stringify(build));

    const payload = {
      meta: {
        generator: GENERATOR_NAME,
        version: VERSION,
        author: AUTHOR,
        license: LICENSE,
        site: SITE_URL,
        repo: REPO_URL,
        generated_at: generatedAt,
        build_id: buildId
      },
      build: {
        seed: sim.seed,
        years: sim.years,
        tone: sim.tone,
        job: sim.job,
        cheats: sim.cheats,
        stats: sim.stats_final,
      },
      highlights: sim.highlights.map(h => ({
        year: h.year,
        text: h.text,
        impact: h.impact
      })),
      outcome: sim.outcome,
      tags: sim.tags
    };

    const rules = [
      "1) まず短編（400〜600字）。転生→成長→結末まで。トーンは build.tone に合わせる。",
      "2) 次に「年表ダイジェスト」5行（箇条書き）。",
      "3) 最後に「今回のビルド評価」：強み2行／弱み2行。",
      "4) 固有名詞は過度に増やさず、JSONの要素を尊重する。盛りすぎない。",
    ];

    if (build.x_mode) {
      rules.push(
        "5) 最後に「X投稿用（140文字以内）」という見出しを付け、その直下に140文字以内の本文を1本だけ出力してください。",
        "   - 140文字以内（改行も1文字扱い、改行は最大2回まで）",
        "   - レポート調は禁止（例：Lv○○、資産○○ などの列挙は禁止）",
        "   - 数値の羅列は禁止（必要なら1つまで、自然な文中のみ）",
        "   - JSONの重要イベントから「転機となる場面」を1つだけ抽出する",
        "   - 成果の説明ではなく「情景」「余韻」「一場面」を描く",
        "   - あらすじ説明は禁止（説明・要約をしない）",
        "   - 情報整理ではなく、短編小説の断章にする"
      );

      if (build.x_tag) {
        rules.push(
          "   - 可能なら末尾に #IsekaiSimu を1つ付ける",
          "   - ただし140字に収まらない場合はタグを削除してよい"
        );
      } else {
        rules.push("   - ハッシュタグは付けない");
      }
    }

    const instruction =
`以下のJSONをもとに、異世界転生の物語を生成してください。

【出力ルール】
${rules.join("\n")}

【入力JSON】`;

    return instruction + "\n" + JSON.stringify(payload, null, 2);
  }

  // ---- Copy helper ----
  async function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // fallback
    const ta = els.promptBox;
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    try { return document.execCommand("copy"); }
    catch { return false; }
  }

  function setSeed(newSeed) {
    seed = (newSeed >>> 0);
    els.seedView.textContent = seed.toString();
  }

  function validateCheats() {
    const c = getSelectedCheats();
    if (c.length > 2) {
      els.cheatMsg.textContent = "チートは最大2つまでです。";
      return false;
    }
    return true;
  }

  function doGenerate() {
    els.copyMsg.textContent = "";
    if (!validateCheats()) return;

    const total = Object.values(statState).reduce((a, b) => a + b, 0);
    if (total !== totalTarget) {
      els.copyMsg.innerHTML = `<span class="warn">ステ合計が${totalTarget}になっていません（現在 ${total}）。</span>`;
      return;
    }

    const build = {
      seed,
      years: parseInt(els.years.value, 10),
      tone: els.tone.value,
      job: els.job.value,
      x_mode: !!(els.xMode && els.xMode.checked),
      x_tag: !!(els.xTag && els.xTag.checked),
      cheats: getSelectedCheats(),
      stats: { ...statState },
    };

    const sim = simulate(build);
    const prompt = makePrompt(sim, build);

    // UI fill
    els.promptBox.value = prompt;
    els.timelineBox.textContent = sim.timeline.length ? sim.timeline.join("\n") : "-";
    els.hiBox.textContent = sim.highlights.length ? sim.highlights.map(h => h.text).join("\n") : "-";

    els.kLv.textContent = sim.outcome.level.toString();
    els.kTitle.textContent = sim.outcome.title;
    els.kGold.textContent = fmtGold(sim.outcome.gold);
    els.kRewind.textContent = sim.outcome.rewinds_used.toString();

    els.btnCopy.disabled = false;

    // Mobile: scroll to prompt
    if (window.innerWidth < 860) {
      els.promptBox.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function syncXTagAvailability() {
    if (!els.xMode || !els.xTag) return;
    els.xTag.disabled = !els.xMode.checked;
  }

  // ---- Events wiring ----
  els.btnGenerate.addEventListener("click", doGenerate);

  els.btnCopy.addEventListener("click", async () => {
    const text = els.promptBox.value || "";
    if (!text.trim()) {
      els.copyMsg.innerHTML = `<span class="warn">先に「生成！」を押してください。</span>`;
      return;
    }
    try {
      const ok = await copyToClipboard(text);
      els.copyMsg.innerHTML = ok
        ? `<span class="ok">コピーしました！AI（ChatGPT/Claude/Gemini）に貼り付けてください。</span>`
        : `<span class="warn">コピーに失敗しました。手動でコピーしてください。</span>`;
    } catch {
      els.copyMsg.innerHTML = `<span class="warn">コピーに失敗しました。手動でコピーしてください。</span>`;
    }
  });

  els.btnReroll.addEventListener("click", () => {
    setSeed((Date.now() ^ (Math.random() * 1e9)) >>> 0);
    els.copyMsg.textContent = "seedを変更しました（生成結果が変わります）";
  });

  if (els.xMode) {
    els.xMode.addEventListener("change", syncXTagAvailability);
  }

  // ---- Init ----
  setSeed(seed);
  renderStats();
  syncXTagAvailability();
  els.cheatMsg.textContent = "（未選択でもOK。選ぶなら最大2つ）";
})();
