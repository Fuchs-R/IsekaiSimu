# IsekaiSimu — 異世界転生シミュレーター（β）

**「計算機が導き出す運命（データ）」を、AIが紡ぐ物語（ナラティブ）へ。**

## 概要

IsekaiSimu はブラウザだけで動作する異世界転生シミュレーターです。  
シミュレーション結果（JSON）をAIに渡し、AIは物語化のみを担当します。API連携は行いません。

## v0.3-beta の要点

- `events.js` を 0.3 スキーマへ統一
  - 全イベントに安定 `id`
  - `emotion` / `impact` / `tags`
  - `outcomes` 5段階（fatal_failure / failure / success / great_success / costly_success）
  - 軽量因果 `requiresFlag` / `setsFlag`
  - 転機イベントの `micro` 素材
- `app.js` を 0.3 ロジックへ更新
  - バージョン更新: `0.3-beta`
  - 被り減衰の主キーを `name` から `id` へ移行
  - 成否判定を `outcomeKey` 化
  - `build.flags` 導入（AND条件の requiresFlag を適用）
  - 特殊処理（仲間追加 / 拠点 / 王国依頼）を id 参照へ移行
- build に `gender` を導入（male / female / nonbinary）
  - 能力値・成功率には影響なし
  - 物語生成時の呼称/関係描写向け素材として出力
- 職業を +4 追加
  - dungeon_cleaner（ダンジョン清掃員）
  - isekai_convenience_clerk（異世界コンビニ店員）
  - self_proclaimed_strategist（村の自称軍師）
  - wandering_bard（放浪詩人）
  - 各職業に `tone_bias` / 軽微な `event_bias` を付与
- highlights 出力を AI 素材向けに強化
  - year / eventId / name / impact / outcomeKey / emotion / tags / micro / gain
- X用140字指示を素材駆動化
  - 転機イベント優先、micro/emotion/tags 由来で情景を作る

## 使い方

1. `index.html` をブラウザで開く
2. 年数・トーン・職業・性別・ステータス・チートを設定
3. 「生成！」で JSON 含みの完成プロンプトを作成
4. 「コピー」でAIへ貼り付け

## ライセンス

MIT License
