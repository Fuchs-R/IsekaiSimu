# IsekaiSimu — 異世界転生シミュレーター（β）

**「計算機が導き出す不条理（データ）」を「AIが紡ぐ物語（ナラティブ）」へ。**

## 📝 概要

`IsekaiSimu` は、ブラウザ上で30年分の「異世界転生年表」と「結果データ（JSON）」を生成するシミュレーターです。

このツールの目的は、**数値シミュレーションによる「厳密な運命」と、AIによる「柔軟な物語生成」を分離すること**にあります。AIに展開を丸投げするのではなく、JSが算出した「成功・失敗」のデータを設計図としてAIに渡すことで、より緊張感と意外性のある異世界体験を創出します。

## 🛡️ オリジン（制作の背景）

本プロジェクトは、2005年から20年以上更新を続けている個人サイト**「[日々綴（Hibi Tsuzuri）](https://day-2-day.info/)」**の管理人 **Fuchs** によって制作されました。

かつてのCGI全盛期に親しんだ「数値結果を読み解く楽しさ」を、現代のLLM（ChatGPT, Claude, Geminiなど）と融合させるための実験的プロトコルです。

## ✨ 特徴

* **Pure Front-end**: HTML/JS/CSSのみ。サーバー不要で動作します。
* **Data Driven**: 30年分のイベントをダイスロール（乱数）で確定させます。
* **Reproducibility**: `seed` 値により、同じ運命の再現・共有が可能です。
* **Provenance**: 出力JSONには `meta` タグが付与され、本シミュレーターの出力であることを証明します。

## 🚀 使い方

1. `index.html` をブラウザで開く。
2. ステータス・職業・チートを選択（またはランダム生成）。
3. **「生成！」** をクリックし、30年の人生を算出。
4. **「JSONをコピー」** をクリック。
5. お好みのAI（ChatGPT等）に、以下の「AI用プロンプト」と一緒に貼り付ける。


---

## 📊 出力データの構造（Meta）

本ツールが吐き出すJSONには、オリジナリティ保持のためのメタデータが含まれます。

```json
"meta": {
  "generator": "IsekaiSimu / Hibi-Tsuzuri Archives",
  "version": "0.1-beta",
  "author": "Fuchs",
  "site": "https://day-2-day.info/",
  "repo": "https://github.com/Fuchs-R/IsekaiSimu",
  "license": "MIT"
}

```

## 📄 ライセンス

**MIT License**
Copyright (c) 2026 Fuchs / 日々綴(Hibi-Tsuzuri)  

商用・改変・再配布は自由ですが、著作権表示の維持をお願いします。
