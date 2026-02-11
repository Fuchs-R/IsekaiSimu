# IsekaiSimu — 異世界転生シミュレーター（β）

**「計算機が導き出す運命（データ）」を、AIが紡ぐ物語（ナラティブ）へ。**

---

## 🧭 概要

**IsekaiSimu** は、ブラウザ上で異世界転生後の人生を  
**年表＋結果JSON**として生成するフロントエンド完結型シミュレーターです。

本ツールは、物語生成をAIに丸投げせず、  
JavaScriptによって確定した「成功・失敗・成長」の履歴を  
**物語生成AIの入力素材**として提供することを目的としています。

---

## 🎯 コンセプト

- シミュレーションは **完全にJavaScript側で確定**
- AIは「解釈と物語化」のみを担当
- seed による再現性を最優先
- 出力JSONに `meta` を付与し、生成物の出自を保証

---

## ✨ 主な特徴

- **Pure Front-end**
  - HTML / CSS / JavaScript のみ
  - 外部API・サーバー不要
- **Data Driven**
  - 1年＝1イベントの年表生成
  - 成功率・死亡・資産増減を数値で判定
- **Tier System**
  - 序盤 / 中盤 / 終盤でイベント内容が自然に変化
- **Anti-Repeat Decay**
  - 直近イベントの被りを抑制
- **Reproducibility**
  - seed が同じなら結果は完全再現
- **AI Friendly**
  - ChatGPT / Claude / Gemini への貼り付け前提設計

---

## 🕹️ 使い方

1. `index.html` をブラウザで開く
2. 年数・職業・ステータス・チートを選択
3. **「生成！」** をクリック
4. 表示された **完成プロンプト** をコピー
5. お好みのAIに貼り付けて物語化

---

## 📦 出力データ（JSON）

生成されるJSONには、以下の `meta` 情報が必ず含まれます。

```json
{
  "meta": {
    "generator": "IsekaiSimu",
    "version": "0.2-beta",
    "author": "Fuchs",
    "license": "MIT",
    "site": "https://day-2-day.info/isekai/",
    "repo": "https://github.com/Fuchs/IsekaiSimu",
    "generated_at": "ISO8601",
    "build_id": "fnv1a-hash"
  }
}
```

---

## 🗂️ ファイル構成

```
/isekai/
├ index.html   # UI
├ style.css    # スタイル
├ events.js    # イベント定義（データのみ）
└ app.js       # シミュレーションロジック
```

---

## 📜 ライセンス

MIT License  
Copyright (c) 2026 Fuchs / 日々綴  

商用・改変・再配布は自由ですが、  
著作権表示およびライセンス表記は保持してください。

---

## 🔗 Links

- Web: https://day-2-day.info/isekai/
- Terms: https://day-2-day.info/isekai-terms/
- GitHub: https://github.com/Fuchs/IsekaiSimu
