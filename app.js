/**
 * IsekaiSimu - 異世界転生シミュレーター（β）
 */
(function () {
  const GENERATOR_NAME = "IsekaiSimu";
  const VERSION = "0.3-beta";
  const AUTHOR = "Fuchs";
  const SITE_URL = "https://day-2-day.info/isekai/";
  const REPO_URL = "https://github.com/Fuchs-R/IsekaiSimu";
  const LICENSE = "MIT";

  const JOBS = {
    adventurer: {
      label: "冒険者",
      tone_bias: "neutral",
      event_bias: { adventure: 1.08, disaster: 1.04 },
      stat_bias: { STR: 1.2, VIT: 1.1, DEX: 1.0, LUK: 1.0, MAG: 0.9, INT: 0.9 }
    },
    farmer: {
      label: "農民",
      tone_bias: "neutral",
      event_bias: { life: 1.1, disaster: 0.95 },
      stat_bias: { VIT: 1.2, DEX: 1.1, INT: 1.0, LUK: 1.0, STR: 0.9, MAG: 0.8 }
    },
    blacksmith: {
      label: "鍛冶師",
      tone_bias: "serious",
      event_bias: { life: 1.08 },
      stat_bias: { DEX: 1.25, INT: 1.0, VIT: 1.0, STR: 0.95, LUK: 0.9, MAG: 0.8 }
    },
    merchant: {
      label: "商人",
      tone_bias: "neutral",
      event_bias: { life: 1.06, relations: 1.06 },
      stat_bias: { INT: 1.25, LUK: 1.15, DEX: 1.0, VIT: 0.9, STR: 0.8, MAG: 0.8 }
    },
    researcher: {
      label: "研究者",
      tone_bias: "serious",
      event_bias: { life: 1.06, disaster: 0.94 },
      stat_bias: { INT: 1.3, MAG: 1.15, LUK: 1.0, DEX: 0.9, VIT: 0.85, STR: 0.7 }
    },
    traveler: {
      label: "旅人",
      tone_bias: "neutral",
      event_bias: { relations: 1.08, adventure: 1.04 },
      stat_bias: { LUK: 1.25, DEX: 1.05, INT: 1.0, VIT: 0.95, STR: 0.9, MAG: 0.9 }
    },
    dungeon_cleaner: {
      label: "ダンジョン清掃員",
      tone_bias: "comedy",
      event_bias: { adventure: 1.07, disaster: 0.92 },
      stat_bias: { VIT: 1.15, DEX: 1.1, LUK: 1.05, STR: 0.95, INT: 0.95, MAG: 0.85 }
    },
    isekai_convenience_clerk: {
      label: "異世界コンビニ店員",
      tone_bias: "comedy",
      event_bias: { life: 1.08, relations: 1.06 },
      stat_bias: { INT: 1.15, DEX: 1.1, LUK: 1.1, VIT: 0.95, STR: 0.85, MAG: 0.85 }
    },
    self_proclaimed_strategist: {
      label: "村の自称軍師",
      tone_bias: "comedy",
      event_bias: { relations: 1.1, disaster: 1.04 },
      stat_bias: { INT: 1.2, LUK: 1.1, DEX: 1.0, VIT: 0.9, STR: 0.85, MAG: 0.95 }
    },
    wandering_bard: {
      label: "放浪詩人",
      tone_bias: "serious",
      event_bias: { relations: 1.1, life: 1.05 },
      stat_bias: { LUK: 1.2, INT: 1.1, DEX: 1.0, MAG: 0.95, VIT: 0.9, STR: 0.85 }
    }
  };

  function nowISO() { return new Date().toISOString(); }
  function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
  function pick(rng, arr) { return arr[Math.floor(rng() * arr.length)]; }
  function fmtGold(n) { return Math.floor(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " G"; }
  function fnv1a(str) { let h = 0x811c9dc5; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); } return (h >>> 0).toString(16).padStart(8, "0"); }
  function rngFromSeed(seed) { let t = seed >>> 0; return function () { t += 0x6D2B79F5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; }; }

  const totalTarget = 100;
  const statDefs = [
    { key: "STR", name: "力", desc: "戦闘・肉体労働" }, { key: "MAG", name: "魔力", desc: "魔法・特殊技能" },
    { key: "DEX", name: "器用", desc: "クラフト・手先" }, { key: "INT", name: "知恵", desc: "研究・交渉・運営" },
    { key: "VIT", name: "体力", desc: "耐久・回復" }, { key: "LUK", name: "運", desc: "レア・回避・偶然" }
  ];

  const els = {
    stats: document.getElementById("stats"), totalNow: document.getElementById("totalNow"), years: document.getElementById("years"),
    tone: document.getElementById("tone"), job: document.getElementById("job"), gender: document.getElementById("gender"),
    comedyLevel: document.getElementById("comedyLevel"),
    xMode: document.getElementById("xMode"), xTag: document.getElementById("xTag"), xStyle: document.getElementById("xStyle"), cheats: document.getElementById("cheats"),
    cheatMsg: document.getElementById("cheatMsg"), btnGenerate: document.getElementById("btnGenerate"), btnCopy: document.getElementById("btnCopy"),
    btnReroll: document.getElementById("btnReroll"), seedView: document.getElementById("seedView"), promptBox: document.getElementById("promptBox"),
    copyMsg: document.getElementById("copyMsg"), hiBox: document.getElementById("hiBox"), timelineBox: document.getElementById("timelineBox"),
    kLv: document.getElementById("kLv"), kTitle: document.getElementById("kTitle"), kGold: document.getElementById("kGold"), kRewind: document.getElementById("kRewind"),
    verView: document.getElementById("verView"), yearNow: document.getElementById("yearNow")
  };

  if (els.verView) els.verView.textContent = `${GENERATOR_NAME} v${VERSION} / by ${AUTHOR}`;
  if (els.yearNow) els.yearNow.textContent = String(new Date().getFullYear());

  let statState = { STR: 18, MAG: 18, DEX: 16, INT: 16, VIT: 16, LUK: 16 };
  let seed = (Date.now() ^ (Math.random() * 1e9)) >>> 0;

  function renderStats() {
    els.stats.innerHTML = "";
    for (const s of statDefs) {
      const row = document.createElement("div");
      row.className = "row";
      row.innerHTML = `<div><div class="label">${s.name} <span class="small">(${s.key})</span></div><div class="small">${s.desc}</div></div><input type="range" min="0" max="40" step="1" value="${statState[s.key]}" data-key="${s.key}"><div class="num mono" id="v_${s.key}">${statState[s.key]}</div>`;
      els.stats.appendChild(row);
    }
    updateTotal();
  }
  function updateTotal() { els.totalNow.textContent = Object.values(statState).reduce((a, b) => a + b, 0).toString(); }
  function setStat(key, newVal) {
    statState[key] = clamp(newVal, 0, 40);
    let diff = Object.values(statState).reduce((a, b) => a + b, 0) - totalTarget;
    const others = statDefs.map(x => x.key).filter(k => k !== key);
    if (diff > 0) for (const k of [...others].sort((a, b) => statState[b] - statState[a])) { if (diff <= 0) break; const old = statState[k]; statState[k] = clamp(old - diff, 0, 40); diff -= (old - statState[k]); }
    if (diff < 0) { let need = -diff; for (const k of [...others].sort((a, b) => statState[a] - statState[b])) { if (need <= 0) break; const old = statState[k]; statState[k] = clamp(old + need, 0, 40); need -= (statState[k] - old); } }
    for (const s of statDefs) { const v = statState[s.key]; const input = els.stats.querySelector(`input[data-key="${s.key}"]`); if (input) input.value = v; const lab = document.getElementById(`v_${s.key}`); if (lab) lab.textContent = v; }
    updateTotal();
  }
  els.stats.addEventListener("input", (e) => { if (e.target && e.target.matches('input[type="range"][data-key]')) setStat(e.target.dataset.key, parseInt(e.target.value, 10)); });

  function getSelectedCheats() { return [...els.cheats.querySelectorAll('input[type="checkbox"]')].filter(b => b.checked).map(b => b.value); }
  els.cheats.addEventListener("change", () => { let kept = 0; for (const b of els.cheats.querySelectorAll('input[type="checkbox"]')) { if (b.checked && ++kept > 2) b.checked = false; } const cc = getSelectedCheats(); els.cheatMsg.textContent = cc.length === 0 ? "（未選択でもOK。選ぶなら最大2つ）" : `選択中：${cc.join("、")}`; });

  const EVENT_POOLS = (window.IsekaiSimuData && window.IsekaiSimuData.EVENT_POOLS) || null;
  const RECENT_EVENT_WINDOW = 4;
  const RECENT_EVENT_DECAY = [0.05, 0.15, 0.35, 0.60];
  const SPECIAL_IDS = { companion: "rel_bond_001", base: "lif_settlement_005", kingdom: "rel_kingdom_004" };

  function findRecencyIndex(recentIds, id) { for (let i = recentIds.length - 1, k = 0; i >= 0; i--, k++) if (recentIds[i] === id) return k; return null; }
  function effectiveWeight(baseW, recencyIndex) { if (recencyIndex == null) return baseW; return baseW * RECENT_EVENT_DECAY[Math.min(recencyIndex, RECENT_EVENT_DECAY.length - 1)]; }
  function weightedPick(rng, items, recentIds) {
    if (!items.length) return null;
    const useDecay = recentIds.length > 0 && items.length >= 6;
    let sum = 0; for (const it of items) sum += useDecay ? effectiveWeight(it.w || 1, findRecencyIndex(recentIds, it.id)) : (it.w || 1);
    let r = rng() * sum;
    for (const it of items) { r -= useDecay ? effectiveWeight(it.w || 1, findRecencyIndex(recentIds, it.id)) : (it.w || 1); if (r <= 0) return it; }
    return items[items.length - 1];
  }

  function scoreFor(stats, keys) { const v = keys.map(k => stats[k] || 0); return v[0] * 0.45 + v[1] * 0.35 + v[2] * 0.2; }
  function tierForYear(y, totalYears) { const t = y / totalYears; if (totalYears <= 10) return t <= 0.6 ? 1 : t <= 0.9 ? 2 : 3; if (totalYears <= 20) return t <= 0.35 ? 1 : t <= 0.75 ? 2 : 3; if (totalYears <= 30) return t <= 0.30 ? 1 : t <= 0.70 ? 2 : 3; return t <= 0.25 ? 1 : t <= 0.65 ? 2 : 3; }

  function simulate(build) {
    if (!EVENT_POOLS) return { timeline: ["イベントデータ未読込"], highlights: [], outcome: { level: 1, title: "-", gold: 0, rewinds_used: 0 }, stats_final: build.stats, tags: {} };
    const rng = rngFromSeed(build.seed);
    const jobCfg = JOBS[build.job] || JOBS.adventurer;
    let stats = { ...build.stats }, lv = 1, xp = 0, gold = 20, base = "村", companions = [], rewindsLeft = build.cheats.includes("死に戻り") ? 1 : 0, rewindsUsed = 0;
    const timeline = [], highlights = [], recentEvents = [], flags = {};
    const has = (c) => build.cheats.includes(c);

    function gainStat() {
      const keys = Object.keys(stats);
      for (let i = 0; i < 2; i++) {
        const totalW = keys.reduce((a, k) => a + (jobCfg.stat_bias[k] || 1), 0);
        let r = rng() * totalW, chosen = "STR";
        for (const k of keys) { r -= (jobCfg.stat_bias[k] || 1); if (r <= 0) { chosen = k; break; } }
        stats[chosen] = clamp(stats[chosen] + (rng() < 0.75 ? 1 : 2), 0, 99);
      }
    }
    function levelUp() { while (xp >= 100) { xp -= 100; lv += 1; gainStat(); } }
    function calcSuccess(ev) {
      let s = scoreFor(stats, ev.test);
      if (has("ダメージ半減")) s += 3;
      if (has("無限成長")) s += Math.min(10, lv * 0.12);
      if (has("建築補正") && /建築|運営|開墾/.test(ev.name)) s += 6;
      if (has("ドロップ倍率MAX") && /討伐|探索|交戦/.test(ev.name)) s += 2;
      return clamp((s - 10) / 40, 0.05, 0.92);
    }
    function applyFlagPatch(patch) {
      if (!patch) return;
      for (const [k, v] of Object.entries(patch)) {
        if (v === "clear") delete flags[k]; else flags[k] = !!v;
      }
    }
    function passesRequires(ev) {
      const req = ev.requiresFlag;
      if (!req) return true;
      return Object.entries(req).every(([k, v]) => (!!flags[k]) === v);
    }
    function pickOutcomeKey(ev, pSuccess) {
      const weights = {};
      for (const key of ["fatal_failure", "failure", "success", "great_success", "costly_success"]) {
        const ow = ev.outcomes && ev.outcomes[key] && typeof ev.outcomes[key].w === "number" ? ev.outcomes[key].w : 1;
        weights[key] = ow;
      }
      const cat = ev.id.slice(0, 3);
      const failBand = (1 - pSuccess), succBand = pSuccess;
      weights.fatal_failure *= failBand * (cat === "dis" ? 1.5 : cat === "adv" ? 1.15 : (ev.impact === "転機" ? 0.45 : 0.15));
      weights.failure *= failBand;
      weights.success *= succBand;
      weights.great_success *= succBand * 0.55;
      weights.costly_success *= succBand * 0.35;
      const sum = Object.values(weights).reduce((a, b) => a + b, 0);
      let r = rng() * sum;
      for (const key of Object.keys(weights)) { r -= weights[key]; if (r <= 0) return key; }
      return "success";
    }

    function applyOutcome(outcomeKey, ev) {
      let x = ev.gain.xp[0] + (ev.gain.xp[1] - ev.gain.xp[0]) * rng();
      let g = ev.gain.gold[0] + (ev.gain.gold[1] - ev.gain.gold[0]) * rng();
      if (has("ドロップ倍率MAX") && g > 0) g *= 1.35;

      const bad = ["fatal_failure", "failure"].includes(outcomeKey);
      if (outcomeKey === "fatal_failure") { x *= 0.2; g *= 0.25; g -= 40 + rng() * 80; }
      else if (outcomeKey === "failure") { x *= 0.45; g *= 0.5; }
      else if (outcomeKey === "great_success") { x *= 1.35; g *= 1.3; }
      else if (outcomeKey === "costly_success") { x *= 1.1; g = g > 0 ? g * 0.6 : g * 1.15; g -= 10 + rng() * 30; }

      if (!bad && ev.id === SPECIAL_IDS.companion && companions.length < 4) {
        const c = pick(rng, ["剣士", "弓使い", "回復術師", "盗賊", "魔術師", "獣人", "ドワーフ鍛冶師"]);
        if (!companions.includes(c)) companions.push(c);
      }
      if (!bad && ev.id === SPECIAL_IDS.base) base = (base === "村") ? "小さな拠点" : (base === "小さな拠点" ? "町" : base);
      if (!bad && ev.id === SPECIAL_IDS.kingdom && rng() < 0.4) base = "王都近郊";

      const outDef = ev.outcomes && ev.outcomes[outcomeKey];
      applyFlagPatch(ev.setsFlag); applyFlagPatch(outDef && outDef.setsFlag);

      xp += x; gold = Math.max(0, gold + g); levelUp();
      return { xp: Math.round(x), gold: Math.round(g) };
    }

    function importance(ev, outcomeKey, delta) {
      let score = ev.impact === "転機" ? 40 : 10;
      if (["fatal_failure", "great_success", "costly_success"].includes(outcomeKey)) score += 18;
      score += Math.min(20, delta.xp / 9) + Math.min(18, Math.abs(delta.gold) / 14);
      return score;
    }

    for (let y = 1; y <= build.years; y++) {
      const tier = tierForYear(y, build.years);
      const tierBias = tier === 1 ? { adventure: 0.95, life: 1.20, relations: 0.90, disaster: 0.20 } : tier === 2 ? { adventure: 1.05, life: 1.00, relations: 0.90, disaster: 0.35 } : { adventure: 1.20, life: 0.90, relations: 0.85, disaster: 0.55 };
      const poolChoices = [
        { k: "adventure", w: tierBias.adventure }, { k: "life", w: tierBias.life }, { k: "relations", w: 0.85 * tierBias.relations }, { k: "disaster", w: 0.35 * tierBias.disaster }
      ].map(p => ({ ...p, w: p.w * (jobCfg.event_bias[p.k] || 1) }));
      if (has("建築補正")) for (const p of poolChoices) if (p.k === "life") p.w += 0.22;
      let rs = rng() * poolChoices.reduce((a, b) => a + b.w, 0), poolKey = "adventure";
      for (const p of poolChoices) { rs -= p.w; if (rs <= 0) { poolKey = p.k; break; } }

      const poolAll = (EVENT_POOLS[poolKey] || []).filter(passesRequires);
      const poolTiered = poolAll.filter(it => it.tier == null || (Array.isArray(it.tier) ? it.tier.includes(tier) : it.tier === tier));
      const ev = weightedPick(rng, poolTiered.length ? poolTiered : poolAll, recentEvents);
      if (!ev) { timeline.push(`${y}年目：イベント不足`); continue; }
      recentEvents.push(ev.id); if (recentEvents.length > RECENT_EVENT_WINDOW) recentEvents.shift();

      const pSuccess = calcSuccess(ev);
      let outcomeKey = pickOutcomeKey(ev, pSuccess);
      if (outcomeKey === "fatal_failure" && rewindsLeft > 0) { rewindsLeft -= 1; rewindsUsed += 1; outcomeKey = "success"; }

      const delta = applyOutcome(outcomeKey, ev);
      const outcomeJp = { fatal_failure: "致命的失敗", failure: "失敗", success: "成功", great_success: "大成功", costly_success: "代償付き成功" }[outcomeKey];
      const line = `${y}年目：${ev.name}…${outcomeJp} / XP+${delta.xp}, 資産${delta.gold >= 0 ? "+" : ""}${delta.gold}`;
      timeline.push(line);

      const extraMicro = ev.outcomes && ev.outcomes[outcomeKey] && ev.outcomes[outcomeKey].micro;
      highlights.push({
        year: y,
        eventId: ev.id,
        name: ev.name,
        impact: ev.impact,
        outcomeKey,
        emotion: [...new Set([...(ev.emotion || []), ...((extraMicro && extraMicro.inner) ? [] : [])])],
        tags: ev.tags || [],
        micro: {
          motifs: [...new Set([...(ev.micro && ev.micro.motifs || []), ...(extraMicro && extraMicro.motifs || [])])],
          inner: [...new Set([...(ev.micro && ev.micro.inner || []), ...(extraMicro && extraMicro.inner || [])])],
          beat: [...new Set([...(ev.micro && ev.micro.beat || [])])]
        },
        humor: typeof ev.humor === "number" ? ev.humor : 0,
        gag: ev.gag || [],
        punch: ev.punch || [],
        gain: delta,
        text: line,
        score: importance(ev, outcomeKey, delta)
      });
      if (outcomeKey === "fatal_failure") break;
    }

    const top = [...highlights].sort((a, b) => b.score - a.score).slice(0, 10).sort((a, b) => a.year - b.year);
    const archetype = Object.entries(stats).sort((a, b) => b[1] - a[1])[0][0] === "INT" ? "知恵者" : base !== "村" ? "開拓者" : "旅人";
    const titleSeeds = archetype === "知恵者" ? ["王国の参謀", "知の探究者"] : archetype === "開拓者" ? ["開拓長官", "街づくりの旗手"] : ["放浪の旅人", "道標のない者"];

    return {
      seed: build.seed, years: build.years, tone: build.tone, job: build.job, gender: build.gender, cheats: build.cheats,
      timeline, highlights: top,
      outcome: { level: lv, title: pick(rng, titleSeeds), gold: Math.round(gold), base, companions, rewinds_used: rewindsUsed },
      stats_final: stats,
      flags,
      tags: { archetype, ended_early: timeline.length < build.years, tone_bias: jobCfg.tone_bias }
    };
  }

  function makePrompt(sim, build) {
    const xStyle = ["literary", "subtle", "absurd"].includes(build.x_style) ? build.x_style : "subtle";
    const isComedyMode = xStyle !== "literary";
    const comedyLevel = clamp(Number(build.comedy_level) || 0, 0, 3);
    const heavyComedyWords = ["喪失", "絶望", "悲嘆", "崩壊", "終焉", "死別", "戦争", "疫病"];
    const heavyScore = (h) => [...(h.emotion || []), ...(h.tags || [])].reduce((n, w) => n + (heavyComedyWords.some(t => w.includes(t)) ? 1 : 0), 0);
    const coreFeatureScore = (h) => {
      const microCount = (h.micro && ((h.micro.motifs || []).length + (h.micro.inner || []).length + (h.micro.beat || []).length)) || 0;
      return microCount + (h.tags || []).length;
    };
    const pickCoreHighlight = () => {
      const transitions = sim.highlights.filter(h => h.impact === "転機");
      const base = transitions.length ? transitions : sim.highlights;
      if (!base.length) return null;
      if (xStyle === "literary") return base[0];
      return [...base].sort((a, b) => {
        const sa = (a.humor || 0) * 6 + coreFeatureScore(a) * 2 - heavyScore(a) * 5 + (a.impact === "転機" ? 3 : 0);
        const sb = (b.humor || 0) * 6 + coreFeatureScore(b) * 2 - heavyScore(b) * 5 + (b.impact === "転機" ? 3 : 0);
        return sb - sa;
      })[0];
    };

    const payload = {
      meta: { generator: GENERATOR_NAME, version: VERSION, author: AUTHOR, license: LICENSE, site: SITE_URL, repo: REPO_URL, generated_at: nowISO(), build_id: fnv1a(JSON.stringify(build)) },
      build: { seed: sim.seed, years: sim.years, tone: sim.tone, gender: sim.gender, job: sim.job, comedy_level: comedyLevel, x_style: xStyle, cheats: sim.cheats, stats: sim.stats_final, flags: sim.flags },
      highlights: sim.highlights.map(h => ({ year: h.year, eventId: h.eventId, name: h.name, impact: h.impact, outcomeKey: h.outcomeKey, emotion: h.emotion, tags: h.tags, micro: h.micro, humor: h.humor, gag: h.gag, punch: h.punch, gain: h.gain })),
      outcome: sim.outcome, tags: sim.tags
    };

    const rules = [
      "1) まず短編（400〜600字）。転生→成長→結末まで。トーンは build.tone に合わせる。",
      "2) build.gender は呼称や関係描写だけに使う（能力値や成功率への理由付けは禁止）。",
      "3) 次に「年表ダイジェスト」5行（箇条書き）。",
      "4) 最後に「今回のビルド評価」：強み2行／弱み2行。"
    ];

    if (build.x_mode) {
      const core = pickCoreHighlight();
      const xHint = core ? `転機候補: ${core.name} (${[...core.emotion, ...core.tags, ...(core.gag || []), ...(core.punch || [])].slice(0, 5).join("/")})` : "転機候補なし";
      const corePolicyHint = xStyle === "literary"
        ? "核イベントは impact=転機 を優先し、世界観から余韻へ流す。"
        : "核イベントは impact=転機 を基本にしつつ、重すぎる語（喪失/絶望など）が強い候補は回避し、micro/tags が豊富な候補や humor が高い候補を優先する。";
      rules.push("5) 最後に「X投稿用（140文字以内）」見出しを付け、140文字以内の本文を1本だけ出力。");
      rules.push(
        "   - 140字以内は厳守。超えそうなら接続詞→形容詞→前置きの順に削って圧縮する",
        "   - 数値列挙・結果報告調・固有名詞の乱用は禁止",
        `   - ${corePolicyHint}`,
        "   - オチ/反転/余韻のいずれかで必ず締める"
      );
      if (xStyle === "literary") {
        rules.push(
          "   - 140字小説として成立させる。構造は世界観提示→進行→余韻",
          "   - 文体はやや硬め可。抽象語は過剰にしない",
          "   - 改行は0〜1回まで。説明調は禁止",
          "   - 余韻で締める"
        );
      } else if (xStyle === "subtle") {
        rules.push(
          "   - 140字小説として成立させる（説明文/解説文で終わらない）",
          "   - 構造は必ず4段: ①状況提示（真面目に）→②事実提示（異世界の出来事）→③主人公の認識（論理は一貫して正しい）→④静かな締め（余韻可。ただし意味がわずかに反転）",
          "   - ズレは“前提”または“評価軸”のどちらか1点だけに絞る",
          "   - 主人公は終始まじめ。叫ばない。大声で落とさない",
          "   - 禁止: ツッコミ口調（「〜だろ」「なんで」「知るか」等）／メタ（作者・仕様・テンプレ等）／現代語の露骨な混入（WLB/ガチ/詰み/現場猫 等）／「！」の多用（原則使わない）",
          "   - 会話文を入れるなら1行だけ、短く、弱いトーン（必須ではない）",
          "   - highlights の impact=転機 を核にし、micro/emotion/tags は素材として使う（説明化しない）",
          "   - 型の参考: 「祝福を受けた朝、役目だけが静かに増えた。」",
          "   - 型の参考: 「救われた夜、誇りの置き場だけが変わった。」"
        );
      } else {
        rules.push(
          "   - 構造は普通→ズレ→一撃オチ",
          "   - 3〜5行の短文改行を使う",
          "   - 現代語を1つ必須で入れる（例: WLB/ガチ/詰み/業者/現場猫）",
          "   - メタ表現は1つまで（作者/仕様/異世界テンプレ等）",
          "   - 最後は一撃で落とす。余韻で終わらない",
          "   - 文体は軽め可、ツッコミ可。誹謗中傷・差別・過激表現は禁止"
        );
      }
      if (xStyle === "absurd" && comedyLevel === 3) rules.push("   - comedy_level=3: 強いズレやメタの使用を優先してよい（ただしメタは1つまで）");
      rules.push(`   - ${xHint}`);
      if (build.x_tag) rules.push("   - 収まる場合のみ末尾に #IsekaiSimu を1つ");
    }

    return `以下のJSONをもとに、異世界転生の物語を生成してください。\n\n【出力ルール】\n${rules.join("\n")}\n\n【入力JSON】\n${JSON.stringify(payload, null, 2)}`;
  }

  async function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) { await navigator.clipboard.writeText(text); return true; }
    const ta = els.promptBox; ta.focus(); ta.select(); ta.setSelectionRange(0, ta.value.length);
    try { return document.execCommand("copy"); } catch { return false; }
  }

  function setSeed(newSeed) { seed = newSeed >>> 0; els.seedView.textContent = seed.toString(); }
  function validateCheats() { if (getSelectedCheats().length > 2) { els.cheatMsg.textContent = "チートは最大2つまでです。"; return false; } return true; }

  function doGenerate() {
    els.copyMsg.textContent = "";
    if (!validateCheats()) return;
    const total = Object.values(statState).reduce((a, b) => a + b, 0);
    if (total !== totalTarget) { els.copyMsg.innerHTML = `<span class="warn">ステ合計が${totalTarget}になっていません（現在 ${total}）。</span>`; return; }

    const build = {
      seed, years: parseInt(els.years.value, 10), tone: els.tone.value, job: els.job.value, gender: els.gender.value,
      comedy_level: clamp(parseInt(els.comedyLevel && els.comedyLevel.value, 10) || 2, 0, 3),
      x_mode: !!els.xMode.checked, x_tag: !!els.xTag.checked, x_style: (els.xStyle && els.xStyle.value) || "subtle", cheats: getSelectedCheats(), stats: { ...statState }, flags: {}
    };

    const sim = simulate(build);
    els.promptBox.value = makePrompt(sim, build);
    els.timelineBox.textContent = sim.timeline.length ? sim.timeline.join("\n") : "-";
    els.hiBox.textContent = sim.highlights.length ? sim.highlights.map(h => `${h.year}年目 [${h.eventId}] ${h.name} (${h.outcomeKey})`).join("\n") : "-";
    els.kLv.textContent = String(sim.outcome.level);
    els.kTitle.textContent = sim.outcome.title;
    els.kGold.textContent = fmtGold(sim.outcome.gold);
    els.kRewind.textContent = String(sim.outcome.rewinds_used);
    els.btnCopy.disabled = false;
  }

  function syncXTagAvailability() { if (els.xTag) els.xTag.disabled = !els.xMode.checked; }

  els.btnGenerate.addEventListener("click", doGenerate);
  els.btnCopy.addEventListener("click", async () => {
    const text = els.promptBox.value || "";
    if (!text.trim()) { els.copyMsg.innerHTML = '<span class="warn">先に「生成！」を押してください。</span>'; return; }
    const ok = await copyToClipboard(text);
    els.copyMsg.innerHTML = ok ? '<span class="ok">コピーしました！AIに貼り付けてください。</span>' : '<span class="warn">コピーに失敗しました。手動でコピーしてください。</span>';
  });
  els.btnReroll.addEventListener("click", () => { setSeed((Date.now() ^ (Math.random() * 1e9)) >>> 0); els.copyMsg.textContent = "seedを変更しました（生成結果が変わります）"; });
  if (els.xMode) els.xMode.addEventListener("change", syncXTagAvailability);

  setSeed(seed);
  renderStats();
  syncXTagAvailability();
  els.cheatMsg.textContent = "（未選択でもOK。選ぶなら最大2つ）";
})();
