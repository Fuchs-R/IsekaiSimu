/**
 * IsekaiSimu - event data (v0.3-beta schema)
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
  "adventure": [
    {
      "name": "スライム討伐",
      "w": 1,
      "tier": [
        1
      ],
      "test": [
        "STR",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          20,
          60
        ],
        "gold": [
          5,
          25
        ]
      },
      "id": "adv_combat_001",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "ダンジョン探索",
      "w": 0.9,
      "tier": [
        1,
        2
      ],
      "test": [
        "DEX",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          40,
          90
        ],
        "gold": [
          10,
          60
        ]
      },
      "id": "adv_event_002",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "盗賊団の襲撃",
      "w": 0.7,
      "tier": [
        1,
        2
      ],
      "test": [
        "STR",
        "DEX",
        "LUK"
      ],
      "gain": {
        "xp": [
          30,
          80
        ],
        "gold": [
          0,
          40
        ]
      },
      "id": "adv_combat_003",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "魔物の群れ",
      "w": 0.6,
      "tier": [
        2,
        3
      ],
      "test": [
        "STR",
        "VIT",
        "MAG"
      ],
      "gain": {
        "xp": [
          60,
          120
        ],
        "gold": [
          10,
          50
        ]
      },
      "id": "adv_combat_004",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "ドラゴン遭遇",
      "w": 0.25,
      "tier": [
        3
      ],
      "test": [
        "MAG",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          120,
          220
        ],
        "gold": [
          40,
          120
        ]
      },
      "id": "adv_dragon_005",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "転機",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "dragon",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 1
    },
    {
      "name": "魔王軍の斥候と交戦",
      "w": 0.35,
      "tier": [
        2,
        3
      ],
      "test": [
        "STR",
        "MAG",
        "VIT"
      ],
      "gain": {
        "xp": [
          90,
          180
        ],
        "gold": [
          20,
          80
        ]
      },
      "id": "adv_demon_006",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "転機",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "demon",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 1
    },
    {
      "name": "森の見回り",
      "w": 0.8,
      "tier": [
        1
      ],
      "test": [
        "VIT",
        "DEX",
        "LUK"
      ],
      "gain": {
        "xp": [
          15,
          45
        ],
        "gold": [
          0,
          20
        ]
      },
      "id": "adv_event_007",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "小鬼の追い払い",
      "w": 0.7,
      "tier": [
        1
      ],
      "test": [
        "STR",
        "DEX",
        "LUK"
      ],
      "gain": {
        "xp": [
          20,
          55
        ],
        "gold": [
          5,
          25
        ]
      },
      "id": "adv_event_008",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "薬草採取の護衛",
      "w": 0.85,
      "tier": [
        1
      ],
      "test": [
        "DEX",
        "LUK",
        "VIT"
      ],
      "gain": {
        "xp": [
          10,
          40
        ],
        "gold": [
          5,
          25
        ]
      },
      "id": "adv_event_009",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "迷い子の捜索",
      "w": 0.75,
      "tier": [
        1
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          15,
          50
        ],
        "gold": [
          0,
          20
        ]
      },
      "id": "adv_event_010",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "洞窟の害獣駆除",
      "w": 0.7,
      "tier": [
        1,
        2
      ],
      "test": [
        "STR",
        "VIT",
        "DEX"
      ],
      "gain": {
        "xp": [
          25,
          70
        ],
        "gold": [
          5,
          35
        ]
      },
      "id": "adv_combat_011",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1,
      "gag": [
        "清掃",
        "業務連絡",
        "終わらないタスク"
      ]
    },
    {
      "name": "古代遺跡の調査",
      "w": 0.55,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "MAG",
        "LUK"
      ],
      "gain": {
        "xp": [
          60,
          140
        ],
        "gold": [
          10,
          70
        ]
      },
      "id": "adv_research_012",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "魔導書の回収依頼",
      "w": 0.5,
      "tier": [
        2,
        3
      ],
      "test": [
        "MAG",
        "INT",
        "LUK"
      ],
      "gain": {
        "xp": [
          70,
          150
        ],
        "gold": [
          15,
          80
        ]
      },
      "id": "adv_research_013",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "夜盗の待ち伏せ",
      "w": 0.6,
      "tier": [
        1,
        2
      ],
      "test": [
        "DEX",
        "STR",
        "LUK"
      ],
      "gain": {
        "xp": [
          25,
          75
        ],
        "gold": [
          10,
          50
        ]
      },
      "id": "adv_event_014",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "山道の落石救助",
      "w": 0.65,
      "tier": [
        1,
        2
      ],
      "test": [
        "VIT",
        "INT",
        "LUK"
      ],
      "gain": {
        "xp": [
          20,
          65
        ],
        "gold": [
          0,
          30
        ]
      },
      "id": "adv_event_015",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "精霊の加護を得る試練",
      "w": 0.35,
      "tier": [
        2,
        3
      ],
      "test": [
        "MAG",
        "LUK",
        "INT"
      ],
      "gain": {
        "xp": [
          80,
          170
        ],
        "gold": [
          0,
          60
        ]
      },
      "id": "adv_event_016",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "王国辺境の巡回任務",
      "w": 0.5,
      "tier": [
        2
      ],
      "test": [
        "VIT",
        "DEX",
        "INT"
      ],
      "gain": {
        "xp": [
          45,
          105
        ],
        "gold": [
          15,
          65
        ]
      },
      "id": "adv_kingdom_017",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "盗賊砦の潜入",
      "w": 0.35,
      "tier": [
        2,
        3
      ],
      "test": [
        "DEX",
        "LUK",
        "STR"
      ],
      "gain": {
        "xp": [
          80,
          170
        ],
        "gold": [
          20,
          90
        ]
      },
      "id": "adv_event_018",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "魔王軍補給線の妨害",
      "w": 0.22,
      "tier": [
        3
      ],
      "test": [
        "DEX",
        "INT",
        "LUK"
      ],
      "gain": {
        "xp": [
          120,
          240
        ],
        "gold": [
          30,
          120
        ]
      },
      "id": "adv_demon_019",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "転機",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "demon",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 1
    },
    {
      "name": "戦争の前線で斥候任務",
      "w": 0.18,
      "tier": [
        3
      ],
      "test": [
        "DEX",
        "VIT",
        "INT"
      ],
      "gain": {
        "xp": [
          130,
          260
        ],
        "gold": [
          25,
          120
        ]
      },
      "id": "adv_war_020",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "転機",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "war",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "ドラゴンの巣を遠望する偵察",
      "w": 0.08,
      "tier": [
        3
      ],
      "test": [
        "LUK",
        "DEX",
        "VIT"
      ],
      "gain": {
        "xp": [
          150,
          280
        ],
        "gold": [
          20,
          120
        ]
      },
      "id": "adv_dragon_021",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "転機",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "dragon",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 1
    },
    {
      "name": "古竜の鱗を求める冒険",
      "w": 0.06,
      "tier": [
        3
      ],
      "test": [
        "MAG",
        "STR",
        "VIT"
      ],
      "gain": {
        "xp": [
          180,
          340
        ],
        "gold": [
          40,
          180
        ]
      },
      "id": "adv_dragon_022",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "転機",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "dragon",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 1
    },
    {
      "name": "魔王の尖兵と再び交戦",
      "w": 0.15,
      "tier": [
        3
      ],
      "test": [
        "STR",
        "MAG",
        "VIT"
      ],
      "gain": {
        "xp": [
          160,
          320
        ],
        "gold": [
          30,
          150
        ]
      },
      "id": "adv_demon_023",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "転機",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "demon",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 1
    },
    {
      "name": "呪われた村の浄化",
      "w": 0.28,
      "tier": [
        2,
        3
      ],
      "test": [
        "MAG",
        "INT",
        "VIT"
      ],
      "gain": {
        "xp": [
          90,
          190
        ],
        "gold": [
          0,
          70
        ]
      },
      "id": "adv_settlement_024",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1,
      "gag": [
        "清掃",
        "業務連絡",
        "終わらないタスク"
      ],
      "punch": [
        "本業どこ行った"
      ]
    },
    {
      "name": "賞金首の捕縛",
      "w": 0.32,
      "tier": [
        2,
        3
      ],
      "test": [
        "STR",
        "DEX",
        "LUK"
      ],
      "gain": {
        "xp": [
          80,
          170
        ],
        "gold": [
          30,
          120
        ]
      },
      "id": "adv_combat_025",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "海賊の密輸船を摘発",
      "w": 0.25,
      "tier": [
        2,
        3
      ],
      "test": [
        "DEX",
        "INT",
        "STR"
      ],
      "gain": {
        "xp": [
          90,
          190
        ],
        "gold": [
          25,
          130
        ]
      },
      "id": "adv_trade_026",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "魔獣の群れの進路を逸らす",
      "w": 0.14,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "VIT",
        "MAG"
      ],
      "gain": {
        "xp": [
          140,
          280
        ],
        "gold": [
          10,
          90
        ]
      },
      "id": "adv_combat_027",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "小波",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 1
    },
    {
      "name": "王国の秘宝を護送",
      "w": 0.22,
      "tier": [
        3
      ],
      "test": [
        "VIT",
        "STR",
        "INT"
      ],
      "gain": {
        "xp": [
          120,
          250
        ],
        "gold": [
          40,
          160
        ]
      },
      "id": "adv_kingdom_028",
      "emotion": [
        "緊張",
        "昂揚"
      ],
      "impact": "転機",
      "tags": [
        "戦い",
        "旅路"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.12,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "kingdom",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 1
    }
  ],
  "life": [
    {
      "name": "畑の開墾",
      "w": 0.9,
      "tier": [
        1
      ],
      "test": [
        "VIT",
        "DEX",
        "INT"
      ],
      "gain": {
        "xp": [
          20,
          60
        ],
        "gold": [
          5,
          20
        ]
      },
      "id": "lif_settlement_001",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "鍛冶修行",
      "w": 0.8,
      "tier": [
        1,
        2
      ],
      "test": [
        "DEX",
        "VIT",
        "INT"
      ],
      "gain": {
        "xp": [
          30,
          80
        ],
        "gold": [
          5,
          35
        ]
      },
      "id": "lif_event_002",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "段取り",
        "火花",
        "職人あるある"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "交易で稼ぐ",
      "w": 0.8,
      "tier": [
        1,
        2,
        3
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          20,
          60
        ],
        "gold": [
          20,
          90
        ]
      },
      "id": "lif_trade_003",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "品出し",
        "レジ打ち",
        "説明過多"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "村の運営を手伝う",
      "w": 0.75,
      "tier": [
        1,
        2
      ],
      "test": [
        "INT",
        "DEX",
        "LUK"
      ],
      "gain": {
        "xp": [
          20,
          60
        ],
        "gold": [
          5,
          25
        ]
      },
      "id": "lif_settlement_004",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "議事録",
        "責任者不在",
        "現場猫"
      ],
      "punch": [
        "仕事してる場合か"
      ]
    },
    {
      "name": "小さな拠点を建築",
      "w": 0.5,
      "tier": [
        2,
        3
      ],
      "test": [
        "DEX",
        "INT",
        "VIT"
      ],
      "gain": {
        "xp": [
          50,
          110
        ],
        "gold": [
          -10,
          30
        ]
      },
      "id": "lif_settlement_005",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "転機",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.06,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "settlement",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "setsFlag": {
        "has_base": true
      },
      "humor": 2,
      "gag": [
        "議事録",
        "責任者不在",
        "現場猫"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "研究成果が出る",
      "w": 0.55,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "MAG",
        "LUK"
      ],
      "gain": {
        "xp": [
          40,
          120
        ],
        "gold": [
          0,
          40
        ]
      },
      "id": "lif_research_006",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "井戸を掘る",
      "w": 0.85,
      "tier": [
        1
      ],
      "test": [
        "VIT",
        "DEX",
        "INT"
      ],
      "gain": {
        "xp": [
          15,
          50
        ],
        "gold": [
          0,
          15
        ]
      },
      "id": "lif_event_007",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "薬草畑の整備",
      "w": 0.8,
      "tier": [
        1,
        2
      ],
      "test": [
        "INT",
        "DEX",
        "VIT"
      ],
      "gain": {
        "xp": [
          20,
          60
        ],
        "gold": [
          5,
          25
        ]
      },
      "id": "lif_event_008",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "工房の手伝い",
      "w": 0.75,
      "tier": [
        1
      ],
      "test": [
        "DEX",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          15,
          55
        ],
        "gold": [
          5,
          30
        ]
      },
      "id": "lif_event_009",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "段取り",
        "火花",
        "職人あるある"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "錬金実験の成功",
      "w": 0.45,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "MAG",
        "LUK"
      ],
      "gain": {
        "xp": [
          70,
          150
        ],
        "gold": [
          10,
          70
        ]
      },
      "id": "lif_research_010",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "錬金実験の暴発",
      "w": 0.28,
      "tier": [
        2,
        3
      ],
      "test": [
        "MAG",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          20,
          90
        ],
        "gold": [
          -50,
          -5
        ]
      },
      "id": "lif_research_011",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 3,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "教会の修繕",
      "w": 0.65,
      "tier": [
        1,
        2
      ],
      "test": [
        "DEX",
        "INT",
        "VIT"
      ],
      "gain": {
        "xp": [
          20,
          70
        ],
        "gold": [
          0,
          25
        ]
      },
      "id": "lif_event_012",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "町の運営会議に参加",
      "w": 0.55,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          30,
          90
        ],
        "gold": [
          0,
          40
        ]
      },
      "id": "lif_settlement_013",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "議事録",
        "責任者不在",
        "現場猫"
      ],
      "punch": [
        "仕事してる場合か"
      ]
    },
    {
      "name": "隊商の会計を任される",
      "w": 0.5,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "DEX",
        "LUK"
      ],
      "gain": {
        "xp": [
          35,
          95
        ],
        "gold": [
          15,
          80
        ]
      },
      "id": "lif_trade_014",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "品出し",
        "レジ打ち",
        "説明過多"
      ],
      "punch": [
        "仕事してる場合か"
      ]
    },
    {
      "name": "宿屋の経営を学ぶ",
      "w": 0.55,
      "tier": [
        1,
        2
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          15,
          55
        ],
        "gold": [
          10,
          50
        ]
      },
      "id": "lif_event_015",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "酒場で情報を集める",
      "w": 0.65,
      "tier": [
        1,
        2,
        3
      ],
      "test": [
        "LUK",
        "INT",
        "DEX"
      ],
      "gain": {
        "xp": [
          10,
          35
        ],
        "gold": [
          0,
          25
        ]
      },
      "id": "lif_event_016",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "盛りすぎ",
        "自称",
        "語りが長い"
      ],
      "punch": [
        "話長すぎ"
      ]
    },
    {
      "name": "小さな畜舎を建てる",
      "w": 0.6,
      "tier": [
        1,
        2
      ],
      "test": [
        "DEX",
        "VIT",
        "INT"
      ],
      "gain": {
        "xp": [
          20,
          75
        ],
        "gold": [
          -10,
          20
        ]
      },
      "id": "lif_event_017",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "薬師として町に貢献",
      "w": 0.5,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "MAG",
        "LUK"
      ],
      "gain": {
        "xp": [
          35,
          110
        ],
        "gold": [
          5,
          45
        ]
      },
      "id": "lif_settlement_018",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "新しい魔法式を整理する",
      "w": 0.48,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "MAG",
        "DEX"
      ],
      "gain": {
        "xp": [
          50,
          130
        ],
        "gold": [
          0,
          35
        ]
      },
      "id": "lif_event_019",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "拠点に防壁を追加する",
      "w": 0.32,
      "tier": [
        3
      ],
      "test": [
        "DEX",
        "INT",
        "VIT"
      ],
      "gain": {
        "xp": [
          80,
          180
        ],
        "gold": [
          -60,
          -5
        ]
      },
      "id": "lif_settlement_020",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "転機",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.06,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "settlement",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 2,
      "gag": [
        "議事録",
        "責任者不在",
        "現場猫"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "拠点の運営を引き継ぐ",
      "w": 0.25,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "DEX",
        "LUK"
      ],
      "gain": {
        "xp": [
          90,
          200
        ],
        "gold": [
          20,
          120
        ]
      },
      "id": "lif_settlement_021",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "転機",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.06,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "settlement",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 2,
      "gag": [
        "議事録",
        "責任者不在",
        "現場猫"
      ],
      "punch": [
        "仕事してる場合か"
      ]
    },
    {
      "name": "王国の倉庫を管理する",
      "w": 0.22,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          70,
          170
        ],
        "gold": [
          30,
          140
        ]
      },
      "id": "lif_kingdom_022",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "品出し",
        "レジ打ち",
        "説明過多"
      ],
      "punch": [
        "仕事してる場合か"
      ]
    },
    {
      "name": "孤児院へ寄付する",
      "w": 0.45,
      "tier": [
        1,
        2,
        3
      ],
      "test": [
        "LUK",
        "INT",
        "DEX"
      ],
      "gain": {
        "xp": [
          10,
          50
        ],
        "gold": [
          -40,
          -5
        ]
      },
      "id": "lif_event_023",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "鍛冶で名声を得る",
      "w": 0.3,
      "tier": [
        2,
        3
      ],
      "test": [
        "DEX",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          60,
          140
        ],
        "gold": [
          20,
          120
        ]
      },
      "id": "lif_event_024",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "段取り",
        "火花",
        "職人あるある"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "農地の灌漑を整備",
      "w": 0.55,
      "tier": [
        1,
        2
      ],
      "test": [
        "INT",
        "DEX",
        "VIT"
      ],
      "gain": {
        "xp": [
          25,
          75
        ],
        "gold": [
          5,
          30
        ]
      },
      "id": "lif_event_025",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "町の市場を拡張する",
      "w": 0.28,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "DEX",
        "LUK"
      ],
      "gain": {
        "xp": [
          80,
          180
        ],
        "gold": [
          -80,
          10
        ]
      },
      "id": "lif_settlement_026",
      "emotion": [
        "安堵",
        "勤勉"
      ],
      "impact": "小波",
      "tags": [
        "暮らし",
        "生産"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "品出し",
        "レジ打ち",
        "説明過多"
      ],
      "punch": [
        "なんでそうなる"
      ]
    }
  ],
  "relations": [
    {
      "name": "良き仲間と出会う",
      "w": 0.65,
      "tier": [
        1,
        2,
        3
      ],
      "test": [
        "LUK",
        "INT",
        "DEX"
      ],
      "gain": {
        "xp": [
          10,
          40
        ],
        "gold": [
          0,
          15
        ]
      },
      "id": "rel_bond_001",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "setsFlag": {
        "has_companion": true
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "師匠に鍛えられる",
      "w": 0.5,
      "tier": [
        1,
        2
      ],
      "test": [
        "VIT",
        "INT",
        "STR"
      ],
      "gain": {
        "xp": [
          60,
          130
        ],
        "gold": [
          0,
          0
        ]
      },
      "id": "rel_event_002",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "裏切りに遭う",
      "w": 0.25,
      "tier": [
        2,
        3
      ],
      "test": [
        "LUK",
        "INT",
        "DEX"
      ],
      "gain": {
        "xp": [
          0,
          30
        ],
        "gold": [
          -40,
          -5
        ]
      },
      "id": "rel_betrayal_003",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "転機",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.06,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "betrayal",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "王国の依頼を受ける",
      "w": 0.35,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "STR",
        "MAG"
      ],
      "gain": {
        "xp": [
          80,
          160
        ],
        "gold": [
          30,
          120
        ]
      },
      "id": "rel_kingdom_004",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "setsFlag": {
        "kingdom_notice": true
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "ライバルと競う",
      "w": 0.55,
      "tier": [
        2
      ],
      "test": [
        "STR",
        "DEX",
        "LUK"
      ],
      "gain": {
        "xp": [
          40,
          95
        ],
        "gold": [
          -10,
          25
        ]
      },
      "id": "rel_event_005",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "勘違い",
        "空回り",
        "言い過ぎ"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "王国の使者と面談",
      "w": 0.35,
      "tier": [
        2
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          30,
          85
        ],
        "gold": [
          10,
          60
        ]
      },
      "id": "rel_kingdom_006",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "冒険者ギルドに登録する",
      "w": 0.65,
      "tier": [
        1
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          15,
          55
        ],
        "gold": [
          5,
          25
        ]
      },
      "id": "rel_event_007",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "幼なじみと再会する",
      "w": 0.5,
      "tier": [
        1,
        2
      ],
      "test": [
        "LUK",
        "INT",
        "DEX"
      ],
      "gain": {
        "xp": [
          10,
          45
        ],
        "gold": [
          0,
          20
        ]
      },
      "id": "rel_event_008",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "恩人に助けられる",
      "w": 0.45,
      "tier": [
        1,
        2,
        3
      ],
      "test": [
        "LUK",
        "VIT",
        "INT"
      ],
      "gain": {
        "xp": [
          20,
          70
        ],
        "gold": [
          0,
          30
        ]
      },
      "id": "rel_event_009",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "弟子を取ることになる",
      "w": 0.28,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          60,
          160
        ],
        "gold": [
          0,
          60
        ]
      },
      "id": "rel_event_010",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "師匠の奥義を授かる",
      "w": 0.22,
      "tier": [
        2,
        3
      ],
      "test": [
        "VIT",
        "INT",
        "STR"
      ],
      "gain": {
        "xp": [
          110,
          230
        ],
        "gold": [
          0,
          40
        ]
      },
      "id": "rel_event_011",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "ギルド内の派閥争い",
      "w": 0.3,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          20,
          80
        ],
        "gold": [
          -40,
          20
        ]
      },
      "id": "rel_betrayal_012",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "勘違い",
        "空回り",
        "言い過ぎ"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "王国騎士と友誼を結ぶ",
      "w": 0.32,
      "tier": [
        2,
        3
      ],
      "test": [
        "STR",
        "INT",
        "LUK"
      ],
      "gain": {
        "xp": [
          60,
          150
        ],
        "gold": [
          10,
          70
        ]
      },
      "id": "rel_kingdom_013",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "王国から勲章を授かる",
      "w": 0.18,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "LUK",
        "STR"
      ],
      "gain": {
        "xp": [
          120,
          260
        ],
        "gold": [
          40,
          180
        ]
      },
      "id": "rel_kingdom_014",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "転機",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.06,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "kingdom",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "requiresFlag": {
        "has_patron": true
      },
      "setsFlag": {
        "honored_by_kingdom": true
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "裏切りの真相を掴む",
      "w": 0.2,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          90,
          210
        ],
        "gold": [
          -10,
          60
        ]
      },
      "id": "rel_betrayal_015",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "転機",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.06,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "betrayal",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "requiresFlag": {
        "trust_broken": true
      },
      "setsFlag": {
        "trust_broken": "clear"
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "宿敵と一時的に共闘する",
      "w": 0.22,
      "tier": [
        3
      ],
      "test": [
        "STR",
        "DEX",
        "LUK"
      ],
      "gain": {
        "xp": [
          120,
          240
        ],
        "gold": [
          10,
          90
        ]
      },
      "id": "rel_bond_016",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "転機",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.06,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "bond",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "仲間と町を守る誓い",
      "w": 0.35,
      "tier": [
        2,
        3
      ],
      "test": [
        "VIT",
        "INT",
        "LUK"
      ],
      "gain": {
        "xp": [
          70,
          160
        ],
        "gold": [
          0,
          60
        ]
      },
      "id": "rel_settlement_017",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "requiresFlag": {
        "has_base": true
      },
      "setsFlag": {
        "vow_to_protect": true
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "隊商主と長期契約を結ぶ",
      "w": 0.4,
      "tier": [
        1,
        2,
        3
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          20,
          70
        ],
        "gold": [
          15,
          80
        ]
      },
      "id": "rel_trade_018",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "貴族に目を付けられる",
      "w": 0.25,
      "tier": [
        2,
        3
      ],
      "test": [
        "LUK",
        "INT",
        "DEX"
      ],
      "gain": {
        "xp": [
          10,
          60
        ],
        "gold": [
          -30,
          30
        ]
      },
      "id": "rel_kingdom_019",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "貴族の後援を得る",
      "w": 0.18,
      "tier": [
        3
      ],
      "test": [
        "LUK",
        "INT",
        "DEX"
      ],
      "gain": {
        "xp": [
          80,
          200
        ],
        "gold": [
          40,
          200
        ]
      },
      "id": "rel_kingdom_020",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "転機",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.06,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "kingdom",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "requiresFlag": {
        "kingdom_notice": true
      },
      "setsFlag": {
        "has_patron": true
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "酒場で悪い噂を流される",
      "w": 0.35,
      "tier": [
        1,
        2
      ],
      "test": [
        "LUK",
        "INT",
        "DEX"
      ],
      "gain": {
        "xp": [
          0,
          30
        ],
        "gold": [
          -30,
          -5
        ]
      },
      "id": "rel_betrayal_021",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "盛りすぎ",
        "自称",
        "語りが長い"
      ],
      "punch": [
        "なんでそうなる",
        "話長すぎ"
      ]
    },
    {
      "name": "誤解が解けて評判が上がる",
      "w": 0.32,
      "tier": [
        1,
        2,
        3
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          20,
          70
        ],
        "gold": [
          0,
          30
        ]
      },
      "id": "rel_event_022",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "勘違い",
        "空回り",
        "言い過ぎ"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "王国の密使から極秘依頼",
      "w": 0.16,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "DEX",
        "LUK"
      ],
      "gain": {
        "xp": [
          140,
          280
        ],
        "gold": [
          50,
          220
        ]
      },
      "id": "rel_kingdom_023",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "転機",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.06,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "kingdom",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "requiresFlag": {
        "kingdom_notice": true
      },
      "setsFlag": {
        "royal_secret": true
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "冒険者仲間に裏切りを告白される",
      "w": 0.12,
      "tier": [
        3
      ],
      "test": [
        "LUK",
        "INT",
        "VIT"
      ],
      "gain": {
        "xp": [
          30,
          120
        ],
        "gold": [
          -90,
          -20
        ]
      },
      "id": "rel_bond_024",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "転機",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.06,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "bond",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "requiresFlag": {
        "has_companion": true
      },
      "setsFlag": {
        "trust_broken": true
      },
      "humor": 2,
      "gag": [
        "現場対応",
        "言い訳"
      ],
      "punch": [
        "なんでそうなる"
      ]
    },
    {
      "name": "町の運営者から相談を受ける",
      "w": 0.3,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "DEX",
        "LUK"
      ],
      "gain": {
        "xp": [
          40,
          120
        ],
        "gold": [
          0,
          50
        ]
      },
      "id": "rel_settlement_025",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "議事録",
        "責任者不在",
        "現場猫"
      ],
      "punch": [
        "仕事してる場合か"
      ]
    },
    {
      "name": "旅の吟遊詩人と交流する",
      "w": 0.5,
      "tier": [
        1,
        2,
        3
      ],
      "test": [
        "LUK",
        "INT",
        "DEX"
      ],
      "gain": {
        "xp": [
          10,
          40
        ],
        "gold": [
          0,
          25
        ]
      },
      "id": "rel_event_026",
      "emotion": [
        "信頼",
        "戸惑い"
      ],
      "impact": "小波",
      "tags": [
        "縁",
        "評判"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.01,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 2,
      "gag": [
        "盛りすぎ",
        "自称",
        "語りが長い"
      ],
      "punch": [
        "話長すぎ"
      ]
    }
  ],
  "disaster": [
    {
      "name": "疫病の流行",
      "w": 0.25,
      "tier": [
        1,
        2,
        3
      ],
      "test": [
        "INT",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          0,
          40
        ],
        "gold": [
          -60,
          -10
        ]
      },
      "id": "dis_calamity_001",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "小波",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "大洪水",
      "w": 0.2,
      "tier": [
        1,
        2
      ],
      "test": [
        "INT",
        "VIT",
        "DEX"
      ],
      "gain": {
        "xp": [
          0,
          50
        ],
        "gold": [
          -80,
          -20
        ]
      },
      "id": "dis_calamity_002",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "小波",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "戦争に巻き込まれる",
      "w": 0.3,
      "tier": [
        2,
        3
      ],
      "test": [
        "STR",
        "VIT",
        "INT"
      ],
      "gain": {
        "xp": [
          60,
          150
        ],
        "gold": [
          -30,
          40
        ]
      },
      "id": "dis_war_003",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "war",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "戦争の火種が広がる",
      "w": 0.22,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          50,
          140
        ],
        "gold": [
          -70,
          20
        ]
      },
      "id": "dis_war_004",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "war",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "ドラゴンの影が町を覆う",
      "w": 0.12,
      "tier": [
        3
      ],
      "test": [
        "MAG",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          120,
          260
        ],
        "gold": [
          30,
          140
        ]
      },
      "id": "dis_dragon_005",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "dragon",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0
    },
    {
      "name": "干ばつで作物が枯れる",
      "w": 0.28,
      "tier": [
        1,
        2
      ],
      "test": [
        "INT",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          0,
          35
        ],
        "gold": [
          -60,
          -15
        ]
      },
      "id": "dis_calamity_006",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "小波",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 0
    },
    {
      "name": "山火事が広がる",
      "w": 0.24,
      "tier": [
        1,
        2
      ],
      "test": [
        "DEX",
        "VIT",
        "INT"
      ],
      "gain": {
        "xp": [
          0,
          45
        ],
        "gold": [
          -70,
          -10
        ]
      },
      "id": "dis_calamity_007",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "小波",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 0
    },
    {
      "name": "盗賊に倉庫を荒らされる",
      "w": 0.26,
      "tier": [
        1,
        2,
        3
      ],
      "test": [
        "DEX",
        "INT",
        "LUK"
      ],
      "gain": {
        "xp": [
          0,
          40
        ],
        "gold": [
          -80,
          -20
        ]
      },
      "id": "dis_event_008",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "小波",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 0,
      "gag": [
        "品出し",
        "レジ打ち",
        "説明過多"
      ]
    },
    {
      "name": "魔法事故で工房が壊れる",
      "w": 0.2,
      "tier": [
        2,
        3
      ],
      "test": [
        "MAG",
        "INT",
        "LUK"
      ],
      "gain": {
        "xp": [
          10,
          60
        ],
        "gold": [
          -90,
          -30
        ]
      },
      "id": "dis_event_009",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "小波",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 0,
      "gag": [
        "段取り",
        "火花",
        "職人あるある"
      ]
    },
    {
      "name": "疫病が再流行する",
      "w": 0.18,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          0,
          50
        ],
        "gold": [
          -90,
          -25
        ]
      },
      "id": "dis_calamity_010",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "小波",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "治安悪化で町が混乱",
      "w": 0.22,
      "tier": [
        1,
        2,
        3
      ],
      "test": [
        "INT",
        "STR",
        "LUK"
      ],
      "gain": {
        "xp": [
          10,
          70
        ],
        "gold": [
          -60,
          10
        ]
      },
      "id": "dis_settlement_011",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "小波",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 0
    },
    {
      "name": "王国の政変に巻き込まれる",
      "w": 0.16,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          60,
          170
        ],
        "gold": [
          -120,
          -10
        ]
      },
      "id": "dis_kingdom_012",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "kingdom",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "拠点が包囲され補給が途絶える",
      "w": 0.14,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          80,
          200
        ],
        "gold": [
          -140,
          -20
        ]
      },
      "id": "dis_settlement_013",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "settlement",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0,
      "gag": [
        "議事録",
        "責任者不在",
        "現場猫"
      ],
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "戦争の徴発で財が減る",
      "w": 0.2,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "LUK",
        "VIT"
      ],
      "gain": {
        "xp": [
          40,
          120
        ],
        "gold": [
          -150,
          -30
        ]
      },
      "id": "dis_war_014",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "war",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "戦争の難民が押し寄せる",
      "w": 0.17,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          70,
          190
        ],
        "gold": [
          -120,
          10
        ]
      },
      "id": "dis_war_015",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "war",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "魔王軍の小規模襲来",
      "w": 0.12,
      "tier": [
        3
      ],
      "test": [
        "STR",
        "VIT",
        "MAG"
      ],
      "gain": {
        "xp": [
          120,
          260
        ],
        "gold": [
          -80,
          40
        ]
      },
      "id": "dis_demon_016",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "demon",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0
    },
    {
      "name": "魔王軍との戦争が激化",
      "w": 0.08,
      "tier": [
        3
      ],
      "test": [
        "STR",
        "VIT",
        "INT"
      ],
      "gain": {
        "xp": [
          160,
          320
        ],
        "gold": [
          -200,
          60
        ]
      },
      "id": "dis_demon_017",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "demon",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "ドラゴンが領空を荒らす",
      "w": 0.05,
      "tier": [
        3
      ],
      "test": [
        "MAG",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          180,
          360
        ],
        "gold": [
          -120,
          80
        ]
      },
      "id": "dis_dragon_018",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "dragon",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0
    },
    {
      "name": "大地震で町が崩れる",
      "w": 0.12,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "VIT",
        "LUK"
      ],
      "gain": {
        "xp": [
          40,
          150
        ],
        "gold": [
          -180,
          -40
        ]
      },
      "id": "dis_settlement_019",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "settlement",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "反乱が起き運営が止まる",
      "w": 0.13,
      "tier": [
        3
      ],
      "test": [
        "INT",
        "LUK",
        "STR"
      ],
      "gain": {
        "xp": [
          70,
          200
        ],
        "gold": [
          -160,
          -20
        ]
      },
      "id": "dis_settlement_020",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "settlement",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 2,
      "gag": [
        "議事録",
        "責任者不在",
        "現場猫"
      ],
      "punch": [
        "これが現実",
        "仕事してる場合か"
      ]
    },
    {
      "name": "物資高騰で交易が失敗",
      "w": 0.18,
      "tier": [
        1,
        2,
        3
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          10,
          60
        ],
        "gold": [
          -120,
          -30
        ]
      },
      "id": "dis_trade_021",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "小波",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "humor": 0,
      "gag": [
        "品出し",
        "レジ打ち",
        "説明過多"
      ]
    },
    {
      "name": "洪水で拠点の一部が流される",
      "w": 0.16,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "VIT",
        "DEX"
      ],
      "gain": {
        "xp": [
          20,
          90
        ],
        "gold": [
          -140,
          -40
        ]
      },
      "id": "dis_settlement_022",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "settlement",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0,
      "gag": [
        "議事録",
        "責任者不在",
        "現場猫"
      ],
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "疫病の風評で町が閉鎖",
      "w": 0.14,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "LUK",
        "VIT"
      ],
      "gain": {
        "xp": [
          10,
          80
        ],
        "gold": [
          -110,
          -25
        ]
      },
      "id": "dis_settlement_023",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "settlement",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "王国から重税が課される",
      "w": 0.15,
      "tier": [
        2,
        3
      ],
      "test": [
        "INT",
        "LUK",
        "DEX"
      ],
      "gain": {
        "xp": [
          30,
          120
        ],
        "gold": [
          -160,
          -40
        ]
      },
      "id": "dis_kingdom_024",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "kingdom",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0,
      "punch": [
        "これが現実"
      ]
    },
    {
      "name": "魔獣の群れが街道を封鎖",
      "w": 0.1,
      "tier": [
        3
      ],
      "test": [
        "STR",
        "VIT",
        "MAG"
      ],
      "gain": {
        "xp": [
          120,
          260
        ],
        "gold": [
          -60,
          30
        ]
      },
      "id": "dis_combat_025",
      "emotion": [
        "不穏",
        "喪失"
      ],
      "impact": "転機",
      "tags": [
        "災厄",
        "混乱"
      ],
      "outcomes": {
        "fatal_failure": {
          "w": 0.18,
          "micro": {
            "inner": [
              "膝が震える"
            ],
            "motifs": [
              "暗転"
            ]
          }
        },
        "failure": {
          "w": 0.65,
          "micro": {
            "inner": [
              "噛み合わない"
            ],
            "motifs": [
              "空振り"
            ]
          }
        },
        "success": {
          "w": 1,
          "micro": {
            "inner": [
              "息を整える"
            ],
            "motifs": [
              "前進"
            ]
          }
        },
        "great_success": {
          "w": 0.45,
          "micro": {
            "inner": [
              "手応えが残る"
            ],
            "motifs": [
              "追い風"
            ]
          }
        },
        "costly_success": {
          "w": 0.28,
          "micro": {
            "inner": [
              "痛みと達成"
            ],
            "motifs": [
              "代償"
            ]
          }
        }
      },
      "micro": {
        "motifs": [
          "combat",
          "余韻"
        ],
        "inner": [
          "心拍だけがうるさい",
          "まだ終わらない"
        ],
        "beat": [
          "選択",
          "余波"
        ]
      },
      "humor": 0
    }
  ]
};
})();
