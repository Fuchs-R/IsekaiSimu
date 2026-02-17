# IsekaiSimu — 更新履歴（CHANGELOG）

## v0.3-beta+x-style
### Added
- X style modes `x_style`（`literary` / `subtle` / `absurd`、default: `subtle`）を追加

### Changed
- X生成ルールを tone 主導から style 主導へ変更（`x_style` を最優先）
- X向けコア転機選定を改善（subtle/absurd では重すぎる素材を回避し、humor/micro/tagsを優先）
- X本文指示を 140字小説仕様へ再設計（文学/静かなコメディ/バズ狙いを明示分岐）

## v0.3-beta+comedy
### Added
- UI に `comedy_level`（0〜3, default:2）を追加
- events 任意フィールド `humor` / `gag` / `punch` を追加（後方互換）

### Changed
- X 140字ルールをコメディ分岐化（tone=コメディ or tone_bias=comedy）
- コメディ時は「状況→ズレ→オチ」固定、余韻締め禁止、ツッコミ必須条件を段階化
- コア転機選定を改善（重すぎる語を回避しつつ humor 高値を優先）
- 140字超過時の圧縮優先順（接続詞→形容→文短縮）を明示

## v0.3-beta
### Added
- 全イベントを 0.3 スキーマ化（id / emotion / impact / tags / outcomes / flags / micro）
- outcome 5段階判定（fatal_failure, failure, success, great_success, costly_success）
- build.gender（male / female / nonbinary）
- 職業4種追加（dungeon_cleaner, isekai_convenience_clerk, self_proclaimed_strategist, wandering_bard）
- highlights を AI 素材向け項目で拡張（eventId, outcomeKey, emotion, tags, micro, gain）

### Changed
- VERSION を 0.3-beta に更新
- 被り減衰を name 基準から id 基準へ移行
- 軽量因果 flags（requiresFlag AND / setsFlag）をシミュレーションへ導入
- 特殊処理（仲間/拠点/王国依頼）を id 判定に移行
- X 140字向け指示を転機+micro 素材優先の方針に更新

### Notes
- v0.2-beta の思想（AIは物語化のみ・API連携なし）を継承

## v0.2-beta
- Tier制・被り減衰・データ分離・X投稿オプションを導入

## v0.1-beta
- β版初公開
