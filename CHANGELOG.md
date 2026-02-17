# IsekaiSimu — 更新履歴（CHANGELOG）

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
