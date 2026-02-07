/**
 * IsekaiSimu - event data (split out from app.js)
 * Author: Fuchs
 * License: MIT
 *
 * NOTE:
 * - This file contains ONLY data (no logic).
 * - Load this BEFORE app.js.
 */
(function () {
  window.IsekaiSimuData = window.IsekaiSimuData || {};
  window.IsekaiSimuData.EVENT_POOLS = {
    adventure: [
      { name: "スライム討伐", w: 1.0, test: ["STR", "VIT", "LUK"], gain: { xp: [20, 60], gold: [5, 25] } },
      { name: "ダンジョン探索", w: 0.9, test: ["DEX", "VIT", "LUK"], gain: { xp: [40, 90], gold: [10, 60] } },
      { name: "盗賊団の襲撃", w: 0.7, test: ["STR", "DEX", "LUK"], gain: { xp: [30, 80], gold: [0, 40] } },
      { name: "魔物の群れ", w: 0.6, test: ["STR", "VIT", "MAG"], gain: { xp: [60, 120], gold: [10, 50] } },
      { name: "ドラゴン遭遇", w: 0.25, test: ["MAG", "VIT", "LUK"], gain: { xp: [120, 220], gold: [40, 120] } },
      { name: "魔王軍の斥候と交戦", w: 0.35, test: ["STR", "MAG", "VIT"], gain: { xp: [90, 180], gold: [20, 80] } },
    ],
    life: [
      { name: "畑の開墾", w: 0.9, test: ["VIT", "DEX", "INT"], gain: { xp: [20, 60], gold: [5, 20] } },
      { name: "鍛冶修行", w: 0.8, test: ["DEX", "VIT", "INT"], gain: { xp: [30, 80], gold: [5, 35] } },
      { name: "交易で稼ぐ", w: 0.8, test: ["INT", "LUK", "DEX"], gain: { xp: [20, 60], gold: [20, 90] } },
      { name: "村の運営を手伝う", w: 0.75, test: ["INT", "DEX", "LUK"], gain: { xp: [20, 60], gold: [5, 25] } },
      { name: "小さな拠点を建築", w: 0.5, test: ["DEX", "INT", "VIT"], gain: { xp: [50, 110], gold: [-10, 30] } },
      { name: "研究成果が出る", w: 0.55, test: ["INT", "MAG", "LUK"], gain: { xp: [40, 120], gold: [0, 40] } },
    ],
    relations: [
      { name: "良き仲間と出会う", w: 0.65, test: ["LUK", "INT", "DEX"], gain: { xp: [10, 40], gold: [0, 15] } },
      { name: "師匠に鍛えられる", w: 0.5, test: ["VIT", "INT", "STR"], gain: { xp: [60, 130], gold: [0, 0] } },
      { name: "裏切りに遭う", w: 0.25, test: ["LUK", "INT", "DEX"], gain: { xp: [0, 30], gold: [-40, -5] } },
      { name: "王国の依頼を受ける", w: 0.35, test: ["INT", "STR", "MAG"], gain: { xp: [80, 160], gold: [30, 120] } },
    ],
    disaster: [
      { name: "疫病の流行", w: 0.25, test: ["INT", "VIT", "LUK"], gain: { xp: [0, 40], gold: [-60, -10] } },
      { name: "大洪水", w: 0.2, test: ["INT", "VIT", "DEX"], gain: { xp: [0, 50], gold: [-80, -20] } },
      { name: "戦争に巻き込まれる", w: 0.3, test: ["STR", "VIT", "INT"], gain: { xp: [60, 150], gold: [-30, 40] } },
    ],
  };
})();
