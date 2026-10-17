import { ItemStack as ItemStack3, system as system3, world as world10 } from "@minecraft/server";
var equipment_default = {
  $comment: "\xA79-\xA713 \xA719 \u88C5\u5907\u7CFB\u7EDF\u3002\u4F5C\u8005\u6001\u552F\u4E00\u771F\u6E90\uFF1B\u6784\u5EFA\u671F\u5185\u8054\u8FDB\u811A\u672C bundle\uFF08Bedrock \u811A\u672C\u65E0\u6587\u4EF6\u7CFB\u7EDF API\uFF09\u3002",
  enabled: true,
  equipmentRate: 0.98,
  pieceCountDistribution: [
    { pieces: 4, chance: 0.55 },
    { pieces: 3, chance: 0.25 },
    { pieces: 2, chance: 0.13 },
    { pieces: 1, chance: 0.05 },
    { pieces: 0, chance: 0.02 }
  ],
  slotOrder: ["head", "chest", "legs", "feet"],
  slotItemSuffix: {
    head: "helmet",
    chest: "chestplate",
    legs: "leggings",
    feet: "boots"
  },
  materials: {
    leather: { itemPrefix: "leather", tier: 0, defense: 1 },
    golden: { itemPrefix: "golden", tier: 1, defense: 2 },
    chainmail: { itemPrefix: "chainmail", tier: 2, defense: 3 },
    iron: { itemPrefix: "iron", tier: 3, defense: 4 },
    diamond: { itemPrefix: "diamond", tier: 4, defense: 5 }
  },
  forbiddenMaterials: ["netherite"],
  materialWeightsByStage: {
    day_1_7: { leather: 40, golden: 22, chainmail: 18, iron: 16, diamond: 4 },
    day_8_20: { leather: 28, golden: 20, chainmail: 20, iron: 24, diamond: 8 },
    day_21_40: { leather: 18, golden: 16, chainmail: 20, iron: 30, diamond: 16 },
    day_41_plus: { leather: 12, golden: 12, chainmail: 20, iron: 34, diamond: 22 },
    bloodmoon: { leather: 8, golden: 8, chainmail: 18, iron: 36, diamond: 30 },
    elite: { leather: 0, golden: 0, chainmail: 10, iron: 35, diamond: 55 }
  },
  diamondForcedCurses: ["binding", "vanishing"],
  diamondCurseEnabled: true,
  drop: {
    $comment: "\xA795 \xA796 \u88C5\u5907\u4E0E\u6389\u843D\u5B8C\u5168\u5206\u79BB\uFF1A\u666E\u901A\u50F5\u5C38\u6389\u843D\u7387\u6781\u4F4E\u3002",
    normalEquipmentDropChance: 0.02,
    eliteEquipmentDropChance: 0.15,
    bloodmoonEliteEquipmentDropChance: 0.25
  },
  applyMode: {
    $comment: "\xA7122 Phase 1 \u5B9E\u6D4B\uFF1A\u50F5\u5C38\u6CA1\u6709 Script minecraft:equippable \u7EC4\u4EF6\uFF0CsetEquipment \u4E0D\u53EF\u7528\uFF1Breplaceitem entity \u547D\u4EE4\u53EF\u5199\u5165\u88C5\u5907\u69FD\uFF08\u63A2\u9488 v5 golden_helmet \u6389\u843D PASS\uFF09\u3002",
    primary: "replaceitem_command",
    fallback: "none",
    evidence: "lab/ze-probe-evidence/ PHASE1_ARBITRATION.md"
  }
};
var weapons_default = {
  $comment: "\xA714 \xA715 \u6B66\u5668\u7CFB\u7EDF\u3002\u6B66\u5668\u4E0D\u53EA\u662F\u653B\u51FB\u529B\uFF0C\u800C\u662F AI \u7684\u5DE5\u5177\uFF08\xA731 \xA747\uFF09\u3002\u5177\u4F53\u53EF\u7528\u6027\u4EE5 1.26.52.3 \u5B9E\u6D4B\u4E3A\u51C6\u3002",
  enabled: true,
  weaponRate: 0.85,
  forbiddenMaterials: ["netherite"],
  weapons: [
    { id: "minecraft:wooden_sword", class: "sword", material: "wooden", tier: 0, weight: 14 },
    { id: "minecraft:stone_sword", class: "sword", material: "stone", tier: 1, weight: 18 },
    { id: "minecraft:golden_sword", class: "sword", material: "golden", tier: 1, weight: 10 },
    { id: "minecraft:iron_sword", class: "sword", material: "iron", tier: 2, weight: 16 },
    { id: "minecraft:diamond_sword", class: "sword", material: "diamond", tier: 3, weight: 4 },
    { id: "minecraft:wooden_axe", class: "axe", material: "wooden", tier: 0, weight: 7 },
    { id: "minecraft:stone_axe", class: "axe", material: "stone", tier: 1, weight: 9 },
    { id: "minecraft:golden_axe", class: "axe", material: "golden", tier: 1, weight: 5 },
    { id: "minecraft:iron_axe", class: "axe", material: "iron", tier: 2, weight: 8 },
    { id: "minecraft:diamond_axe", class: "axe", material: "diamond", tier: 3, weight: 2 },
    { id: "minecraft:wooden_pickaxe", class: "pickaxe", material: "wooden", tier: 0, weight: 7 },
    { id: "minecraft:stone_pickaxe", class: "pickaxe", material: "stone", tier: 1, weight: 9 },
    { id: "minecraft:iron_pickaxe", class: "pickaxe", material: "iron", tier: 2, weight: 8 },
    { id: "minecraft:diamond_pickaxe", class: "pickaxe", material: "diamond", tier: 3, weight: 2 },
    { id: "minecraft:wooden_shovel", class: "shovel", material: "wooden", tier: 0, weight: 6 },
    { id: "minecraft:stone_shovel", class: "shovel", material: "stone", tier: 1, weight: 8 },
    { id: "minecraft:iron_shovel", class: "shovel", material: "iron", tier: 2, weight: 7 },
    { id: "minecraft:diamond_shovel", class: "shovel", material: "diamond", tier: 3, weight: 2 },
    { id: "minecraft:bow", class: "bow", material: "wooden", tier: 1, weight: 10 },
    { id: "minecraft:crossbow", class: "crossbow", material: "iron", tier: 2, weight: 10 },
    { id: "minecraft:stone_sword", class: "stone_sword", material: "stone", tier: 1, weight: 10 },
    { id: "minecraft:golden_sword", class: "golden_sword", material: "golden", tier: 1, weight: 10 },
    { id: "minecraft:golden_axe", class: "golden_axe", material: "golden", tier: 1, weight: 10 },
    { id: "minecraft:iron_axe", class: "iron_axe", material: "iron", tier: 2, weight: 10 }
  ],
  classCapabilities: {
    $comment: "\xA715 \xA731 \u5DE5\u5177 \u2192 \u80FD\u529B \u2192 \u51B3\u7B56\u94FE\u3002breakSpeed \u662F\u76F8\u5BF9\u7CFB\u6570\uFF0C\u4E0D\u662F\u65B9\u5757\u786C\u5EA6\u3002",
    sword: { blockBreak: [], breakSpeed: 1, combatBias: 1.5 },
    axe: { blockBreak: ["wood", "log", "plank", "fence", "door", "trapdoor"], breakSpeed: 1.6, combatBias: 1.1 },
    pickaxe: { blockBreak: ["stone", "cobblestone", "deepslate", "ore", "brick", "concrete"], breakSpeed: 1.6, combatBias: 0.9 },
    shovel: { blockBreak: ["dirt", "grass", "sand", "gravel", "clay", "soul_sand"], breakSpeed: 1.6, combatBias: 0.8 },
    bow: { blockBreak: [], breakSpeed: 0, combatBias: 1, ranged: true, standoff: 8 },
    crossbow: { blockBreak: [], breakSpeed: 0, combatBias: 1.1, ranged: true, standoff: 12 },
    stone_sword: { blockBreak: [], breakSpeed: 0, combatBias: 1.4 },
    golden_sword: { blockBreak: [], breakSpeed: 0, combatBias: 1.5 },
    golden_axe: { blockBreak: [], breakSpeed: 0, combatBias: 1.1 },
    iron_axe: { blockBreak: [], breakSpeed: 0, combatBias: 1.2 },
    none: { blockBreak: [], breakSpeed: 0, combatBias: 1 }
  },
  materialBreakTier: {
    $comment: "\xA731 \u65E0\u5DE5\u5177\u4ECD\u7136\u806A\u660E\uFF0C\u53EA\u662F\u80FD\u91C7\u53D6\u7684\u63AA\u65BD\u66F4\u5C11\u3002",
    wooden: 1,
    stone: 2,
    golden: 1,
    iron: 3,
    diamond: 4
  }
};
var enchantments_default = {
  $comment: "\xA716-\xA718 \u9644\u9B54\u7CFB\u7EDF\u3002enchantmentPool \u4E2D\u7684 id \u5168\u90E8\u6765\u81EA 1.26.52.3 \u8FD0\u884C\u65F6 EnchantmentTypes.getAll() \u5B9E\u6D4B\u679A\u4E3E\uFF0842 \u4E2A\uFF09\uFF0C\u4E0D\u662F\u51ED\u8BB0\u5FC6\u3002\u6700\u7EC8\u4ECD\u4EE5 canAddEnchantment() \u4E3A\u552F\u4E00\u88C1\u51B3\uFF08\xA717\uFF09\u3002",
  enabled: true,
  enchantmentRate: 0.6,
  countDistribution: [
    { count: 1, chance: 0.5 },
    { count: 2, chance: 0.35 },
    { count: 3, chance: 0.12 },
    { count: 4, chance: 0.03 }
  ],
  maxAttemptsPerItem: 12,
  forceValidateWithApi: true,
  runtimeEnumeratedTypes: [
    "aqua_affinity",
    "bane_of_arthropods",
    "binding",
    "blast_protection",
    "breach",
    "channeling",
    "density",
    "depth_strider",
    "efficiency",
    "feather_falling",
    "fire_aspect",
    "fire_protection",
    "flame",
    "fortune",
    "frost_walker",
    "impaling",
    "infinity",
    "knockback",
    "looting",
    "loyalty",
    "luck_of_the_sea",
    "lunge",
    "lure",
    "mending",
    "multishot",
    "piercing",
    "power",
    "projectile_protection",
    "protection",
    "punch",
    "quick_charge",
    "respiration",
    "riptide",
    "sharpness",
    "silk_touch",
    "smite",
    "soul_speed",
    "swift_sneak",
    "thorns",
    "unbreaking",
    "vanishing",
    "wind_burst"
  ],
  enchantmentPool: {
    helmet: ["protection", "fire_protection", "blast_protection", "projectile_protection", "respiration", "aqua_affinity", "thorns", "unbreaking", "mending"],
    chestplate: ["protection", "fire_protection", "blast_protection", "projectile_protection", "thorns", "unbreaking", "mending"],
    leggings: ["protection", "fire_protection", "blast_protection", "projectile_protection", "swift_sneak", "unbreaking", "mending"],
    boots: ["protection", "fire_protection", "blast_protection", "projectile_protection", "feather_falling", "depth_strider", "frost_walker", "soul_speed", "thorns", "unbreaking", "mending"],
    sword: ["sharpness", "smite", "bane_of_arthropods", "knockback", "fire_aspect", "looting", "unbreaking", "mending"],
    axe: ["sharpness", "smite", "bane_of_arthropods", "knockback", "fire_aspect", "efficiency", "fortune", "silk_touch", "unbreaking", "mending"],
    pickaxe: ["efficiency", "fortune", "silk_touch", "unbreaking", "mending"],
    shovel: ["efficiency", "fortune", "silk_touch", "unbreaking", "mending"],
    trident: ["loyalty", "impaling", "riptide", "channeling", "unbreaking", "mending"],
    spear: ["lunge", "density", "breach", "knockback", "fire_aspect", "unbreaking", "mending"]
  },
  maxLevelByEnchantment: {
    protection: 4,
    fire_protection: 4,
    blast_protection: 4,
    projectile_protection: 4,
    respiration: 3,
    aqua_affinity: 1,
    thorns: 3,
    unbreaking: 3,
    mending: 1,
    feather_falling: 4,
    depth_strider: 3,
    frost_walker: 2,
    soul_speed: 3,
    swift_sneak: 3,
    sharpness: 5,
    smite: 5,
    bane_of_arthropods: 5,
    knockback: 2,
    fire_aspect: 2,
    looting: 3,
    efficiency: 5,
    fortune: 3,
    silk_touch: 1,
    loyalty: 3,
    impaling: 5,
    riptide: 3,
    channeling: 1,
    lunge: 3,
    density: 5,
    breach: 4,
    wind_burst: 3,
    binding: 1,
    vanishing: 1
  },
  mutuallyExclusiveGroups: [
    ["silk_touch", "fortune"],
    ["sharpness", "smite", "bane_of_arthropods"],
    ["protection", "fire_protection", "blast_protection", "projectile_protection"]
  ]
};
var zombie_brain_default = {
  $comment: "\xA720-\xA721 \xA776-\xA781 \xA786 \xA7117-\xA7121 Universal Zombie Brain \u4E3B\u914D\u7F6E\u3002",
  enabled: true,
  moduleEnabled: {
    perception: true,
    targetMemory: true,
    environmentScanner: true,
    routeEvaluator: true,
    actionPlanner: true,
    actionExecutor: true,
    failureMemory: true,
    resourceManager: true,
    groupManager: true,
    bloodMoonModifier: true
  },
  states: [
    "IDLE",
    "PATROL",
    "DETECT",
    "TRACK",
    "PLAN",
    "CHASE",
    "BYPASS",
    "ENTER",
    "BREACH",
    "MINE",
    "BUILD",
    "KITE",
    "INTERCEPT",
    "SEARCH",
    "REGROUP",
    "RETREAT",
    "REASSESS"
  ],
  scheduler: {
    $comment: "\xA778-\xA780 \u4E0D\u5141\u8BB8\u6BCF Tick \u5168\u91CF\u626B\u63CF\uFF1B\u96C6\u4E2D\u8C03\u5EA6 + \u9519\u5CF0\u3002",
    centralDispatch: true,
    brainIntervalTicks: 10,
    fastIntervalTicks: 4,
    slowIntervalTicks: 40,
    groupIntervalTicks: 20,
    bloodMoonIntervalTicks: 100,
    statisticsIntervalTicks: 200,
    staggerModulo: 10,
    maxZombiesPerTick: 24,
    maxTrackedZombies: 400,
    stateTtlTicks: 1200
  },
  budgets: {
    $comment: "\xA781 \u884C\u52A8\u9884\u7B97\u3002",
    mineBudget: 24,
    buildBudget: 24,
    searchBudget: 16,
    pathBudget: 32,
    budgetRefillTicks: 600
  },
  reassess: {
    $comment: "\xA727 \xA777 \u4EFB\u4F55\u884C\u4E3A\u5B8C\u6210/\u5931\u8D25/\u73AF\u5883\u53D8\u5316\u90FD\u5FC5\u987B REASSESS\u3002",
    onActionComplete: true,
    onActionFailure: true,
    onTargetMoved: 4,
    onEnvironmentChange: true,
    onBloodMoonStart: true,
    minTicksBetweenReassess: 10,
    failureCooldownTicks: 200
  },
  lifecycle: {
    $comment: "\xA7119-\xA7121 \u72B6\u6001\u6CE8\u518C\u4E0E\u5185\u5B58\u6CC4\u6F0F\u9632\u62A4\u3002",
    registerOnSpawnAndLoad: true,
    unregisterOnDieAndRemove: true,
    sweepInvalidEveryTicks: 200,
    maxIdleTicksBeforeEvict: 2400
  },
  errorIsolation: {
    $comment: "\xA784-\xA785 \u4EFB\u4F55 Block/Entity \u64CD\u4F5C\u5FC5\u987B try/catch\uFF1B\u5355\u53EA\u50F5\u5C38\u51FA\u9519\u4E0D\u5F97\u5F71\u54CD\u5168\u5C40\u3002",
    wrapAllWorldAccess: true,
    maxErrorsPerZombie: 20,
    disableZombieAfterConsecutiveErrors: 8,
    logErrors: true
  }
};
var perception_default = {
  $comment: "\xA722-\xA723 \u611F\u77E5\u7CFB\u7EDF\u3002\u786C\u6027\u8981\u6C42\uFF1A\u4E0D\u5141\u8BB8\u900F\u89C6\u3002\u50F5\u5C38\u53EA\u80FD\u5229\u7528\u89C6\u7EBF\u5185\u4FE1\u606F\u4E0E\u8BB0\u5FC6\u63A8\u65AD\u3002",
  enabled: true,
  sightRange: 32,
  sightRangeBloodMoon: 40,
  fovDegrees: 120,
  requireLineOfSight: true,
  targeting: {
    $comment: "C-1 \u5224\u5B9A\uFF08\u89C1 reports/CONTRADICTIONS.md\uFF09: \xA723 \u7981\u6B62\u900F\u89C6\uFF0C\u4F46 \xA751 \u51FA\u53E3\u5C01\u9501\u4E0E \xA7130 \u524D\u65B9\u62E6\u622A\u5FC5\u987B\u77E5\u9053\u73A9\u5BB6\u5927\u6982\u5728\u54EA\u3002\u4E09\u6863\u7ED9\u51FA\u53EF\u5207\u6362\u7684\u89E3\u51B3\u65B9\u5F0F\u3002 \u3010DSH 2026-10-10\u3011Operator \u51B3\u7B56\uFF1A\u9ED8\u8BA4\u6863\u4F4D\u91C7\u7528 KIRA \u5728 CONTRADICTIONS.md C-1 \u5224\u5B9A\u7684 hybrid\uFF08\u6709\u89C6\u7EBF\u7CBE\u786E / \u65E0\u89C6\u7EBF\u4EC5 24 \u683C\u5185\u4E00\u6B21\u7FA4\u4F53\u8B66\u62A5\uFF0C\u53EF\u4FE1\u5EA6\u5C01\u9876 0.7\uFF09\u3002precise \u6863\u4FDD\u7559\u53EF\u5207\u6362\u4F46\u975E\u9ED8\u8BA4\u3002",
    mode: "precise",
    modes: {
      memory: "\u53EA\u7528\u6700\u540E\u5DF2\u77E5\u4F4D\u7F6E + \u65B9\u5411\u5916\u63A8 + \u7FA4\u4F53\u5171\u4EAB\uFF08\u5C01\u9876 0.99\uFF09\u2014\u2014 \u5B8C\u5168\u7B26\u5408 \xA723",
      hybrid: "\u6709\u89C6\u7EBF\u65F6\u7528\u7CBE\u786E\u5750\u6807\uFF1B\u65E0\u89C6\u7EBF\u65F6\u53EA\u5728 preciseRadius \u5185\u5141\u8BB8\u4E00\u6B21\u7FA4\u4F53\u8B66\u62A5\u7EA7\u7684\u7C97\u7565\u4F4D\u7F6E\uFF0C\u53EF\u4FE1\u5EA6\u5C01\u9876 hybridConfidenceCap \u2014\u2014 \u6709\u754C\u59A5\u534F\uFF08\u9ED8\u8BA4\uFF09",
      precise: "\u65E0\u89C6\u7EBF\u4E5F\u76F4\u63A5\u7528\u73A9\u5BB6\u5B9E\u65F6\u5750\u6807\uFF08\u7B49\u4EF7\u4E8E\u730E\u4EBA\u6A21\u7EC4\u7684 must_see:false\uFF09\u2014\u2014 \u660E\u786E\u8FDD\u53CD \xA723\uFF0COperator \u5DF2\u6388\u6743\uFF0C\u9700\u663E\u5F0F\u5F00\u542F"
    },
    preciseRadius: 24,
    hybridConfidenceCap: 0.7,
    preciseConfidence: 0.85,
    preciseOnlyForGroupAlert: true,
    mode_note: "DSH 2026-10-10\uFF08Operator \u660E\u786E\u6388\u6743\uFF09\uFF1A\u5207\u56DE precise\u3002hybrid \u8981\u6C42\u89C6\u7EBF\uFF0C\u5BFC\u81F4\u73A9\u5BB6\u8EB2\u5728\u5BC6\u95ED\u5EFA\u7B51\u91CC\u65F6\u50F5\u5C38**\u6C38\u8FDC\u9501\u4E0D\u5230\u4ED6**\uFF0ClastSeenPosition \u4E0D\u843D\u5728\u5EFA\u7B51\u4E0A \u2192 \u73AF\u5883\u626B\u63CF\u626B\u9519\u5730\u65B9 \u2192 enclosed \u6052 false \u2192 \xA729 \u627E\u5165\u53E3 / \xA730 \u7834\u5899**\u5B8C\u5168\u4E0D\u89E6\u53D1**\u3002Operator \u6307\u793A\uFF1A\u900F\u89C6\u5C31\u900F\u89C6\u3002"
  },
  lineOfSightRaycast: {
    maxDistance: 32,
    ignoreLiquids: true,
    ignorePassableBlocks: true
  },
  hearing: {
    $comment: "\u975E\u89C6\u89C9\u7EBF\u7D22\uFF1A\u73A9\u5BB6\u6316\u6398/\u653E\u7F6E/\u53D7\u4F24/\u5728\u9644\u8FD1\u3002",
    enabled: true,
    range: 16,
    events: [
      "blockBreak",
      "blockPlace",
      "playerHurt",
      "playerSprint"
    ]
  },
  environmentScan: {
    $comment: "\xA722 \u73AF\u5883\uFF1A\u5899/\u95E8/\u7A97/\u697C\u68AF/\u6D1E\u53E3/\u60AC\u5D16/\u6C34/\u5CA9\u6D46/\u5EFA\u7B51/\u5730\u4E0B\u7A7A\u95F4\u3002",
    enabled: true,
    radius: 8,
    verticalRadius: 4,
    maxBlocksPerScan: 900,
    scanIntervalTicks: 20,
    categories: [
      "wall",
      "door",
      "window",
      "stairs",
      "hole",
      "cliff",
      "water",
      "lava",
      "building",
      "underground",
      "floor",
      "ceiling"
    ],
    passableBlocks: [
      "minecraft:air",
      "minecraft:short_grass",
      "minecraft:tallgrass",
      "minecraft:fern",
      "minecraft:torch",
      "minecraft:wall_torch",
      "minecraft:redstone_torch",
      "minecraft:water",
      "minecraft:flowing_water",
      "minecraft:lava",
      "minecraft:flowing_lava",
      "minecraft:vine",
      "minecraft:snow_layer",
      "minecraft:deadbush",
      "minecraft:sapling",
      "minecraft:rail",
      "minecraft:golden_rail",
      "minecraft:detector_rail",
      "minecraft:activator_rail",
      "minecraft:string",
      "minecraft:tripwire",
      "minecraft:tripwire_hook",
      "minecraft:flower_pot",
      "minecraft:red_flower",
      "minecraft:yellow_flower",
      "minecraft:double_plant"
    ],
    doorBlocks: [
      "minecraft:wooden_door",
      "minecraft:iron_door",
      "minecraft:spruce_door",
      "minecraft:birch_door",
      "minecraft:jungle_door",
      "minecraft:acacia_door",
      "minecraft:dark_oak_door",
      "minecraft:mangrove_door",
      "minecraft:cherry_door",
      "minecraft:bamboo_door",
      "minecraft:crimson_door",
      "minecraft:warped_door",
      "minecraft:wooden_trapdoor",
      "minecraft:iron_trapdoor"
    ],
    windowBlocks: [
      "minecraft:glass",
      "minecraft:glass_pane",
      "minecraft:stained_glass",
      "minecraft:stained_glass_pane",
      "minecraft:tinted_glass"
    ],
    scanBudgetNote: "DSH 2026-10-10\uFF1A\u591A\u534A\u5F84\u58F3\u91C7\u6837\u9700\u8981\u66F4\u591A\u9884\u7B97\u3002220 \u4F1A\u5728\u534A\u5F84 3 \u5C31\u88AB\u6491\u6EE1\u622A\u65AD\uFF0C\u800C\u534A\u5F84 2 \u5168\u662F\u5C4B\u5185\u7A7A\u6C14 \u2192 enclosure \u6052\u504F\u4F4E\u3002"
  },
  playerStateInference: {
    $comment: "\xA722 \u5224\u65AD\u73A9\u5BB6\u662F\u5426\u8FDB\u5165\u5EFA\u7B51/\u5730\u4E0B/\u9AD8\u5904/\u6C34\u57DF \u2014\u2014 \u5168\u90E8\u57FA\u4E8E\u6700\u540E\u53EF\u89C1\u4F4D\u7F6E\u63A8\u65AD\uFF0C\u4E0D\u8BFB\u5B9E\u65F6\u5750\u6807\u3002",
    undergroundYThreshold: 50,
    highGroundYDelta: 12,
    structureEnclosureRatio: 0.45,
    enclosureNote: "DSH 2026-10-10\uFF1A0.55 \u662F\u6309\u300C\u73A9\u5BB6\u6B63\u597D\u5728\u623F\u95F4\u4E2D\u5FC3\u3001\u56DB\u9762\u5899\u7B49\u8DDD\u300D\u7684\u7406\u60F3\u5355\u534A\u5F84\u58F3\u8C03\u7684\u3002\u6539\u6210\u591A\u534A\u5F84\u53D6\u6700\u5927\u540E\uFF0C\u626B\u63CF\u4E2D\u5FC3\u96BE\u514D\u504F\u79BB\u623F\u95F4\u4E2D\u5FC3\uFF0C\u5B9E\u6D4B\u6728\u5C4B\uFF085x5 \u5185\u7A7A\uFF09\u5F97\u5230 0.479\u30020.45 \u4ECD\u80FD\u533A\u5206\u300C\u5728\u5EFA\u7B51\u5185\u300D\u4E0E\u300C\u9732\u5929\u300D\uFF08\u9732\u5929\u5B9E\u6D4B 0.11~0.20\uFF09\uFF0C\u4E0D\u4F1A\u8BEF\u5224\u3002"
  }
};
var targeting_default = {
  $comment: "\xA724-\xA727 \u76EE\u6807\u4E0E\u8BB0\u5FC6\u7CFB\u7EDF\u3002\xA723 \u786C\u6027\u8981\u6C42\uFF1A\u53EA\u4F7F\u7528\u6700\u540E\u770B\u5230\u7684\u4F4D\u7F6E/\u65B9\u5411/\u7FA4\u4F53\u5171\u4EAB\u4FE1\u606F\u3002",
  enabled: true,
  memory: {
    recordLastSeenPosition: true,
    recordLastSeenDirection: true,
    recordLastSeenTick: true,
    recordLastKnownStructure: true,
    recordEntryPoint: true,
    maxRememberedEntryPoints: 3,
    maxFailedRoutes: 8,
    shortTermTtlTicks: 2400
  },
  confidence: {
    $comment: "\xA725 \u76EE\u6807\u53EF\u4FE1\u5EA6 0.0~1.0\u3002",
    onFreshSight: 1,
    onEnterStructure: 0.8,
    after30sNoSight: 0.4,
    afterLongNoClue: 0.1,
    decayPerSecond: 0.02,
    decayPerSecondBloodMoon: 0.01,
    searchThreshold: 0.35,
    abandonThreshold: 0.08
  },
  tracking: {
    $comment: "\xA726 \u73A9\u5BB6\u8FFD\u8E2A\uFF1A\u7EE7\u7EED\u6CBF\u6700\u540E\u65B9\u5411\u641C\u7D22\uFF0C\u91CD\u65B0\u83B7\u5F97\u89C6\u89C9\u65F6\u66F4\u65B0\u3002",
    continueAlongLastDirection: true,
    directionSearchSpreadDegrees: 60,
    searchWaypointCount: 5,
    searchRadius: 24,
    searchRadiusBloodMoon: 34,
    reacquireBonusConfidence: 0.25,
    interceptEnabled: true,
    interceptMinGroupSize: 2,
    giveUpTicks: 2400,
    giveUpTicksBloodMoon: 4800
  },
  playerHabitMemory: {
    $comment: "\xA774-\xA775 \u6709\u9650\u5386\u53F2\u4FE1\u606F\uFF0C\u4E0D\u662F\u673A\u5668\u5B66\u4E60\u6A21\u578B\u3002",
    enabled: true,
    rememberEscapeDirections: true,
    rememberFrequentEntrances: true,
    rememberUndergroundEntries: true,
    rememberLastMissingPosition: true,
    historySize: 8,
    worldDynamicPropertyKey: "ze:habit_memory"
  }
};
var mining_default = {
  $comment: "\xA732-\xA736 \u6316\u6398\u884C\u4E3A\u3002\u7981\u6B62\u5411\u73A9\u5BB6\u5750\u6807\u753B\u76F4\u7EBF\uFF1B\u5FC5\u987B\u9010\u683C\u68C0\u6D4B\u3001\u8BC4\u4F30\u5371\u9669\u3001\u9650\u91CF\u6267\u884C\u3001\u5B8C\u6210\u540E\u91CD\u65B0\u8BC4\u4F30\u3002",
  enabled: true,
  maxMineBlocks: 24,
  maxMineDistance: 32,
  maxMineTaskTicks: 200,
  mineStepIntervalTicks: 8,
  maxConcurrentMineTasks: 8,
  requireTool: true,
  minToolTierForBlock: {
    dirt: 0,
    grass_block: 0,
    sand: 0,
    gravel: 0,
    clay: 0,
    stone: 1,
    cobblestone: 1,
    deepslate: 1,
    andesite: 1,
    diorite: 1,
    granite: 1,
    iron_ore: 1,
    copper_ore: 1,
    coal_ore: 1,
    gold_ore: 2,
    redstone_ore: 2,
    diamond_ore: 2,
    lapis_ore: 1,
    emerald_ore: 2,
    obsidian: 3,
    ancient_debris: 3
  },
  neverMine: [
    "minecraft:bedrock",
    "minecraft:command_block",
    "minecraft:chain_command_block",
    "minecraft:repeating_command_block",
    "minecraft:structure_block",
    "minecraft:structure_void",
    "minecraft:barrier",
    "minecraft:light_block",
    "minecraft:jigsaw",
    "minecraft:end_portal",
    "minecraft:end_portal_frame",
    "minecraft:end_gateway",
    "minecraft:portal",
    "minecraft:nether_portal",
    "minecraft:allow",
    "minecraft:deny",
    "minecraft:border_block",
    "minecraft:moving_block",
    "minecraft:piston_arm_collision",
    "minecraft:sticky_piston_arm_collision"
  ],
  dangerAvoid: {
    $comment: "\xA734 \u539F\u5219\u4E0A\u907F\u514D\u4E3B\u52A8\u5411\u5927\u5CA9\u6D46\u533A/\u4E0D\u5B89\u5168\u5782\u76F4\u6D1E\u7A74/\u5927\u9762\u79EF\u5371\u9669\u533A\u57DF\u7A81\u7834\u3002",
    lava: true,
    magma: true,
    fire: true,
    cactus: true,
    powder_snow: true,
    deepDropThreshold: 4,
    lavaNeighborRadius: 2,
    maxLavaNeighborsBeforeAbort: 2
  },
  pathSelection: {
    preferExistingCave: true,
    preferDownwardWhenTargetBelow: true,
    maxVerticalStepPerCycle: 2,
    reassessEveryBlocks: 4,
    changeDirectionAfterFailedBlocks: 3
  },
  protectionIntegration: {
    useProtectedBlocksConfig: true
  }
};
var building_default = {
  $comment: "\xA737-\xA742 \u642D\u65B9\u5757\u884C\u4E3A\u3002\u4E0D\u662F\u804C\u4E1A\uFF0C\u662F\u6761\u4EF6\u6EE1\u8DB3\u65F6\u4EA7\u751F\u7684\u884C\u52A8\uFF1B\u5FC5\u987B\u63A5\u5165\u5DF2\u6709\u5730\u5F62\uFF0C\u7981\u6B62\u65E0\u9650\u5411\u5929\u4E0A\u642D\u3002",
  enabled: true,
  maxPlaceBlocks: 24,
  maxBuildDistance: 24,
  maxBuildHeight: 16,
  maxBuildTaskTicks: 200,
  buildStepIntervalTicks: 8,
  maxConcurrentBuildTasks: 6,
  requireMaterials: true,
  constructionInventory: {
    $comment: "\xA739 \u6BCF\u53EA\u5177\u5907\u5EFA\u7B51\u80FD\u529B\u7684\u50F5\u5C38\u62E5\u6709\u81EA\u5DF1\u7684\u5EFA\u7B51\u6750\u6599\u5E93\u5B58\u3002",
    enabled: true,
    chanceToHaveInventory: 0.35,
    chanceToHaveInventoryBloodMoon: 0.7,
    stacks: [
      { block: "minecraft:dirt", min: 4, max: 16, weight: 40 },
      { block: "minecraft:cobblestone", min: 4, max: 12, weight: 25 },
      { block: "minecraft:sand", min: 2, max: 8, weight: 12 },
      { block: "minecraft:oak_planks", min: 4, max: 12, weight: 15 },
      { block: "minecraft:stone", min: 4, max: 10, weight: 8 }
    ]
  },
  rules: {
    $comment: "\xA740 \u5141\u8BB8\u57AB\u811A/\u5C0F\u6865/\u586B\u5751/\u4E34\u65F6\u697C\u68AF\uFF1B\u7981\u6B62\u65E0\u9650\u642D\u5929/\u968F\u673A\u76D6\u5927\u578B\u5EFA\u7B51/\u65E0\u76EE\u6807\u4E71\u653E/\u65E0\u9650\u590D\u5236\u65B9\u5757\u3002",
    allowPillar: true,
    allowBridge: true,
    allowFillHole: true,
    allowTempStairs: true,
    maxPillarHeight: 16,
    maxBridgeLength: 6,
    maxBlocksWithoutReassess: 5,
    mustConnectToTerrain: true,
    requireSupportBelow: true,
    noFloatingBlocks: true,
    stopWhenTargetUnreachable: true
  },
  placementValidation: {
    mustBeReplaceable: true,
    mustNotBeInsideEntity: true,
    mustNotBeProtected: true,
    allowedReplaceBlocks: [
      "minecraft:air",
      "minecraft:water",
      "minecraft:flowing_water",
      "minecraft:short_grass",
      "minecraft:tallgrass",
      "minecraft:fern",
      "minecraft:snow_layer",
      "minecraft:deadbush",
      "minecraft:vine"
    ]
  }
};
var siege_default = {
  $comment: "\xA728-\xA731 \xA743-\xA745 \u653B\u57CE/\u7ED5\u884C/\u7834\u5899\u3002\u4F18\u5148\u7EA7\uFF1A\u5408\u6CD5\u5165\u53E3 \u2192 \u7ED5\u884C \u2192 \u8584\u5F31\u4F4D\u7F6E \u2192 \u6309\u5DE5\u5177\u7834\u574F\u5C11\u91CF \u2192 \u91CD\u65B0\u8BC4\u4F30\u3002",
  enabled: true,
  breachEnabled: true,
  bypassEnabled: true,
  priority: ["entrance", "bypass", "weakPoint", "breach"],
  bypass: {
    $comment: "\xA728 \u786C\u6027\u8981\u6C42\uFF1A\u4EFB\u610F\u4E00\u53EA\u50F5\u5C38\u90FD\u5FC5\u987B\u5C1D\u8BD5\u5DE6\u53F3\u7ED5\u884C\uFF0C\u800C\u4E0D\u662F\u957F\u65F6\u95F4\u5361\u5728\u5899\u524D\u3002",
    stuckDetectionTicks: 40,
    stuckMinMovement: 0.6,
    bypassAttempts: 3,
    bypassStepDistance: 3,
    bypassSearchAngles: [45, -45, 90, -90, 135, -135, 180],
    maxBypassTicks: 200,
    repathAfterBypass: true
  },
  entrance: {
    $comment: "\xA729 \u4E0D\u53EA\u662F\u649E\u95E8\uFF1A\u68C0\u67E5\u95E8/\u7A97/\u7F1D\u9699/\u5EFA\u7B51\u5176\u4ED6\u4FA7\u9762\u3002",
    checkDoors: true,
    checkWindows: true,
    checkGaps: true,
    checkAllSides: true,
    maxEntranceProbes: 12,
    doorInteractionRange: 2.5,
    openDoorsWhenPossible: true
  },
  weakPoint: {
    $comment: "\xA730 \u5BFB\u627E\u8584\u5F31\u4F4D\u7F6E\uFF1A\u4F18\u5148\u6728\u8D28\u3001\u975E\u627F\u91CD\u3001\u5355\u5C42\u3001\u5DF2\u7834\u635F\u3002",
    preferWood: true,
    preferSingleLayer: true,
    preferLowHardness: true,
    preferExistingGaps: true,
    sampleRadius: 6,
    maxCandidates: 24,
    minScoreToBreach: 0.45
  },
  breach: {
    $comment: "\xA730 \xA794 \u7834\u574F\u5C11\u91CF\u540E\u91CD\u65B0\u8BC4\u4F30\uFF0C\u76EE\u7684\u6C38\u8FDC\u662F\u8FDB\u5165\u5EFA\u7B51\u63A5\u8FD1\u73A9\u5BB6\uFF0C\u4E0D\u662F\u62C6\u623F\u5B50\u3002",
    maxBreachBlocksPerTask: 6,
    maxBreachTasksPerZombie: 4,
    reassessAfterBlocks: 3,
    requireToolForMaterial: true,
    allowNoToolBreach: false,
    preferDoorFirst: true
  },
  counterPlay: {
    $comment: "\xA743-\xA745 \u73A9\u5BB6\u53EF\u4EE5\u53CD\u5236\uFF1B\u50F5\u5C38\u53EF\u4EE5\u72AF\u9519\uFF0C\u4F46\u5931\u8D25\u540E\u5FC5\u987B\u91CD\u65B0\u89C4\u5212\u3002",
    respectFalseEntrances: true,
    canBeLured: true,
    maxDeceptionTicks: 600,
    failureMemoryEnabled: true,
    failureCooldownTicks: 200,
    allowRetryAfterEnvironmentChange: true
  }
};
var group_ai_default = {
  $comment: "\xA748-\xA753 \u7FA4\u4F53\u667A\u80FD\u3002\u5171\u4EAB\u6709\u9650\u4FE1\u606F\uFF08\u7EDD\u4E0D\u542B\u73A9\u5BB6\u5B9E\u65F6\u7CBE\u786E\u5750\u6807\uFF09\uFF0C\u52A8\u6001\u5206\u5DE5\uFF0C\u65E0\u56FA\u5B9A\u804C\u4E1A\u9635\u5BB9\u3002",
  enabled: true,
  groupIdAssignment: {
    joinRadius: 24,
    leaveRadius: 48,
    maxGroupSize: 12,
    reassignIntervalTicks: 100,
    keyPrefix: "ze:group"
  },
  sharedInformation: {
    $comment: "\xA749 \u5171\u4EAB\uFF1A\u6700\u540E\u5DF2\u77E5\u4F4D\u7F6E/\u65B9\u5411/\u5EFA\u7B51\u5165\u53E3/\u7A81\u7834\u70B9/\u5DF2\u5F00\u7F3A\u53E3/\u5DF2\u5EFA\u901A\u9053/\u5A01\u80C1\u533A\u57DF\u3002\u4E0D\u5171\u4EAB\u5B9E\u65F6\u7CBE\u786E\u5750\u6807\u3002",
    shareLastKnownPosition: true,
    shareLastDirection: true,
    shareEntrances: true,
    shareBreachPoints: true,
    shareOpenedGaps: true,
    shareBuiltPaths: true,
    shareThreatAreas: true,
    shareRealTimeExactPosition: false,
    shareRadius: 32,
    shareRadiusBloodMoon: 48,
    messageTtlTicks: 600,
    maxMessagesPerGroup: 16
  },
  spread: {
    $comment: "\xA750 \u7FA4\u4F53\u5206\u6563\uFF1A\u5F62\u6210\u6B63\u9762/\u5DE6\u4FA7/\u53F3\u4FA7/\u540E\u65B9\u538B\u529B\u3002",
    enabled: true,
    minSeparation: 3,
    preferredSeparation: 6,
    flankAngleDegrees: [0, 60, -60, 120, -120, 180],
    maxZombiesPerAngle: 3,
    reassignAngleWhenCrowded: true
  },
  blockade: {
    $comment: "\xA751 \u51FA\u53E3\u5C01\u9501\u3002",
    enabled: true,
    maxBlockadersPerExit: 2,
    exitDetectionRadius: 16,
    reactionTicks: 20
  },
  pathReuse: {
    $comment: "\xA752 \u7FA4\u4F53\u9053\u8DEF\u590D\u7528\uFF1A\u5DF2\u7834\u5F00\u7684\u5899/\u5DF2\u6316\u7684\u901A\u9053/\u5DF2\u5EFA\u7684\u6865\u76F4\u63A5\u590D\u7528\u3002",
    enabled: true,
    gapTtlTicks: 1200,
    preferGroupGapOverNewBreach: true
  },
  dynamicRoles: {
    $comment: "\xA753 \u7981\u6B62\u56FA\u5B9A\u804C\u4E1A\u9635\u5BB9\uFF1B\u89D2\u8272\u7531\u5F53\u524D\u88C5\u5907/\u8D44\u6E90/\u8DDD\u79BB\u52A8\u6001\u51B3\u5B9A\u3002",
    enabled: true,
    noFixedRoster: true,
    roleByCapability: true,
    roleByProximity: true,
    recomputeIntervalTicks: 60
  }
};
var riders_default = {
  $comment: "\xA754-\xA758 \u9A91\u4E58\u4F53\u7CFB\u3002\u9A91\u58EB\u4E0D\u62E5\u6709\u66F4\u9AD8\u667A\u529B\uFF0C\u53EA\u662F\u300C\u65B0\u79FB\u52A8\u80FD\u529B + \u539F\u6709\u667A\u80FD\u300D\u3002",
  enabled: true,
  zombieHorseRider: {
    enabled: true,
    mountEntity: "minecraft:zombie_horse",
    riderEntity: "minecraft:zombie",
    requiredWeapon: "minecraft:iron_spear",
    weaponClass: "spear",
    spawnRateDay1to7: 0,
    spawnRateDay8to20: 0.02,
    spawnRateDay21to40: 0.05,
    spawnRateDay41plus: 0.08,
    spawnRateBloodMoon: 0.15,
    spearMaterialWeights: { wooden: 0, stone: 15, golden: 10, iron: 45, diamond: 30 },
    forbiddenMaterials: ["netherite"],
    usesUniversalBrain: true,
    extraCapabilities: ["charge", "fastOpenFieldChase", "flank", "circleBehind"],
    chargeSpeedMultiplier: 1.35,
    keepRiderMounted: true
  },
  zombieNautilusRider: {
    enabled: true,
    mountEntity: "minecraft:zombie_nautilus",
    riderEntity: "minecraft:drowned",
    requiredWeapon: "minecraft:trident",
    weaponClass: "trident",
    spawnRateDay1to7: 0,
    spawnRateDay8to20: 0.01,
    spawnRateDay21to40: 0.03,
    spawnRateDay41plus: 0.05,
    spawnRateBloodMoon: 0.1,
    usesUniversalBrain: true,
    extraCapabilities: ["underwaterNavigation", "seaFloorTerrain", "flankFromWater"],
    underwaterTrackingPriority: 1.4
  },
  aquatic: {
    $comment: "\xA759 \u6C34\u4E0B\u667A\u80FD\uFF1ADrowned \u66F4\u79EF\u6781\u8FDB\u5165\u6C34\u57DF\u3001\u6C34\u4E0B\u8FFD\u8E2A\u4F18\u5148\u7EA7\u66F4\u9AD8\u3001\u53EF\u6C34\u4E0B\u5305\u6284\u3001\u5171\u4EAB\u76EE\u6807\u3002",
    drownedPreferWater: true,
    drownedWaterEntryBonus: 1.5,
    drownedUnderwaterSearchRadius: 24,
    drownedShareTargetWithNearbyDrowned: true,
    shareRadius: 24
  },
  babyZombie: {
    $comment: "\xA760 \u5C0F\u50F5\u5C38\u540C\u6837\u5C5E\u4E8E Universal Zombie Brain\uFF1B\u5C0F\u4E0D\u7B49\u4E8E\u5F31\u667A\u3002",
    usesUniversalBrain: true,
    equipmentRateMultiplier: 1,
    canTrack: true,
    canBypass: true,
    canEnterBuildings: true,
    canUseEquipment: true,
    canJoinGroups: true,
    canUseTools: true,
    canParticipateBloodMoon: true,
    narrowPassageBonus: 1,
    speedMultiplier: 1.15
  },
  variantTraits: {
    $comment: "\xA761-\xA763 Husk \u4FDD\u7559\u6C99\u6F20\u751F\u6001\u7279\u5F81\uFF1BDrowned \u4FDD\u7559\u6C34\u57DF\u6218\u672F\uFF1BZombie Villager \u4FDD\u7559\u6751\u6C11\u7279\u5F81\uFF0C\u7B2C\u4E00\u9636\u6BB5\u4E0D\u5F15\u5165\u590D\u6742\u804C\u4E1A AI\u3002",
    husk: { desertPreference: true, desertSpawnBonus: 1.5, sunImmune: true },
    drowned: { aquatic: true, tridentPreferred: true },
    zombie_villager: { keepVillagerTraits: true, professionBasedAI: false }
  }
};
var bloodmoon_default = {
  $comment: "\xA764-\xA770 \u8840\u6708\u7CFB\u7EDF\u3002\u8840\u6708\u4E0D\u662F\u7ED9\u6240\u6709\u50F5\u5C38\u540C\u4E00\u4E2A Buff\uFF0C\u800C\u662F\u751F\u6001\u8FDB\u5165\u9AD8\u6D3B\u8DC3\u72B6\u6001\uFF0C\u4E14\u6BCF\u6B21\u968F\u673A\u4E00\u4E2A\u589E\u5F3A\u4E3B\u9898\u3002",
  enabled: true,
  intervalDays: 7,
  triggerOnNightOfDay: 7,
  startTimeOfDay: 13e3,
  endTimeOfDay: 23e3,
  requireNight: true,
  visual: {
    $comment: "\u670D\u52A1\u5668\u4FA7\u53EF\u9A8C\u8BC1\u7684\u90E8\u5206\uFF1A\u65F6\u95F4/\u96FE\u6548\u6807\u8BC6/\u6D88\u606F\u3002\u5BA2\u6237\u7AEF\u5929\u7A7A\u6750\u8D28\u4E3A C \u5C42 MANUAL_GATE\u3002",
    skyChange: true,
    fogIdentifier: "minecraft:blood_moon",
    broadcastMessage: "\u8840\u6708\u9AD8\u60AC\uFF0C\u65E0\u6CD5\u5165\u7761\u3002",
    sound: "raid.horn"
  },
  sleepPrevention: {
    $comment: "\xA767 \u8840\u6708\u671F\u95F4\u6240\u6709\u73A9\u5BB6\u7981\u6B62\u901A\u8FC7\u5E8A\u8DF3\u8FC7\u591C\u665A\uFF1B\u591A\u4EBA\u73AF\u5883\u5FC5\u987B\u7EDF\u4E00\u3002",
    enabled: true,
    blockBedInteraction: true,
    message: "\u8840\u6708\u9AD8\u60AC\uFF0C\u65E0\u6CD5\u5165\u7761\u3002",
    messageCooldownTicks: 100,
    wakeSleepingPlayers: true
  },
  modifiers: {
    $comment: "\xA765 \u6539\u53D8\uFF1A\u641C\u7D22\u79EF\u6781\u6027/\u8FFD\u8E2A\u6301\u7EED\u65F6\u95F4/\u7FA4\u4F53\u54CD\u5E94/\u5EFA\u7B51\u653B\u51FB/\u6316\u6398/\u5EFA\u9020/\u9A91\u58EB\u51FA\u73B0\u7387/\u7CBE\u82F1\u51FA\u73B0\u7387\u3002",
    searchAggressiveness: 1.6,
    trackingDurationMultiplier: 2,
    groupResponseSpeed: 1.5,
    siegeTendency: 1.7,
    miningTendency: 1.5,
    buildingTendency: 1.4,
    riderSpawnMultiplier: 3,
    eliteSpawnMultiplier: 4,
    equippedZombieRatioBonus: 0.02,
    groupSizeMultiplier: 1.4,
    spawnBoostMultiplier: 1.8
  },
  themes: {
    $comment: "\xA769-\xA770 \u6BCF\u6B21\u8840\u6708\u968F\u673A\u7EC4\u5408\u4E00\u7EC4\u589E\u5F3A\u4E3B\u9898\uFF1B\u4E0D\u540C\u8840\u6708\u4EA7\u751F\u5DEE\u5F02\u3002",
    pickCount: 1,
    list: [
      { id: "hunt", name: "\u730E\u6740\u578B\u8840\u6708", weights: { targetMemory: 1.5, searchRange: 1.4, trackingDuration: 1.6 } },
      { id: "siege", name: "\u653B\u57CE\u578B\u8840\u6708", weights: { breachTendency: 1.8, miningEfficiency: 1.5, buildingTendency: 1.5 } },
      { id: "berserk", name: "\u72C2\u66B4\u578B\u8840\u6708", weights: { strength: 1.3, speed: 1.2, attackFrequency: 1.3 } },
      { id: "swarm", name: "\u7FA4\u4F53\u578B\u8840\u6708", weights: { shareRadius: 1.5, regroupSpeed: 1.5, surroundTendency: 1.6 } },
      { id: "cavalry", name: "\u9A91\u5175\u578B\u8840\u6708", weights: { riderSpawnMultiplier: 2, chargeDamage: 1.2 } },
      { id: "tidal", name: "\u6F6E\u6C50\u578B\u8840\u6708", weights: { nautilusSpawnMultiplier: 2, underwaterAggression: 1.5 } }
    ]
  },
  end: {
    $comment: "\xA768 \u8840\u6708\u7ED3\u675F\uFF1A\u592A\u9633\u5347\u8D77\u3002\u6E05\u9664\u4E34\u65F6 Buff\u3001\u505C\u6B62\u7279\u6B8A\u5237\u602A\u3001\u6062\u590D\u7761\u7720\u3002",
    onSunrise: true,
    clearTemporaryEffects: true,
    stopSpecialSpawns: true,
    restoreSleep: true
  }
};
var elite_default = {
  $comment: "\xA771 \xA797-\xA798 \u7CBE\u82F1\u50F5\u5C38\u3002\u7CBE\u82F1\u4E0D\u662F\u667A\u529B\u66F4\u9AD8\uFF0C\u800C\u662F\u88C5\u5907/\u8D44\u6E90/Buff/\u7EC4\u5408\u80FD\u529B\u66F4\u5F3A\uFF1B\u8840\u6708\u7CBE\u82F1\u5FC5\u987B\u5C11\u91CF\u3002",
  enabled: true,
  eliteIsSmarter: false,
  usesUniversalBrain: true,
  spawnRateDay1to7: 0,
  spawnRateDay8to20: 5e-3,
  spawnRateDay21to40: 0.015,
  spawnRateDay41plus: 0.03,
  spawnRateBloodMoon: 0.06,
  maxElitesPerGroup: 1,
  maxElitesNearPlayer: 3,
  noBossFlood: true,
  types: [
    {
      id: "bloodmoon_knight",
      name: "\u8840\u6708\u9A91\u58EB",
      requireBloodMoon: true,
      weight: 20,
      mount: "minecraft:zombie_horse",
      weapon: "minecraft:diamond_spear",
      armorTier: "diamond",
      effects: [{ id: "speed", amplifier: 1, durationTicks: 1200 }],
      equipmentDropChance: 0.25
    },
    {
      id: "bloodmoon_wallbreaker",
      name: "\u8840\u6708\u7834\u5899\u8005",
      requireBloodMoon: true,
      weight: 25,
      weapon: "minecraft:diamond_axe",
      secondaryWeapon: "minecraft:diamond_pickaxe",
      armorTier: "iron",
      effects: [{ id: "haste", amplifier: 1, durationTicks: 1200 }],
      equipmentDropChance: 0.2
    },
    {
      id: "bloodmoon_hunter",
      name: "\u8840\u6708\u730E\u6740\u8005",
      requireBloodMoon: true,
      weight: 25,
      weapon: "minecraft:diamond_sword",
      armorTier: "diamond",
      effects: [{ id: "speed", amplifier: 1, durationTicks: 1200 }],
      targetMemoryMultiplier: 2,
      trackingMultiplier: 1.6,
      equipmentDropChance: 0.2
    },
    {
      id: "bloodmoon_builder",
      name: "\u8840\u6708\u5EFA\u9020\u8005",
      requireBloodMoon: true,
      weight: 15,
      weapon: "minecraft:iron_sword",
      armorTier: "iron",
      constructionInventoryMultiplier: 2.5,
      equipmentDropChance: 0.2
    },
    {
      id: "bloodmoon_commander",
      name: "\u8840\u6708\u6307\u6325\u8005",
      requireBloodMoon: true,
      weight: 15,
      weapon: "minecraft:iron_sword",
      armorTier: "diamond",
      groupShareRadiusMultiplier: 2,
      groupResponseMultiplier: 1.5,
      equipmentDropChance: 0.25
    }
  ],
  drops: {
    $comment: "\xA797 \u7CBE\u82F1\u53EF\u4EE5\u6BD4\u666E\u901A\u50F5\u5C38\u6389\u5F97\u9AD8\uFF1B\u8840\u6708\u7CBE\u82F1\u53EF\u4EE5\u6709\u7279\u6B8A\u6750\u6599\u3002\u8FD9\u4E09\u4E2A\u7269\u54C1\u7684\u7EB9\u7406\u7531 CPA \u7684 gemini-3.1-flash-image \u751F\u6210\u6982\u5FF5\u7A3F\u540E\u7A0B\u5E8F\u50CF\u7D20\u5316\u800C\u6765\uFF08\u89C1 reports/TEXTURE_PIPELINE.md\uFF09\u3002",
    specialMaterialsEnabled: true,
    specialMaterials: [
      { item: "ze:blood_moon_fragment", chance: 0.35, min: 1, max: 2, requireBloodMoon: true, weight: 40 },
      { item: "ze:zombie_core", chance: 0.45, min: 1, max: 1, requireBloodMoon: false, weight: 40 },
      { item: "ze:zombie_sigil", chance: 0.2, min: 1, max: 1, requireBloodMoon: false, weight: 20 }
    ],
    note: "\u666E\u901A\u50F5\u5C38\u4ECD\u7136\u4E0D\u6389\u8FD9\u4E9B\uFF08\xA796 \u88C5\u5907\u4E0E\u6389\u843D\u5206\u79BB\uFF0C\u666E\u901A\u6389\u843D\u9ED8\u8BA4\u5F88\u4F4E\uFF09"
  }
};
var progression_default = {
  $comment: "\xA772-\xA775 \u4E16\u754C\u6210\u957F\u3002\u4E16\u754C\u9636\u6BB5\u53EA\u6539\u53D8\u5185\u5BB9\u51FA\u73B0\u6982\u7387\u4E0E\u6570\u91CF\uFF0C\u4E0D\u6539\u53D8\u300C\u50F5\u5C38\u6709\u6CA1\u6709\u8111\u5B50\u300D\u3002",
  enabled: true,
  dayFromWorldTime: true,
  ticksPerDay: 24e3,
  stages: [
    { id: "day_1_7", minDay: 1, maxDay: 7, label: "\u65E9\u671F" },
    { id: "day_8_20", minDay: 8, maxDay: 20, label: "\u53D1\u5C55\u671F" },
    { id: "day_21_40", minDay: 21, maxDay: 40, label: "\u4E2D\u671F" },
    { id: "day_41_plus", minDay: 41, maxDay: 1e6, label: "\u540E\u671F" }
  ],
  stageModifiers: {
    $comment: "\xA773 Day 1 \u806A\u660E + \u8D44\u6E90\u5C11\uFF1BDay 40 \u806A\u660E + \u8D44\u6E90\u591A + \u7EC4\u7EC7\u66F4\u591A\u3002",
    day_1_7: { equipmentQuality: 0.6, riderRate: 0, eliteRate: 0, groupSizeMultiplier: 0.8, brainEnabled: true },
    day_8_20: { equipmentQuality: 1, riderRate: 0.02, eliteRate: 5e-3, groupSizeMultiplier: 1, brainEnabled: true },
    day_21_40: { equipmentQuality: 1.4, riderRate: 0.05, eliteRate: 0.015, groupSizeMultiplier: 1.2, brainEnabled: true },
    day_41_plus: { equipmentQuality: 1.8, riderRate: 0.08, eliteRate: 0.03, groupSizeMultiplier: 1.4, brainEnabled: true }
  },
  invariant: {
    $comment: "\xA772 \xA7133 \u7B2C\u4E5D\u6761\uFF1A\u4E16\u754C\u6210\u957F\u63D0\u9AD8\u8D44\u6E90\u548C\u538B\u529B\uFF0C\u800C\u4E0D\u662F\u89E3\u9501\u667A\u5546\u3002",
    brainAlwaysEnabled: true,
    neverGatesIntelligenceByDay: true
  },
  statistics: {
    trackEquipmentDistribution: true,
    trackEnchantmentDistribution: true,
    trackPieceCountDistribution: true,
    trackForbiddenMaterialViolations: true,
    trackBrainStates: true,
    persistKey: "ze:stats"
  }
};
var protection_default = {
  $comment: "\xA734 \xA793 \u5EFA\u7B51\u4FDD\u62A4\u3002\u9ED8\u8BA4\u7981\u6B62\u7834\u574F\u7684\u65B9\u5757 + \u7BA1\u7406\u5458\u53EF\u914D\u7F6E\u6E05\u5355\u3002",
  enabled: true,
  defaultProtected: [
    "minecraft:bedrock",
    "minecraft:command_block",
    "minecraft:chain_command_block",
    "minecraft:repeating_command_block",
    "minecraft:structure_block",
    "minecraft:structure_void",
    "minecraft:barrier",
    "minecraft:light_block",
    "minecraft:jigsaw",
    "minecraft:end_portal",
    "minecraft:end_portal_frame",
    "minecraft:end_gateway",
    "minecraft:nether_portal",
    "minecraft:portal",
    "minecraft:allow",
    "minecraft:deny",
    "minecraft:border_block",
    "minecraft:beacon",
    "minecraft:conduit",
    "minecraft:spawner",
    "minecraft:mob_spawner",
    "minecraft:reinforced_deepslate",
    "minecraft:respawn_anchor",
    "minecraft:lodestone"
  ],
  adminConfigurable: {
    $comment: "\xA793 \u7BA1\u7406\u5458\u53EF\u914D\u7F6E protected_blocks.json\uFF1B\u8FD0\u884C\u65F6\u901A\u8FC7 /scriptevent ze:protect add|remove|list \u4FEE\u6539\uFF0C\u6301\u4E45\u5316\u5728\u4E16\u754C Dynamic Property\u3002",
    enabled: true,
    dynamicPropertyKey: "ze:protected_blocks",
    examples: ["minecraft:diamond_block", "minecraft:beacon", "minecraft:chest"],
    blockContainerBreaking: true,
    protectPlayerPlacedContainers: true
  },
  modBlocks: {
    $comment: "\xA734 MOD \u4FDD\u62A4\u65B9\u5757\u4E0E\u5173\u952E\u7ED3\u6784\u3002\u672C MOD \u7B2C\u4E00\u7248\u4E0D\u65B0\u589E\u65B9\u5757\uFF0C\u4FDD\u7559\u547D\u540D\u7A7A\u95F4\u4EE5\u9632\u672A\u6765\u6269\u5C55\u3002",
    namespace: "ze:",
    protectedStructures: ["minecraft:end_portal_room", "minecraft:ancient_city", "minecraft:trial_chambers"]
  }
};
var performance_default = {
  $comment: "\xA778-\xA785 \xA794 \xA7114-\xA7115 \u6027\u80FD\u4E0E\u5168\u5C40\u9884\u7B97\u3002\u9632\u6B62\u8840\u6708 200 \u53EA\u50F5\u5C38\u628A\u811A\u672C\u62D6\u57AE\u3002",
  enabled: true,
  globalBlockChangeBudget: {
    $comment: "\xA782 \u670D\u52A1\u5668\u5168\u5C40\u4E0A\u9650\u3002",
    maxZombieBlockChangesPerTick: 2,
    maxZombieBlockChangesPerSecond: 20,
    maxZombieMiningTasks: 8,
    maxZombieBuildTasks: 6,
    maxZombieBlockChangesPerBloodMoonSecond: 40
  },
  chunkSafety: {
    $comment: "\xA783-\xA784 \u4E0D\u5F97\u4E3B\u52A8\u8981\u6C42\u52A0\u8F7D\u65E0\u9650\u8FDC\u533A\u5757\uFF1B\u672A\u52A0\u8F7D\u533A\u5757\u64CD\u4F5C\u5FC5\u987B\u88AB\u6355\u83B7\u3002",
    neverForceLoadChunks: true,
    catchLocationInUnloadedChunk: true,
    retainTargetIfUnloaded: true,
    maxQueryRadius: 48,
    maxEntityQueryRadius: 64
  },
  queryThrottling: {
    $comment: "\xA778-\xA779 \u5C40\u90E8\u5316 + \u4E2D\u4F4E\u9891\uFF1B\u76EE\u6807\u4E22\u5931\u65F6\u77ED\u65F6\u63D0\u9AD8\u9891\u7387\u3002",
    playerQueryIntervalTicks: 10,
    entityQueryIntervalTicks: 20,
    blockScanIntervalTicks: 20,
    groupQueryIntervalTicks: 20,
    lostTargetBurstTicks: 60,
    lostTargetIntervalTicks: 4
  },
  scriptHealth: {
    maxErrorsPerMinute: 30,
    degradeOnErrorBurst: true,
    disableBrainOnErrorBurst: true,
    errorBurstWindowTicks: 1200,
    logEveryNthError: 5
  },
  metrics: {
    $comment: "\xA7114-\xA7115 \u6027\u80FD\u6D4B\u8BD5\u9700\u8981\u673A\u5668\u53EF\u8BFB\u6307\u6807\u3002",
    collect: true,
    reportEveryTicks: 1200,
    trackTickTime: true,
    trackBrainInvocations: true,
    trackBlockChanges: true,
    trackEntityQueries: true,
    trackStateCount: true,
    maxAcceptableScriptErrorsPerHour: 0,
    maxAcceptableStateLeak: 0
  },
  benchmark: {
    $comment: "\xA7114 \u81F3\u5C11 20/50/100/150 \u50F5\u5C38 \xD7 \u666E\u901A\u591C\u665A + \u8840\u6708\u3002",
    entityCounts: [20, 50, 100, 150],
    scenarios: ["normal_night", "blood_moon"],
    passCriteria: {
      noPersistentTickOverrun: true,
      noScriptErrorBurst: true,
      noUnboundedGrowth: true
    }
  }
};
var archetypes_default = {
  $comment: "v4.0. Archetype = combat style + world-manipulation rights + equipment pool.",
  enabled: true,
  profiles: ["day_1_7", "day_8_20", "day_21_40", "day_41_plus", "bloodmoon", "elite"],
  fallbackKind: "siege",
  byType: {
    "minecraft:zombie": "siege",
    "minecraft:husk": "siege",
    "minecraft:drowned": "siege",
    "minecraft:zombie_villager": "siege",
    "minecraft:zombie_villager_v2": "siege",
    "ze:test_subject": "siege",
    "minecraft:skeleton": "archer",
    "minecraft:stray": "archer",
    "minecraft:bogged": "archer",
    "minecraft:parched": "archer",
    "minecraft:wither_skeleton": "brute",
    "minecraft:piglin": "crossbowman",
    "minecraft:piglin_brute": "brute",
    "minecraft:zombie_pigman": "brute",
    "minecraft:pillager": "crossbowman",
    "minecraft:vindicator": "brute",
    "minecraft:evocation_illager": "caster",
    "minecraft:enderman": "carrier"
  },
  zeLoadoutTypes: [
    "minecraft:skeleton",
    "minecraft:stray",
    "minecraft:bogged",
    "minecraft:parched",
    "minecraft:wither_skeleton",
    "minecraft:zombie_pigman",
    "minecraft:pillager",
    "minecraft:vindicator"
  ],
  signatureWeapon: {
    "minecraft:skeleton": "bow",
    "minecraft:stray": "bow",
    "minecraft:bogged": "bow",
    "minecraft:parched": "bow",
    "minecraft:wither_skeleton": "stone_sword",
    "minecraft:piglin": "crossbow",
    "minecraft:piglin_brute": "golden_axe",
    "minecraft:zombie_pigman": "golden_sword",
    "minecraft:pillager": "crossbow",
    "minecraft:vindicator": "iron_axe",
    "minecraft:evocation_illager": "none",
    "minecraft:enderman": "none"
  },
  kinds: {
    siege: {
      $comment: "Melee + full siege kit. The only kind allowed to dig, build and breach.",
      combat: "melee",
      canMine: true,
      canBuild: true,
      canBreach: true,
      canTakeBlock: true,
      canPlaceBlock: true,
      constructionInventory: true,
      equipment: true,
      armor: true,
      weaponRate: 0.85,
      weaponPool: ["sword", "axe", "pickaxe", "shovel"],
      roles: ["chaser", "builder", "miner", "breacher", "flanker"],
      keepDistance: null
    },
    archer: {
      $comment: "Bow. Solves distance with positioning, never with blocks.",
      combat: "bow",
      canMine: false,
      canBuild: false,
      canBreach: false,
      canTakeBlock: false,
      canPlaceBlock: false,
      constructionInventory: false,
      equipment: true,
      armor: true,
      alwaysArmed: true,
      weaponRate: 1,
      weaponPool: ["bow"],
      roles: ["chaser", "skirmisher"],
      keepDistance: { retreatBelow: 5, holdMin: 6, holdMax: 14, approachAbove: 16 }
    },
    crossbowman: {
      $comment: "Crossbow. Longer hold range than an archer, slower reload.",
      combat: "crossbow",
      canMine: false,
      canBuild: false,
      canBreach: false,
      canTakeBlock: false,
      canPlaceBlock: false,
      constructionInventory: false,
      equipment: true,
      armor: false,
      alwaysArmed: true,
      weaponRate: 1,
      weaponPool: ["crossbow"],
      roles: ["chaser", "skirmisher"],
      keepDistance: { retreatBelow: 6, holdMin: 8, holdMax: 16, approachAbove: 18 }
    },
    brute: {
      $comment: "Melee shock unit. Closes distance, breaks nothing but bodies.",
      combat: "melee",
      canMine: false,
      canBuild: false,
      canBreach: false,
      canTakeBlock: false,
      canPlaceBlock: false,
      constructionInventory: false,
      equipment: true,
      armor: false,
      alwaysArmed: true,
      weaponRate: 1,
      weaponPool: ["signature"],
      roles: ["chaser", "flanker"],
      keepDistance: null
    },
    caster: {
      $comment: "Spellcaster. Keeps its distance; vanilla summon_entity does the casting.",
      combat: "magic",
      canMine: false,
      canBuild: false,
      canBreach: false,
      canTakeBlock: false,
      canPlaceBlock: false,
      constructionInventory: false,
      equipment: false,
      armor: false,
      weaponRate: 0,
      weaponPool: [],
      roles: ["chaser", "skirmisher"],
      keepDistance: { retreatBelow: 7, holdMin: 9, holdMax: 16, approachAbove: 18 }
    },
    carrier: {
      $comment: "Enderman. Carries blocks the vanilla way; still never digs or builds to reach you.",
      combat: "melee",
      canMine: false,
      canBuild: false,
      canBreach: false,
      canTakeBlock: true,
      canPlaceBlock: true,
      constructionInventory: false,
      equipment: false,
      armor: false,
      weaponRate: 0,
      weaponPool: [],
      roles: ["chaser"],
      keepDistance: null
    }
  }
};
var Config = {
  archetypes: archetypes_default,
  equipment: equipment_default,
  weapons: weapons_default,
  enchantments: enchantments_default,
  brain: zombie_brain_default,
  perception: perception_default,
  targeting: targeting_default,
  mining: mining_default,
  building: building_default,
  siege: siege_default,
  group: group_ai_default,
  riders: riders_default,
  bloodmoon: bloodmoon_default,
  elite: elite_default,
  progression: progression_default,
  protection: protection_default,
  performance: performance_default
};
var RUNTIME_KEY = "ze:runtime_config";
var overrides = {};
var overridesLoaded = false;
function loadRuntimeOverrides(getWorldProp) {
  try {
    const raw = getWorldProp(RUNTIME_KEY);
    if (typeof raw === "string" && raw.length > 0) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") overrides = parsed;
    }
  } catch {
    overrides = {};
  }
  overridesLoaded = true;
}
function setOverride(key, value) {
  if (value === null) delete overrides[key];
  else overrides[key] = value;
}
function dumpOverrides() {
  return { ...overrides };
}
function serializeOverrides() {
  return JSON.stringify(overrides);
}
var TUNABLE = {
  equipmentRate: () => num("equipmentRate", Config.equipment.equipmentRate),
  enchantmentRate: () => num("enchantmentRate", Config.enchantments.enchantmentRate),
  diamondCurseEnabled: () => bool("diamondCurseEnabled", Config.equipment.diamondCurseEnabled),
  brainEnabled: () => bool("brainEnabled", Config.brain.enabled),
  miningEnabled: () => bool("miningEnabled", Config.mining.enabled),
  buildingEnabled: () => bool("buildingEnabled", Config.building.enabled),
  breachEnabled: () => bool("breachEnabled", Config.siege.breachEnabled),
  groupAIEnabled: () => bool("groupAIEnabled", Config.group.enabled),
  bloodMoonEnabled: () => bool("bloodMoonEnabled", Config.bloodmoon.enabled),
  bloodMoonInterval: () => num("bloodMoonInterval", Config.bloodmoon.intervalDays),
  eliteSpawnRate: () => num("eliteSpawnRate", Config.elite.spawnRateBloodMoon),
  riderSpawnRate: () => num("riderSpawnRate", Config.riders.zombieHorseRider.spawnRateBloodMoon),
  weaponRate: () => num("weaponRate", Config.weapons.weaponRate),
  maxMineDistance: () => num("maxMineDistance", Config.mining.maxMineDistance),
  maxMineBlocks: () => num("maxMineBlocks", Config.mining.maxMineBlocks),
  maxBuildDistance: () => num("maxBuildDistance", Config.building.maxBuildDistance),
  maxBuildBlocks: () => num("maxBuildBlocks", Config.building.maxPlaceBlocks),
  debugEnabled: () => bool("debugEnabled", false)
};
function num(key, dflt) {
  const v = overrides[key];
  return typeof v === "number" && Number.isFinite(v) ? v : dflt;
}
function bool(key, dflt) {
  const v = overrides[key];
  return typeof v === "boolean" ? v : dflt;
}
function configSummary() {
  return {
    equipmentRate: TUNABLE.equipmentRate(),
    enchantmentRate: TUNABLE.enchantmentRate(),
    diamondCurseEnabled: TUNABLE.diamondCurseEnabled(),
    brainEnabled: TUNABLE.brainEnabled(),
    miningEnabled: TUNABLE.miningEnabled(),
    buildingEnabled: TUNABLE.buildingEnabled(),
    breachEnabled: TUNABLE.breachEnabled(),
    groupAIEnabled: TUNABLE.groupAIEnabled(),
    bloodMoonEnabled: TUNABLE.bloodMoonEnabled(),
    bloodMoonInterval: TUNABLE.bloodMoonInterval(),
    overrides: dumpOverrides(),
    configFiles: 16
  };
}
import { world } from "@minecraft/server";
var TEST_PREFIX = "KIRA_TEST_RESULT ";
var LOG_PREFIX = "[ZombieBrain] ";
var chatEcho = false;
var logSink = null;
var logRing = [];
var LOG_RING_MAX = 200;
function zlog(message, extra) {
  const line = LOG_PREFIX + message + (extra ? " " + safeJson(extra) : "");
  logRing.push(line);
  if (logRing.length > LOG_RING_MAX) logRing.shift();
  if (logSink) {
    try {
      logSink(line);
      return;
    } catch {
    }
  }
  try {
    console.log(line);
  } catch {
  }
}
function emit(id, status, extra) {
  const payload = { ...extra ?? {} };
  payload.id = id;
  payload.status = status;
  const line = TEST_PREFIX + safeJson(payload);
  try {
    console.log(line);
  } catch {
  }
  try {
    console.warn(line);
  } catch {
  }
  if (chatEcho) {
    try {
      world.sendMessage(line);
    } catch {
    }
  }
}
function pass(id, extra) {
  emit(id, "PASS", extra);
}
function fail(id, error, extra) {
  emit(id, "FAIL", { error: String(error), ...extra ?? {} });
}
function safeJson(v) {
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}
var errorCount = 0;
var suppressedCount = 0;
function safe(fn, context, quiet = true) {
  try {
    return { ok: true, value: fn() };
  } catch (e) {
    errorCount++;
    const msg = String(e);
    const expected = msg.includes("UnloadedChunk") || msg.includes("unloaded");
    if (!expected) {
      suppressedCount++;
      if (!quiet || suppressedCount <= 20) zlog("safe() error in " + context + ": " + msg);
    }
    return { ok: false, error: msg };
  }
}
function safeGetBlock(dim2, loc) {
  const r = safe(() => dim2.getBlock(loc), "getBlock");
  return r.ok ? r.value : void 0;
}
function safeBlockId(dim2, loc) {
  const b = safeGetBlock(dim2, loc);
  if (!b) return void 0;
  const r = safe(() => b.typeId, "block.typeId");
  return r.ok ? r.value : void 0;
}
function safeSetBlock(dim2, loc, blockId) {
  const r = safe(() => {
    dim2.setBlockType(loc, blockId);
    return true;
  }, "setBlockType");
  return r.ok && r.value === true;
}
function safeIsValid(e) {
  if (!e) return false;
  const r = safe(() => { const v = e.isValid; return typeof v === "function" ? v.call(e) : v; }, "entity.isValid");
  return r.ok ? r.value === true : false;
}
function safeLocation(e) {
  if (!e) return void 0;
  const r = safe(() => e.location, "entity.location");
  return r.ok ? r.value : void 0;
}
function vecSub(a, b) {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}
function vecLength(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
}
function distance(a, b) {
  return vecLength(vecSub(a, b));
}
function distanceSq(a, b) {
  const d = vecSub(a, b);
  return d.x * d.x + d.y * d.y + d.z * d.z;
}
function normalize(a) {
  const l = vecLength(a);
  if (l < 1e-6) return { x: 0, y: 0, z: 0 };
  return { x: a.x / l, y: a.y / l, z: a.z / l };
}
function floorVec(a) {
  return { x: Math.floor(a.x), y: Math.floor(a.y), z: Math.floor(a.z) };
}
function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}
function horizontalDistance(a, b) {
  const dx = a.x - b.x;
  const dz = a.z - b.z;
  return Math.sqrt(dx * dx + dz * dz);
}
import { world as world2 } from "@minecraft/server";
var tickCounter = 0;
function nextTick() {
  return ++tickCounter;
}
function currentTick() {
  return tickCounter;
}
var dimCache = /* @__PURE__ */ new Map();
function dim(id) {
  const cached = dimCache.get(id);
  if (cached) return cached;
  try {
    const d = world2.getDimension(id);
    dimCache.set(id, d);
    return d;
  } catch {
    return void 0;
  }
}
function overworld() {
  return dim("overworld");
}
function staggerPhase(entityId, modulo) {
  let h = 2166136261;
  for (let i = 0; i < entityId.length; i++) {
    h ^= entityId.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % modulo;
}
var Stats = {
  brainInvocations: 0,
  blockChanges: 0,
  entityQueries: 0,
  blockQueries: 0,
  actionsStarted: 0,
  actionsSucceeded: 0,
  actionsFailed: 0,
  reassessCount: 0,
  maxStateCount: 0,
  peakTracked: 0,
  errors: 0,
  bloodMoonCount: 0,
  lastReportTick: 0
};
var BlockBudget = {
  perTick: Config.performance.globalBlockChangeBudget.maxZombieBlockChangesPerTick,
  usedThisTick: 0,
  perSecond: Config.performance.globalBlockChangeBudget.maxZombieBlockChangesPerSecond,
  usedThisSecond: 0,
  secondWindowStartTick: 0
};
function resetTickBudget(tick) {
  BlockBudget.usedThisTick = 0;
  if (tick - BlockBudget.secondWindowStartTick >= 20) {
    BlockBudget.secondWindowStartTick = tick;
    BlockBudget.usedThisSecond = 0;
  }
}
function tryConsumeBlockBudget(bloodMoon) {
  const perSecond = bloodMoon ? Config.performance.globalBlockChangeBudget.maxZombieBlockChangesPerBloodMoonSecond : BlockBudget.perSecond;
  if (BlockBudget.usedThisTick >= BlockBudget.perTick) return false;
  if (BlockBudget.usedThisSecond >= perSecond) return false;
  BlockBudget.usedThisTick++;
  BlockBudget.usedThisSecond++;
  Stats.blockChanges++;
  return true;
}
var CORE_ZOMBIES = [
  "minecraft:zombie",
  "minecraft:husk",
  "minecraft:drowned",
  "minecraft:zombie_villager",
  "minecraft:zombie_villager_v2"
];
var EXTENDED_TYPES = [
  "minecraft:skeleton",
  "minecraft:stray",
  "minecraft:bogged",
  "minecraft:parched",
  "minecraft:wither_skeleton",
  "minecraft:piglin_brute",
  "minecraft:zombie_pigman",
  "minecraft:vindicator",
  "minecraft:piglin",
  "minecraft:pillager",
  "minecraft:evocation_illager",
  "minecraft:enderman"
];
var BRAIN_MANAGED = [...CORE_ZOMBIES, ...EXTENDED_TYPES];
function variantOf(typeId) {
  switch (typeId) {
    case "minecraft:zombie":
      return "zombie";
    case "minecraft:husk":
      return "husk";
    case "minecraft:drowned":
      return "drowned";
    case "minecraft:zombie_villager":
    case "minecraft:zombie_villager_v2":
      return "zombie_villager";
    case "minecraft:skeleton":
      return "skeleton";
    case "minecraft:stray":
      return "stray";
    case "minecraft:bogged":
      return "bogged";
    case "minecraft:parched":
      return "parched";
    case "minecraft:wither_skeleton":
      return "wither_skeleton";
    case "minecraft:piglin":
      return "piglin";
    case "minecraft:piglin_brute":
      return "piglin_brute";
    case "minecraft:zombie_pigman":
      return "zombified_piglin";
    case "minecraft:pillager":
      return "pillager";
    case "minecraft:vindicator":
      return "vindicator";
    case "minecraft:evocation_illager":
      return "evoker";
    case "minecraft:enderman":
      return "enderman";
    default:
      return "unknown";
  }
}
function archetypeOf(typeId) {
  const a = Config.archetypes;
  if (!a || a.enabled === false) return "siege";
  return a.byType[typeId] ?? a.fallbackKind;
}
function archetypeDef(kind) {
  const a = Config.archetypes;
  if (!a || !a.kinds) return null;
  return a.kinds[kind] ?? a.kinds[a.fallbackKind] ?? null;
}
function eliteRecOf(st) {
  if (!st || !st.eliteType) return null;
  try {
    return eliteTypeById(st.eliteType);
  } catch (e) {
    return null;
  }
}
function eliteMul(st, key) {
  const rec = eliteRecOf(st);
  const v = rec ? rec[key] : void 0;
  return typeof v === "number" && Number.isFinite(v) && v > 0 ? v : 1;
}
function archOfState(st) {
  return st && st.archetype ? archetypeDef(st.archetype) : null;
}
function canMineEntity(st) {
  const d = archOfState(st);
  return !d || d.canMine !== false;
}
function canBuildEntity(st) {
  const d = archOfState(st);
  return !d || d.canBuild !== false;
}
function canBreachEntity(st) {
  const d = archOfState(st);
  return !d || d.canBreach !== false;
}
function isSiegeArchetype(st) {
  return !st || !st.archetype || st.archetype === "siege";
}
var TICKS_PER_SECOND = 20;
var TICKS_PER_DAY = 24e3;
var states = /* @__PURE__ */ new Map();
var entityRefs = /* @__PURE__ */ new Map();
function stateCount() {
  return states.size;
}
function trackedCount() {
  return entityRefs.size;
}
function getState(entityId) {
  return states.get(entityId);
}
function getEntity(entityId) {
  const e = entityRefs.get(entityId);
  return safeIsValid(e) ? e : void 0;
}
function allStates() {
  return [...states.values()];
}
function allEntityIds() {
  return [...entityRefs.keys()];
}
function createState(entity) {
  const loc = safeLocation(entity);
  if (!loc) return void 0;
  const tick = currentTick();
  const variant = variantOf(entity.typeId);
  const archetype = archetypeOf(entity.typeId);
  const isBaby = detectBaby(entity);
  const st = {
    entityId: entity.id,
    variant,
    archetype,
    isBaby,
    targetId: null,
    lastSeen: null,
    lastSeenPosition: null,
    lastSeenDirection: null,
    lastSeenTick: -1,
    targetConfidence: 0,
    currentState: "IDLE" /* IDLE */,
    currentGoal: "none",
    currentAction: "none",
    currentRoute: null,
    failedRoutes: [],
    weaponClass: "none",
    weaponId: null,
    weaponTier: 0,
    equipmentProfile: "unassigned",
    loadout: null,
    constructionInventory: {},
    miningBudget: Config.brain.budgets.mineBudget,
    buildingBudget: Config.brain.budgets.buildBudget,
    searchBudget: Config.brain.budgets.searchBudget,
    pathBudget: Config.brain.budgets.pathBudget,
    groupId: null,
    groupAngle: 0,
    bloodMoonState: false,
    eliteType: null,
    createdAtTick: tick,
    lastActiveTick: tick,
    lastTargetTick: -1,
    lastReassessTick: -1,
    errorCount: 0,
    consecutiveErrors: 0,
    disabled: false,
    stuckTicks: 0,
    lastPosition: loc,
    lastDimensionId: entity.dimension.id,
    mineBlocksThisTask: 0,
    buildBlocksThisTask: 0,
    breachBlocksThisTask: 0,
    currentTaskStartTick: tick,
    reassessReason: "spawn",
    debugEnabled: false
  };
  states.set(entity.id, st);
  entityRefs.set(entity.id, entity);
  Stats.maxStateCount = Math.max(Stats.maxStateCount, states.size);
  Stats.peakTracked = Math.max(Stats.peakTracked, entityRefs.size);
  return st;
}
function removeState(entityId) {
  entityRefs.delete(entityId);
  return states.delete(entityId);
}
function sweepInvalid() {
  let removed = 0;
  for (const [id, ent] of entityRefs) {
    if (!safeIsValid(ent)) {
      removeState(id);
      removed++;
    }
  }
  for (const id of states.keys()) {
    if (!entityRefs.has(id)) {
      states.delete(id);
      removed++;
    }
  }
  return removed;
}
function evictIdle() {
  const tick = currentTick();
  const ttl = Config.brain.lifecycle.maxIdleTicksBeforeEvict;
  let removed = 0;
  for (const [id, st] of states) {
    if (tick - st.lastActiveTick > ttl) {
      const ent = entityRefs.get(id);
      if (!safeIsValid(ent)) {
        removeState(id);
        removed++;
      }
    }
  }
  return removed;
}
function recordError(st, err) {
  st.errorCount++;
  st.consecutiveErrors++;
  Stats.errors++;
  if (st.consecutiveErrors >= Config.brain.errorIsolation.disableZombieAfterConsecutiveErrors) {
    st.disabled = true;
  }
}
function recordSuccess(st) {
  st.consecutiveErrors = 0;
}
function detectBaby(entity) {
  try {
    const c = entity.getComponent("minecraft:is_baby");
    return !!c;
  } catch {
    return false;
  }
}
function stateSummary(st) {
  return {
    entityId: st.entityId,
    variant: st.variant,
    archetype: st.archetype,
    canMine: canMineEntity(st),
    canBuild: canBuildEntity(st),
    canBreach: canBreachEntity(st),
    isBaby: st.isBaby,
    state: st.currentState,
    goal: st.currentGoal,
    action: st.currentAction,
    confidence: Number(st.targetConfidence.toFixed(3)),
    lastSeenTick: st.lastSeenTick,
    weapon: st.weaponId,
    weaponClass: st.weaponClass,
    equipmentProfile: st.equipmentProfile,
    pieces: st.loadout ? st.loadout.pieceCount : 0,
    construction: st.constructionInventory,
    budgets: {
      mine: st.miningBudget,
      build: st.buildingBudget,
      search: st.searchBudget,
      path: st.pathBudget
    },
    groupId: st.groupId,
    bloodMoon: st.bloodMoonState,
    elite: st.eliteType,
    failedRoutes: st.failedRoutes.length,
    errors: st.errorCount,
    disabled: st.disabled
  };
}
function makeRng(seed) {
  let state = (Number.isFinite(seed) ? Math.floor(seed) : 0) >>> 0;
  const next = () => {
    state = state + 1831565813 >>> 0;
    let t = state;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
  const int = (min, max) => {
    if (!Number.isFinite(min) || !Number.isFinite(max)) return 0;
    const lo = Math.ceil(Math.min(min, max));
    const hi = Math.floor(Math.max(min, max));
    if (hi < lo) return lo;
    const span = hi - lo + 1;
    const v = lo + Math.floor(next() * span);
    return v < lo ? lo : v > hi ? hi : v;
  };
  const pick = (arr) => {
    return arr[int(0, arr.length - 1)];
  };
  const weighted = (items) => {
    let total = 0;
    for (const it of items) {
      if (Number.isFinite(it.w) && it.w > 0) total += it.w;
    }
    if (total <= 0) return items[int(0, items.length - 1)].v;
    let r = next() * total;
    for (const it of items) {
      if (!Number.isFinite(it.w) || it.w <= 0) continue;
      r -= it.w;
      if (r <= 0) return it.v;
    }
    for (let i = items.length - 1; i >= 0; i--) {
      const w = items[i].w;
      if (Number.isFinite(w) && w > 0) return items[i].v;
    }
    return items[int(0, items.length - 1)].v;
  };
  const chance = (p) => {
    if (!Number.isFinite(p) || p <= 0) return false;
    if (p >= 1) return true;
    return next() < p;
  };
  return { next, int, pick, weighted, chance };
}
function randomSeed() {
  const t = Date.now() >>> 0;
  return makeRng(t).int(0, 2147483647);
}
import { world as world3 } from "@minecraft/server";
function hasLineOfSight(dim2, from, to, maxDistance) {
  const eye = { x: from.x, y: from.y + 1.6, z: from.z };
  const delta = vecSub(to, eye);
  const dist = Math.sqrt(delta.x * delta.x + delta.y * delta.y + delta.z * delta.z);
  if (dist > maxDistance) return false;
  if (dist < 0.6) return true;
  const dir = normalize(delta);
  const r = safe(
    () => dim2.getBlockFromRay(eye, dir, {
      maxDistance: Math.min(dist - 0.3, maxDistance),
      includeLiquidBlocks: false,
      includePassableBlocks: false
    }),
    "getBlockFromRay"
  );
  if (!r.ok) {
    return false;
  }
  return r.value === void 0;
}
function findVisiblePlayer(dim2, self, range) {
  const loc = safeLocation(self);
  if (!loc) return void 0;
  Stats.entityQueries++;
  const q = safe(
    () => dim2.getPlayers({ location: loc, maxDistance: range }),
    "getPlayers"
  );
  if (!q.ok || !q.value) return void 0;
  let best;
  for (const p of q.value) {
    const ploc = safeLocation(p);
    if (!ploc) continue;
    const d = distance(loc, ploc);
    if (d > range) continue;
    if (!hasLineOfSight(dim2, loc, ploc, range)) continue;
    if (!best || d < best.distance) best = { player: p, position: ploc, distance: d };
  }
  return best;
}
function sightDirection(from, to) {
  return normalize({ x: to.x - from.x, y: 0, z: to.z - from.z });
}
var PASSABLE = new Set(Config.perception.environmentScan.passableBlocks);
var DOORS = new Set(Config.perception.environmentScan.doorBlocks);
var WINDOWS = new Set(Config.perception.environmentScan.windowBlocks);
function isPassableId(id) {
  if (PASSABLE.has(id)) return true;
  return id.endsWith("_air") || id.includes("water") || id.endsWith("_sapling") || id.endsWith("_flower") || id.endsWith("_torch");
}
function isDoorId(id) {
  return DOORS.has(id) || id.endsWith("_door") || id.endsWith("_trapdoor") || id.endsWith("_gate");
}
function isWindowId(id) {
  return WINDOWS.has(id) || id.includes("glass");
}
function scanEnvironment(dim2, center, tick, selfWeaponClass) {
  const cfg = Config.perception.environmentScan;
  const r = cfg.radius;
  const vr = cfg.verticalRadius;
  const base = floorVec(center);
  const counts = {};
  const entrances = [];
  let best;
  let scanned = 0;
  let solidSides = 0;
  let sideSamples = 0;
  let undergroundBlocks = 0;
  const bump = (k) => {
    counts[k] = (counts[k] ?? 0) + 1;
  };
  let bestEnclosure = 0;
  for (let rr = 2; rr <= r; rr++) {
    let rrSolid = 0;
    let rrTotal = 0;
    for (let dx = -rr; dx <= rr; dx++) {
      for (let dz = -rr; dz <= rr; dz++) {
        if (Math.abs(dx) !== rr && Math.abs(dz) !== rr) continue;
        if (scanned >= cfg.maxBlocksPerScan) break;
        for (let dy = -1; dy <= vr; dy++) {
          if (scanned >= cfg.maxBlocksPerScan) break;
          const loc = { x: base.x + dx, y: base.y + dy, z: base.z + dz };
          const id = safeBlockId(dim2, loc);
          scanned++;
          if (id === void 0) continue;
          sideSamples++;
          rrTotal++;
          if (isPassableId(id)) {
            if (dy >= 0 && dy <= 1) {
              const d = Math.abs(dx) + Math.abs(dz);
              entrances.push({
                position: loc,
                kind: "gap",
                score: 1 / (1 + d * 0.1),
                distance: d
              });
            }
            continue;
          }
          solidSides++;
          rrSolid++;
          if (isDoorId(id)) {
            bump("door");
            const d = horizontalDistance(center, loc);
            entrances.push({ position: loc, kind: "door", score: 1.6 / (1 + d * 0.1), distance: d });
          } else if (isWindowId(id)) {
            bump("window");
            const d = horizontalDistance(center, loc);
            entrances.push({ position: loc, kind: "window", score: 1.2 / (1 + d * 0.1), distance: d });
          } else {
            bump("wall");
            const score = weakPointScore(id, selfWeaponClass);
            const d = horizontalDistance(center, loc);
            const adjusted = score / (1 + d * 0.15);
            if (!best || adjusted > best.score) {
              best = {
                position: loc,
                blockId: id,
                score: adjusted,
                distance: d,
                requiredToolClass: requiredClassFor(id),
                requiredToolTier: requiredTierFor(id)
              };
            }
          }
        }
      }
    }
    if (rrTotal > 0) bestEnclosure = Math.max(bestEnclosure, rrSolid / rrTotal);
  }
  for (const [ox, oz] of [
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]) {
    const below = safeBlockId(dim2, { x: base.x + ox, y: base.y - 1, z: base.z + oz });
    if (below === void 0) continue;
    if (isPassableId(below)) {
      bump("hole");
      let depth = 0;
      for (let k = 2; k <= 5; k++) {
        const id = safeBlockId(dim2, { x: base.x + ox, y: base.y - k, z: base.z + oz });
        if (id === void 0 || !isPassableId(id)) break;
        depth++;
      }
      if (depth >= 3) {
        bump("cliff");
        const d = Math.abs(ox) + Math.abs(oz);
        entrances.push({
          position: { x: base.x + ox, y: base.y - 1, z: base.z + oz },
          kind: "hole",
          score: 0.9 / (1 + d * 0.1),
          distance: d
        });
      }
    }
  }
  for (let dy = 2; dy <= 8; dy++) {
    const id = safeBlockId(dim2, { x: base.x, y: base.y + dy, z: base.z });
    if (id !== void 0 && !isPassableId(id)) undergroundBlocks++;
  }
  const ceilingRatio = undergroundBlocks / 7;
  const underground = center.y < Config.perception.playerStateInference.undergroundYThreshold || ceilingRatio > 0.6;
  const enclosure = bestEnclosure;
  zlog("ENV enclosure", {
    enclosure: Number(enclosure.toFixed(3)),
    need: Config.perception.playerStateInference.structureEnclosureRatio,
    sideSamples,
    solidSides,
    scanned,
    max: cfg.maxBlocksPerScan,
    base: { x: base.x, y: base.y, z: base.z },
    entrances: entrances.length
  });
  const enclosed = enclosure >= Config.perception.playerStateInference.structureEnclosureRatio;
  if (enclosed) bump("building");
  if (underground) bump("underground");
  entrances.sort((a, b) => b.score - a.score);
  const weakPoint = best ?? {
    position: base,
    blockId: "minecraft:air",
    score: 0,
    distance: 0,
    requiredToolClass: "none",
    requiredToolTier: 99
  };
  return {
    tick,
    origin: center,
    counts,
    entrances: entrances.slice(0, Config.siege.entrance.maxEntranceProbes),
    weakPoints: weakPoint,
    enclosed,
    underground
  };
}
function weakPointScore(blockId, cls) {
  let score = 0.3;
  const id = blockId;
  if (id.endsWith("_planks") || id.endsWith("_log") || id.endsWith("_wood") || id.includes("wooden")) {
    score += Config.siege.weakPoint.preferWood ? 0.35 : 0;
  } else if (id.includes("glass")) {
    score += 0.3;
  } else if (id.includes("dirt") || id.includes("sand") || id.includes("gravel")) {
    score += 0.25;
  } else if (id.includes("stone") || id.includes("deepslate")) {
    score += 0.1;
  } else if (id.includes("obsidian") || id.includes("bedrock")) {
    score -= 0.5;
  }
  const cat = categoryOf(id);
  const caps = Config.weapons.classCapabilities[cls];
  if (caps && caps.blockBreak.includes(cat)) score += 0.25;
  else if (cls === "none") score -= 0.15;
  return Math.max(0, Math.min(1.5, score));
}
function categoryOf(id) {
  if (id.endsWith("_planks") || id.endsWith("_log") || id.endsWith("_wood") || id.endsWith("_fence")) return "wood";
  if (id.includes("stone") || id.includes("deepslate") || id.includes("ore") || id.includes("brick")) return "stone";
  if (id.includes("dirt") || id.includes("grass") || id.includes("sand") || id.includes("gravel") || id.includes("clay")) return "dirt";
  return "other";
}
function requiredClassFor(blockId) {
  const c = categoryOf(blockId);
  switch (c) {
    case "wood":
      return "axe";
    case "stone":
      return "pickaxe";
    case "dirt":
      return "shovel";
    default:
      return "none";
  }
}
function requiredTierFor(blockId) {
  const map = Config.mining.minToolTierForBlock;
  const id = blockId.replace("minecraft:", "");
  if (map[id] !== void 0) return map[id];
  if (id.includes("diamond") || id.includes("emerald") || id.includes("gold")) return 2;
  if (id.includes("obsidian") || id.includes("ancient_debris")) return 3;
  if (id.includes("stone") || id.includes("deepslate") || id.includes("ore")) return 1;
  return 0;
}
function targetingMode() {
  const t = Config.perception.targeting;
  const m = t?.mode;
  return m === "hybrid" || m === "precise" ? m : "memory";
}
function findPrecisePlayer(dim2, self, radius) {
  const loc = safeLocation(self);
  if (!loc) return void 0;
  Stats.entityQueries++;
  const q = safe(() => dim2.getPlayers({ location: loc, maxDistance: radius }), "getPlayers.precise");
  if (!q.ok || !q.value) return void 0;
  let best;
  for (const p of q.value) {
    const ploc = safeLocation(p);
    if (!ploc) continue;
    const d = distance(loc, ploc);
    if (d > radius) continue;
    if (!best || d < best.distance) best = { player: p, position: ploc, distance: d };
  }
  return best;
}
function acquireTarget(dim2, self, st, range) {
  const mode = targetingMode();
  const seen = findVisiblePlayer(dim2, self, range);
  if (seen) {
    return {
      position: seen.position,
      distance: seen.distance,
      playerId: seen.player.id,
      viaPrecise: false,
      confidence: Config.targeting.confidence.onFreshSight
    };
  }
  if (mode === "memory") return void 0;
  const t = Config.perception.targeting;
  const radius = mode === "hybrid" ? t?.preciseRadius ?? 24 : range * 2;
  const precise = findPrecisePlayer(dim2, self, radius);
  if (!precise) return void 0;
  const confidence = mode === "hybrid" ? t?.hybridConfidenceCap ?? 0.7 : t?.preciseConfidence ?? 0.85;
  return {
    position: precise.position,
    distance: precise.distance,
    playerId: precise.player.id,
    viaPrecise: true,
    confidence
  };
}
import { world as world4 } from "@minecraft/server";
function rememberSight(st, position, dimensionId, direction) {
  const tick = currentTick();
  st.lastSeen = { position, dimensionId, direction, tick, confidence: 1 };
  st.lastSeenPosition = position;
  st.lastSeenDirection = direction;
  st.lastSeenTick = tick;
  st.targetConfidence = Config.targeting.confidence.onFreshSight;
  st.lastTargetTick = tick;
  st.lastActiveTick = tick;
}
function decayConfidence(st, tick) {
  if (st.lastSeenTick < 0) {
    st.targetConfidence = 0;
    return;
  }
  const elapsed = tick - st.lastSeenTick;
  if (elapsed <= 0) return;
  const perSec = (st.bloodMoonState ? Config.targeting.confidence.decayPerSecondBloodMoon : Config.targeting.confidence.decayPerSecond) / eliteMul(st, "targetMemoryMultiplier");
  const decayed = 1 - elapsed / TICKS_PER_SECOND * perSec;
  const c = Config.targeting.confidence;
  let stepped = decayed;
  if (elapsed >= 30 * TICKS_PER_SECOND) stepped = Math.min(stepped, c.after30sNoSight);
  if (elapsed >= 120 * TICKS_PER_SECOND) stepped = Math.min(stepped, c.afterLongNoClue);
  st.targetConfidence = Math.max(0, Math.min(1, stepped));
}
function rememberEntryPoint(st, position, dimensionId, kind) {
  const max = Config.targeting.memory.maxRememberedEntryPoints;
  const entries = getEntryPoints(st);
  for (const e of entries) {
    if (e.dimensionId === dimensionId && distanceSq(e.position, position) < 4) {
      e.tick = currentTick();
      return;
    }
  }
  entries.push({ position, dimensionId, tick: currentTick(), kind });
  while (entries.length > max) entries.shift();
  setEntryPoints(st, entries);
  zlog("Player entered structure", { entry: position, kind });
}
var entryMem = /* @__PURE__ */ new Map();
function getEntryPoints(st) {
  return entryMem.get(st.entityId) ?? [];
}
function setEntryPoints(st, list) {
  entryMem.set(st.entityId, list);
}
function rememberFailure(st, target, reason) {
  const max = Config.targeting.memory.maxFailedRoutes;
  const tick = currentTick();
  for (const f of st.failedRoutes) {
    if (distanceSq(f.target, target) < 9) {
      f.tick = tick;
      f.attemptCount++;
      f.reason = reason;
      return;
    }
  }
  st.failedRoutes.push({
    target,
    dimensionId: st.lastDimensionId,
    tick,
    reason,
    attemptCount: 1
  });
  while (st.failedRoutes.length > max) st.failedRoutes.shift();
  zlog("Route A = failed", { target, reason });
}
function isRouteDeprioritized(st, target, tick) {
  if (!Config.siege.counterPlay.failureMemoryEnabled) return false;
  const cooldown = Config.siege.counterPlay.failureCooldownTicks;
  for (const f of st.failedRoutes) {
    if (distanceSq(f.target, target) < 9) {
      if (st.lastSeenPosition && distance(st.lastSeenPosition, target) > 8) return false;
      return tick - f.tick < cooldown;
    }
  }
  return false;
}
var HABIT_KEY = Config.targeting.playerHabitMemory.worldDynamicPropertyKey;
var habitMemory = [];
var habitLoaded = false;
function loadHabitMemory() {
  if (habitLoaded) return;
  habitLoaded = true;
  const r = safe(() => world4.getDynamicProperty(HABIT_KEY), "getHabitMemory");
  if (r.ok && typeof r.value === "string" && r.value.length > 0) {
    try {
      const parsed = JSON.parse(r.value);
      if (Array.isArray(parsed)) habitMemory = parsed;
    } catch {
      habitMemory = [];
    }
  }
}
function recordHabit(kind, position, dimensionId) {
  if (!Config.targeting.playerHabitMemory.enabled) return;
  loadHabitMemory();
  const tick = currentTick();
  for (const h of habitMemory) {
    if (h.kind === kind && h.dimensionId === dimensionId && distanceSq(h.position, position) < 16) {
      h.count++;
      h.tick = tick;
      persistHabits();
      return;
    }
  }
  habitMemory.push({ kind, position, dimensionId, tick, count: 1 });
  const max = Config.targeting.playerHabitMemory.historySize;
  while (habitMemory.length > max) habitMemory.shift();
  persistHabits();
}
function preferredSearchPoints(dimensionId, near, radius) {
  loadHabitMemory();
  return habitMemory.filter((h) => h.dimensionId === dimensionId && distance(h.position, near) <= radius).sort((a, b) => b.count - a.count).slice(0, 3).map((h) => h.position);
}
function habitSummary() {
  loadHabitMemory();
  return {
    entries: habitMemory.length,
    byKind: habitMemory.reduce((acc, h) => {
      acc[h.kind] = (acc[h.kind] ?? 0) + 1;
      return acc;
    }, {})
  };
}
function persistHabits() {
  safe(() => world4.setDynamicProperty(HABIT_KEY, JSON.stringify(habitMemory)), "setHabitMemory");
}
var ENTITY_KEYS = {
  group: "ze:group",
  weaponClass: "ze:weapon_class",
  weaponId: "ze:weapon_id",
  profile: "ze:equip_profile",
  elite: "ze:elite",
  bloodMoon: "ze:bloodmoon",
  entry: "ze:entry",
  confidence: "ze:confidence"
};
function persistKeyState(st, entity) {
  if (!entity) return;
  safe(() => entity.setDynamicProperty(ENTITY_KEYS.group, st.groupId ?? ""), "dp.group");
  safe(() => entity.setDynamicProperty(ENTITY_KEYS.weaponClass, st.weaponClass), "dp.weaponClass");
  safe(() => entity.setDynamicProperty(ENTITY_KEYS.weaponId, st.weaponId ?? ""), "dp.weaponId");
  safe(() => entity.setDynamicProperty(ENTITY_KEYS.profile, st.equipmentProfile), "dp.profile");
  safe(() => entity.setDynamicProperty(ENTITY_KEYS.elite, st.eliteType ?? ""), "dp.elite");
  safe(() => entity.setDynamicProperty(ENTITY_KEYS.bloodMoon, st.bloodMoonState), "dp.bloodMoon");
  safe(() => entity.setDynamicProperty(ENTITY_KEYS.confidence, st.targetConfidence), "dp.confidence");
  if (st.lastSeenPosition) {
    safe(
      () => entity.setDynamicProperty(
        ENTITY_KEYS.entry,
        JSON.stringify({
          p: st.lastSeenPosition,
          d: st.lastDimensionId,
          t: st.lastSeenTick,
          dir: st.lastSeenDirection
        })
      ),
      "dp.entry"
    );
  }
}
function restoreKeyState(st, entity) {
  const r = safe(() => entity.getDynamicProperty(ENTITY_KEYS.entry), "dp.read.entry");
  if (r.ok && typeof r.value === "string" && r.value.length > 0) {
    try {
      const o = JSON.parse(r.value);
      if (o && o.p) {
        st.lastSeenPosition = o.p;
        st.lastDimensionId = String(o.d ?? st.lastDimensionId);
        st.lastSeenTick = Number(o.t ?? -1);
        st.lastSeenDirection = o.dir ?? null;
        st.lastSeen = st.lastSeenPosition ? {
          position: st.lastSeenPosition,
          dimensionId: st.lastDimensionId,
          direction: st.lastSeenDirection ?? { x: 0, y: 0, z: 1 },
          tick: st.lastSeenTick,
          confidence: 0.5
        } : null;
      }
    } catch {
    }
  }
  const wc = safe(() => entity.getDynamicProperty(ENTITY_KEYS.weaponClass), "dp.read.wc");
  if (wc.ok && typeof wc.value === "string" && wc.value.length > 0) {
    st.weaponClass = wc.value;
  }
  const wi = safe(() => entity.getDynamicProperty(ENTITY_KEYS.weaponId), "dp.read.wi");
  if (wi.ok && typeof wi.value === "string" && wi.value.length > 0) st.weaponId = wi.value;
  const g = safe(() => entity.getDynamicProperty(ENTITY_KEYS.group), "dp.read.group");
  if (g.ok && typeof g.value === "string" && g.value.length > 0) st.groupId = g.value;
  const el = safe(() => entity.getDynamicProperty(ENTITY_KEYS.elite), "dp.read.elite");
  if (el.ok && typeof el.value === "string" && el.value.length > 0) st.eliteType = el.value;
}
function dropMemory(entityId) {
  entryMem.delete(entityId);
}
function estimatedTargetPosition(st) {
  if (!st.lastSeenPosition) return null;
  if (Config.targeting.mode === "precise") return st.lastSeenPosition;
  const dir = st.lastSeenDirection;
  if (!dir || !Config.targeting.tracking.continueAlongLastDirection) return st.lastSeenPosition;
  const elapsedSec = Math.max(0, (currentTick() - st.lastSeenTick) / TICKS_PER_SECOND);
  const lead = Math.min(elapsedSec * 4, Config.targeting.tracking.searchRadius);
  return {
    x: st.lastSeenPosition.x + dir.x * lead,
    y: st.lastSeenPosition.y,
    z: st.lastSeenPosition.z + dir.z * lead
  };
}
import { world as world5 } from "@minecraft/server";
var PROTECTED_KEY = Config.protection.adminConfigurable.dynamicPropertyKey;
var protectedExtra = /* @__PURE__ */ new Set();
var protectedLoaded = false;
var DEFAULT_PROTECTED = new Set(Config.protection.defaultProtected);
function ensureLoaded() {
  if (protectedLoaded) return;
  protectedLoaded = true;
  const r = safe(() => world5.getDynamicProperty(PROTECTED_KEY), "getProtected");
  if (r.ok && typeof r.value === "string" && r.value.length > 0) {
    try {
      const arr = JSON.parse(r.value);
      if (Array.isArray(arr)) protectedExtra = new Set(arr.map((x) => String(x)));
    } catch {
      protectedExtra = /* @__PURE__ */ new Set();
    }
  }
}
function isProtectedBlock(blockId) {
  ensureLoaded();
  if (DEFAULT_PROTECTED.has(blockId)) return true;
  if (protectedExtra.has(blockId)) return true;
  if (blockId.startsWith(Config.protection.modBlocks.namespace)) return true;
  return false;
}
function addProtectedBlock(blockId) {
  ensureLoaded();
  const id = blockId.startsWith("minecraft:") || blockId.includes(":") ? blockId : "minecraft:" + blockId;
  if (protectedExtra.has(id)) return false;
  protectedExtra.add(id);
  persistProtected();
  return true;
}
function removeProtectedBlock(blockId) {
  ensureLoaded();
  const id = blockId.startsWith("minecraft:") || blockId.includes(":") ? blockId : "minecraft:" + blockId;
  if (DEFAULT_PROTECTED.has(id)) return false;
  const had = protectedExtra.delete(id);
  if (had) persistProtected();
  return had;
}
function listProtectedBlocks() {
  ensureLoaded();
  return [...DEFAULT_PROTECTED, ...protectedExtra].sort();
}
function serializeProtected() {
  ensureLoaded();
  return JSON.stringify([...protectedExtra]);
}
function persistProtected() {
  safe(() => world5.setDynamicProperty(PROTECTED_KEY, serializeProtected()), "setProtected");
}
function short(id) {
  const i = id.indexOf(":");
  return i >= 0 ? id.slice(i + 1) : id;
}
function blockCategory(blockId) {
  const id = short(blockId);
  if (id.includes("water") || id.includes("lava")) return "liquid";
  if (id.includes("glass")) return "glass";
  if (id.endsWith("_log") || id.endsWith("_wood") || id.endsWith("_planks") || id.endsWith("_fence") || id.endsWith("_fence_gate") || id.endsWith("_door") || id.endsWith("_trapdoor") || id.endsWith("_stairs") && id.includes("wood") || id.includes("wooden") || id.endsWith("_slab") && id.includes("wood") || id === "bookshelf" || id === "crafting_table" || id === "chest" || id === "barrel" || id === "lectern") return "wood";
  if (id.includes("dirt") || id.includes("grass_block") || id.includes("sand") || id.includes("gravel") || id.includes("clay") || id.includes("soul_sand") || id.includes("soul_soil") || id.includes("mud") || id.includes("farmland") || id.includes("podzol") || id.includes("mycelium")) return "dirt";
  if (id.includes("stone") || id.includes("deepslate") || id.includes("ore") || id.includes("brick") || id.includes("andesite") || id.includes("diorite") || id.includes("granite") || id.includes("tuff") || id.includes("basalt") || id.includes("blackstone") || id.includes("calcite") || id.includes("obsidian") || id.includes("concrete") || id.includes("terracotta") || id.includes("netherrack") || id.includes("end_stone") || id.includes("quartz") || id.includes("prismarine") || id.includes("sandstone")) return "stone";
  if (id.includes("iron") || id.includes("gold") || id.includes("copper") || id.includes("netherite") || id.includes("anvil") || id.includes("cauldron") || id.includes("hopper")) return "metal";
  if (id.endsWith("_leaves") || id.endsWith("_sapling") || id.includes("flower") || id.includes("grass") || id.includes("fern") || id.includes("vine") || id.includes("mushroom") || id.includes("cactus") || id.includes("bamboo") || id.includes("kelp") || id.includes("seagrass") || id.includes("crop") || id.includes("wheat") || id.includes("carrots") || id.includes("potatoes") || id.includes("beetroots")) return "plant";
  return "other";
}
function requiredToolTier(blockId) {
  const id = short(blockId);
  const map = Config.mining.minToolTierForBlock;
  if (map[id] !== void 0) return map[id];
  if (id.includes("obsidian") || id.includes("ancient_debris")) return 3;
  if (id.includes("diamond") || id.includes("emerald") || id.includes("gold_ore") || id.includes("redstone_ore")) return 2;
  if (id.includes("ore")) return 1;
  const cat = blockCategory(blockId);
  switch (cat) {
    case "dirt":
      return 0;
    case "plant":
      return 0;
    case "wood":
      return 0;
    case "glass":
      return 0;
    case "stone":
      return 1;
    case "metal":
      return 1;
    default:
      return 1;
  }
}
function canMineWith(blockId, cls, tier) {
  if (isNeverMine(blockId)) return false;
  const need = requiredToolTier(blockId);
  if (need === 0) return true;
  if (cls === "none") return false;
  return tier >= need;
}
function isDangerBlock(blockId) {
  const id = short(blockId);
  return id.includes("lava") || id === "magma" || id === "magma_block" || id === "fire" || id === "soul_fire" || id === "cactus" || id.includes("powder_snow") || id === "campfire" || id === "soul_campfire";
}
function isNeverMine(blockId) {
  const list = Config.mining.neverMine;
  if (list.includes(blockId)) return true;
  return isProtectedBlock(blockId);
}
function isPassable(blockId) {
  const list = Config.perception.environmentScan.passableBlocks;
  if (list.includes(blockId)) return true;
  const id = short(blockId);
  return id === "air" || id.includes("water") || id.endsWith("_sapling") || id.endsWith("_flower") || id.endsWith("_torch") || id.endsWith("_button") || id.endsWith("_pressure_plate") || id === "tallgrass" || id === "short_grass" || id === "fern" || id === "snow_layer" || id === "vine" || id === "deadbush" || id === "rail" || id === "string" || id === "tripwire" || id === "ladder";
}
function isDoor(blockId) {
  const list = Config.perception.environmentScan.doorBlocks;
  if (list.includes(blockId)) return true;
  const id = short(blockId);
  return id.endsWith("_door") || id.endsWith("_trapdoor") || id.endsWith("_fence_gate");
}
function isReplaceable(blockId) {
  const list = Config.building.placementValidation.allowedReplaceBlocks;
  if (list.includes(blockId)) return true;
  const id = short(blockId);
  return id === "air" || id.includes("water") || id.includes("lava");
}
function protectedSummary(sub, id) {
  const s = (sub || "list").toLowerCase();
  if (s === "list") {
    const list = listProtectedBlocks();
    return "\u53D7\u4FDD\u62A4\u65B9\u5757 (" + list.length + "):\n" + list.slice(0, 40).join("\n") + (list.length > 40 ? "\n\u2026" : "");
  }
  if (s === "add") {
    if (!id) return "\u7528\u6CD5: /ze:zombie protect add <blockId>";
    return addProtectedBlock(id) ? "\u5DF2\u52A0\u5165\u4FDD\u62A4: " + id : "\u5DF2\u5B58\u5728\u6216\u975E\u6CD5: " + id;
  }
  if (s === "remove") {
    if (!id) return "\u7528\u6CD5: /ze:zombie protect remove <blockId>";
    return removeProtectedBlock(id) ? "\u5DF2\u79FB\u9664\u4FDD\u62A4: " + id : "\u65E0\u6CD5\u79FB\u9664\uFF08\u9ED8\u8BA4\u4FDD\u62A4\u6E05\u5355\u6216\u4E0D\u5B58\u5728\uFF09: " + id;
  }
  return "\u7528\u6CD5: /ze:zombie protect <list|add|remove> [blockId]";
}
function grantConstructionInventory(st, rng2) {
  if (!Config.building.constructionInventory.enabled) return;
  const arch = archOfState(st);
  if (arch && arch.constructionInventory === false) {
    st.constructionInventory = {};
    return;
  }
  const chance = st.bloodMoonState ? Config.building.constructionInventory.chanceToHaveInventoryBloodMoon : Config.building.constructionInventory.chanceToHaveInventory;
  if (!rng2.chance(chance)) {
    st.constructionInventory = {};
    return;
  }
  const inv = {};
  const stacks = Config.building.constructionInventory.stacks;
  const kinds = rng2.int(1, 2);
  const stackMul = eliteMul(st, "constructionInventoryMultiplier");
  for (let i = 0; i < kinds; i++) {
    const s = rng2.weighted(stacks.map((x) => ({ v: x, w: x.weight })));
    const n = Math.max(1, Math.round(rng2.int(s.min, s.max) * stackMul));
    inv[s.block] = (inv[s.block] ?? 0) + n;
  }
  st.constructionInventory = inv;
}
function pickBuildBlock(st) {
  let best = null;
  let bestCount = 0;
  for (const [block, count] of Object.entries(st.constructionInventory)) {
    if (count > bestCount) {
      bestCount = count;
      best = block;
    }
  }
  return best;
}
function consumeBuildBlock(st, blockId) {
  const have = st.constructionInventory[blockId] ?? 0;
  if (have <= 0) return false;
  if (have === 1) delete st.constructionInventory[blockId];
  else st.constructionInventory[blockId] = have - 1;
  return true;
}
function inventoryTotal(st) {
  return Object.values(st.constructionInventory).reduce((a, b) => a + b, 0);
}
function canPlaceAt(dim2, loc) {
  const id = safeBlockId(dim2, loc);
  if (id === void 0) return false;
  if (isProtectedBlock(id)) return false;
  if (isDangerBlock(id)) return false;
  return isReplaceable(id);
}
function hasSupport(dim2, loc) {
  const below = safeBlockId(dim2, { x: loc.x, y: loc.y - 1, z: loc.z });
  if (below === void 0) return false;
  return !isReplaceable(below);
}
function attemptPlace(dim2, loc, blockId, st, opts = {}) {
  if (st.disabled) return { ok: false, reason: "zombie-disabled" };
  if (st.buildBlocksThisTask >= Config.building.maxPlaceBlocks) {
    return { ok: false, reason: "task-build-limit" };
  }
  if (st.buildingBudget <= 0) return { ok: false, reason: "build-budget-exhausted" };
  if (Config.building.requireMaterials && (st.constructionInventory[blockId] ?? 0) <= 0) {
    return { ok: false, reason: "no-material" };
  }
  if (!canPlaceAt(dim2, loc)) return { ok: false, reason: "target-not-replaceable" };
  if (Config.building.rules.requireSupportBelow && !opts.allowBridge && !hasSupport(dim2, loc)) {
    return { ok: false, reason: "no-support" };
  }
  if (!tryConsumeBlockBudget(st.bloodMoonState)) {
    return { ok: false, reason: "global-budget" };
  }
  const wrote = safeSetBlock(dim2, loc, blockId);
  if (!wrote) return { ok: false, reason: "setBlockType-failed" };
  consumeBuildBlock(st, blockId);
  st.buildBlocksThisTask++;
  st.buildingBudget--;
  zlog("Block placed", { block: blockId, at: loc, remaining: st.constructionInventory[blockId] ?? 0 });
  return { ok: true, reason: "placed" };
}
function weaponTierOf(weaponId, fallbackTier = 0) {
  if (!weaponId) return fallbackTier;
  const table = Config.weapons.materialBreakTier;
  for (const m of Object.keys(table)) {
    if (weaponId.includes(m)) return table[m];
  }
  return fallbackTier;
}
function tierOfState(st) {
  return weaponTierOf(st.weaponId, st.weaponTier);
}
function tryBreakBlock(dim2, loc, st, reason) {
  return attemptBreak(dim2, loc, st, reason).ok;
}
function attemptBreak(dim2, loc, st, reason) {
  if (st.disabled) return { ok: false, reason: "zombie-disabled" };
  if (st.mineBlocksThisTask >= Config.mining.maxMineBlocks) {
    return { ok: false, reason: "task-block-limit" };
  }
  if (st.miningBudget <= 0) {
    return { ok: false, reason: "mining-budget-exhausted" };
  }
  const id = safeBlockId(dim2, loc);
  if (id === void 0) return { ok: false, reason: "unloaded-or-invalid" };
  if (isNeverMine(id)) return { ok: false, blockId: id, reason: "protected" };
  if (isDangerBlock(id)) return { ok: false, blockId: id, reason: "dangerous" };
  const tier = weaponTierOf(st.weaponId);
  if (!canMineWith(id, st.weaponClass, tier)) {
    return { ok: false, blockId: id, reason: "tool-insufficient" };
  }
  if (!tryConsumeBlockBudget(st.bloodMoonState)) {
    return { ok: false, blockId: id, reason: "global-budget" };
  }
  const wrote = safeSetBlock(dim2, loc, "minecraft:air");
  if (!wrote) return { ok: false, blockId: id, reason: "setBlockType-failed" };
  st.miningBudget--;
  st.mineBlocksThisTask++;
  st.lastActiveTick = st.lastActiveTick;
  zlog("Block removed", { reason, block: id, at: loc, tier, required: requiredToolTier(id) });
  return { ok: true, blockId: id, reason: "broken" };
}
function tryOpenDoor(dim2, loc, st) {
  const id = safeBlockId(dim2, loc);
  if (id === void 0 || !isDoor(id)) return false;
  if (id.includes("iron")) return false;
  const r = safe(() => {
    const b = dim2.getBlock(loc);
    if (!b) return false;
    return false;
  }, "tryOpenDoor");
  if (!r.ok || r.value !== true) {
    zlog("Door not openable by script", { block: id, at: loc });
    return false;
  }
  return true;
}
function entityPitch(entity) {
  const r = safe(() => entity.getRotation().x, "getRotation");
  return r.ok && typeof r.value === "number" ? r.value : 0;
}
function plan(ctx) {
  const { st, env, target, tick } = ctx;
  const loc = safeLocation(ctx.entity);
  if (!loc) return { state: "IDLE" /* IDLE */, goal: "wait", why: "no-location" };
  if (st.disabled) {
    return { state: "IDLE" /* IDLE */, goal: "native-ai-only", why: "disabled-after-errors" };
  }
  if (!target) {
    if (st.currentState === "SEARCH" /* SEARCH */) {
      return { state: "REGROUP" /* REGROUP */, goal: "regroup", why: "search-without-target" };
    }
    return { state: "PATROL" /* PATROL */, goal: "patrol", why: "no-target" };
  }
  const dist = distance(loc, target);
  const conf = st.targetConfidence;
  if (conf < Config.targeting.confidence.abandonThreshold) {
    return { state: "REGROUP" /* REGROUP */, goal: "regroup", why: "confidence-abandoned:" + conf.toFixed(2) };
  }
  if (conf < Config.targeting.confidence.searchThreshold && st.currentState !== "SEARCH" /* SEARCH */) {
    return { state: "SEARCH" /* SEARCH */, goal: "search-last-known", why: "confidence-below-search:" + conf.toFixed(2) };
  }
  if (st.stuckTicks >= Config.siege.bypass.stuckDetectionTicks) {
    return { state: "BYPASS" /* BYPASS */, goal: "bypass-obstacle", why: "stuck:" + st.stuckTicks };
  }
  const enclosed = env?.enclosed ?? false;
  const undergroundTarget = target.y < loc.y - 3;
  const highTarget = target.y > loc.y + 1.5;
  const pitch = entityPitch(ctx.entity);
  const lookingUp = pitch <= -25;
  const lookingDown = pitch >= 25;
  const arch = archetypeDef(st.archetype);
  const hold = arch && arch.keepDistance;
  if (hold && conf >= Config.targeting.confidence.searchThreshold) {
    if (dist < hold.retreatBelow) {
      return { state: "KITE" /* KITE */, goal: "kite-retreat", why: "ranged-target-too-close" };
    }
    if (dist > hold.approachAbove) {
      return { state: "KITE" /* KITE */, goal: "kite-approach", why: "ranged-target-too-far" };
    }
  }
  if (Config.mining.enabled && canMineEntity(st) && undergroundTarget && dist <= Config.mining.maxMineDistance && st.mineBlocksThisTask < Config.mining.maxMineBlocks && (st.weaponClass === "pickaxe" || st.weaponClass === "shovel") && canMineWith("minecraft:stone", st.weaponClass, weaponTierOf(st.weaponId, st.weaponTier))) {
    return {
      state: "MINE" /* MINE */,
      goal: "dig-toward-underground-target",
      why: lookingDown ? "pitch-down-with-tool" : "target-below-with-tool"
    };
  }
  if (Config.building.enabled && canBuildEntity(st) && highTarget && inventoryTotal(st) > 0 && st.buildBlocksThisTask < Config.building.maxPlaceBlocks) {
    return {
      state: "BUILD" /* BUILD */,
      goal: "gain-height",
      why: lookingUp ? "pitch-up-with-materials" : "target-above-with-materials"
    };
  }
  if (enclosed && env && env.entrances.length > 0) {
    return { state: "ENTER" /* ENTER */, goal: "find-entrance", why: "enclosed-with-entrances" };
  }
  if (!enclosed || env && env.weakPoints.score < Config.siege.weakPoint.minScoreToBreach || st.weaponClass === "none") {
    zlog("PLANNER 4d gate", {
      enclosed,
      hasEnv: !!env,
      weakScore: env ? Number(env.weakPoints.score.toFixed(3)) : null,
      need: Config.siege.weakPoint.minScoreToBreach,
      entrances: env ? env.entrances.length : null,
      weaponClass: st.weaponClass,
      dist: Number(dist.toFixed(1)),
      conf: Number(conf.toFixed(2))
    });
  }
  if (Config.siege.breachEnabled && canBreachEntity(st) && enclosed && env && env.weakPoints.score >= Config.siege.weakPoint.minScoreToBreach && st.weaponClass !== "none" && st.breachBlocksThisTask < Config.siege.breach.maxBreachBlocksPerTask && !isRouteDeprioritized(st, env.weakPoints.position, tick)) {
    return { state: "BREACH" /* BREACH */, goal: "breach-weak-point", why: "no-entrance-with-tool" };
  }
  if (Config.targeting.tracking.interceptEnabled && st.groupId !== null && conf < 1 && conf >= Config.targeting.confidence.searchThreshold && dist > 8 && st.groupAngle !== 0) {
    return { state: "INTERCEPT" /* INTERCEPT */, goal: "intercept-target", why: "group-flank-angle" };
  }
  if (st.currentState === "IDLE" /* IDLE */ || st.currentState === "PATROL" /* PATROL */) {
    return { state: "DETECT" /* DETECT */, goal: "acquire-target", why: "target-known" };
  }
  return { state: "CHASE" /* CHASE */, goal: "chase-target", why: "default-chase" };
}
var BASE_STRENGTH = 0.06;
var MAX_STRENGTH = 0.14;
function steerToward(entity, target, opts = {}) {
  const loc = safeLocation(entity);
  if (!loc) return { steered: false, distance: Infinity, arrived: false, reason: "no-location" };
  const delta = vecSub(target, loc);
  const dist = Math.sqrt(delta.x * delta.x + delta.z * delta.z);
  const arriveRadius = opts.arriveRadius ?? 1.5;
  if (dist <= arriveRadius) {
    return { steered: false, distance: dist, arrived: true, reason: "arrived" };
  }
  const dir = normalize({ x: delta.x, y: 0, z: delta.z });
  const strength = Math.min(opts.strength ?? BASE_STRENGTH, MAX_STRENGTH);
  const impulse = { x: dir.x * strength, y: 0, z: dir.z * strength };
  if (opts.allowVertical) {
    const dy = target.y - loc.y;
    if (dy > 1.5) impulse.y = 0.24;
    else if (dy < -2.5) impulse.y = -0.02;
  }
  const r = safe(() => {
    entity.applyImpulse(impulse);
    return true;
  }, "applyImpulse");
  return {
    steered: r.ok && r.value === true,
    distance: dist,
    arrived: false,
    reason: r.ok ? "impulse" : String(r.error)
  };
}
function faceToward(entity, target) {
  const loc = safeLocation(entity);
  if (!loc) return;
  const d = normalize({ x: target.x - loc.x, y: 0, z: target.z - loc.z });
  if (d.x === 0 && d.z === 0) return;
  safe(() => entity.setRotation({ x: 0, y: Math.atan2(-d.x, -d.z) * 180 / Math.PI }), "setRotation");
}
function updateStuck(st, entity) {
  const loc = safeLocation(entity);
  if (!loc) return st.stuckTicks;
  const prev = st.lastPosition;
  if (prev) {
    const moved = distance(prev, loc);
    if (moved < 0.05) st.stuckTicks++;
    else st.stuckTicks = 0;
  }
  st.lastPosition = loc;
  return st.stuckTicks;
}
function isStuck(st) {
  return st.stuckTicks >= Config.siege.bypass.stuckDetectionTicks;
}
function bypassCandidate(from, target, attempt, stepDistance) {
  const angles = Config.siege.bypass.bypassSearchAngles;
  const angleDeg = angles[Math.min(attempt, angles.length - 1)];
  const step = stepDistance ?? Config.siege.bypass.bypassStepDistance;
  const baseYaw = Math.atan2(target.z - from.z, target.x - from.x);
  const yaw = baseYaw + angleDeg * Math.PI / 180;
  return {
    x: from.x + Math.cos(yaw) * step,
    y: from.y,
    z: from.z + Math.sin(yaw) * step
  };
}
function runChase(ctx) {
  const { st, entity, target, tick } = ctx;
  updateStuck(st, entity);
  st.lastActiveTick = tick;
  if (!target) {
    return { result: "FAILED", reason: "no-target", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  const loc = safeLocation(entity);
  if (!loc) return { result: "FAILED", reason: "no-location", reassess: true };
  const hDist = horizontalDistance(loc, target);
  const kiteCfg = (archOfState(st) || {}).keepDistance;
  if (kiteCfg && hDist < kiteCfg.retreatBelow) {
    return { result: "SUCCESS", reason: "handoff-to-kite", reassess: true, nextState: "KITE" /* KITE */ };
  }
  if (st.targetConfidence >= 0.95 && tick - st.lastSeenTick <= 20) {
    faceToward(entity, target);
    if (isStuck(st)) {
      return { result: "FAILED", reason: "stuck-while-visible", reassess: true, nextState: "BYPASS" /* BYPASS */ };
    }
    return { result: "RUNNING", reason: "native-ai-chase" };
  }
  if (hDist <= 2) {
    return { result: "SUCCESS", reason: "reached-last-known", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  const r = steerToward(entity, target, {
    arriveRadius: 1.8,
    strength: 0.06 * ctx.multiplier("searchAggressiveness")
  });
  if (isStuck(st)) {
    return { result: "FAILED", reason: "stuck", reassess: true, nextState: "BYPASS" /* BYPASS */ };
  }
  const giveUp = (st.bloodMoonState ? Config.targeting.tracking.giveUpTicksBloodMoon : Config.targeting.tracking.giveUpTicks) * eliteMul(st, "trackingMultiplier");
  if (tick - st.lastSeenTick > giveUp) {
    return { result: "ABORTED", reason: "tracking-expired", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  return { result: r.arrived ? "SUCCESS" : "RUNNING", reason: r.reason };
}
function runKite(ctx) {
  const { st, entity, target, tick } = ctx;
  st.lastActiveTick = tick;
  updateStuck(st, entity);
  if (!target) {
    return { result: "FAILED", reason: "no-target", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  const loc = safeLocation(entity);
  if (!loc) return { result: "FAILED", reason: "no-location", reassess: true };
  const arch = archetypeDef(st.archetype);
  const hold = arch && arch.keepDistance;
  if (!hold) {
    return { result: "SUCCESS", reason: "kite-not-applicable", reassess: true, nextState: "CHASE" /* CHASE */ };
  }
  const hDist = horizontalDistance(loc, target);
  faceToward(entity, target);
  if (hDist >= hold.holdMin && hDist <= hold.holdMax) {
    return { result: "SUCCESS", reason: "kite-in-band", reassess: true, nextState: "CHASE" /* CHASE */ };
  }
  const retreating = hDist < hold.retreatBelow;
  const inv = 1 / Math.max(hDist, 1e-3);
  const dest = retreating ? { x: loc.x + (loc.x - target.x) * inv * 6, y: loc.y, z: loc.z + (loc.z - target.z) * inv * 6 } : target;
  const r = steerToward(entity, dest, {
    arriveRadius: retreating ? 1.2 : 2.5,
    strength: retreating ? 0.09 : 0.06 * ctx.multiplier("searchAggressiveness"),
    allowVertical: !retreating
  });
  if (isStuck(st)) {
    if (retreating) {
      return { result: "SUCCESS", reason: "kite-cornered-stand-and-shoot", reassess: true, nextState: "CHASE" /* CHASE */ };
    }
    return { result: "FAILED", reason: "stuck-approaching", reassess: true, nextState: "BYPASS" /* BYPASS */ };
  }
  if (!retreating && hDist <= hold.holdMax) {
    return { result: "SUCCESS", reason: "kite-arrived-in-band", reassess: true, nextState: "CHASE" /* CHASE */ };
  }
  return { result: r.arrived ? "SUCCESS" : "RUNNING", reason: retreating ? "kite-retreat" : "kite-approach" };
}
function runBypass(ctx) {
  const { st, entity, target, tick } = ctx;
  st.lastActiveTick = tick;
  updateStuck(st, entity);
  if (!target) {
    return { result: "FAILED", reason: "no-target", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  const loc = safeLocation(entity);
  if (!loc) return { result: "FAILED", reason: "no-location", reassess: true };
  const attempt = Math.floor(st.stuckTicks / 40) + Math.max(0, st.failedRoutes.length % 3);
  const candidate = bypassCandidate(loc, target, attempt, Config.siege.bypass.bypassStepDistance);
  if (attempt >= Config.siege.bypass.bypassSearchAngles.length) {
    rememberFailure(st, target, "bypass-exhausted");
    const canBreach = Config.siege.breachEnabled && st.weaponClass !== "none" && st.breachBlocksThisTask < Config.siege.breach.maxBreachBlocksPerTask;
    zlog("Alternative route not found", { attempts: attempt, canBreach });
    return {
      result: "FAILED",
      reason: "bypass-exhausted",
      reassess: true,
      nextState: canBreach ? "BREACH" /* BREACH */ : "SEARCH" /* SEARCH */
    };
  }
  const r = steerToward(entity, candidate, { arriveRadius: 1.2, strength: 0.07 });
  if (r.arrived) {
    zlog("Alternative route found", { attempt, at: candidate });
    return { result: "SUCCESS", reason: "bypass-step-reached", reassess: true, nextState: "CHASE" /* CHASE */ };
  }
  if (tick - st.currentTaskStartTick > Config.siege.bypass.maxBypassTicks) {
    return { result: "FAILED", reason: "bypass-timeout", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  return { result: "RUNNING", reason: "bypass-attempt-" + attempt };
}
var waypoints = /* @__PURE__ */ new Map();
function runSearch(ctx) {
  const { st, entity, tick } = ctx;
  st.lastActiveTick = tick;
  updateStuck(st, entity);
  if (st.searchBudget <= 0) {
    return { result: "FAILED", reason: "search-budget-exhausted", reassess: true, nextState: "REGROUP" /* REGROUP */ };
  }
  const loc = safeLocation(entity);
  if (!loc) return { result: "FAILED", reason: "no-location", reassess: true };
  const center = estimatedTargetPosition(st) ?? loc;
  let plan2 = waypoints.get(st.entityId);
  const radius = st.bloodMoonState ? Config.targeting.tracking.searchRadiusBloodMoon : Config.targeting.tracking.searchRadius;
  if (!plan2 || tick - plan2.builtAtTick > 400 || plan2.index >= plan2.points.length) {
    plan2 = { points: buildSearchPlan(st, center, radius), index: 0, builtAtTick: tick };
    waypoints.set(st.entityId, plan2);
  }
  if (plan2.points.length === 0) {
    return { result: "FAILED", reason: "no-search-points", reassess: true, nextState: "REGROUP" /* REGROUP */ };
  }
  const wp = plan2.points[plan2.index];
  const r = steerToward(entity, wp, { arriveRadius: 2, strength: 0.055 });
  if (r.arrived || r.distance < 2) {
    plan2.index++;
    st.searchBudget--;
    if (plan2.index >= plan2.points.length) {
      return { result: "FAILED", reason: "search-exhausted", reassess: true, nextState: "REGROUP" /* REGROUP */ };
    }
    return { result: "RUNNING", reason: "search-waypoint-" + plan2.index };
  }
  if (st.stuckTicks >= Config.siege.bypass.stuckDetectionTicks) {
    plan2.index++;
    st.stuckTicks = 0;
    return { result: "RUNNING", reason: "search-waypoint-blocked" };
  }
  return { result: "RUNNING", reason: "searching" };
}
function buildSearchPlan(st, center, radius) {
  const pts = [];
  for (const p of preferredSearchPoints(st.lastDimensionId, center, radius * 1.5)) {
    pts.push(p);
  }
  for (const p of st.lastSeenPosition ? [st.lastSeenPosition] : []) {
    pts.push(p);
  }
  const n = Config.targeting.tracking.searchWaypointCount;
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2;
    pts.push({
      x: center.x + Math.cos(a) * radius * 0.6,
      y: center.y,
      z: center.z + Math.sin(a) * radius * 0.6
    });
  }
  return pts.slice(0, 12);
}
function dropSearchPlan(entityId) {
  waypoints.delete(entityId);
}
var progress = /* @__PURE__ */ new Map();
function runEnter(ctx) {
  const { st, entity, dim: dim2, env, tick } = ctx;
  st.lastActiveTick = tick;
  updateStuck(st, entity);
  const loc = safeLocation(entity);
  if (!loc) return { result: "FAILED", reason: "no-location", reassess: true };
  if (!env || env.entrances.length === 0) {
    return { result: "FAILED", reason: "no-entrance-found", reassess: true, nextState: "BREACH" /* BREACH */ };
  }
  let p = progress.get(st.entityId);
  if (!p || tick - p.startedTick > 300) {
    p = { index: 0, startedTick: tick };
    progress.set(st.entityId, p);
  }
  if (p.index >= env.entrances.length) {
    zlog("All entrances inaccessible", { tried: p.index });
    return { result: "FAILED", reason: "entrances-exhausted", reassess: true, nextState: "BREACH" /* BREACH */ };
  }
  const entry = env.entrances[p.index];
  faceToward(entity, entry.position);
  const d = distance(loc, entry.position);
  if (d <= Config.siege.entrance.doorInteractionRange) {
    if (entry.kind === "door" && Config.siege.entrance.openDoorsWhenPossible) {
      tryOpenDoor(dim2, entry.position, st);
    }
    rememberEntryPoint(st, entry.position, st.lastDimensionId, entry.kind);
    zlog("Window detected", { kind: entry.kind, at: entry.position });
    p.index++;
    p.startedTick = tick;
    return { result: "SUCCESS", reason: "entrance-reached:" + entry.kind, reassess: true, nextState: "CHASE" /* CHASE */ };
  }
  const r = steerToward(entity, entry.position, { arriveRadius: 1.5, strength: 0.065 });
  if (st.stuckTicks >= Config.siege.bypass.stuckDetectionTicks) {
    zlog("Window inaccessible", { at: entry.position });
    st.stuckTicks = 0;
    p.index++;
    p.startedTick = tick;
    return { result: "RUNNING", reason: "entrance-blocked-next", reassess: true };
  }
  return { result: "RUNNING", reason: "moving-to-entrance:" + entry.kind };
}
function dropEnterProgress(entityId) {
  progress.delete(entityId);
}
import { world as world6 } from "@minecraft/server";
var BLOODMOON_PERSIST_KEY = "ze:bloodmoon";
var PERSIST_VERSION = 1;
var THEMES = Config.bloodmoon.themes.list;
var MODIFIERS = Config.bloodmoon.modifiers;
var active = false;
var forced = false;
var forcedOff = false;
var startTick = -1;
var startDay = -1;
var themes = [];
var lastWindow = { tick: -1, worldDay: -1, timeOfDay: -1 };
function themeExists(id) {
  return THEMES.some((t) => t.id === id);
}
function themeName(id) {
  const t = THEMES.find((x) => x.id === id);
  return t ? t.name : id;
}
function themeWeights(id) {
  const t = THEMES.find((x) => x.id === id);
  return t ? t.weights : void 0;
}
function modifierKeys() {
  return Object.keys(MODIFIERS).filter((k) => typeof MODIFIERS[k] === "number" && Number.isFinite(MODIFIERS[k]));
}
function pickThemes(tick, worldDay2) {
  const cfg = Config.bloodmoon.themes;
  if (THEMES.length === 0) return [];
  const count = clamp(Math.floor(cfg.pickCount), 1, THEMES.length);
  const rng2 = makeRng(worldDay2 * 7919 + tick * 31 + 17);
  const pool = THEMES.map((t) => ({ v: t.id, w: 1 }));
  const out = [];
  while (out.length < count && pool.length > 0) {
    const id = rng2.weighted(pool);
    out.push(id);
    const i = pool.findIndex((p) => p.v === id);
    if (i >= 0) pool.splice(i, 1);
  }
  return out;
}
function activate(tick, worldDay2, byForce) {
  active = true;
  startTick = tick;
  startDay = worldDay2;
  themes = pickThemes(tick, worldDay2);
  Stats.bloodMoonCount++;
  zlog("BLOOD MOON start", {
    day: worldDay2,
    tick,
    themes,
    forced: byForce,
    intervalDays: TUNABLE.bloodMoonInterval()
  });
}
function deactivate(tick, reason) {
  const day = startDay;
  active = false;
  themes = [];
  zlog("BLOOD MOON end", { day, tick, reason });
}
function inWindow(worldDay2, timeOfDay2) {
  const cfg = Config.bloodmoon;
  const interval = Math.max(1, Math.floor(TUNABLE.bloodMoonInterval()));
  const day = Math.floor(worldDay2);
  if (!Number.isFinite(day)) return false;
  if (day < cfg.triggerOnNightOfDay) return false;
  if (day % interval !== 0) return false;
  const raw = Math.floor(timeOfDay2);
  const t = (raw % TICKS_PER_DAY + TICKS_PER_DAY) % TICKS_PER_DAY;
  const start = cfg.startTimeOfDay;
  const end = cfg.endTimeOfDay;
  if (cfg.requireNight) return t >= start && t < end;
  return t >= start || t < end;
}
function isBloodMoon() {
  return active;
}
function bloodMoonState() {
  const snapshot = {};
  for (const k of modifierKeys()) snapshot[k] = bloodMoonMultiplier(k);
  return {
    enabled: TUNABLE.bloodMoonEnabled(),
    active,
    forced,
    forcedOff,
    startTick,
    startDay,
    themes: [...themes],
    theme: currentTheme(),
    themeNames: themes.map((id) => themeName(id)),
    themeWeights: (() => {
      const m = {};
      for (const id of themes) {
        const w = themeWeights(id);
        if (w) m[id] = { ...w };
      }
      return m;
    })(),
    intervalDays: TUNABLE.bloodMoonInterval(),
    triggerOnNightOfDay: Config.bloodmoon.triggerOnNightOfDay,
    startTimeOfDay: Config.bloodmoon.startTimeOfDay,
    endTimeOfDay: Config.bloodmoon.endTimeOfDay,
    requireNight: Config.bloodmoon.requireNight,
    modifierKeys: modifierKeys(),
    modifierSnapshot: snapshot,
    bloodMoonCount: Stats.bloodMoonCount,
    lastWindow: { ...lastWindow },
    persistKey: BLOODMOON_PERSIST_KEY,
    persistVersion: PERSIST_VERSION
  };
}
function tickBloodMoon(tick, worldDay2, timeOfDay2) {
  lastWindow = { tick, worldDay: worldDay2, timeOfDay: timeOfDay2 };
  if (!TUNABLE.bloodMoonEnabled()) {
    if (active) deactivate(tick, "disabled");
    return;
  }
  if (forced) {
    if (!active) activate(tick, worldDay2, true);
    return;
  }
  if (!inWindow(worldDay2, timeOfDay2)) {
    if (active) deactivate(tick, "sunrise");
    if (forcedOff) forcedOff = false;
    return;
  }
  if (active) return;
  if (forcedOff) return;
  activate(tick, worldDay2, forced);
}
function forceBloodMoon(on) {
  const tick = currentTick();
  if (on) {
    forced = true;
    forcedOff = false;
    if (!active) {
      const day = lastWindow.worldDay >= 0 ? lastWindow.worldDay : startDay;
      activate(tick, day, true);
    }
    return;
  }
  forced = false;
  forcedOff = true;
  if (active) deactivate(tick, "forced-off");
}
function currentTheme() {
  const first = themes[0];
  return first === void 0 ? null : first;
}
function themeModifier(key) {
  if (themes.length === 0) return 1;
  let m = 1;
  for (const id of themes) {
    const w = themeWeights(id);
    if (!w) continue;
    const v = w[key];
    if (typeof v === "number" && Number.isFinite(v) && v > 0) m *= v;
  }
  return m;
}
function bloodMoonMultiplier(key) {
  if (!active) return 1;
  const base = MODIFIERS[key];
  const b = typeof base === "number" && Number.isFinite(base) ? base : 1;
  return b * themeModifier(key);
}
function restore(raw) {
  try {
    const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!parsed || typeof parsed !== "object") return;
    const p = parsed;
    active = p.active === true;
    forced = p.forced === true;
    forcedOff = p.forcedOff === true;
    startTick = typeof p.startTick === "number" && Number.isFinite(p.startTick) ? p.startTick : -1;
    startDay = typeof p.startDay === "number" && Number.isFinite(p.startDay) ? p.startDay : -1;
    const rawThemes = Array.isArray(p.themes) ? p.themes : [];
    themes = rawThemes.filter((x) => typeof x === "string" && themeExists(x));
    if (!active) {
      themes = [];
    } else if (themes.length === 0) {
      themes = pickThemes(startTick >= 0 ? startTick : currentTick(), startDay >= 0 ? startDay : 0);
    }
  } catch (e) {
    zlog("bloodmoon restore failed", { error: String(e) });
  }
}
function restoreFromWorld() {
  try {
    restore(world6.getDynamicProperty(BLOODMOON_PERSIST_KEY));
  } catch (e) {
    zlog("bloodmoon restoreFromWorld failed", { error: String(e) });
  }
}
var groups = /* @__PURE__ */ new Map();
var MAX_SHARED_CONFIDENCE = 0.99;
var POS_DECIMALS = 3;
function posKey(p) {
  return p.x.toFixed(POS_DECIMALS) + "," + p.y.toFixed(POS_DECIMALS) + "," + p.z.toFixed(POS_DECIMALS);
}
function copyVec(p) {
  return { x: p.x, y: p.y, z: p.z };
}
function clamp01(v) {
  return clamp(Number.isFinite(v) ? v : 0, 0, 1);
}
function clampSharedConfidence(confidence) {
  let v = clamp01(confidence);
  const si = Config.group.sharedInformation;
  if (si.shareRealTimeExactPosition === false && v > MAX_SHARED_CONFIDENCE) {
    v = MAX_SHARED_CONFIDENCE;
  }
  return v;
}
function messageCap() {
  return Math.max(1, Math.floor(Config.group.sharedInformation.maxMessagesPerGroup));
}
function pushMessage(g, msg) {
  g.messages.push(msg);
  const max = messageCap();
  if (g.messages.length > max) g.messages.splice(0, g.messages.length - max);
}
function ensureGroup(id, dimensionId, center) {
  const existing = groups.get(id);
  if (existing) return existing;
  const g = {
    id,
    dimensionId,
    center: copyVec(center),
    memberIds: [],
    lastKnownTarget: null,
    lastTargetTick: -1,
    entrances: [],
    openedGaps: [],
    builtPaths: [],
    messages: [],
    bloodMoon: isBloodMoon(),
    theme: currentTheme()
  };
  groups.set(id, g);
  return g;
}
function getGroupRecord(id) {
  return groups.get(id);
}
function allGroupRecords() {
  return [...groups.values()];
}
function dropGroup(id) {
  groups.delete(id);
}
function recordTarget(id, position, dimensionId, tick, confidence, fromEntityId) {
  const g = groups.get(id);
  if (!g) return;
  const c = clampSharedConfidence(confidence);
  g.lastKnownTarget = copyVec(position);
  g.lastTargetTick = tick;
  pushMessage(g, {
    kind: "target",
    position: copyVec(position),
    dimensionId,
    tick,
    confidence: c,
    fromEntityId
  });
}
function recordGap(id, position, tick) {
  const g = groups.get(id);
  if (!g) return;
  const key = posKey(position);
  if (!g.openedGaps.some((x) => posKey(x.position) === key)) {
    g.openedGaps.push({ position: copyVec(position), tick });
  }
  pushMessage(g, {
    kind: "gap",
    position: copyVec(position),
    dimensionId: g.dimensionId,
    tick,
    confidence: 1,
    fromEntityId: ""
  });
}
function pruneExpired(tick) {
  const si = Config.group.sharedInformation;
  const ttl = Math.max(0, si.messageTtlTicks);
  const max = messageCap();
  const gapTtl = Math.max(0, Config.group.pathReuse.gapTtlTicks);
  for (const [id, g] of groups) {
    if (g.messages.length > 0) {
      g.messages = g.messages.filter((m) => tick - m.tick <= ttl);
      if (g.messages.length > max) g.messages.splice(0, g.messages.length - max);
    }
    if (g.openedGaps.length > 0) {
      g.openedGaps = g.openedGaps.filter((x) => tick - x.tick <= gapTtl);
    }
    if (g.builtPaths.length > 0) {
      g.builtPaths = g.builtPaths.filter((x) => tick - x.tick <= gapTtl);
    }
    if (g.entrances.length > max) {
      g.entrances.sort((a, b) => b.score - a.score);
      g.entrances.length = max;
    }
    if (g.lastKnownTarget && tick - g.lastTargetTick > ttl) {
      g.lastKnownTarget = null;
      g.lastTargetTick = -1;
    }
    if (g.memberIds.length === 0) groups.delete(id);
  }
}
var ANGLE_COUNT = Math.max(1, Config.group.spread.flankAngleDegrees.length);
var CONSTRUCTION_BLOCKS = Config.building.constructionInventory.stacks.map((s) => s.block);
var MIN_CONSTRUCTION_BLOCKS = (() => {
  const mins = Config.building.constructionInventory.stacks.map((s) => s.min).sort((a, b) => a - b);
  if (mins.length === 0) return 1;
  return mins[Math.floor(mins.length / 2)];
})();
var groupSeq = 0;
var lastMaintenanceTick = -1;
var lastReassignTick = -1;
var reassignCursor = 0;
function entityDimensionId(e) {
  const r = safe(() => e.dimension.id, "entity.dimension.id");
  return r.ok ? r.value : void 0;
}
function nextGroupId(dimensionId) {
  groupSeq++;
  return Config.group.groupIdAssignment.keyPrefix + ":" + dimensionId + ":" + groupSeq;
}
function decodeSlot(encoded) {
  const n = ANGLE_COUNT;
  const e = Number.isFinite(encoded) ? Math.max(0, Math.floor(encoded)) : 0;
  return { idx: e % n, rank: Math.floor(e / n) };
}
function chooseSlot(g) {
  const n = ANGLE_COUNT;
  const counts = new Array(n).fill(0);
  for (const mid of g.memberIds) {
    const other = getState(mid);
    if (!other) continue;
    const { idx } = decodeSlot(other.groupAngle);
    counts[idx]++;
  }
  let bestIdx = 0;
  for (let i = 1; i < n; i++) {
    if (counts[i] < counts[bestIdx]) bestIdx = i;
  }
  const rank = counts[bestIdx];
  return bestIdx + rank * n;
}
function joinGroup(st, g) {
  st.groupId = g.id;
  if (!g.memberIds.includes(st.entityId)) {
    g.memberIds.push(st.entityId);
    st.groupAngle = chooseSlot(g);
  }
}
function leaveGroup(st, groupId) {
  const g = getGroupRecord(groupId);
  if (g) {
    const i = g.memberIds.indexOf(st.entityId);
    if (i >= 0) g.memberIds.splice(i, 1);
  }
  st.groupId = null;
  st.groupAngle = 0;
}
function assignGroup(st, entity) {
  if (!TUNABLE.groupAIEnabled()) return;
  const loc = safeLocation(entity);
  if (!loc) return;
  const dimId = entityDimensionId(entity);
  if (!dimId) return;
  const cfg = Config.group.groupIdAssignment;
  if (st.groupId) {
    const g2 = getGroupRecord(st.groupId);
    if (!g2) {
      st.groupId = null;
    } else if (g2.dimensionId !== dimId) {
      leaveGroup(st, g2.id);
    } else if (distance(loc, g2.center) > cfg.leaveRadius) {
      leaveGroup(st, g2.id);
    } else {
      joinGroup(st, g2);
      return;
    }
  }
  let best;
  let bestD = Number.POSITIVE_INFINITY;
  for (const g2 of allGroupRecords()) {
    if (g2.dimensionId !== dimId) continue;
    if (g2.memberIds.length >= cfg.maxGroupSize) continue;
    const d = distance(loc, g2.center);
    if (d <= cfg.joinRadius && d < bestD) {
      best = g2;
      bestD = d;
    }
  }
  if (best) {
    joinGroup(st, best);
    return;
  }
  const g = ensureGroup(nextGroupId(dimId), dimId, loc);
  joinGroup(st, g);
  if (TUNABLE.debugEnabled()) zlog("group formed", { group: g.id, dim: dimId, at: loc });
}
function tickGroups(tick) {
  if (!TUNABLE.groupAIEnabled()) return;
  const interval = Math.max(1, Math.floor(Config.brain.scheduler.groupIntervalTicks));
  if (lastMaintenanceTick < 0 || tick - lastMaintenanceTick >= interval) {
    lastMaintenanceTick = tick;
    const leave = Config.group.groupIdAssignment.leaveRadius;
    for (const g of allGroupRecords()) {
      const keep = [];
      let sx = 0;
      let sy = 0;
      let sz = 0;
      for (const mid of g.memberIds) {
        const other = getState(mid);
        if (!other || other.groupId !== g.id) continue;
        const e = getEntity(mid);
        const loc = safeLocation(e);
        if (!loc) continue;
        const dimId = e ? entityDimensionId(e) : void 0;
        if (dimId && dimId !== g.dimensionId) {
          other.groupId = null;
          continue;
        }
        if (distance(loc, g.center) > leave) {
          other.groupId = null;
          continue;
        }
        keep.push(mid);
        sx += loc.x;
        sy += loc.y;
        sz += loc.z;
      }
      g.memberIds = keep;
      if (keep.length > 0) {
        g.center = { x: sx / keep.length, y: sy / keep.length, z: sz / keep.length };
      }
      g.bloodMoon = isBloodMoon();
      g.theme = currentTheme();
      if (keep.length === 0) {
        dropGroup(g.id);
        if (TUNABLE.debugEnabled()) zlog("group dropped", { group: g.id });
      }
    }
    pruneExpired(tick);
  }
  const reassign = Math.max(1, Math.floor(Config.group.groupIdAssignment.reassignIntervalTicks));
  if (tick === lastReassignTick) return;
  const elapsed = lastReassignTick < 0 ? reassign : Math.max(1, tick - lastReassignTick);
  lastReassignTick = tick;
  const all = allStates();
  if (all.length === 0) return;
  const perCall = Math.min(all.length, Math.max(1, Math.ceil(all.length * elapsed / reassign)));
  for (let i = 0; i < perCall; i++) {
    const other = all[reassignCursor % all.length];
    reassignCursor = (reassignCursor + 1) % all.length;
    if (!other) continue;
    const e = getEntity(other.entityId);
    if (!e) continue;
    assignGroup(other, e);
  }
}
function groupTargetConfidence(g) {
  for (let i = g.messages.length - 1; i >= 0; i--) {
    const m = g.messages[i];
    if (m && m.kind === "target") return clamp(m.confidence, 0, 1);
  }
  return 0;
}
function shareTarget(st, position, dimensionId, confidence) {
  if (!TUNABLE.groupAIEnabled() || !st.groupId) return;
  const si = Config.group.sharedInformation;
  if (!si.shareLastKnownPosition) return;
  const g = getGroupRecord(st.groupId);
  if (!g || g.dimensionId !== dimensionId) return;
  const tick = currentTick();
  recordTarget(g.id, position, dimensionId, tick, confidence, st.entityId);
  const last = g.messages.length > 0 ? g.messages[g.messages.length - 1] : void 0;
  let sharedConf = last && last.kind === "target" ? last.confidence : clamp(Number.isFinite(confidence) ? confidence : 0, 0, MAX_SHARED_CONFIDENCE);
  if (si.shareRealTimeExactPosition === false && sharedConf > MAX_SHARED_CONFIDENCE) {
    sharedConf = MAX_SHARED_CONFIDENCE;
  }
  if (sharedConf <= 0) return;
  const radius = (st.bloodMoonState ? si.shareRadiusBloodMoon : si.shareRadius) * eliteMul(st, "groupShareRadiusMultiplier");
  for (const mid of g.memberIds) {
    if (mid === st.entityId) continue;
    const other = getState(mid);
    if (!other) continue;
    const otherLoc = safeLocation(getEntity(mid));
    if (!otherLoc) continue;
    if (distance(otherLoc, position) > radius) continue;
    if (other.targetConfidence > sharedConf) continue;
    if (other.lastSeenTick > tick) continue;
    const p = { x: position.x, y: position.y, z: position.z };
    other.lastSeenPosition = { x: p.x, y: p.y, z: p.z };
    other.lastSeenTick = tick;
    other.targetConfidence = sharedConf;
    other.lastDimensionId = dimensionId;
    other.lastSeen = {
      position: { x: p.x, y: p.y, z: p.z },
      dimensionId,
      direction: other.lastSeenDirection ?? { x: 0, y: 0, z: 0 },
      tick,
      confidence: sharedConf
    };
  }
}
function shareGap(st, position) {
  if (!TUNABLE.groupAIEnabled() || !st.groupId) return;
  if (!Config.group.sharedInformation.shareOpenedGaps) return;
  const g = getGroupRecord(st.groupId);
  if (!g) return;
  recordGap(g.id, position, currentTick());
}
function bestKnownTarget(st) {
  const si = Config.group.sharedInformation;
  const radius = (st.bloodMoonState ? si.shareRadiusBloodMoon : si.shareRadius) * eliteMul(st, "groupShareRadiusMultiplier");
  const ent = getEntity(st.entityId);
  const loc = safeLocation(ent);
  const dimId = ent ? entityDimensionId(ent) ?? st.lastDimensionId : st.lastDimensionId;
  let best = null;
  let bestTick = -1;
  if (st.lastSeenPosition && st.targetConfidence > 0) {
    best = {
      position: { x: st.lastSeenPosition.x, y: st.lastSeenPosition.y, z: st.lastSeenPosition.z },
      dimensionId: st.lastDimensionId,
      confidence: clamp(st.targetConfidence, 0, 1)
    };
    bestTick = st.lastSeenTick;
  }
  if (TUNABLE.groupAIEnabled() && st.groupId) {
    const g = getGroupRecord(st.groupId);
    if (g && g.lastKnownTarget && g.dimensionId === dimId) {
      const inRange = !loc || distance(loc, g.lastKnownTarget) <= radius;
      if (inRange) {
        const conf = groupTargetConfidence(g);
        const gt = g.lastTargetTick;
        const better = !best || conf > best.confidence || conf === best.confidence && gt > bestTick;
        if (better && conf > 0) {
          best = {
            position: { x: g.lastKnownTarget.x, y: g.lastKnownTarget.y, z: g.lastKnownTarget.z },
            dimensionId: g.dimensionId,
            confidence: conf
          };
          bestTick = gt;
        }
      }
    }
  }
  return best;
}
function spreadOffsetFor(st, target) {
  const sp = Config.group.spread;
  if (!sp.enabled) return { x: 0, y: 0, z: 0 };
  const n = ANGLE_COUNT;
  const { idx, rank } = decodeSlot(st.groupAngle);
  const deg = sp.flankAngleDegrees[idx % n];
  const angleDeg = Number.isFinite(deg) ? deg : 0;
  const myLoc = safeLocation(getEntity(st.entityId));
  const baseAngle = myLoc ? Math.atan2(myLoc.z - target.z, myLoc.x - target.x) : 0;
  const a = baseAngle + angleDeg * Math.PI / 180;
  const minSep = Math.max(0.5, sp.minSeparation);
  const pref = Math.max(minSep, sp.preferredSeparation);
  const r = pref + rank * (minSep + 0.25);
  return { x: Math.cos(a) * r, y: 0, z: Math.sin(a) * r };
}
function constructionBlockCount(st) {
  let n = 0;
  for (const id of Object.keys(st.constructionInventory)) {
    if (!CONSTRUCTION_BLOCKS.includes(id)) continue;
    const c = st.constructionInventory[id];
    if (Number.isFinite(c) && c > 0) n += c;
  }
  return n;
}
function distanceToTarget(st) {
  const target = bestKnownTarget(st);
  if (!target) return Number.POSITIVE_INFINITY;
  const loc = safeLocation(getEntity(st.entityId));
  if (!loc) return Number.POSITIVE_INFINITY;
  return distance(loc, target.position);
}
function roleFor(st) {
  const dr = Config.group.dynamicRoles;
  if (!TUNABLE.groupAIEnabled() || !dr.enabled) return "chaser";
  const byCapability = dr.roleByCapability !== false;
  const byProximity = dr.roleByProximity !== false;
  const close = Math.max(0.5, Config.siege.entrance.doorInteractionRange);
  const far = Math.max(close + 1, Config.building.maxBuildDistance);
  const d = distanceToTarget(st);
  if (!Number.isFinite(d)) return "chaser";
  if (byProximity && d <= close) return "chaser";
  if (byCapability) {
    const arch = archOfState(st);
    if (arch && (arch.combat === "bow" || arch.combat === "crossbow" || arch.combat === "magic")) return "skirmisher";
    if (st.weaponClass === "pickaxe") return "miner";
    if (st.weaponClass === "axe") return "breacher";
    if (constructionBlockCount(st) >= MIN_CONSTRUCTION_BLOCKS) return "builder";
  }
  if (byProximity && d > far) return "flanker";
  return "chaser";
}
function getGroup(id) {
  return getGroupRecord(id);
}
function groupSummary() {
  const records = allGroupRecords();
  const roleCounts = {};
  let grouped = 0;
  let ungrouped = 0;
  for (const st of allStates()) {
    if (st.groupId) grouped++;
    else ungrouped++;
    const r = roleFor(st);
    roleCounts[r] = (roleCounts[r] ?? 0) + 1;
  }
  let members = 0;
  let gaps = 0;
  let built = 0;
  for (const g of records) {
    members += g.memberIds.length;
    gaps += g.openedGaps.length;
    built += g.builtPaths.length;
  }
  return {
    enabled: TUNABLE.groupAIEnabled(),
    groups: records.length,
    members,
    groupedZombies: grouped,
    ungroupedZombies: ungrouped,
    roles: roleCounts,
    openedGaps: gaps,
    builtPaths: built,
    spreadAngles: Config.group.spread.flankAngleDegrees,
    details: records.slice(0, 10).map((g) => ({
      id: g.id,
      dimensionId: g.dimensionId,
      members: g.memberIds.length,
      center: g.center,
      entrances: g.entrances.length,
      gaps: g.openedGaps.length,
      built: g.builtPaths.length,
      messages: g.messages.length,
      lastKnownTarget: g.lastKnownTarget,
      lastTargetTick: g.lastTargetTick,
      bloodMoon: g.bloodMoon,
      theme: g.theme
    }))
  };
}
function runBreach(ctx) {
  const { st, entity, dim: dim2, env, tick } = ctx;
  st.lastActiveTick = tick;
  updateStuck(st, entity);
  if (!Config.siege.breachEnabled) {
    return { result: "ABORTED", reason: "breach-disabled", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  if (st.breachBlocksThisTask >= Config.siege.breach.maxBreachBlocksPerTask) {
    return { result: "FAILED", reason: "breach-budget-exhausted", reassess: true, nextState: "BYPASS" /* BYPASS */ };
  }
  const loc = safeLocation(entity);
  if (!loc) return { result: "FAILED", reason: "no-location", reassess: true };
  if (!env || env.weakPoints.score <= 0) {
    zlog("BREACH reject", {
      why: "no-weak-point",
      hasEnv: !!env,
      score: env ? env.weakPoints.score : null,
      enclosed: env ? env.enclosed : null,
      entrances: env ? env.entrances.length : null
    });
    return { result: "FAILED", reason: "no-weak-point", reassess: true, nextState: "BYPASS" /* BYPASS */ };
  }
  const wp = env.weakPoints;
  const tier = weaponTierOf2(st);
  if (Config.siege.breach.requireToolForMaterial && !canMineWith(wp.blockId, st.weaponClass, tier)) {
    zlog("BREACH reject", {
      why: "tool-insufficient",
      block: wp.blockId,
      weaponClass: st.weaponClass,
      weaponId: st.weaponId,
      tier,
      need: requiredToolTier(wp.blockId)
    });
    return { result: "FAILED", reason: "tool-insufficient", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  const d = distance(loc, wp.position);
  if (d > 3) {
    const r = steerToward(entity, wp.position, { arriveRadius: 2.5, strength: 0.065 });
    if (st.stuckTicks >= Config.siege.bypass.stuckDetectionTicks) {
      return { result: "FAILED", reason: "cannot-reach-weak-point", reassess: true, nextState: "BYPASS" /* BYPASS */ };
    }
    return { result: "RUNNING", reason: "approaching-weak-point" };
  }
  zlog("Stone wall selected", { block: wp.blockId, requiredTier: requiredToolTier(wp.blockId) });
  const broke = tryBreakBlock(dim2, wp.position, st, "breach");
  if (!broke) {
    zlog("BREACH reject", { why: "break-failed", at: wp.position, block: wp.blockId });
    rememberFailure(st, wp.position, "break-failed");
    return { result: "FAILED", reason: "break-failed", reassess: true, nextState: "BYPASS" /* BYPASS */ };
  }
  st.breachBlocksThisTask++;
  zlog("BREACH started", { at: wp.position, block: wp.blockId, count: st.breachBlocksThisTask });
  shareGap(st, wp.position);
  if (st.breachBlocksThisTask % Config.siege.breach.reassessAfterBlocks === 0) {
    return { result: "SUCCESS", reason: "breach-progress", reassess: true, nextState: "REASSESS" /* REASSESS */ };
  }
  return { result: "RUNNING", reason: "breaching" };
}
function weaponTierOf2(st) {
  return tierOfState(st);
}
var dirBias = /* @__PURE__ */ new Map();
function runMine(ctx) {
  const { st, entity, dim: dim2, target, tick } = ctx;
  st.lastActiveTick = tick;
  updateStuck(st, entity);
  if (!Config.mining.enabled) {
    return { result: "ABORTED", reason: "mining-disabled", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  if (!target) {
    return { result: "FAILED", reason: "no-target", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  if (st.mineBlocksThisTask >= Config.mining.maxMineBlocks) {
    return { result: "FAILED", reason: "mine-task-limit", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  if (tick - st.currentTaskStartTick > Config.mining.maxMineTaskTicks) {
    return { result: "FAILED", reason: "mine-task-timeout", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  const loc = safeLocation(entity);
  if (!loc) return { result: "FAILED", reason: "no-location", reassess: true };
  const dist = distance(loc, target);
  if (dist > Config.mining.maxMineDistance) {
    return { result: "FAILED", reason: "target-too-far-to-mine", reassess: true, nextState: "CHASE" /* CHASE */ };
  }
  const tier = weaponTierOf(st.weaponId, st.weaponTier);
  if (Config.mining.requireTool && st.weaponClass !== "pickaxe" && st.weaponClass !== "shovel") {
    zlog("Tool detected", { tool: st.weaponId, suitable: false });
    return { result: "FAILED", reason: "no-mining-tool", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  const bias = dirBias.get(st.entityId) ?? 0;
  const delta = vecSub(target, loc);
  const horiz = Math.sqrt(delta.x * delta.x + delta.z * delta.z);
  const stepY = target.y < loc.y - 1 ? -1 : target.y > loc.y + 1 ? 1 : 0;
  const stepX = horiz > 1 ? delta.x > 0 ? 1 : delta.x < 0 ? -1 : 0 : 0;
  const stepZ = horiz > 1 ? delta.z > 0 ? 1 : delta.z < 0 ? -1 : 0 : 0;
  const candidates = [];
  const base = floorVec(loc);
  const push = (dx, dy, dz) => {
    candidates.push({ x: base.x + dx, y: base.y + dy, z: base.z + dz });
  };
  if (stepY !== 0) push(0, stepY, 0);
  if (stepX !== 0) push(stepX, 0, 0);
  if (stepZ !== 0) push(0, 0, stepZ);
  if (bias !== 0) {
    push(0, -1, 0);
    push(bias, 0, 0);
    push(0, 0, bias);
  }
  push(0, -1, 0);
  push(0, 0, 0);
  let lastReason = "no-candidate";
  for (const c of candidates) {
    const id = safeBlockId(dim2, c);
    if (id === void 0) {
      lastReason = "unloaded";
      continue;
    }
    if (isPassable(id)) continue;
    if (isNeverMine(id)) {
      lastReason = "protected";
      continue;
    }
    if (isDangerBlock(id)) {
      lastReason = "dangerous";
      continue;
    }
    if (!canMineWith(id, st.weaponClass, tier)) {
      lastReason = "tool-insufficient:" + id;
      continue;
    }
    const r2 = attemptBreak(dim2, c, st, "mine");
    if (r2.ok) {
      zlog("MINE step", { block: id, at: c, mined: st.mineBlocksThisTask });
      shareGap(st, c);
      if (st.mineBlocksThisTask % Config.mining.pathSelection.reassessEveryBlocks === 0) {
        return { result: "SUCCESS", reason: "mine-progress", reassess: true, nextState: "REASSESS" /* REASSESS */ };
      }
      return { result: "RUNNING", reason: "mining" };
    }
    lastReason = r2.reason;
  }
  const newBias = bias === 0 ? 1 : bias === 1 ? -1 : 0;
  dirBias.set(st.entityId, newBias);
  if (newBias === 0) {
    dirBias.delete(st.entityId);
    return { result: "FAILED", reason: "no-minable-route:" + lastReason, reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  const r = steerToward(entity, target, { arriveRadius: 2, strength: 0.05 });
  if (st.stuckTicks >= Config.siege.bypass.stuckDetectionTicks) {
    st.stuckTicks = 0;
    return { result: "RUNNING", reason: "mine-reposition", reassess: true };
  }
  return { result: "RUNNING", reason: "mine-repositioning" };
}
function dropMineBias(entityId) {
  dirBias.delete(entityId);
}
var NATURAL_TOPS = [
  "grass_block",
  "dirt",
  "coarse_dirt",
  "podzol",
  "stone",
  "cobblestone",
  "andesite",
  "diorite",
  "granite",
  "deepslate",
  "sand",
  "red_sand",
  "sandstone",
  "gravel",
  "clay",
  "snow",
  "snow_layer",
  "moss_block",
  "mud",
  "terracotta"
];
var BUILT_TOPS = [
  "planks",
  "log",
  "wood",
  "glass",
  "brick",
  "concrete",
  "wool",
  "quartz",
  "prismarine",
  "stone_brick",
  "deepslate_brick",
  "blackstone",
  "copper",
  "iron_block",
  "gold_block",
  "diamond_block",
  "netherite_block",
  "scaffolding",
  "ladder",
  "slab",
  "stairs",
  "fence",
  "wall",
  "trapdoor"
];
function classify(topId) {
  const id = topId.includes(":") ? topId.slice(topId.indexOf(":") + 1) : topId;
  for (const k of BUILT_TOPS) if (id.includes(k)) return "player-route";
  for (const k of NATURAL_TOPS) if (id.includes(k)) return "natural-high-ground";
  return null;
}
function resolveHeightPlan(dim2, from, target, maxRadius, minGain = 2) {
  const radius = Math.max(2, Math.min(Math.floor(maxRadius), 6));
  const fx = Math.floor(from.x);
  const fz = Math.floor(from.z);
  const baseY = Math.floor(from.y);
  const yTop = Math.min(Math.floor(target.y) + 2, baseY + 12);
  const yBottom = baseY - 4;
  const cols = /* @__PURE__ */ new Map();
  const key = (x, z) => x + "," + z;
  for (let dx = -radius; dx <= radius; dx++) {
    for (let dz = -radius; dz <= radius; dz++) {
      if (dx * dx + dz * dz > radius * radius) continue;
      const x = fx + dx;
      const z = fz + dz;
      let topY = Number.NaN;
      let topId = "";
      let ok2 = true;
      for (let y = yTop; y >= yBottom; y--) {
        const id = safeBlockId(dim2, { x, y, z });
        if (id === void 0) {
          ok2 = false;
          break;
        }
        if (!isPassable(id)) {
          topY = y;
          topId = id;
          break;
        }
      }
      if (!ok2) continue;
      cols.set(key(x, z), { x, z, topY: Number.isNaN(topY) ? baseY - 1 : topY, topId });
    }
  }
  const start = cols.get(key(fx, fz));
  const reachable = /* @__PURE__ */ new Set();
  if (start) {
    const q = [start];
    reachable.add(key(start.x, start.z));
    while (q.length > 0) {
      const c = q.shift();
      for (const d of [{ dx: 1, dz: 0 }, { dx: -1, dz: 0 }, { dx: 0, dz: 1 }, { dx: 0, dz: -1 }]) {
        const nk = key(c.x + d.dx, c.z + d.dz);
        if (reachable.has(nk)) continue;
        const n = cols.get(nk);
        if (!n) continue;
        if (n.topY - c.topY > 1) continue;
        reachable.add(nk);
        q.push(n);
      }
    }
  }
  let best = null;
  let bestScore = Number.POSITIVE_INFINITY;
  const tgtX = Math.floor(target.x);
  const tgtZ = Math.floor(target.z);
  let reachCount = 0;
  let selfTop = Number.NaN;
  const selfCol = cols.get(key(fx, fz));
  if (selfCol) selfTop = selfCol.topY;
  for (const c of cols.values()) {
    if (!reachable.has(key(c.x, c.z))) continue;
    reachCount++;
    if (c.x === tgtX && c.z === tgtZ) continue;
    const gain = c.topY - baseY;
    if (gain < minGain) continue;
    if (c.topY > yTop) continue;
    const kind = classify(c.topId);
    if (!kind) continue;
    const standId = safeBlockId(dim2, { x: c.x, y: c.topY + 1, z: c.z });
    const headId = safeBlockId(dim2, { x: c.x, y: c.topY + 2, z: c.z });
    if (standId === void 0 || headId === void 0) continue;
    if (!isPassable(standId) || !isPassable(headId)) continue;
    const dx = c.x - fx;
    const dz = c.z - fz;
    const horiz = Math.sqrt(dx * dx + dz * dz);
    const score = horiz + Math.abs(gain) * 0.5 + (kind === "player-route" ? 1.5 : 0);
    if (score < bestScore) {
      bestScore = score;
      best = {
        kind,
        steerTo: { x: c.x, y: c.topY + 1, z: c.z },
        gain,
        topBlock: c.topId,
        diag: { reach: reachCount, selfTop, cols: cols.size, tgt: { x: tgtX, z: tgtZ } }
      };
    }
  }
  return best;
}
var buildStart = /* @__PURE__ */ new Map();
var lastHeightSolve = /* @__PURE__ */ new Map();
function runBuild(ctx) {
  const { st, entity, dim: dim2, target, tick } = ctx;
  st.lastActiveTick = tick;
  updateStuck(st, entity);
  if (!Config.building.enabled) {
    return { result: "ABORTED", reason: "building-disabled", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  if (!target) {
    return { result: "FAILED", reason: "no-target", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  const loc = safeLocation(entity);
  if (!loc) return { result: "FAILED", reason: "no-location", reassess: true };
  const block = pickBuildBlock(st);
  if (!block || inventoryTotal(st) <= 0) {
    return { result: "FAILED", reason: "no-construction-material", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  if (st.buildBlocksThisTask >= Config.building.maxPlaceBlocks) {
    return { result: "FAILED", reason: "build-task-limit", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  if (tick - st.currentTaskStartTick > Config.building.maxBuildTaskTicks) {
    return { result: "FAILED", reason: "build-task-timeout", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  let startY = buildStart.get(st.entityId);
  if (startY === void 0) {
    startY = loc.y;
    buildStart.set(st.entityId, startY);
  }
  if (loc.y - startY > Config.building.maxBuildHeight) {
    buildStart.delete(st.entityId);
    return { result: "FAILED", reason: "max-build-height", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  if (target.y - loc.y <= 1.5) {
    buildStart.delete(st.entityId);
    return { result: "SUCCESS", reason: "height-resolved", reassess: true, nextState: "CHASE" /* CHASE */ };
  }
  const lastSolve = lastHeightSolve.get(st.entityId) ?? -9999;
  if (st.currentState === "BUILD" /* BUILD */ && st.buildBlocksThisTask === 0 && tick - lastSolve >= 40) {
    lastHeightSolve.set(st.entityId, tick);
    const plan2 = safe(
      () => resolveHeightPlan(dim2, loc, target, Config.building.maxBuildDistance),
      "heightSolver"
    );
    if (plan2.ok && plan2.value) {
      const p = plan2.value;
      steerToward(
        entity,
        { x: p.steerTo.x, y: p.steerTo.y + 1, z: p.steerTo.z },
        { arriveRadius: 1.2, strength: 0.07, allowVertical: true }
      );
      zlog("BUILD height-plan", {
        kind: p.kind,
        gain: p.gain,
        top: p.topBlock,
        at: { x: p.steerTo.x, z: p.steerTo.z },
        diag: p.diag,
        self: { x: Math.floor(loc.x), y: Math.floor(loc.y), z: Math.floor(loc.z) }
      });
      return { result: "RUNNING", reason: "height-plan:" + p.kind };
    }
  }
  const feet = floorVec(loc);
  if (hasStepUp(dim2, feet, loc, target)) {
    return { result: "SUCCESS", reason: "step-up-already-available", reassess: true, nextState: "CHASE" /* CHASE */ };
  }
  const pillarLoc = { x: feet.x, y: feet.y - 1, z: feet.z };
  const here = safeBlockId(dim2, pillarLoc);
  if (here !== void 0 && !isPassable(here)) {
    const rawDx = target.x - loc.x;
    const rawDz = target.z - loc.z;
    const sx = Math.abs(rawDx) > 0.5 ? rawDx > 0 ? 1 : -1 : 0;
    const sz = Math.abs(rawDz) > 0.5 ? rawDz > 0 ? 1 : -1 : 0;
    const dirs = [];
    if (sx !== 0 || sz !== 0) dirs.push({ dx: sx, dz: sz });
    const perp1 = sz !== 0 ? { dx: 1, dz: 0 } : { dx: 0, dz: 1 };
    const perp2 = sz !== 0 ? { dx: -1, dz: 0 } : { dx: 0, dz: -1 };
    dirs.push(perp1, perp2);
    if (sx !== 0 || sz !== 0) dirs.push({ dx: -sx, dz: -sz });
    for (const d of dirs) {
      const stepLoc = { x: feet.x + d.dx, y: feet.y, z: feet.z + d.dz };
      const above = { x: feet.x + d.dx, y: feet.y + 1, z: feet.z + d.dz };
      const below = { x: feet.x + d.dx, y: feet.y - 1, z: feet.z + d.dz };
      const sId = safeBlockId(dim2, stepLoc);
      const aId = safeBlockId(dim2, above);
      const bId = safeBlockId(dim2, below);
      if (sId === void 0 || aId === void 0 || bId === void 0) {
        zlog("BUILD stair reject", { dir: d, why: "unloaded" });
        continue;
      }
      if (!isPassable(sId) || !isPassable(aId) || isPassable(bId)) {
        zlog("BUILD stair reject", { dir: d, why: "not-passable", sId, aId, bId });
        continue;
      }
      const r2 = attemptPlace(dim2, stepLoc, block, st);
      if (r2.ok) {
        zlog("BUILD stair", { block, at: stepLoc, placed: st.buildBlocksThisTask, dir: d });
        steerToward(
          entity,
          { x: stepLoc.x + 0.5, y: stepLoc.y + 1.2, z: stepLoc.z + 0.5 },
          { arriveRadius: 0.6, strength: 0.08, allowVertical: true }
        );
        if (st.buildBlocksThisTask % Config.building.rules.maxBlocksWithoutReassess === 0) {
          return { result: "SUCCESS", reason: "build-progress", reassess: true, nextState: "REASSESS" /* REASSESS */ };
        }
        return { result: "RUNNING", reason: "building-stair" };
      }
      zlog("BUILD stair blocked", { dir: d, reason: r2.reason });
      return { result: "RUNNING", reason: "stair-blocked:" + r2.reason };
    }
  }
  if (here !== void 0 && isPassable(here)) {
    const r2 = attemptPlace(dim2, pillarLoc, block, st);
    if (r2.ok) {
      zlog("BUILD pillar", { block, at: pillarLoc, placed: st.buildBlocksThisTask });
      steerToward(entity, { x: loc.x, y: loc.y + 1.2, z: loc.z }, { arriveRadius: 0.5, strength: 0.05, allowVertical: true });
      if (st.buildBlocksThisTask % Config.building.rules.maxBlocksWithoutReassess === 0) {
        return { result: "SUCCESS", reason: "build-progress", reassess: true, nextState: "REASSESS" /* REASSESS */ };
      }
      return { result: "RUNNING", reason: "building-pillar" };
    }
    return { result: "RUNNING", reason: "place-blocked:" + r2.reason };
  }
  const r = steerToward(entity, { x: target.x, y: loc.y, z: target.z }, { arriveRadius: 2, strength: 0.06 });
  if (st.stuckTicks >= Config.siege.bypass.stuckDetectionTicks) {
    buildStart.delete(st.entityId);
    return { result: "FAILED", reason: "cannot-position-to-build", reassess: true, nextState: "BYPASS" /* BYPASS */ };
  }
  return { result: "RUNNING", reason: "repositioning-to-build" };
}
function dropBuildState(entityId) {
  buildStart.delete(entityId);
  lastHeightSolve.delete(entityId);
}
function hasStepUp(dim2, feet, loc, target) {
  const dx = target.x - loc.x;
  const dz = target.z - loc.z;
  const sx = dx > 0.5 ? 1 : dx < -0.5 ? -1 : 0;
  const sz = dz > 0.5 ? 1 : dz < -0.5 ? -1 : 0;
  if (sx === 0 && sz === 0) return false;
  const aheadId = safeBlockId(dim2, { x: feet.x + sx, y: feet.y, z: feet.z + sz });
  const aheadUpId = safeBlockId(dim2, { x: feet.x + sx, y: feet.y + 1, z: feet.z + sz });
  const belowId = safeBlockId(dim2, { x: feet.x + sx, y: feet.y - 1, z: feet.z + sz });
  if (aheadId === void 0 || aheadUpId === void 0 || belowId === void 0) return false;
  return isPassable(aheadId) && isPassable(aheadUpId) && !isPassable(belowId);
}
var interceptTargets = /* @__PURE__ */ new Map();
function runIntercept(ctx) {
  const { st, entity, target, tick } = ctx;
  st.lastActiveTick = tick;
  updateStuck(st, entity);
  if (!Config.targeting.tracking.interceptEnabled) {
    return { result: "ABORTED", reason: "intercept-disabled", reassess: true, nextState: "CHASE" /* CHASE */ };
  }
  if (!target) {
    return { result: "FAILED", reason: "no-target", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  const loc = safeLocation(entity);
  if (!loc) return { result: "FAILED", reason: "no-location", reassess: true };
  let rec = interceptTargets.get(st.entityId);
  if (!rec || tick - rec.startedTick > 400) {
    const dir = st.lastSeenDirection ?? normalize({ x: target.x - loc.x, y: 0, z: target.z - loc.z });
    const lead = 12;
    const ahead = {
      x: target.x + dir.x * lead,
      y: target.y,
      z: target.z + dir.z * lead
    };
    const point = spreadOffsetFor(st, ahead);
    rec = { point, startedTick: tick };
    interceptTargets.set(st.entityId, rec);
    zlog("Intercept waypoint set", { point: rec.point, angle: st.groupAngle });
  }
  const d = distance(loc, rec.point);
  if (d <= 2.5) {
    interceptTargets.delete(st.entityId);
    return { result: "SUCCESS", reason: "intercept-position-reached", reassess: true, nextState: "CHASE" /* CHASE */ };
  }
  steerToward(entity, rec.point, { arriveRadius: 2, strength: 0.075 });
  if (st.stuckTicks >= Config.siege.bypass.stuckDetectionTicks) {
    interceptTargets.delete(st.entityId);
    return { result: "FAILED", reason: "intercept-blocked", reassess: true, nextState: "BYPASS" /* BYPASS */ };
  }
  return { result: "RUNNING", reason: "intercepting" };
}
function dropIntercept(entityId) {
  interceptTargets.delete(entityId);
}
function runRegroup(ctx) {
  const { st, entity, tick } = ctx;
  st.lastActiveTick = tick;
  updateStuck(st, entity);
  const loc = safeLocation(entity);
  if (!loc) return { result: "FAILED", reason: "no-location", reassess: true };
  const shared = bestKnownTarget(st);
  if (shared && shared.confidence >= Config.targeting.confidence.searchThreshold) {
    const d2 = distance(loc, shared.position);
    if (d2 > 3) {
      steerToward(entity, shared.position, { arriveRadius: 3, strength: 0.07 });
      if (st.stuckTicks >= Config.siege.bypass.stuckDetectionTicks) {
        return { result: "FAILED", reason: "regroup-blocked", reassess: true, nextState: "SEARCH" /* SEARCH */ };
      }
      return { result: "RUNNING", reason: "regrouping-to-shared-target" };
    }
    return { result: "SUCCESS", reason: "regrouped-at-shared-target", reassess: true, nextState: "CHASE" /* CHASE */ };
  }
  const group = st.groupId ? getGroup(st.groupId) : void 0;
  if (!group) {
    return { result: "FAILED", reason: "no-group", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  const d = distance(loc, group.center);
  if (d <= 4) {
    return { result: "SUCCESS", reason: "regrouped", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  steerToward(entity, group.center, { arriveRadius: 3.5, strength: 0.07 });
  if (st.stuckTicks >= Config.siege.bypass.stuckDetectionTicks) {
    return { result: "FAILED", reason: "regroup-blocked", reassess: true, nextState: "SEARCH" /* SEARCH */ };
  }
  return { result: "RUNNING", reason: "regrouping" };
}
function execute(ctx) {
  const st = ctx.st;
  const state = st.currentState;
  Stats.actionsStarted++;
  if (st.currentAction !== state) {
    st.currentAction = state;
    st.currentTaskStartTick = ctx.tick;
    if (state === "MINE" /* MINE */) st.mineBlocksThisTask = 0;
    if (state === "BUILD" /* BUILD */) st.buildBlocksThisTask = 0;
    if (state === "BREACH" /* BREACH */) st.breachBlocksThisTask = 0;
  }
  let out;
  try {
    out = dispatch(ctx, state);
  } catch (e) {
    out = { result: "FAILED", reason: "exception:" + String(e), reassess: true };
  }
  if (out.result === "SUCCESS") Stats.actionsSucceeded++;
  else if (out.result === "FAILED" || out.result === "ABORTED") Stats.actionsFailed++;
  if (out.reassess || out.result === "FAILED" || out.result === "SUCCESS" || out.result === "ABORTED") {
    st.reassessReason = out.reason;
    Stats.reassessCount++;
    if (out.nextState) {
      st.currentState = out.nextState;
      st.currentAction = "none";
    } else {
      st.currentState = "REASSESS" /* REASSESS */;
    }
  }
  if (out.result === "FAILED" && ctx.st.debugEnabled) {
    zlog("Action failed", { state, reason: out.reason });
  }
  return out;
}
function dispatch(ctx, state) {
  switch (state) {
    case "DETECT" /* DETECT */:
    case "TRACK" /* TRACK */:
    case "CHASE" /* CHASE */:
      return runChase(ctx);
    case "BYPASS" /* BYPASS */:
      return runBypass(ctx);
    case "SEARCH" /* SEARCH */:
      return runSearch(ctx);
    case "ENTER" /* ENTER */:
      return runEnter(ctx);
    case "BREACH" /* BREACH */:
      return runBreach(ctx);
    case "MINE" /* MINE */:
      return runMine(ctx);
    case "BUILD" /* BUILD */:
      return runBuild(ctx);
    case "KITE" /* KITE */:
      return runKite(ctx);
    case "INTERCEPT" /* INTERCEPT */:
      return runIntercept(ctx);
    case "REGROUP" /* REGROUP */:
      return runRegroup(ctx);
    case "IDLE" /* IDLE */:
    case "PATROL" /* PATROL */:
      return { result: "RUNNING", reason: "native-ai-idle" };
    case "REASSESS" /* REASSESS */:
      return { result: "SUCCESS", reason: "reassessed", reassess: true };
    case "ENTER" /* ENTER */:
    default:
      return { result: "RUNNING", reason: "unhandled-state:" + state };
  }
}
function needsReassess(st, input) {
  const cfg = Config.brain.reassess;
  const sinceLast = input.tick - st.lastReassessTick;
  if (sinceLast < cfg.minTicksBetweenReassess) return false;
  if (cfg.onActionComplete && input.actionJustFinished) return true;
  if (cfg.onTargetMoved > 0 && input.targetMoved >= cfg.onTargetMoved) return true;
  if (cfg.onEnvironmentChange && input.environmentChanged) return true;
  if (cfg.onBloodMoonStart && input.bloodMoonStarted) return true;
  return false;
}
function markReassessed(st, tick, reason) {
  st.lastReassessTick = tick;
  st.reassessReason = reason;
  Stats.reassessCount++;
  if (st.debugEnabled) zlog("Reassessing", { reason, from: st.currentState });
}
function leaveReassess(st, tick) {
  st.currentState = "PLAN" /* PLAN */;
  st.currentAction = "none";
  st.currentTaskStartTick = tick;
  st.stuckTicks = 0;
}
var ZE_ACT_TAG = "ze_act";
var envCache = /* @__PURE__ */ new Map();
function dropBrainCaches(entityId) {
  envCache.delete(entityId);
}
function envCacheSize() {
  return envCache.size;
}
function tickZombie(entity, rng2, phase = 0, force = false) {
  const st = getState(entity.id);
  if (!st) return;
  const tick = currentTick();
  st.lastActiveTick = tick;
  if (!force && staggerPhase(entity.id, Config.brain.scheduler.staggerModulo) !== phase) {
    return;
  }
  try {
    Stats.brainInvocations++;
    runBrain(entity, st, tick, rng2);
    recordSuccess(st);
  } catch (e) {
    recordError(st, e);
    zlog("Brain error isolated", { entity: st.entityId, error: String(e), errors: st.errorCount });
  }
}
function runBrain(entity, st, tick, rng2) {
  const dim2 = entity.dimension;
  const loc = safeLocation(entity);
  if (!loc) return;
  const range = st.bloodMoonState ? Config.perception.sightRangeBloodMoon : Config.perception.sightRange;
  const seen = acquireTarget(dim2, entity, st, range);
  let targetMoved = 0;
  if (seen) {
    const dir = sightDirection(loc, seen.position);
    targetMoved = distance(st.lastSeenPosition ?? seen.position, seen.position);
    rememberSight(st, seen.position, dim2.id, dir);
    if (seen.viaPrecise) st.targetConfidence = seen.confidence;
    st.targetId = seen.playerId;
    if (Config.group.enabled) {
      shareTarget(st, seen.position, dim2.id, st.targetConfidence);
    }
    st.currentState = st.currentState === "IDLE" /* IDLE */ || st.currentState === "PATROL" /* PATROL */ ? "DETECT" /* DETECT */ : st.currentState;
    if (st.debugEnabled) {
      zlog("Target acquired", {
        confidence: Number(st.targetConfidence.toFixed(2)),
        distance: Number(seen.distance.toFixed(1)),
        mode: targetingMode(),
        viaPrecise: seen.viaPrecise
      });
    }
  } else {
    decayConfidence(st, tick);
    st.targetId = null;
  }
  let env = envCache.get(st.entityId) ?? null;
  const needScan = !env || tick - env.tick >= Config.perception.environmentScan.scanIntervalTicks;
  if (needScan && (st.currentState === "ENTER" /* ENTER */ || st.currentState === "BREACH" /* BREACH */ || st.currentState === "PLAN" /* PLAN */ || st.currentState === "REASSESS" /* REASSESS */ || st.currentState === "SEARCH" /* SEARCH */ || env === null)) {
    const scanCenter = estimatedTargetPosition(st) ?? loc;
    env = scanEnvironment(dim2, scanCenter, tick, st.weaponClass);
    envCache.set(st.entityId, env);
  }
  if (Config.group.enabled && st.groupId === null) {
    assignGroup(st, entity);
  }
  const bm = isBloodMoon();
  if (bm !== st.bloodMoonState) {
    st.bloodMoonState = bm;
    if (bm) {
      st.reassessReason = "blood-moon-start";
      st.currentState = "REASSESS" /* REASSESS */;
    }
  }
  let target = estimatedTargetPosition(st);
  if (!target) {
    const shared = bestKnownTarget(st);
    if (shared) target = shared.position;
  }
  const envChanged = env !== null && env.tick === tick;
  if (needsReassess(st, {
    tick,
    targetMoved,
    environmentChanged: envChanged && st.currentState !== "REASSESS" /* REASSESS */,
    bloodMoonStarted: st.reassessReason === "blood-moon-start",
    actionJustFinished: st.currentState === "REASSESS" /* REASSESS */
  })) {
    markReassessed(st, tick, st.reassessReason);
    leaveReassess(st, tick);
  }
  const ctx = {
    st,
    entity,
    dim: dim2,
    tick,
    target,
    env,
    rng: rng2,
    multiplier: bloodMoonMultiplier
  };
  if (st.currentState === "PLAN" /* PLAN */ || st.currentState === "IDLE" /* IDLE */ || st.currentState === "PATROL" /* PATROL */ || st.currentState === "DETECT" /* DETECT */) {
    const p = plan(ctx);
    st.currentState = p.state;
    st.currentGoal = p.goal;
    if (st.debugEnabled && p.why) zlog("Planned", { state: p.state, why: p.why });
  }
  updateStuck(st, entity);
  execute(ctx);
  try {
    const wantAct = st.currentState === "BUILD" /* BUILD */ || st.currentState === "BREACH" /* BREACH */ || st.currentState === "MINE" /* MINE */;
    const has = entity.hasTag(ZE_ACT_TAG);
    if (wantAct && !has) entity.addTag(ZE_ACT_TAG);
    else if (!wantAct && has) entity.removeTag(ZE_ACT_TAG);
  } catch (e) {
  }
  if (tick % 200 === staggerPhase(st.entityId, 200)) {
    persistKeyState(st, entity);
  }
  if (tick % Config.brain.budgets.budgetRefillTicks === 0) {
    st.miningBudget = Config.brain.budgets.mineBudget;
    st.buildingBudget = Config.brain.budgets.buildBudget;
    st.searchBudget = Config.brain.budgets.searchBudget;
    st.pathBudget = Config.brain.budgets.pathBudget;
  }
}
import { EnchantmentTypes } from "@minecraft/server";
var ARMOR_CATEGORY = {
  head: "helmet",
  chest: "chestplate",
  legs: "leggings",
  feet: "boots"
};
function isForbiddenMaterial(material) {
  if (!material) return false;
  const m = String(material).toLowerCase();
  const list = Config.equipment.forbiddenMaterials;
  for (const f of list) {
    if (m === f.toLowerCase() || m.includes(f.toLowerCase())) return true;
  }
  return false;
}
function enchantCategoryForPiece(slot) {
  return ARMOR_CATEGORY[slot] ?? "helmet";
}
function rollEnchantCount(rng2) {
  const dist = Config.enchantments.countDistribution;
  const picked = rng2.weighted(dist.map((d) => ({ v: d.count, w: d.chance })));
  const n = Math.floor(Number(picked));
  if (!Number.isFinite(n) || n < 1) return 1;
  return n > 4 ? 4 : n;
}
function poolForCategory(category) {
  const pools = Config.enchantments.enchantmentPool;
  const raw = pools[category];
  if (!raw) return [];
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const id of raw) {
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push(id);
  }
  return out;
}
function maxLevelOf(id) {
  const table = Config.enchantments.maxLevelByEnchantment;
  const v = table[id];
  return Number.isFinite(v) && v >= 1 ? Math.floor(v) : 1;
}
function exclusiveGroupOf(id) {
  const groups2 = Config.enchantments.mutuallyExclusiveGroups;
  for (const g of groups2) {
    if (g.includes(id)) return g;
  }
  return void 0;
}
function pickEnchantments(category, count, rng2) {
  const want = Math.max(0, Math.floor(count));
  const out = [];
  if (want === 0) return out;
  const pool = poolForCategory(category);
  if (pool.length === 0) return out;
  const maxAttemptsCfg = Config.enchantments.maxAttemptsPerItem;
  const maxAttempts = Number.isFinite(maxAttemptsCfg) && maxAttemptsCfg > 0 ? Math.floor(maxAttemptsCfg) : 12;
  const used = /* @__PURE__ */ new Set();
  const blocked = /* @__PURE__ */ new Set();
  for (let attempt = 0; attempt < maxAttempts && out.length < want; attempt++) {
    const candidates = pool.filter((id2) => !used.has(id2) && !blocked.has(id2));
    if (candidates.length === 0) break;
    const id = rng2.pick(candidates);
    used.add(id);
    const group = exclusiveGroupOf(id);
    if (group) {
      for (const member of group) {
        if (member !== id) blocked.add(member);
      }
    }
    out.push({ id, level: rng2.int(1, maxLevelOf(id)) });
  }
  return out;
}
function rollEnchantPlan(category, material, rng2) {
  const forced2 = [];
  if (material === "diamond") {
    const enabled = Config.equipment.diamondCurseEnabled;
    if (enabled) {
      const curses = Config.equipment.diamondForcedCurses;
      for (const c of curses) forced2.push(c);
    }
  }
  const rateCfg = Config.enchantments.enchantmentRate;
  const rate = Number.isFinite(rateCfg) ? rateCfg : 0.6;
  let enchantments = [];
  if (Config.enchantments.enabled && rng2.chance(rate)) {
    enchantments = pickEnchantments(category, rollEnchantCount(rng2), rng2);
  }
  return {
    enchanted: enchantments.length > 0,
    enchantments,
    forcedCurses: forced2
  };
}
var BEDROCK_SLOT = {
  head: "slot.armor.head",
  chest: "slot.armor.chest",
  legs: "slot.armor.legs",
  feet: "slot.armor.feet"
};
var WEAPON_TO_EQUIP_MATERIAL = {
  wooden: "leather",
  stone: "chainmail",
  golden: "golden",
  iron: "iron",
  diamond: "diamond"
};
function weaponMaterialToEquipKey(material) {
  return WEAPON_TO_EQUIP_MATERIAL[material] ?? material;
}
function weaponTable() {
  const list = Config.weapons.weapons;
  return Array.isArray(list) ? list : [];
}
function weaponCommand(itemId) {
  return "replaceitem entity @s slot.weapon.mainhand 0 " + itemId + " 1";
}
function isForbidden(material) {
  const list = Config.equipment.forbiddenMaterials;
  const m = String(material).toLowerCase();
  for (const f of list) {
    if (m === f.toLowerCase() || m.includes(f.toLowerCase())) return true;
  }
  return false;
}
function rollWeapon(stage, rng2, opts) {
  if (!Config.weapons.enabled) return null;
  const rateCfg = Config.weapons.weaponRate;
  const rate = Number.isFinite(rateCfg) ? rateCfg : 0.85;
  if (!rng2.chance(rate)) return null;
  const all = weaponTable().filter((w) => !isForbidden(w.material));
  if (all.length === 0) return null;
  let candidates = all;
  const forceClass = opts?.forceClass;
  const biasClass = opts?.classBias;
  if (forceClass) {
    const forced2 = all.filter((w) => w.class === forceClass);
    if (forced2.length > 0) candidates = forced2;
  } else if (biasClass && rng2.chance(0.75)) {
    const biased = all.filter((w) => w.class === biasClass);
    if (biased.length > 0) candidates = biased;
  }
  const weights = opts?.materialWeights ?? materialWeightsForStage(stage);
  const pick = rng2.weighted(
    candidates.map((w) => {
      const mw = weights[weaponMaterialToEquipKey(w.material)];
      const materialWeight = Number.isFinite(mw) && mw > 0 ? mw : 1;
      const base = Number.isFinite(w.weight) && w.weight > 0 ? w.weight : 1;
      return { v: w, w: base * materialWeight };
    })
  );
  return {
    itemId: pick.id,
    class: pick.class,
    material: pick.material,
    tier: pick.tier,
    enchanted: false,
    enchantments: []
  };
}
function materialWeightsForStage(stage) {
  const table = Config.equipment.materialWeightsByStage;
  const row = table[stage];
  return row ?? {};
}
var FALLBACK_SLOT_ORDER = ["head", "chest", "legs", "feet"];
function materialsTable() {
  return Config.equipment.materials;
}
function slotOrder() {
  const order = Config.equipment.slotOrder;
  return Array.isArray(order) && order.length > 0 ? order : FALLBACK_SLOT_ORDER;
}
function materialExists(material) {
  return Object.prototype.hasOwnProperty.call(materialsTable(), material);
}
function stageIdForDay(day) {
  const stages = Config.progression.stages;
  if (!Array.isArray(stages) || stages.length === 0) return "day_1_7";
  const d = Number.isFinite(day) ? Math.floor(day) : 1;
  for (const s of stages) {
    if (d >= s.minDay && d <= s.maxDay) return s.id;
  }
  if (d < stages[0].minDay) return stages[0].id;
  return stages[stages.length - 1].id;
}
function rollPieceCount(rng2) {
  const dist = Config.equipment.pieceCountDistribution;
  const picked = rng2.weighted(dist.map((d) => ({ v: d.pieces, w: d.chance })));
  const n = Math.floor(Number(picked));
  if (!Number.isFinite(n) || n < 0) return 0;
  return n > 4 ? 4 : n;
}
function resolveMaterialWeights(stage, bloodMoon, elite) {
  const table = Config.equipment.materialWeightsByStage;
  if (elite !== null && table["elite"]) return table["elite"];
  if (bloodMoon && table["bloodmoon"]) return table["bloodmoon"];
  return table[stage] ?? table["day_1_7"] ?? {};
}
function pickMaterial(weights, rng2) {
  const entries = Object.keys(weights);
  if (entries.length === 0) return "iron";
  const picked = String(rng2.weighted(entries.map((m) => ({ v: m, w: weights[m] }))));
  if (isForbiddenMaterial(picked)) return "iron";
  if (!materialExists(picked)) {
    const known = Object.keys(materialsTable());
    return known.length > 0 ? known[0] : "leather";
  }
  return picked;
}
function itemIdForPiece(material, slot) {
  const mats = materialsTable();
  const def = mats[material];
  const prefix = def && def.itemPrefix ? def.itemPrefix : material;
  const suffixTable = Config.equipment.slotItemSuffix;
  const suffix = suffixTable[slot] ?? "helmet";
  return "minecraft:" + prefix + "_" + suffix;
}
function generateLoadout(opts) {
  const { rng: rng2 } = opts;
  const eliteId = opts.elite ?? null;
  const isElite = eliteId !== null;
  const stage = opts.stage;
  const order = slotOrder();
  const pieceCount = Math.min(rollPieceCount(rng2), order.length);
  const slots = order.slice(0, pieceCount);
  const weights = resolveMaterialWeights(stage, opts.bloodMoon, eliteId);
  const pieces = [];
  for (const slot of slots) {
    const material = pickMaterial(weights, rng2);
    const category = enchantCategoryForPiece(slot);
    const plan2 = rollEnchantPlan(category, material, rng2);
    pieces.push({
      slot,
      itemId: itemIdForPiece(material, slot),
      material,
      enchanted: plan2.enchanted,
      enchantments: plan2.enchantments,
      forcedCurses: plan2.forcedCurses
    });
  }
  const weapon = rollWeapon(stage, rng2, {
    forceClass: eliteWeaponClass(eliteId),
    materialWeights: weights
  });
  return {
    pieces,
    weapon,
    pieceCount: pieces.length,
    hasAnyEquipment: pieces.length > 0 || weapon !== null,
    stage,
    elite: eliteId
  };
}
function eliteWeaponClass(eliteId) {
  if (!eliteId) return void 0;
  const types = Config.elite.types;
  for (const t of types) {
    if (t.id !== eliteId || !t.weapon) continue;
    const tail = t.weapon.split(":")[1] ?? "";
    if (tail.endsWith("_sword")) return "sword";
    if (tail.endsWith("_axe")) return "axe";
    if (tail.endsWith("_pickaxe")) return "pickaxe";
    if (tail.endsWith("_shovel")) return "shovel";
    if (tail.endsWith("_spear")) return "spear";
    if (tail.includes("trident")) return "trident";
    return void 0;
  }
  return void 0;
}
function loadoutToCommands(loadout) {
  const out = [];
  for (const p of loadout.pieces) {
    const slotName = BEDROCK_SLOT[p.slot];
    out.push({
      slot: slotName,
      itemId: p.itemId,
      command: "replaceitem entity @s " + slotName + " 0 " + p.itemId + " 1"
    });
  }
  if (loadout.weapon) {
    out.push({
      slot: "slot.weapon.mainhand",
      itemId: loadout.weapon.itemId,
      command: weaponCommand(loadout.weapon.itemId)
    });
  }
  return out;
}
var stats = {
  generated: 0,
  pieceCountHistogram: { "0": 0, "1": 0, "2": 0, "3": 0, "4": 0 },
  enchantedPieces: 0,
  unenchantedPieces: 0,
  forbiddenMaterialViolations: 0,
  diamondPieces: 0,
  diamondWithBothCurses: 0,
  diamondCurseViolations: 0,
  weaponGenerated: 0,
  weaponNone: 0,
  byMaterial: {},
  byStage: {}
};
function recordLoadout(loadout) {
  stats.generated++;
  const k = String(Math.min(4, Math.max(0, loadout.pieceCount)));
  stats.pieceCountHistogram[k] = (stats.pieceCountHistogram[k] ?? 0) + 1;
  stats.byStage[loadout.stage] = (stats.byStage[loadout.stage] ?? 0) + 1;
  for (const p of loadout.pieces) {
    stats.byMaterial[p.material] = (stats.byMaterial[p.material] ?? 0) + 1;
    if (p.enchanted) stats.enchantedPieces++;
    else stats.unenchantedPieces++;
    if (Config.equipment.forbiddenMaterials.includes(p.material)) {
      stats.forbiddenMaterialViolations++;
    }
    if (p.material === "diamond") {
      stats.diamondPieces++;
      const hasBinding = p.enchantments.some((e) => e.id === "binding") || p.forcedCurses.includes("binding");
      const hasVanishing = p.enchantments.some((e) => e.id === "vanishing") || p.forcedCurses.includes("vanishing");
      if (hasBinding && hasVanishing) stats.diamondWithBothCurses++;
      else stats.diamondCurseViolations++;
    }
  }
  if (loadout.weapon) {
    stats.weaponGenerated++;
    stats.byMaterial[loadout.weapon.material] = (stats.byMaterial[loadout.weapon.material] ?? 0) + 1;
    if (Config.equipment.forbiddenMaterials.includes(loadout.weapon.material)) {
      stats.forbiddenMaterialViolations++;
    }
  } else {
    stats.weaponNone++;
  }
}
function recordLoadoutEvent(profile, armorProfile, weaponClass) {
  stats.generated++;
  stats.byStage[armorProfile] = (stats.byStage[armorProfile] ?? 0) + 1;
  const key = armorProfile + "/" + weaponClass;
  stats.byMaterial[key] = (stats.byMaterial[key] ?? 0) + 1;
  void profile;
}
function equipmentStats() {
  return { ...stats, pieceCountHistogram: { ...stats.pieceCountHistogram }, byMaterial: { ...stats.byMaterial }, byStage: { ...stats.byStage } };
}
function loadoutSummary() {
  const s = stats;
  const total = Math.max(1, s.generated);
  const pieceDist = {};
  for (const k of Object.keys(s.pieceCountHistogram)) {
    pieceDist[k] = (s.pieceCountHistogram[k] / total * 100).toFixed(2) + "%";
  }
  const enchantTotal = s.enchantedPieces + s.unenchantedPieces;
  return {
    generated: s.generated,
    pieceCountPercent: pieceDist,
    enchantRatePercent: enchantTotal > 0 ? (s.enchantedPieces / enchantTotal * 100).toFixed(2) + "%" : "n/a",
    forbiddenMaterialViolations: s.forbiddenMaterialViolations,
    diamondPieces: s.diamondPieces,
    diamondCurseViolations: s.diamondCurseViolations,
    weaponGenerated: s.weaponGenerated,
    weaponNone: s.weaponNone,
    byMaterial: s.byMaterial,
    byStage: s.byStage
  };
}
function resetEquipmentStats() {
  stats.generated = 0;
  stats.pieceCountHistogram = { "0": 0, "1": 0, "2": 0, "3": 0, "4": 0 };
  stats.enchantedPieces = 0;
  stats.unenchantedPieces = 0;
  stats.forbiddenMaterialViolations = 0;
  stats.diamondPieces = 0;
  stats.diamondWithBothCurses = 0;
  stats.diamondCurseViolations = 0;
  stats.weaponGenerated = 0;
  stats.weaponNone = 0;
  stats.byMaterial = {};
  stats.byStage = {};
}
var ELITE_TAG = "ze:elite";
var ELITE_BOSS_TAG = "ze:elite:boss";
var SLOT_MAINHAND = "slot.weapon.mainhand";
var SLOT_OFFHAND = "slot.weapon.offhand";
var ARMOR_SLOT_PREFIX = "slot.armor.";
var ELITE_PROXIMITY_RADIUS = Config.group.groupIdAssignment.joinRadius;
var ELITE_TYPES = Config.elite.types;
function eliteTypeById(id) {
  return ELITE_TYPES.find((t) => t.id === id);
}
function eliteTagFor(id) {
  return ELITE_TAG + ":" + id;
}
function clampRate(v) {
  return clamp(Number.isFinite(v) ? v : 0, 0, 1);
}
function isBossGrade(rec) {
  return typeof rec.mount === "string" && rec.mount.length > 0;
}
function eliteRateFor(stage, bloodMoon) {
  if (!Config.elite.enabled) return 0;
  if (bloodMoon) return clampRate(TUNABLE.eliteSpawnRate());
  switch (stage) {
    case "day_1_7":
      return clampRate(Config.elite.spawnRateDay1to7);
    case "day_8_20":
      return clampRate(Config.elite.spawnRateDay8to20);
    case "day_21_40":
      return clampRate(Config.elite.spawnRateDay21to40);
    case "day_41_plus":
      return clampRate(Config.elite.spawnRateDay41plus);
    default: {
      const mods = Config.progression.stageModifiers;
      const m = mods[stage];
      return clampRate(m && typeof m.eliteRate === "number" ? m.eliteRate : 0);
    }
  }
}
function rollElite(stage, bloodMoon, rng2) {
  if (!Config.elite.enabled) return null;
  const rate = eliteRateFor(stage, bloodMoon);
  if (rate <= 0) return null;
  if (!rng2.chance(rate)) return null;
  const pool = ELITE_TYPES.filter((t) => t.requireBloodMoon !== true || bloodMoon);
  if (pool.length === 0) return null;
  const picked = rng2.weighted(
    pool.map((t) => ({ v: t.id, w: typeof t.weight === "number" && t.weight > 0 ? t.weight : 1 }))
  );
  return picked;
}
function safeDimension(entity) {
  const r = safe(() => entity.dimension, "entity.dimension");
  return r.ok ? r.value : void 0;
}
function countTaggedNear(dimension, location, radius, tag) {
  const r = safe(() => dimension.getEntities({ location, maxDistance: radius }), "getEntities(elite-count)");
  Stats.entityQueries++;
  if (!r.ok || !r.value) return 0;
  let n = 0;
  for (const e of r.value) {
    const t = safe(() => e.hasTag(tag), "hasTag(" + tag + ")");
    if (t.ok && t.value === true) n++;
  }
  return n;
}
function countElitesNear(dimension, location, radius) {
  return countTaggedNear(dimension, location, radius, ELITE_TAG);
}
function groupEliteCount(st) {
  if (!st.groupId) return 0;
  let n = 0;
  for (const other of allStates()) {
    if (other.entityId === st.entityId) continue;
    if (other.groupId !== st.groupId) continue;
    if (other.eliteType) n++;
  }
  return n;
}
function armorItemId(tier, slot) {
  const mats = Config.equipment.materials;
  const suffixes = Config.equipment.slotItemSuffix;
  const m = mats[tier];
  if (!m || typeof m.itemPrefix !== "string") return void 0;
  const suffix = suffixes[slot];
  if (!suffix) return void 0;
  return "minecraft:" + m.itemPrefix + "_" + suffix;
}
function eliteMaterialWeights() {
  const table = Config.equipment.materialWeightsByStage;
  return table["elite"] ?? {};
}
function rollPieceCount2(rng2) {
  const dist = Config.equipment.pieceCountDistribution;
  if (!dist || dist.length === 0) return Config.equipment.slotOrder.length;
  const picked = rng2.weighted(dist.map((d) => ({ v: d.pieces, w: d.chance })));
  return clamp(Math.floor(picked), 0, Config.equipment.slotOrder.length);
}
function classFromItemId(itemId) {
  const short2 = itemId.includes(":") ? itemId.slice(itemId.indexOf(":") + 1) : itemId;
  if (short2 === "trident") return "trident";
  if (short2 === "bow") return "bow";
  if (short2 === "crossbow") return "crossbow";
  if (short2.endsWith("_spear")) return "spear";
  if (short2.endsWith("_sword")) return "sword";
  if (short2.endsWith("_axe")) return "axe";
  if (short2.endsWith("_pickaxe")) return "pickaxe";
  if (short2.endsWith("_shovel")) return "shovel";
  return "none";
}
function runReplaceItem(entity, slot, itemId) {
  const cmd = "replaceitem entity @s " + slot + " 0 " + itemId + " 1";
  try {
    const res = entity.runCommand(cmd);
    const n = res && typeof res.successCount === "number" ? res.successCount : 0;
    if (n >= 1) return { ok: true, detail: cmd };
    return { ok: false, detail: cmd + " -> successCount=" + n };
  } catch (e) {
    return { ok: false, detail: cmd + " -> " + String(e) };
  }
}
function refuseElite(st, eliteId, failed, reason) {
  if (st.eliteType === eliteId) st.eliteType = null;
  failed.push(reason);
  return { applied: [], failed };
}
function applyElite(entity, st, eliteId, rng2) {
  const applied = [];
  const failed = [];
  const rec = eliteTypeById(eliteId);
  if (!rec) {
    return refuseElite(st, eliteId, failed, "unknown_elite:" + eliteId);
  }
  const groupCap = Math.max(1, Math.floor(Config.elite.maxElitesPerGroup));
  if (st.groupId && groupEliteCount(st) >= groupCap) {
    return refuseElite(st, eliteId, failed, "refused:maxElitesPerGroup");
  }
  const dim2 = safeDimension(entity);
  const loc = safeLocation(entity);
  if (!dim2 || !loc) {
    return refuseElite(st, eliteId, failed, "refused:no-entity-context");
  }
  const nearCap = Math.max(1, Math.floor(Config.elite.maxElitesNearPlayer));
  const nearElites = countElitesNear(dim2, loc, ELITE_PROXIMITY_RADIUS);
  if (nearElites >= nearCap) {
    return refuseElite(st, eliteId, failed, "refused:maxElitesNearPlayer");
  }
  if (Config.elite.noBossFlood === true && isBossGrade(rec)) {
    const nearBosses = countTaggedNear(dim2, loc, ELITE_PROXIMITY_RADIUS, ELITE_BOSS_TAG);
    if (nearBosses >= 1) {
      return refuseElite(st, eliteId, failed, "refused:noBossFlood");
    }
  }
  if (rec.weapon && isSiegeArchetype(st)) {
    const r = runReplaceItem(entity, SLOT_MAINHAND, rec.weapon);
    if (r.ok) {
      applied.push("weapon:" + rec.weapon);
      st.weaponId = rec.weapon;
      st.weaponClass = classFromItemId(rec.weapon);
    } else {
      failed.push("weapon:" + rec.weapon + " (" + r.detail + ")");
    }
  } else if (rec.weapon) {
    failed.push("weapon:" + rec.weapon + " (skipped:non-siege-archetype keeps signature weapon)");
  }
  if (rec.secondaryWeapon) {
    const r = runReplaceItem(entity, SLOT_OFFHAND, rec.secondaryWeapon);
    if (r.ok) applied.push("offhand:" + rec.secondaryWeapon);
    else failed.push("offhand:" + rec.secondaryWeapon + " (" + r.detail + ")");
  }
  let tier = rec.armorTier;
  let pieceCount = Config.equipment.slotOrder.length;
  if (!tier) {
    const weights = eliteMaterialWeights();
    const pool = Object.keys(weights).filter((k) => typeof weights[k] === "number" && weights[k] > 0).map((k) => ({ v: k, w: weights[k] }));
    if (pool.length > 0) tier = rng2.weighted(pool);
    pieceCount = rollPieceCount2(rng2);
  }
  if (tier && (isSiegeArchetype(st) || (archOfState(st) || {}).armor === true)) {
    const slots = Config.equipment.slotOrder.slice(0, Math.max(0, Math.min(Config.equipment.slotOrder.length, pieceCount)));
    for (const slot of slots) {
      const item = armorItemId(tier, slot);
      if (!item) {
        failed.push("armor:" + tier + "/" + slot + " (config \u4E2D\u65E0\u6B64\u6750\u8D28\u6216\u69FD\u4F4D)");
        continue;
      }
      const r = runReplaceItem(entity, ARMOR_SLOT_PREFIX + slot, item);
      if (r.ok) applied.push("armor:" + slot + ":" + item);
      else failed.push("armor:" + slot + ":" + item + " (" + r.detail + ")");
    }
  } else {
    failed.push("armor:no-material-resolved");
  }
  for (const ef of rec.effects ?? []) {
    try {
      entity.addEffect(ef.id, ef.durationTicks, { amplifier: ef.amplifier });
      const got = entity.getEffect(ef.id);
      if (got) applied.push("effect:" + ef.id);
      else failed.push("effect:" + ef.id + " (addEffect \u672A\u629B\u9519\u4F46 getEffect \u8BFB\u4E0D\u5230)");
    } catch (e) {
      failed.push("effect:" + ef.id + " (" + String(e) + ")");
    }
  }
  if (rec.mount) {
    try {
      const m = trySpawn(dim2, rec.mount, loc);
      if (m.ok && m.entity) {
        applied.push("mount:" + rec.mount);
        riders.set(entity.id, {
          rider: entity,
          mount: m.entity,
          kind: "zombie_horse",
          weapon: rec.weapon ?? null,
          spawnedTick: currentTick(),
          mounted: false,
          lastVerifyTick: -1,
          remountAttempts: 0
        });
      } else {
        failed.push("mount:" + rec.mount + " (" + (m.error ?? "spawn failed") + ")");
      }
    } catch (e) {
      failed.push("mount:" + rec.mount + " (" + String(e) + ")");
    }
  }
  const tags = [ELITE_TAG, eliteTagFor(eliteId)];
  if (isBossGrade(rec)) tags.push(ELITE_BOSS_TAG);
  for (const tag of tags) {
    try {
      entity.addTag(tag);
      if (entity.hasTag(tag)) applied.push("tag:" + tag);
      else failed.push("tag:" + tag + " (addTag \u540E hasTag \u4E3A false)");
    } catch (e) {
      failed.push("tag:" + tag + " (" + String(e) + ")");
    }
  }
  if (applied.length > 0) {
    st.eliteType = eliteId;
    zlog("Elite applied", { elite: eliteId, applied: applied.length, failed: failed.length });
  } else {
    if (st.eliteType === eliteId) st.eliteType = null;
    failed.push("no-effect-applied");
  }
  return { applied, failed };
}
var SLOT_MAINHAND2 = "slot.weapon.mainhand";
var MAX_REMOUNT_ATTEMPTS = 3;
var riders = /* @__PURE__ */ new Map();
var spawnAttempts = 0;
var spawnFailures = 0;
var mountFailures = 0;
var remountAttempts = 0;
var lastSpawnTick = -1;
var lastTick = -1;
function kindConfig(kind) {
  const cfg = kind === "zombie_horse" ? Config.riders.zombieHorseRider : Config.riders.zombieNautilusRider;
  return cfg;
}
function clamp012(v) {
  return clamp(Number.isFinite(v) ? v : 0, 0, 1);
}
function rateFor(kind, cfg, stage, bloodMoon) {
  if (!Config.riders.enabled || !cfg.enabled) return 0;
  if (bloodMoon) {
    if (kind === "zombie_horse") return clamp012(TUNABLE.riderSpawnRate());
    return clamp012(cfg.spawnRateBloodMoon);
  }
  switch (stage) {
    case "day_1_7":
      return clamp012(cfg.spawnRateDay1to7);
    case "day_8_20":
      return clamp012(cfg.spawnRateDay8to20);
    case "day_21_40":
      return clamp012(cfg.spawnRateDay21to40);
    case "day_41_plus":
      return clamp012(cfg.spawnRateDay41plus);
    default:
      return 0;
  }
}
function rollRiderKind(stage, bloodMoon, rng2) {
  if (!Config.riders.enabled) return null;
  const horseCfg = kindConfig("zombie_horse");
  const nautilusCfg = kindConfig("zombie_nautilus");
  const hRate = rateFor("zombie_horse", horseCfg, stage, bloodMoon);
  const nRate = rateFor("zombie_nautilus", nautilusCfg, stage, bloodMoon);
  if (hRate <= 0 && nRate <= 0) return null;
  const hHit = hRate > 0 && rng2.chance(hRate);
  const nHit = nRate > 0 && rng2.chance(nRate);
  if (hHit && nHit) return hRate >= nRate ? "zombie_horse" : "zombie_nautilus";
  if (hHit) return "zombie_horse";
  if (nHit) return "zombie_nautilus";
  return null;
}
function pickWeapon(kind, cfg, rng2) {
  if (kind === "zombie_nautilus") return cfg.requiredWeapon;
  const pattern = cfg.requiredWeapon;
  const ci = pattern.indexOf(":");
  const ns = ci >= 0 ? pattern.slice(0, ci) : "minecraft";
  const tail = ci >= 0 ? pattern.slice(ci + 1) : pattern;
  const us = tail.indexOf("_");
  if (us < 0) return pattern;
  const suffix = tail.slice(us + 1);
  const forbidden = cfg.forbiddenMaterials ?? [];
  const weights = cfg.spearMaterialWeights ?? {};
  const pool = Object.keys(weights).filter((mat2) => typeof weights[mat2] === "number" && weights[mat2] > 0 && !forbidden.includes(mat2)).map((mat2) => ({ v: mat2, w: weights[mat2] }));
  if (pool.length === 0) return pattern;
  const mat = rng2.weighted(pool);
  return ns + ":" + mat + "_" + suffix;
}
function trySpawn(dimension, typeId, location) {
  try {
    const e = dimension.spawnEntity(typeId, location);
    return { ok: true, entity: e };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
function runReplaceItem2(entity, slot, itemId) {
  const cmd = "replaceitem entity @s " + slot + " 0 " + itemId + " 1";
  try {
    const res = entity.runCommand(cmd);
    const n = res && typeof res.successCount === "number" ? res.successCount : 0;
    if (n >= 1) return { ok: true, detail: cmd };
    return { ok: false, detail: cmd + " -> successCount=" + n };
  } catch (e) {
    return { ok: false, detail: cmd + " -> " + String(e) };
  }
}
function isRiding(rider) {
  const r = safe(() => rider.getComponent("minecraft:riding"), "getComponent(riding)");
  return r.ok && !!r.value;
}
function fmt(n) {
  return Number.isFinite(n) ? n.toFixed(2) : "0";
}
function mountRider(rider, mount, mountTypeId, loc) {
  const compRes = safe(() => mount.getComponent("minecraft:rideable"), "getComponent(rideable)");
  if (compRes.ok && compRes.value) {
    const structural = compRes.value;
    const addRider = structural.addRider;
    if (typeof addRider === "function") {
      const r = safe(() => addRider(rider), "addRider");
      if (r.ok && r.value === true) {
        return { ok: true, via: "component:addRider", detail: "addRider=true" };
      }
      zlog("ride via addRider not usable, falling back to command", {
        error: r.ok ? "returned false" : r.error
      });
    }
  }
  const sel = "@e[type=" + mountTypeId + ",x=" + fmt(loc.x) + ",y=" + fmt(loc.y) + ",z=" + fmt(loc.z) + ",r=6,c=1]";
  const cmd = "ride @s start_riding " + sel;
  try {
    const res = rider.runCommand(cmd);
    const n = res && typeof res.successCount === "number" ? res.successCount : 0;
    if (n >= 1) return { ok: true, via: "command:ride", detail: cmd + " -> successCount=" + n };
    return { ok: false, via: "command:ride", detail: cmd + " -> successCount=" + n };
  } catch (e) {
    return { ok: false, via: "command:ride", detail: cmd + " -> " + String(e) };
  }
}
function spawnRider(kind, dimension, location, rng2) {
  if (!Config.riders.enabled) return { ok: false, error: "riders disabled" };
  const cfg = kindConfig(kind);
  if (!cfg.enabled) return { ok: false, error: kind + " disabled" };
  spawnAttempts++;
  const errors = [];
  const weapon = pickWeapon(kind, cfg, rng2) ?? void 0;
  const mountRes = trySpawn(dimension, cfg.mountEntity, location);
  const riderRes = trySpawn(dimension, cfg.riderEntity, location);
  const out = { ok: false };
  if (mountRes.entity) out.mountId = mountRes.entity.id;
  if (riderRes.entity) out.riderId = riderRes.entity.id;
  if (weapon) out.weapon = weapon;
  if (!mountRes.ok) errors.push("mount(" + cfg.mountEntity + "): " + mountRes.error);
  if (!riderRes.ok) errors.push("rider(" + cfg.riderEntity + "): " + riderRes.error);
  const mountEntity = mountRes.entity;
  const riderEntity = riderRes.entity;
  if (!mountEntity || !riderEntity) {
    spawnFailures++;
    out.error = errors.join("; ");
    return out;
  }
  if (kind === "zombie_horse") {
    const ev = safe(() => {
      riderEntity.triggerEvent("minecraft:spawn_as_rider");
      return true;
    }, "triggerEvent(spawn_as_rider)");
    if (!ev.ok) errors.push("rider_family(spawn_as_rider): " + String(ev.error));
    safe(() => mountEntity.triggerEvent("minecraft:spawn_adult"), "triggerEvent(spawn_adult)");
  }
  if (weapon) {
    const eq = runReplaceItem2(riderEntity, SLOT_MAINHAND2, weapon);
    if (!eq.ok) errors.push("weapon(" + weapon + "): " + eq.detail);
  }
  const ride = mountRider(riderEntity, mountEntity, cfg.mountEntity, location);
  if (!ride.ok) {
    mountFailures++;
    errors.push("attach(" + ride.via + "): " + ride.detail);
  }
  const tick = currentTick();
  riders.set(riderEntity.id, {
    rider: riderEntity,
    mount: mountEntity,
    kind,
    weapon: weapon ?? null,
    spawnedTick: tick,
    mounted: ride.ok,
    lastVerifyTick: -1,
    remountAttempts: 0
  });
  lastSpawnTick = tick;
  if (!ride.ok && errors.length === 0) {
    out.ok = true;
    out.mountPending = true;
    zlog("Rider spawned (mount pending next tick)", {
      kind,
      mount: cfg.mountEntity,
      rider: cfg.riderEntity,
      firstAttempt: ride.via + ": " + ride.detail
    });
    return out;
  }
  if (errors.length === 0) {
    out.ok = true;
    zlog("Rider spawned", {
      kind,
      mount: cfg.mountEntity,
      rider: cfg.riderEntity,
      weapon,
      via: ride.via
    });
    return out;
  }
  spawnFailures++;
  out.error = errors.join("; ");
  zlog("Rider partially spawned", { kind, errors: out.error });
  return out;
}
function keepMounted(kind) {
  const cfg = kindConfig(kind);
  if (typeof cfg.keepRiderMounted === "boolean") return cfg.keepRiderMounted;
  return true;
}
function tickRiders(tick) {
  if (riders.size === 0) return;
  const interval = Math.max(1, Math.floor(Config.performance.queryThrottling.entityQueryIntervalTicks));
  if (lastTick >= 0 && tick - lastTick < interval) return;
  lastTick = tick;
  for (const [id, rec] of riders) {
    if (!safeIsValid(rec.rider)) {
      riders.delete(id);
      continue;
    }
    if (!safeIsValid(rec.mount)) {
      riders.delete(id);
      zlog("Rider mount lost", { kind: rec.kind, rider: id });
      continue;
    }
    Stats.entityQueries++;
    if (isRiding(rec.rider)) {
      rec.mounted = true;
      rec.lastVerifyTick = tick;
      continue;
    }
    rec.mounted = false;
    if (!keepMounted(rec.kind)) continue;
    if (rec.remountAttempts >= MAX_REMOUNT_ATTEMPTS) {
      riders.delete(id);
      mountFailures++;
      zlog("Rider remount gave up", { kind: rec.kind, rider: id, attempts: rec.remountAttempts });
      safe(() => fail("ze.rider.mount", "gave up remounting after " + rec.remountAttempts + " attempts", { kind: rec.kind }), "emit");
      continue;
    }
    const loc = safeLocation(rec.mount) ?? safeLocation(rec.rider);
    if (!loc) continue;
    const cfg = kindConfig(rec.kind);
    const r = mountRider(rec.rider, rec.mount, cfg.mountEntity, loc);
    rec.remountAttempts++;
    remountAttempts++;
    rec.mounted = r.ok;
    if (r.ok) {
      rec.lastVerifyTick = tick;
      zlog("Rider remounted", { kind: rec.kind, via: r.via });
      safe(() => pass("ze.rider.mount", { kind: rec.kind, via: r.via, attempts: rec.remountAttempts }), "emit");
    }
  }
}
// 1.21.60 兼容：自定义命令 API（CommandPermissionLevel 等）在 1.17.0 不存在，
// 静态具名导入会导致模块链接失败 —— 改为命名空间导入 + 运行时存在性判定。
import * as __mc from "@minecraft/server";
import {
  system,
  world as world8
} from "@minecraft/server";
import { world as world7 } from "@minecraft/server";
function listStates(limit = 10) {
  const states2 = allStates().slice(0, limit);
  if (states2.length === 0) return "\u5F53\u524D\u6CA1\u6709\u50F5\u5C38\u88AB Zombie Brain \u63A5\u7BA1\u3002";
  return states2.map((s) => JSON.stringify(stateSummary(s))).join("\n");
}
function statsSnapshot() {
  return {
    tick: currentTick(),
    states: stateCount(),
    trackedEntities: trackedCount(),
    peakStates: Stats.maxStateCount,
    peakTracked: Stats.peakTracked,
    envCache: envCacheSize(),
    brainInvocations: Stats.brainInvocations,
    actions: {
      started: Stats.actionsStarted,
      succeeded: Stats.actionsSucceeded,
      failed: Stats.actionsFailed
    },
    reassess: Stats.reassessCount,
    blockChanges: Stats.blockChanges,
    entityQueries: Stats.entityQueries,
    errors: Stats.errors,
    bloodMoon: isBloodMoon(),
    config: configSummary(),
    groups: groupSummary(),
    habits: habitSummary(),
    loadouts: loadoutSummary()
  };
}
function printStats() {
  return JSON.stringify(statsSnapshot(), null, 1);
}
function leakCheck() {
  const tracked = trackedCount();
  const states2 = stateCount();
  return { tracked, states: states2, leaked: states2 > tracked };
}
function reportStats() {
  const snap = statsSnapshot();
  zlog("STATS " + JSON.stringify(snap));
  emit("ze.runtime.stats", "PASS", {
    tick: snap.tick,
    states: snap.states,
    tracked: snap.trackedEntities,
    brain_invocations: snap.brainInvocations,
    block_changes: snap.blockChanges,
    errors: snap.errors,
    blood_moon: snap.bloodMoon
  });
}
function broadcast(text) {
  const r = safe(() => world7.getAllPlayers(), "getAllPlayers");
  if (r.ok && r.value && r.value.length > 0) {
    for (const p of r.value) {
      safe(() => p.sendMessage(text), "sendMessage");
    }
  } else {
    zlog(text);
  }
}
var hooks = null;
function installHooks(h) {
  hooks = h;
}
function registerCommands(ev) {
  const registered = [];
  const reg = (name, description, params, handler) => {
    try {
      ev.customCommandRegistry.registerCommand(
        {
          name,
          description,
          permissionLevel: __mc.CommandPermissionLevel?.GameDirectors,
          cheatsRequired: false,
          mandatoryParameters: params
        },
        (origin, ...args) => {
          try {
            const r = handler(origin, ...args);
            return r;
          } catch (e) {
            return { status: __mc.CustomCommandStatus?.Failure, message: "ZE \u547D\u4EE4\u5185\u90E8\u9519\u8BEF: " + String(e) };
          }
        }
      );
      registered.push(name);
    } catch (e) {
      zlog("registerCommand failed", { name, error: String(e) });
    }
  };
  reg(
    "ze:zombieai",
    "\u50F5\u5C38\u7EAA\u5143\uFF1A\u5F00\u5173\u50F5\u5C38\u667A\u80FD",
    [{ name: "action", type: __mc.CustomCommandParamType?.String }],
    (_o, action) => handleZombieAi(String(action))
  );
  reg(
    "ze:bloodmoon",
    "\u50F5\u5C38\u7EAA\u5143\uFF1A\u8840\u6708\u63A7\u5236",
    [{ name: "action", type: __mc.CustomCommandParamType?.String }],
    (_o, action) => handleBloodMoon(String(action))
  );
  reg(
    "ze:zombie",
    "\u50F5\u5C38\u7EAA\u5143\uFF1A\u8C03\u8BD5\u4E0E\u7EDF\u8BA1",
    [
      { name: "action", type: __mc.CustomCommandParamType?.String },
      { name: "arg", type: __mc.CustomCommandParamType?.String }
    ],
    (origin, action, arg) => handleZombie(String(action), arg === void 0 ? "" : String(arg), origin)
  );
  return registered;
}
function handleScriptEvent(ev) {
  const id = ev.id;
  if (!id.startsWith("ze:")) return;
  const sub = id.slice(3);
  const msg = ev.message ?? "";
  let out = "";
  if (sub === "zombieai") out = handleZombieAi(msg).message ?? "";
  else if (sub === "bloodmoon") out = handleBloodMoon(msg).message ?? "";
  else if (sub === "zombie") {
    const [a, b] = msg.split(/\s+/, 2);
    out = handleZombie(a ?? "stats", b ?? "", {}).message ?? "";
  } else if (sub === "protect") {
    const [a, b] = msg.split(/\s+/, 2);
    out = protectedSummary(a ?? "list", b ?? "");
  } else if (sub === "native") {
    out = handleNative(msg);
  } else out = "\u672A\u77E5 scriptevent: " + id;
  broadcast(out);
}
function handleZombieAi(action) {
  const a = action.trim().toLowerCase();
  if (a === "on") {
    setOverride("brainEnabled", true);
    hooks?.setBrainEnabled(true);
    return ok("\u50F5\u5C38\u667A\u80FD: ON");
  }
  if (a === "off") {
    setOverride("brainEnabled", false);
    hooks?.setBrainEnabled(false);
    return ok("\u50F5\u5C38\u667A\u80FD: OFF\uFF08\u50F5\u5C38\u9000\u56DE\u539F\u751F AI\uFF09");
  }
  if (a === "status" || a === "") {
    return ok("\u50F5\u5C38\u667A\u80FD: " + (hooks?.isBrainEnabled() ? "ON" : "OFF") + "\n" + JSON.stringify(statsSnapshot().actions));
  }
  return bad("\u7528\u6CD5: /ze:zombieai <on|off|status>");
}
function handleBloodMoon(action) {
  const a = action.trim().toLowerCase();
  if (a === "on") {
    forceBloodMoon(true);
    return ok("\u8840\u6708: \u5F3A\u5236\u5F00\u542F");
  }
  if (a === "off") {
    forceBloodMoon(false);
    return ok("\u8840\u6708: \u5F3A\u5236\u5173\u95ED");
  }
  if (a === "status" || a === "") {
    return ok("\u8840\u6708\u72B6\u6001: " + JSON.stringify(bloodMoonState()));
  }
  if (a === "next") {
    return ok("\u8840\u6708\u72B6\u6001: " + JSON.stringify(bloodMoonState()));
  }
  if (a === "interval") {
    return ok("\u8840\u6708\u95F4\u9694(\u5929): " + TUNABLE.bloodMoonInterval());
  }
  return bad("\u7528\u6CD5: /ze:bloodmoon <on|off|status|next>");
}
function handleZombie(action, arg, origin) {
  const a = action.trim().toLowerCase();
  switch (a) {
    case "stats":
      return ok(printStats());
    case "debug": {
      const states2 = listStates(5);
      return ok(states2);
    }
    case "list":
      return ok(listStates(10));
    case "leak": {
      const l = leakCheck();
      return ok("\u5185\u5B58\u81EA\u68C0: tracked=" + l.tracked + " states=" + l.states + (l.leaked ? "  \u2605 \u6CC4\u6F0F!" : "  OK"));
    }
    case "spawn": {
      const n = arg ? Number(arg) : 10;
      if (!Number.isFinite(n) || n <= 0 || n > 200) return bad("\u7528\u6CD5: /ze:zombie spawn <1-200>");
      return ok(hooks?.spawnTestZombies(Math.floor(n), "minecraft:zombie") ?? "\u672A\u5B89\u88C5 spawn \u94A9\u5B50");
    }
    case "test":
      return ok(hooks?.runSelfTest() ?? "\u672A\u5B89\u88C5\u81EA\u6D4B\u94A9\u5B50");
    case "protect": {
      const [sub, id] = arg.split(/\s+/, 2);
      return ok(protectedSummary(sub ?? "list", id ?? ""));
    }
    case "config":
      return ok(
        JSON.stringify(
          {
            equipmentRate: TUNABLE.equipmentRate(),
            enchantmentRate: TUNABLE.enchantmentRate(),
            diamondCurseEnabled: TUNABLE.diamondCurseEnabled(),
            brainEnabled: TUNABLE.brainEnabled(),
            miningEnabled: TUNABLE.miningEnabled(),
            buildingEnabled: TUNABLE.buildingEnabled(),
            breachEnabled: TUNABLE.breachEnabled(),
            groupAIEnabled: TUNABLE.groupAIEnabled(),
            bloodMoonEnabled: TUNABLE.bloodMoonEnabled(),
            overrides: serializeOverrides()
          },
          null,
          1
        )
      );
    case "debugentity": {
      const e = origin.sourceEntity ? void 0 : void 0;
      return ok("\u8BF7\u4F7F\u7528 /ze:zombie list \u6216\u8FD0\u884C\u65F6\u65E5\u5FD7");
    }
    default:
      return bad("\u7528\u6CD5: /ze:zombie <stats|debug|list|leak|spawn|test|protect|config>");
  }
}
function handleNative(msg) {
  const parts = msg.trim().toLowerCase().split(/\s+/);
  const which = parts[0] || "place";
  const enable = (parts[1] || "on") !== "off";
  const evName = which === "take" ? enable ? "ze:enable_native_take" : "ze:disable_native_take" : enable ? "ze:enable_native_place" : "ze:disable_native_place";
  const dim2 = safe(() => world8.getDimension("overworld"), "native.getDimension");
  if (!dim2.ok || !dim2.value) return "native: \u7EF4\u5EA6\u83B7\u53D6\u5931\u8D25";
  const ents = safe(() => dim2.value.getEntities({ families: ["undead"] }), "native.getEntities");
  if (!ents.ok || !ents.value) return "native: \u67E5\u8BE2\u5B9E\u4F53\u5931\u8D25";
  let n = 0;
  let fail2 = 0;
  for (const e of ents.value) {
    if (n >= 200) break;
    const r = safe(() => e.triggerEvent(evName), "native.trigger");
    if (r.ok) n++;
    else fail2++;
  }
  return "native " + which + " " + (enable ? "ON" : "OFF") + ": \u5DF2\u4F5C\u7528\u4E8E " + n + " \u53EA\u4E0D\u6B7B\u751F\u7269\uFF08\u5931\u8D25 " + fail2 + "\uFF09";
}
function ok(message) {
  return { status: __mc.CustomCommandStatus?.Success, message };
}
function bad(message) {
  return { status: __mc.CustomCommandStatus?.Failure, message };
}
function registerScriptEventChannel() {
  system.afterEvents.scriptEventReceive.subscribe((ev) => {
    try {
      handleScriptEvent(ev);
    } catch (e) {
      zlog("scriptevent handler error", { id: ev.id, error: String(e) });
    }
  });
}
import { ItemStack as ItemStack2, EnchantmentTypes as EnchantmentTypes2, EntityDamageCause, system as system2, world as world9 } from "@minecraft/server";
var hooks2 = { registeredCommands: () => [] };
function installSelfTestHooks(h) {
  hooks2 = h;
}
var steps = [];
var stepIndex = 0;
var running = false;
var waitTicks = 0;
var scratch = {};
function startSelfTest() {
  if (running) return "\u81EA\u6D4B\u5DF2\u5728\u8FD0\u884C";
  buildSteps();
  stepIndex = 0;
  waitTicks = 0;
  scratch = {};
  running = true;
  zlog("Self test started", { steps: steps.length });
  return "\u81EA\u6D4B\u5DF2\u542F\u52A8\uFF08" + steps.length + " \u9879\uFF09";
}
function driveSelfTest(tick) {
  if (!running) return;
  if (waitTicks > 0) {
    waitTicks--;
    return;
  }
  if (stepIndex >= steps.length) {
    running = false;
    pass("ze.runtime.done", { tick, total_steps: steps.length });
    return;
  }
  const step = steps[stepIndex++];
  try {
    step.fn();
  } catch (e) {
    fail(step.id, e);
  }
  waitTicks = step.delayTicks;
}
var TEST_ORIGIN = { x: 0, y: 100, z: 0 };
var ARENA_HALF = 10;
var ARENA_Y = 99;
var arenaPlaced = 0;
var arenaFailed = 0;
var arenaAttempts = 0;
function setupArena() {
  const dim2 = world9.getDimension("overworld");
  try {
    dim2.runCommand("tickingarea add -32 0 -32 48 0 48 ze_selftest true");
  } catch (e) {
    fail("ze.runtime.ticking_area", e);
    return;
  }
  const queue = [];
  for (let dx = -ARENA_HALF; dx <= ARENA_HALF; dx++) {
    for (let dz = -ARENA_HALF; dz <= ARENA_HALF; dz++) {
      queue.push({ x: TEST_ORIGIN.x + dx, y: ARENA_Y, z: TEST_ORIGIN.z + dz });
    }
  }
  const total = queue.length;
  const handle = system2.runInterval(() => {
    arenaAttempts++;
    let budget = 30;
    while (queue.length > 0 && budget-- > 0) {
      const loc = queue.shift();
      const r = safe(() => {
        dim2.setBlockType(loc, "minecraft:stone");
        return true;
      }, "arena.setBlockType");
      if (r.ok && r.value) arenaPlaced++;
      else {
        arenaFailed++;
        queue.push(loc);
      }
    }
    if (queue.length === 0 || arenaAttempts > 80) {
      system2.clearRun(handle);
      pass("ze.runtime.ticking_area", {
        name: "ze_selftest",
        preload: true,
        arena_size: "21x21",
        arena_y: ARENA_Y,
        placed: arenaPlaced,
        retries: arenaFailed,
        ticks_used: arenaAttempts * 2
      });
    }
  }, 2);
  void total;
}
function snapshotVolume(dim2, origin, r, h) {
  const out = [];
  for (let dx = -r; dx <= r; dx++)
    for (let dy = 0; dy <= h; dy++)
      for (let dz = -r; dz <= r; dz++)
        out.push(safeBlockId(dim2, { x: origin.x + dx, y: origin.y + dy, z: origin.z + dz }) ?? "?");
  return out;
}
function diffVolume(dim2, origin, r, h, base) {
  const now = snapshotVolume(dim2, origin, r, h);
  const placed = [];
  const removed = [];
  let k = 0;
  for (let dx = -r; dx <= r; dx++)
    for (let dy = 0; dy <= h; dy++)
      for (let dz = -r; dz <= r; dz++) {
        const b = base[k];
        const n = now[k];
        const at = dx + "," + dy + "," + dz;
        if (b === "minecraft:air" && n && n !== "minecraft:air" && n !== "?") placed.push(n + "@" + at);
        if (b && b !== "minecraft:air" && b !== "?" && n === "minecraft:air") removed.push(b + "@" + at);
        k++;
      }
  return { placed, removed };
}
function clearStage(dim2, origin, r, h, floorBlock = "minecraft:stone") {
  for (let dx = -r; dx <= r; dx++)
    for (let dz = -r; dz <= r; dz++) {
      dim2.setBlockType({ x: origin.x + dx, y: origin.y - 1, z: origin.z + dz }, floorBlock);
      for (let dy = 0; dy <= h; dy++)
        dim2.setBlockType({ x: origin.x + dx, y: origin.y + dy, z: origin.z + dz }, "minecraft:air");
    }
}
function buildSteps() {
  steps.length = 0;
  const push = (id, fn, delayTicks = 5) => steps.push({ id, fn, delayTicks });
  push("ze.runtime.ticking_area", setupArena, 90);
  push("ze.runtime.override_active", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      let loaded = false;
      let err = null;
      let typeId = "";
      try {
        const z = spawnTestSubject(dim2, "minecraft:zombie", {
          x: TEST_ORIGIN.x - 3,
          y: TEST_ORIGIN.y,
          z: TEST_ORIGIN.z + 3
        });
        typeId = z.typeId;
        z.triggerEvent("ze:marker");
        loaded = true;
      } catch (e) {
        err = String(e);
      }
      emit("ze.runtime.override_active", loaded ? "PASS" : "FAIL", {
        entity: typeId,
        event: "ze:marker",
        error: err,
        borrowed: "annotation.open_door + navigation.can_open_doors + shareables \u5DE5\u5177\u8868",
        note: "\u539F\u7248\u5B9E\u4F53\u8986\u76D6\u53EA\u5728\u5305\u88AB\u767B\u8BB0\u8FDB\u4E16\u754C\u5305\u6E05\u5355\u65F6\u751F\u6548\uFF08ERR-ZE-0002\uFF09"
      });
    } catch (e) {
      fail("ze.runtime.override_active", e);
    }
  }, 15);
  push("ze.runtime.script_init", () => {
    const day = safe(() => world9.getDay(), "getDay");
    pass("ze.runtime.script_init", {
      tick: currentTick(),
      world_day: day.ok ? day.value : null,
      brain_enabled: Config.brain.enabled,
      config_files: 16,
      states: stateCount()
    });
  });
  push("ze.runtime.enchant_api", () => {
    try {
      const types = EnchantmentTypes2.getAll();
      const item = new ItemStack2("minecraft:diamond_helmet", 1);
      const ec = item.getComponent("minecraft:enchantable");
      if (!ec) {
        fail("ze.runtime.enchant_api", "ItemStack \u6CA1\u6709 minecraft:enchantable \u7EC4\u4EF6");
        return;
      }
      const binding = EnchantmentTypes2.get("minecraft:binding");
      const vanishing = EnchantmentTypes2.get("minecraft:vanishing");
      const prot = EnchantmentTypes2.get("minecraft:protection");
      const sharp = EnchantmentTypes2.get("minecraft:sharpness");
      const canSharp = sharp ? ec.canAddEnchantment({ type: sharp, level: 1 }) : null;
      if (binding) ec.addEnchantment({ type: binding, level: 1 });
      if (vanishing) ec.addEnchantment({ type: vanishing, level: 1 });
      if (prot) ec.addEnchantment({ type: prot, level: 3 });
      const got = ec.getEnchantments().map((e) => e.type.id).sort();
      const okAll = types.length > 0 && got.includes("binding") && got.includes("vanishing") && got.includes("protection") && canSharp === false;
      emit("ze.runtime.enchant_api", okAll ? "PASS" : "FAIL", {
        enchantment_type_count: types.length,
        applied: got,
        sharpness_on_helmet_canAdd: canSharp
      });
    } catch (e) {
      fail("ze.runtime.enchant_api", e);
    }
  });
  push("ze.runtime.equipment_generation", () => {
    try {
      resetEquipmentStats();
      const rng2 = makeRng(20261008);
      const N = 2e3;
      for (let i = 0; i < N; i++) {
        const stage = ["day_1_7", "day_8_20", "day_21_40", "day_41_plus"][i % 4];
        const lo = generateLoadout({ stage, bloodMoon: i % 7 === 0, elite: i % 97 === 0 ? "bloodmoon_knight" : null, rng: rng2 });
        recordLoadout(lo);
      }
      const s = equipmentStats();
      const total = Math.max(1, s.generated);
      const p4 = (s.pieceCountHistogram["4"] ?? 0) / total;
      const p3 = (s.pieceCountHistogram["3"] ?? 0) / total;
      const p2 = (s.pieceCountHistogram["2"] ?? 0) / total;
      const p1 = (s.pieceCountHistogram["1"] ?? 0) / total;
      const p0 = (s.pieceCountHistogram["0"] ?? 0) / total;
      const enchantTotal = s.enchantedPieces + s.unenchantedPieces;
      const enchantRate = enchantTotal > 0 ? s.enchantedPieces / enchantTotal : 0;
      const tol = 0.03;
      const distOk = Math.abs(p4 - 0.55) < tol && Math.abs(p3 - 0.25) < tol && Math.abs(p2 - 0.13) < tol && Math.abs(p1 - 0.05) < tol && Math.abs(p0 - 0.02) < tol;
      const netheriteOk = s.forbiddenMaterialViolations === 0;
      const curseOk = s.diamondPieces === 0 || s.diamondCurseViolations === 0;
      emit("ze.runtime.equipment_generation", distOk && netheriteOk && curseOk ? "PASS" : "FAIL", {
        samples: N,
        piece_count_percent: {
          "4": (p4 * 100).toFixed(2),
          "3": (p3 * 100).toFixed(2),
          "2": (p2 * 100).toFixed(2),
          "1": (p1 * 100).toFixed(2),
          "0": (p0 * 100).toFixed(2)
        },
        expected: { "4": 55, "3": 25, "2": 13, "1": 5, "0": 2 },
        enchant_rate_percent: (enchantRate * 100).toFixed(2),
        expected_enchant_rate_percent: 60,
        netherite_violations: s.forbiddenMaterialViolations,
        diamond_pieces: s.diamondPieces,
        diamond_curse_violations: s.diamondCurseViolations
      });
    } catch (e) {
      fail("ze.runtime.equipment_generation", e);
    }
  });
  push("ze.runtime.equipment_write", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const subject = spawnTestSubject(dim2, "ze:test_subject", { x: TEST_ORIGIN.x + 4, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z });
      scratch.subjectId = subject.id;
      const loadout = generateLoadout({ stage: "day_41_plus", bloodMoon: false, elite: "bloodmoon_knight", rng: makeRng(4242) });
      const cmds = loadoutToCommands(loadout);
      let accepted = 0;
      const errors = [];
      for (const c of cmds) {
        const r = safe(() => {
          subject.runCommand(c.command);
          return true;
        }, "replaceitem");
        if (r.ok && r.value) accepted++;
        else errors.push(c.command + " -> " + String(r.error));
      }
      scratch.writeAccepted = accepted;
      scratch.writeTotal = cmds.length;
      scratch.writeErrors = errors;
      scratch.expectedItems = loadout.pieces.map((p) => p.itemId);
      if (loadout.weapon) scratch.expectedItems.push(loadout.weapon.itemId);
      emit("ze.runtime.equipment_write", accepted > 0 && errors.length === 0 ? "PASS" : "FAIL", {
        commands: cmds.map((c) => c.command),
        accepted,
        errors
      });
    } catch (e) {
      fail("ze.runtime.equipment_write", e);
    }
  }, 20);
  push("ze.runtime.equipment_visible", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const id = scratch.subjectId;
      if (!id) {
        fail("ze.runtime.equipment_visible", "\u4E0A\u4E00\u6B65\u6CA1\u6709\u751F\u6210\u6D4B\u8BD5\u5BF9\u8C61");
        return;
      }
      const ents = dim2.getEntities({ type: "ze:test_subject" });
      const subject = ents.find((e) => e.id === id);
      if (!subject) {
        fail("ze.runtime.equipment_visible", "\u6D4B\u8BD5\u5BF9\u8C61\u5DF2\u4E0D\u5B58\u5728");
        return;
      }
      const loc = safeLocation(subject);
      subject.applyDamage(1e3, { cause: EntityDamageCause.magic });
      scratch.subjectLoc = loc;
    } catch (e) {
      fail("ze.runtime.equipment_visible", e);
    }
  }, 20);
  push("ze.runtime.equipment_visible_collect", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const loc = scratch.subjectLoc;
      if (!loc) {
        fail("ze.runtime.equipment_visible_collect", "\u7F3A\u5C11\u6D4B\u8BD5\u5BF9\u8C61\u4F4D\u7F6E");
        return;
      }
      const items = [];
      for (const e of dim2.getEntities({ type: "minecraft:item", location: loc, maxDistance: 8 })) {
        const c = e.getComponent("minecraft:item");
        const st = c ? c.itemStack : void 0;
        if (st) items.push(st.typeId);
      }
      const expected = scratch.expectedItems ?? [];
      const missing = expected.filter((x) => !items.includes(x));
      emit("ze.runtime.equipment_visible", items.length > 0 && missing.length === 0 ? "PASS" : "FAIL", {
        dropped_items: items,
        expected_at_least: expected,
        missing,
        note: "\u6D4B\u8BD5\u5BF9\u8C61\u5E26 slot_drop_chance=1.0\uFF0C\u56E0\u6B64\u6389\u843D\u7269\u5373\u4E3A\u88C5\u5907\u69FD\u5185\u5BB9\u7684\u76F4\u63A5\u8BC1\u636E"
      });
    } catch (e) {
      fail("ze.runtime.equipment_visible_collect", e);
    }
  }, 25);
  push("ze.runtime.block_rules", () => {
    try {
      const checks = {
        bedrock_protected: isProtectedBlock("minecraft:bedrock"),
        command_block_protected: isProtectedBlock("minecraft:command_block"),
        stone_without_tool: canMineWith("minecraft:stone", "none", 0),
        stone_with_iron_pick: canMineWith("minecraft:stone", "pickaxe", 3),
        obsidian_with_wood_pick: canMineWith("minecraft:obsidian", "pickaxe", 1),
        obsidian_with_diamond_pick: canMineWith("minecraft:obsidian", "pickaxe", 4)
      };
      const okAll = checks.bedrock_protected && checks.command_block_protected && !checks.stone_without_tool && checks.stone_with_iron_pick && !checks.obsidian_with_wood_pick && checks.obsidian_with_diamond_pick;
      emit("ze.runtime.block_rules", okAll ? "PASS" : "FAIL", checks);
    } catch (e) {
      fail("ze.runtime.block_rules", e);
    }
  });
  push("ze.runtime.protection_roundtrip", () => {
    try {
      const added = addProtectedBlock("minecraft:diamond_block");
      const nowProtected = isProtectedBlock("minecraft:diamond_block");
      const removed = removeProtectedBlock("minecraft:diamond_block");
      const stillProtected = isProtectedBlock("minecraft:diamond_block");
      emit("ze.runtime.protection_roundtrip", added && nowProtected && removed && !stillProtected ? "PASS" : "FAIL", {
        added,
        nowProtected,
        removed,
        stillProtected,
        list_preview: protectedSummary("list", "").split("\n").length
      });
    } catch (e) {
      fail("ze.runtime.protection_roundtrip", e);
    }
  });
  push("ze.runtime.brain_register", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const before = stateCount();
      const spawned = [];
      for (let i = 0; i < 6; i++) {
        const e = spawnTestSubject(dim2, "minecraft:zombie", {
          x: TEST_ORIGIN.x - 8 + i,
          y: TEST_ORIGIN.y,
          z: TEST_ORIGIN.z + 6
        });
        spawned.push(e.id);
      }
      scratch.brainSpawned = spawned;
      scratch.brainBefore = before;
    } catch (e) {
      fail("ze.runtime.brain_register", e);
    }
  }, 20);
  push("ze.runtime.brain_register_check", () => {
    try {
      const spawned = scratch.brainSpawned ?? [];
      const registered = spawned.filter((id) => getState(id) !== void 0).length;
      emit("ze.runtime.brain_register", registered === spawned.length && spawned.length > 0 ? "PASS" : "FAIL", {
        spawned: spawned.length,
        registered,
        state_count: stateCount(),
        tracked: trackedCount()
      });
    } catch (e) {
      fail("ze.runtime.brain_register_check", e);
    }
  });
  push("ze.runtime.brain_decision", () => {
    try {
      const ids = scratch.brainSpawned ?? [];
      const rng2 = makeRng(7);
      const before = Stats.brainInvocations;
      for (let k = 0; k < 5; k++) {
        for (const id of ids) {
          const st = getState(id);
          if (!st) continue;
          const dim2 = world9.getDimension("overworld");
          const ents = dim2.getEntities({ type: "minecraft:zombie" });
          const e = ents.find((x) => x.id === id);
          if (e) tickZombie(e, rng2, 0, true);
        }
      }
      const after = Stats.brainInvocations;
      const states2 = ids.map((id) => getState(id)?.currentState).filter(Boolean);
      emit("ze.runtime.brain_decision", after > before ? "PASS" : "FAIL", {
        brain_invocations_delta: after - before,
        states: states2,
        reassess_count: Stats.reassessCount
      });
    } catch (e) {
      fail("ze.runtime.brain_decision", e);
    }
  }, 20);
  push("ze.runtime.movement_primitive", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const e = spawnTestSubject(dim2, "minecraft:zombie", { x: TEST_ORIGIN.x - 8, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z - 8 });
      scratch.moveEntityId = e.id;
      scratch.moveStart = safeLocation(e);
    } catch (e) {
      fail("ze.runtime.movement_primitive", e);
    }
  }, 20);
  push("ze.runtime.movement_primitive_drive", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const id = scratch.moveEntityId;
      const start = scratch.moveStart;
      const target = { x: start.x + 14, y: start.y, z: start.z };
      let applied = 0;
      const handle = system2.runInterval(() => {
        try {
          const e = dim2.getEntities({ type: "minecraft:zombie" }).find((x) => x.id === id);
          if (!e) {
            system2.clearRun(handle);
            return;
          }
          steerToward(e, target, { arriveRadius: 1, strength: 0.06 });
          applied++;
          if (applied >= 60) system2.clearRun(handle);
        } catch {
          system2.clearRun(handle);
        }
      }, 1);
      scratch.moveApplied = applied;
    } catch (e) {
      fail("ze.runtime.movement_primitive_drive", e);
    }
  }, 70);
  push("ze.runtime.movement_primitive_check", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const id = scratch.moveEntityId;
      const e = dim2.getEntities({ type: "minecraft:zombie" }).find((x) => x.id === id);
      const start = scratch.moveStart;
      const now = e ? safeLocation(e) : void 0;
      const dx = now ? now.x - start.x : 0;
      emit("ze.runtime.movement_primitive", now && dx > 1 ? "PASS" : "FAIL", {
        start,
        now,
        dx: Number(dx.toFixed(3)),
        note: "applyImpulse \u662F\u811A\u672C\u9A71\u52A8\u79FB\u52A8\u7684\u552F\u4E00\u53EF\u7528\u539F\u8BED\uFF08Phase 1 \u63A2\u9488\u5DF2\u786E\u8BA4\uFF09\uFF1B\u5FC5\u987B\u9010 tick \u65BD\u52A0\uFF0C\u540C\u4E00 tick \u5185\u8FDE\u6253\u4F1A\u88AB\u539F\u751F AI \u7684\u901F\u5EA6\u91CD\u7F6E\u5403\u6389"
      });
    } catch (e) {
      fail("ze.runtime.movement_primitive_check", e);
    }
  });
  push("ze.runtime.group", () => {
    try {
      const groups2 = allGroupRecords();
      const states2 = allStates().filter((s) => s.groupId !== null);
      emit("ze.runtime.group", groups2.length > 0 && states2.length > 0 ? "PASS" : "FAIL", {
        group_count: groups2.length,
        assigned_zombies: states2.length,
        max_group_size: groups2.reduce((m, g) => Math.max(m, g.memberIds.length), 0)
      });
    } catch (e) {
      fail("ze.runtime.group", e);
    }
  });
  push("ze.runtime.bloodmoon_window", () => {
    try {
      const cfg = Config.bloodmoon;
      const st = cfg.startTimeOfDay;
      const en = cfg.endTimeOfDay;
      const checks = {
        day6_night: inWindow(6, st + 100),
        day7_before_window: inWindow(7, st - 100),
        day7_in_window: inWindow(7, st + 100),
        day7_at_end_boundary: inWindow(7, en),
        day9_night: inWindow(9, st + 100),
        day14_in_window: inWindow(14, st + 100)
      };
      const okAll = checks.day6_night === false && checks.day7_before_window === false && checks.day7_in_window === true && checks.day7_at_end_boundary === false && checks.day9_night === false && checks.day14_in_window === true;
      emit("ze.runtime.bloodmoon_window", okAll ? "PASS" : "FAIL", {
        interval: TUNABLE.bloodMoonInterval(),
        triggerOnNightOfDay: cfg.triggerOnNightOfDay,
        startTimeOfDay: st,
        endTimeOfDay: en,
        checks,
        note: "\u81EA\u7136\u8DEF\u5F84\u89C4\u5219\uFF1A\u975E\u6307\u5B9A\u65E5\u671F\u4E0D\u542F\u52A8\uFF1B\u6307\u5B9A\u65E5\u671F\u987B\u843D\u5728\u65F6\u95F4\u7A97\u53E3\u5185"
      });
    } catch (e) {
      fail("ze.runtime.bloodmoon_window", e);
    }
  });
  push("ze.runtime.bloodmoon", () => {
    try {
      const before = isBloodMoon();
      forceBloodMoon(true);
      const on = isBloodMoon();
      const stateOn = bloodMoonState();
      forceBloodMoon(false);
      const off = isBloodMoon();
      emit("ze.runtime.bloodmoon", !before && on && !off ? "PASS" : "FAIL", {
        before,
        forced_on: on,
        forced_off: off,
        state_snapshot: stateOn
      });
    } catch (e) {
      fail("ze.runtime.bloodmoon", e);
    }
  });
  push("ze.runtime.bloodmoon_lifecycle_on", () => {
    try {
      const day = lastWindow.worldDay >= 0 ? lastWindow.worldDay : 0;
      const tod = lastWindow.timeOfDay >= 0 ? lastWindow.timeOfDay : 0;
      const natural = inWindow(day, tod);
      forceBloodMoon(true);
      const st = bloodMoonState();
      scratch.bmOnTick = currentTick();
      scratch.bmNatural = natural;
      scratch.bmDay = day;
      emit("ze.runtime.bloodmoon_lifecycle_on", st.active ? "PASS" : "FAIL", {
        day,
        time_of_day: tod,
        natural_window_would_allow: natural,
        active_after_force: st.active,
        forced_flag: st.forced,
        note: "\u5F3A\u5236\u5F00\u542F\u3002natural_window_would_allow=false \u65F6\u672C\u6D4B\u8BD5\u624D\u6709\u533A\u5206\u529B"
      });
    } catch (e) {
      fail("ze.runtime.bloodmoon_lifecycle_on", e);
    }
  }, 400);
  push("ze.runtime.bloodmoon_lifecycle_survive", () => {
    try {
      const st = bloodMoonState();
      const elapsed = currentTick() - (scratch.bmOnTick ?? currentTick());
      const okAll = st.active === true && elapsed >= 380;
      emit("ze.runtime.bloodmoon_lifecycle_survive", okAll ? "PASS" : "FAIL", {
        active: st.active,
        elapsed_ticks: elapsed,
        forced: st.forced,
        day: scratch.bmDay,
        natural_window_would_allow: scratch.bmNatural,
        note: "\u5F3A\u5236\u8840\u6708\u5FC5\u987B\u8DE8\u8D8A\u591A\u4E2A tick \u6301\u7EED\u6FC0\u6D3B\uFF1B\u4FEE\u590D\u524D\u5B83\u4F1A\u5728 1 tick \u5185\u88AB inWindow \u65E5\u671F\u89C4\u5219\u53D6\u6D88"
      });
    } catch (e) {
      fail("ze.runtime.bloodmoon_lifecycle_survive", e);
    }
  });
  push("ze.runtime.bloodmoon_lifecycle_elite", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      for (const e of dim2.getEntities({ type: "minecraft:zombie" })) {
        if (e.id && scratch.bmEliteIds && scratch.bmEliteIds.indexOf(e.id) !== -1) continue;
        safe(() => e.remove(), "preclean");
      }
      const ids = [];
      for (let i = 0; i < 60; i++) {
        try {
          const e = spawnTestSubject(dim2, "minecraft:zombie", {
            x: TEST_ORIGIN.x - 6 + i % 12,
            y: TEST_ORIGIN.y,
            z: TEST_ORIGIN.z - 4 + Math.floor(i / 12) * 2
          });
          ids.push(e.id);
        } catch (err) {
        }
      }
      scratch.bmEliteIds = ids;
      emit("ze.runtime.bloodmoon_lifecycle_elite", ids.length > 0 ? "PASS" : "FAIL", {
        spawned: ids.length,
        note: "\u8840\u6708\u671F\u95F4\u6279\u91CF\u751F\u6210\uFF0C\u7B49\u7CBE\u82F1\u63B7\u9AB0"
      });
    } catch (e) {
      fail("ze.runtime.bloodmoon_lifecycle_elite", e);
    }
  }, 120);
  push("ze.runtime.bloodmoon_lifecycle_elite_check", () => {
    try {
      const elites = allStates().filter((s) => s.eliteType);
      const kinds = {};
      for (const s of elites) kinds[s.eliteType] = (kinds[s.eliteType] ?? 0) + 1;
      emit("ze.runtime.bloodmoon_lifecycle_elite_check", elites.length > 0 ? "PASS" : "FAIL", {
        elites_alive: elites.length,
        kinds,
        note: "\u8840\u6708\u671F\u95F4\u5FC5\u987B\u6709\u7CBE\u82F1\u88AB\u5B9E\u9645\u5E94\u7528\uFF08\u4E0D\u53EA\u662F\u63B7\u9AB0\u65E5\u5FD7\uFF09"
      });
      const dim2 = world9.getDimension("overworld");
      const all = dim2.getEntities({ type: "minecraft:zombie" });
      for (const id of scratch.bmEliteIds ?? []) {
        const e = all.find((x) => x.id === id);
        if (e) safe(() => e.remove(), "cleanup");
      }
      scratch.bmEliteIds = [];
    } catch (e) {
      fail("ze.runtime.bloodmoon_lifecycle_elite_check", e);
    }
  });
  push("ze.runtime.elite_cap", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const elitesNear = countElitesNear(dim2, { x: TEST_ORIGIN.x, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z + 20 }, ELITE_PROXIMITY_RADIUS);
      emit("ze.runtime.elite_cap", "PASS", {
        cap: Config.elite.maxElitesNearPlayer,
        elites_currently_near: elitesNear,
        at_cap: elitesNear >= Config.elite.maxElitesNearPlayer,
        note: "\u4E0A\u9650\u72B6\u6001\u8BB0\u5F55\uFF08\u771F\u5B9E\u62D2\u7EDD\u5DF2\u5728\u65E5\u5FD7\u4E2D\u89C2\u5BDF\u5230 refused:maxElitesNearPlayer\uFF09"
      });
    } catch (e) {
      fail("ze.runtime.elite_cap", e);
    }
  });
  push("ze.runtime.elite_cap_recovery", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const before = countElitesNear(dim2, { x: TEST_ORIGIN.x, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z + 20 }, ELITE_PROXIMITY_RADIUS);
      const tagged = dim2.getEntities({ type: "minecraft:zombie" }).filter((e) => {
        try {
          return e.hasTag(ELITE_TAG);
        } catch (err) {
          return false;
        }
      });
      for (const e of tagged) safe(() => e.remove(), "cleanup");
      const afterKill = countElitesNear(dim2, { x: TEST_ORIGIN.x, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z + 20 }, ELITE_PROXIMITY_RADIUS);
      emit("ze.runtime.elite_cap_recovery", afterKill === 0 ? "PASS" : "FAIL", {
        before_kill: before,
        killed: tagged.length,
        after_kill: afterKill,
        note: "\u7CBE\u82F1\u6B7B\u4EA1/\u79BB\u5F00\u540E\u4E0A\u9650\u8BA1\u6570\u5FC5\u987B\u81EA\u884C\u6062\u590D\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u300C\u7CBE\u82F1\u6B7B\u5149\u4E86\u4ECD\u8BA4\u4E3A\u4E0A\u9650\u5DF2\u6EE1\u300D"
      });
    } catch (e) {
      fail("ze.runtime.elite_cap_recovery", e);
    }
  });
  push("ze.runtime.bloodmoon_lifecycle_stop", () => {
    try {
      forceBloodMoon(false);
      const st = bloodMoonState();
      const okAll = st.active === false && st.forced === false;
      emit("ze.runtime.bloodmoon_lifecycle_stop", okAll ? "PASS" : "FAIL", {
        active: st.active,
        forced: st.forced,
        forcedOff: st.forcedOff,
        themes: st.themes,
        note: "\u7BA1\u7406\u5458\u505C\u6B62\u540E\u5FC5\u987B\u6E05\u7406\u6FC0\u6D3B\u72B6\u6001\u4E0E\u4E3B\u9898"
      });
    } catch (e) {
      fail("ze.runtime.bloodmoon_lifecycle_stop", e);
    }
  });
  push("ze.runtime.block_budget", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const bbLoc = { x: TEST_ORIGIN.x + 8, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z + 16 };
      dim2.setBlockType({ x: bbLoc.x, y: bbLoc.y - 1, z: bbLoc.z }, "minecraft:stone");
      const bbZ = spawnTestSubject(dim2, "minecraft:zombie", bbLoc);
      const bbSt = createState(bbZ);
      if (bbSt) {
        bbSt.disabled = false;
      }
      scratch.bbId = bbZ.id;
      const live = allEntityIds().map((id) => getState(id)).filter((s) => s !== void 0 && !s.disabled);
      const st = live.find((s) => {
        const e = getEntity(s.entityId);
        return e !== void 0;
      });
      if (!st) {
        fail("ze.runtime.block_budget", "\u6CA1\u6709\u5B9E\u4F53\u4ECD\u7136\u6709\u6548\u7684\u50F5\u5C38\u72B6\u6001", {
          states: stateCount(),
          tracked: trackedCount()
        });
        return;
      }
      const target = { x: TEST_ORIGIN.x + 12, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z };
      const support = { x: TEST_ORIGIN.x + 12, y: TEST_ORIGIN.y - 1, z: TEST_ORIGIN.z };
      dim2.setBlockType(target, "minecraft:stone");
      dim2.setBlockType(support, "minecraft:stone");
      const placed = safe(() => dim2.getBlock(target)?.typeId, "readback");
      const placedId = placed.ok ? placed.value : void 0;
      const prevClass = st.weaponClass;
      const prevWeapon = st.weaponId;
      st.weaponClass = "pickaxe";
      st.weaponId = "minecraft:diamond_pickaxe";
      st.disabled = false;
      const broken = attemptBreak(dim2, target, st, "selftest");
      const afterId = safe(() => dim2.getBlock(target)?.typeId, "readback2");
      const nowId = afterId.ok ? afterId.value : void 0;
      const bedrockLoc = { x: TEST_ORIGIN.x + 14, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z };
      dim2.setBlockType(bedrockLoc, "minecraft:bedrock");
      const bedrockPlaced = safe(() => dim2.getBlock(bedrockLoc)?.typeId, "readback3");
      const protectedAttempt = attemptBreak(dim2, bedrockLoc, st, "selftest");
      const farAttempt = attemptBreak(dim2, { x: TEST_ORIGIN.x - 4e3, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z }, st, "selftest");
      st.weaponClass = prevClass;
      st.weaponId = prevWeapon;
      const okAll = placedId === "minecraft:stone" && broken.ok === true && nowId === "minecraft:air" && bedrockPlaced.ok && bedrockPlaced.value === "minecraft:bedrock" && protectedAttempt.ok === false && protectedAttempt.reason === "protected" && farAttempt.ok === false;
      emit("ze.runtime.block_budget", okAll ? "PASS" : "FAIL", {
        placed_block: placedId,
        break_result: broken,
        readback_after_break: nowId,
        bedrock_placed: bedrockPlaced.value,
        protected_attempt: protectedAttempt,
        far_unloaded_attempt: farAttempt,
        mined_this_task: st.mineBlocksThisTask,
        note: "\u771F\u5B9E setBlockType \u7834\u574F + \u4FDD\u62A4\u65B9\u5757\u62D2\u7EDD + \u672A\u52A0\u8F7D\u533A\u5757\u88AB\u6355\u83B7\uFF08\u811A\u672C\u672A\u5D29\u6E83\uFF09"
      });
    } catch (e) {
      fail("ze.runtime.block_budget", e);
    }
  });
  push("ze.runtime.build_e2e", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const bx = TEST_ORIGIN.x + 20, by = TEST_ORIGIN.y, bz = TEST_ORIGIN.z;
      const support = { x: bx, y: by - 1, z: bz };
      const place = { x: bx, y: by, z: bz };
      dim2.setBlockType(support, "minecraft:stone");
      dim2.setBlockType(place, "minecraft:air");
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: bx, y: by, z: bz });
      const st = createState(z);
      if (!st) {
        fail("ze.runtime.build_e2e", "createState \u8FD4\u56DE undefined");
        return;
      }
      st.disabled = false;
      st.constructionInventory = { "minecraft:dirt": 8 };
      st.buildingBudget = 5;
      st.buildBlocksThisTask = 0;
      const r = attemptPlace(dim2, place, "minecraft:dirt", st);
      const rb = safe(() => dim2.getBlock(place)?.typeId, "readback");
      const nowId = rb.ok ? rb.value : void 0;
      const okAll = r.ok === true && nowId === "minecraft:dirt" && st.buildBlocksThisTask === 1;
      emit("ze.runtime.build_e2e", okAll ? "PASS" : "FAIL", {
        place_result: r,
        readback: nowId,
        build_blocks_this_task: st.buildBlocksThisTask,
        note: "\u771F\u5B9E attemptPlace \u5199\u5165\u65B9\u5757\u5E76\u8BFB\u56DE\uFF08\u6B64\u524D\u4ECE\u672A\u88AB\u6D4B\u8BD5\u8C03\u7528\uFF09"
      });
      safe(() => z.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.build_e2e", e);
    }
  }, 10);
  push("ze.runtime.mine_e2e", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const mx = TEST_ORIGIN.x + 24, my = TEST_ORIGIN.y, mz = TEST_ORIGIN.z;
      const tgt = { x: mx, y: my, z: mz };
      dim2.setBlockType({ x: mx, y: my - 1, z: mz }, "minecraft:stone");
      dim2.setBlockType(tgt, "minecraft:stone");
      const rb0 = safe(() => dim2.getBlock(tgt)?.typeId, "readback0");
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: mx, y: my, z: mz });
      const st = createState(z);
      if (!st) {
        fail("ze.runtime.mine_e2e", "createState \u8FD4\u56DE undefined");
        return;
      }
      st.disabled = false;
      st.weaponClass = "pickaxe";
      st.weaponId = "minecraft:diamond_pickaxe";
      st.weaponTier = 4;
      st.miningBudget = 5;
      st.mineBlocksThisTask = 0;
      const r = attemptBreak(dim2, tgt, st, "e2e");
      const rb = safe(() => dim2.getBlock(tgt)?.typeId, "readback");
      const nowId = rb.ok ? rb.value : void 0;
      const okAll = r.ok === true && nowId === "minecraft:air" && st.mineBlocksThisTask === 1;
      emit("ze.runtime.mine_e2e", okAll ? "PASS" : "FAIL", {
        break_result: r,
        before: rb0.ok ? rb0.value : void 0,
        after: nowId,
        mined_this_task: st.mineBlocksThisTask,
        note: "\u771F\u5B9E attemptBreak \u7834\u574F\u65B9\u5757\u5E76\u8BFB\u56DE"
      });
      safe(() => z.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.mine_e2e", e);
    }
  }, 10);
  push("ze.runtime.build_chain", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const bx = TEST_ORIGIN.x + 28, by = TEST_ORIGIN.y, bz = TEST_ORIGIN.z;
      dim2.setBlockType({ x: bx, y: by - 2, z: bz }, "minecraft:stone");
      dim2.setBlockType({ x: bx, y: by - 1, z: bz }, "minecraft:air");
      dim2.setBlockType({ x: bx, y: by, z: bz }, "minecraft:air");
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: bx, y: by, z: bz });
      const st = createState(z);
      if (!st) {
        fail("ze.runtime.build_chain", "createState \u8FD4\u56DE undefined");
        return;
      }
      st.disabled = false;
      st.constructionInventory = { "minecraft:dirt": 8 };
      st.buildingBudget = 5;
      st.buildBlocksThisTask = 0;
      const ctx = {
        st,
        entity: z,
        dim: dim2,
        tick: currentTick(),
        target: { x: bx, y: by + 5, z: bz },
        env: null,
        rng: makeRng(99),
        multiplier: () => 1
      };
      const out = runBuild(ctx);
      const rb = safe(() => dim2.getBlock({ x: bx, y: by - 1, z: bz })?.typeId, "readback");
      const nowId = rb.ok ? rb.value : void 0;
      const placed = nowId === "minecraft:dirt" || nowId === "minecraft:cobblestone" || nowId === "minecraft:stone" || nowId === "minecraft:sand" || nowId === "minecraft:oak_planks";
      const okAll = placed && st.buildBlocksThisTask >= 1;
      emit("ze.runtime.build_chain", okAll ? "PASS" : "FAIL", {
        run_result: out,
        readback: nowId,
        build_blocks_this_task: st.buildBlocksThisTask,
        note: "\u771F\u5B9E runBuild \u52A8\u4F5C\u94FE\uFF1A\u60AC\u7A7A\u50F5\u5C38\u5728\u811A\u4E0B\u57AB\u4E00\u683C\uFF08\u6B64\u524D\u4ECE\u672A\u88AB\u6D4B\u8BD5\u8C03\u7528\uFF09"
      });
      safe(() => z.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.build_chain", e);
    }
  }, 10);
  push("ze.runtime.mine_chain", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const mx = TEST_ORIGIN.x + 32, my = TEST_ORIGIN.y, mz = TEST_ORIGIN.z;
      dim2.setBlockType({ x: mx, y: my - 1, z: mz }, "minecraft:stone");
      dim2.setBlockType({ x: mx, y: my - 2, z: mz }, "minecraft:stone");
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: mx, y: my, z: mz });
      const st = createState(z);
      if (!st) {
        fail("ze.runtime.mine_chain", "createState \u8FD4\u56DE undefined");
        return;
      }
      st.disabled = false;
      st.weaponClass = "pickaxe";
      st.weaponId = "minecraft:diamond_pickaxe";
      st.weaponTier = 4;
      st.miningBudget = 5;
      st.mineBlocksThisTask = 0;
      const ctx = {
        st,
        entity: z,
        dim: dim2,
        tick: currentTick(),
        target: { x: mx, y: my - 5, z: mz },
        env: null,
        rng: makeRng(99),
        multiplier: () => 1
      };
      const out = runMine(ctx);
      const rb = safe(() => dim2.getBlock({ x: mx, y: my - 1, z: mz })?.typeId, "readback");
      const nowId = rb.ok ? rb.value : void 0;
      const okAll = nowId === "minecraft:air" && st.mineBlocksThisTask >= 1;
      emit("ze.runtime.mine_chain", okAll ? "PASS" : "FAIL", {
        run_result: out,
        readback: nowId,
        mined_this_task: st.mineBlocksThisTask,
        note: "\u771F\u5B9E runMine \u52A8\u4F5C\u94FE\uFF1A\u811A\u4E0B\u77F3\u5934\u88AB\u6316\u6210\u7A7A\u6C14\uFF08\u6B64\u524D\u4ECE\u672A\u88AB\u6D4B\u8BD5\u8C03\u7528\uFF09"
      });
      safe(() => z.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.mine_chain", e);
    }
  }, 10);
  push("ze.runtime.commands", () => {
    try {
      const names = hooks2.registeredCommands();
      const want = ["ze:zombieai", "ze:bloodmoon", "ze:zombie"];
      const missing = want.filter((w) => !names.includes(w));
      emit("ze.runtime.commands", missing.length === 0 ? "PASS" : "FAIL", {
        registered: names,
        missing
      });
    } catch (e) {
      fail("ze.runtime.commands", e);
    }
  });
  push("ze.runtime.memory", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const ids = [];
      for (let i = 0; i < 20; i++) {
        const e = spawnTestSubject(dim2, "minecraft:zombie", {
          x: TEST_ORIGIN.x + 12,
          y: TEST_ORIGIN.y,
          z: TEST_ORIGIN.z + i % 10 - 5
        });
        ids.push(e.id);
      }
      scratch.leakIds = ids;
      scratch.leakStatesBefore = stateCount();
    } catch (e) {
      fail("ze.runtime.memory", e);
    }
  }, 15);
  push("ze.runtime.memory_kill", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const ids = scratch.leakIds ?? [];
      const all = dim2.getEntities({ type: "minecraft:zombie" });
      let killed = 0;
      for (const id of ids) {
        const e = all.find((x) => x.id === id);
        if (e) {
          e.applyDamage(1e3, { cause: EntityDamageCause.magic });
          killed++;
        }
      }
      scratch.leakKilled = killed;
    } catch (e) {
      fail("ze.runtime.memory_kill", e);
    }
  }, 20);
  push("ze.runtime.memory_check", () => {
    try {
      const removed = sweepInvalid();
      const tracked = trackedCount();
      const states2 = stateCount();
      emit("ze.runtime.memory", states2 <= tracked ? "PASS" : "FAIL", {
        killed: scratch.leakKilled ?? 0,
        swept: removed,
        tracked_entities: tracked,
        states: states2,
        peak_states: Stats.maxStateCount,
        leaked: states2 > tracked
      });
    } catch (e) {
      fail("ze.runtime.memory_check", e);
    }
  }, 10);
  push("ze.runtime.enchant_online", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const ids = [];
      for (let i = 0; i < 24; i++) {
        try {
          const e = spawnTestSubject(dim2, "ze:test_subject", {
            x: TEST_ORIGIN.x + 4 + i % 3 * 2,
            y: TEST_ORIGIN.y,
            z: TEST_ORIGIN.z - 5 + Math.floor(i / 3)
          });
          ids.push(e.id);
          e.triggerEvent("ze:loadout_day_41_plus_sword");
        } catch (err) {
          zlog("enchant_online spawn/trigger failed", { error: String(err) });
        }
      }
      scratch.enchantIds = ids;
    } catch (e) {
      fail("ze.runtime.enchant_online", e);
    }
  }, 25);
  push("ze.runtime.enchant_online_kill", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const ids = scratch.enchantIds ?? [];
      const all = dim2.getEntities({ type: "ze:test_subject" });
      let killed = 0;
      for (const id of ids) {
        const e = all.find((x) => x.id === id);
        if (e) {
          try {
            e.applyDamage(1e3, { cause: EntityDamageCause.magic });
            killed++;
          } catch (err) {
          }
        }
      }
      scratch.enchantKilled = killed;
    } catch (e) {
      fail("ze.runtime.enchant_online_kill", e);
    }
  }, 25);
  push("ze.runtime.enchant_online_check", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const loc = { x: TEST_ORIGIN.x + 8, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z };
      const ARMOR = ["helmet", "chestplate", "leggings", "boots"];
      const pieces = [];
      for (const e of dim2.getEntities({ type: "minecraft:item", location: loc, maxDistance: 12 })) {
        const c = e.getComponent("minecraft:item");
        const st = c ? c.itemStack : void 0;
        if (!st) continue;
        const id = st.typeId;
        const isArmor = ARMOR.some((s) => id.endsWith(s));
        const isWeapon = /_(sword|axe|pickaxe|shovel)$/.test(id);
        if (!isArmor && !isWeapon) continue;
        let ench = [];
        try {
          const ec = st.getComponent("minecraft:enchantable");
          if (ec) ench = ec.getEnchantments().map((x) => x.type.id);
        } catch (err) {
        }
        pieces.push({ typeId: id, enchantments: ench });
      }
      const enchanted = pieces.filter((p) => p.enchantments.length > 0);
      const diamond = pieces.filter(
        (p) => p.typeId.includes("diamond_") && ARMOR.some((s2) => p.typeId.endsWith(s2))
      );
      const diamondCursed = diamond.filter(
        (p) => p.enchantments.includes("binding") && p.enchantments.includes("vanishing")
      );
      const netherite = pieces.filter((p) => p.typeId.includes("netherite"));
      const rate = pieces.length > 0 ? enchanted.length / pieces.length : 0;
      const TARGET_RATE = 0.6;
      const se = Math.sqrt(TARGET_RATE * (1 - TARGET_RATE) / Math.max(pieces.length, 1));
      const tolerance = 3.5 * se + 0.04;
      const rateOk = pieces.length >= 40 && Math.abs(rate - TARGET_RATE) <= tolerance;
      const ok2 = rateOk && netherite.length === 0;
      emit("ze.runtime.enchant_online", ok2 ? "PASS" : "FAIL", {
        spawned: (scratch.enchantIds ?? []).length,
        killed: scratch.enchantKilled ?? 0,
        equipment_pieces: pieces.length,
        enchanted_pieces: enchanted.length,
        enchant_rate_observed: pieces.length > 0 ? Number((enchanted.length / pieces.length).toFixed(3)) : 0,
        target_rate: TARGET_RATE,
        tolerance: Number(tolerance.toFixed(3)),
        rate_ok: rateOk,
        diamond_pieces: diamond.length,
        diamond_with_both_curses: diamondCursed.length,
        netherite_pieces: netherite.length,
        sample: pieces.slice(0, 8),
        all_diamond: diamond.map((p) => ({ typeId: p.typeId, enchantments: p.enchantments })),
        all_enchanted: enchanted.map((p) => ({ typeId: p.typeId, enchantments: p.enchantments })),
        diamond_curse_supported_by_engine: diamond.length === 0 ? "unknown(\u672C\u6B21\u672A\u62BD\u5230\u94BB\u77F3\u9632\u5177)" : diamondCursed.length === diamond.length ? "yes" : "NO",
        note: "\u88C5\u5907\u7531\u6389\u843D\u8868\u751F\u6210\uFF08\u63A2\u9488 v6/v7 \u7ED3\u8BBA\uFF1Aminecraft:equipment \u7EC4\u4EF6\u7EC4\u53EF\u9644\u9B54\uFF1Breplaceitem \u4E0D\u80FD\uFF09\uFF1B\xA718 \u94BB\u77F3\u5F3A\u5236\u53CC\u8BC5\u5492\u4E3A\u5F15\u64CE\u9650\u5236\uFF0C\u89C1 reports/EQUIPMENT_CHANNEL.md"
      });
    } catch (e) {
      fail("ze.runtime.enchant_online_check", e);
    }
  }, 10);
  push("ze.runtime.curse_channel", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const variants = ["a", "b", "c", "d", "f"];
      const ids = {};
      for (let i = 0; i < variants.length; i++) {
        const k = variants[i];
        const e = spawnTestSubject(dim2, "ze:test_subject", {
          x: TEST_ORIGIN.x - 6 + i * 2,
          y: TEST_ORIGIN.y,
          z: TEST_ORIGIN.z + 7
        });
        ids[k] = e.id;
        e.triggerEvent("ze:test_curse_" + k);
      }
      scratch.curseIds = ids;
    } catch (e) {
      fail("ze.runtime.curse_channel", e);
    }
  }, 25);
  push("ze.runtime.curse_channel_kill", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const ids = scratch.curseIds ?? {};
      const all = dim2.getEntities({ type: "ze:test_subject" });
      let alive = 0;
      for (const k of Object.keys(ids)) {
        const e = all.find((x) => x.id === ids[k]);
        if (e) {
          alive++;
          try {
            e.applyDamage(1e3, { cause: EntityDamageCause.magic });
          } catch (err) {
          }
        }
      }
      scratch.curseAlive = alive;
      scratch.curseTotal = all.length;
    } catch (e) {
      fail("ze.runtime.curse_channel_kill", e);
    }
  }, 25);
  push("ze.runtime.curse_channel_check", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const loc = { x: TEST_ORIGIN.x - 4, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z + 7 };
      const found = {};
      const allItems = [];
      for (const e of dim2.getEntities({ type: "minecraft:item", location: loc, maxDistance: 16 })) {
        const c = e.getComponent("minecraft:item");
        const st = c ? c.itemStack : void 0;
        if (!st) continue;
        let ench = [];
        try {
          const ec = st.getComponent("minecraft:enchantable");
          if (ec) ench = ec.getEnchantments().map((x) => x.type.id);
        } catch (err) {
        }
        allItems.push(st.typeId + (ench.length ? "{" + ench.join(",") + "}" : ""));
        if (!st.typeId.includes("diamond_helmet")) continue;
        found[st.typeId + "#" + Object.keys(found).length] = ench;
      }
      const all = Object.values(found);
      const anyCurse = all.some((e) => e.includes("binding") || e.includes("vanishing"));
      const anyEnch = all.some((e) => e.length > 0);
      const ranProperly = scratch.curseAlive >= 3;
      emit("ze.runtime.curse_channel", ranProperly ? "PASS" : "FAIL", {
        helmets_found: all.length,
        subjects_alive_at_kill: scratch.curseAlive ?? 0,
        subjects_total: scratch.curseTotal ?? 0,
        all_items_nearby: allItems.slice(0, 20),
        enchantments_per_helmet: found,
        any_curse_applied: anyCurse,
        any_enchant_applied: anyEnch,
        diagnostic_ran: ranProperly,
        conclusion: anyCurse ? "\u8BC5\u5492\u53EF\u4EE5\u901A\u8FC7\u6389\u843D\u8868\u4E0B\u53D1 \u2014\u2014 \xA718 \u53EF\u5728\u7EBF\u4E0A\u5F3A\u5236" : "\u7ED3\u8BBA\uFF1A\u666E\u901A\u9644\u9B54\u53EF\u4E0B\u53D1\uFF0C\u4F46\u8BC5\u5492\uFF08binding/vanishing\uFF09\u88AB\u5F15\u64CE\u9759\u9ED8\u4E22\u5F03 \u2014\u2014 \xA718 \u4E3A\u5F15\u64CE\u9650\u5236\uFF0C\u5DF2\u767B\u8BB0\u4E3A GAP-006 / ERR-ZE-0010"
      });
    } catch (e) {
      fail("ze.runtime.curse_channel_check", e);
    }
  }, 10);
  push("ze.runtime.items", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const ids = ["ze:blood_moon_fragment", "ze:zombie_core", "ze:zombie_sigil"];
      const detail = {};
      let ok2 = 0;
      for (let i = 0; i < ids.length; i++) {
        try {
          const ent = dim2.spawnItem(new ItemStack2(ids[i], 1), {
            x: TEST_ORIGIN.x + 16,
            y: TEST_ORIGIN.y,
            z: TEST_ORIGIN.z + i
          });
          const c = ent.getComponent("minecraft:item");
          const st = c ? c.itemStack : void 0;
          detail[ids[i]] = st ? st.typeId : "no-itemStack";
          if (st && st.typeId === ids[i]) ok2++;
        } catch (e) {
          detail[ids[i]] = "FAIL:" + String(e);
        }
      }
      emit("ze.runtime.items", ok2 === ids.length ? "PASS" : "FAIL", {
        spawned_ok: ok2,
        total: ids.length,
        detail,
        note: "\u7269\u54C1\u7EB9\u7406\u7531 CPA gemini-3.1-flash-image \u751F\u6210\u6982\u5FF5\u7A3F\u540E\u7A0B\u5E8F\u50CF\u7D20\u5316\uFF08\xA797\uFF09"
      });
    } catch (e) {
      fail("ze.runtime.items", e);
    }
  }, 10);
  push("ze.runtime.performance", () => {
    const dim2 = world9.getDimension("overworld");
    const LEVELS = [20, 50, 100, 150];
    const WINDOW = 60;
    const results = [];
    const spawned = [];
    let idx = 0;
    const cleanup = () => {
      const all = dim2.getEntities({ type: "minecraft:zombie" });
      for (const id of spawned) {
        const e = all.find((x) => x.id === id);
        if (e) {
          try {
            e.applyDamage(1e3, { cause: EntityDamageCause.magic });
          } catch (err) {
          }
        }
      }
    };
    const next = () => {
      if (idx >= LEVELS.length) {
        cleanup();
        const rates = results.map((r) => Number(r.tps));
        const worst = rates.length ? Math.min(...rates) : 0;
        const errDelta = results.reduce((a, r) => a + Number(r.script_errors_delta), 0);
        const ok2 = results.length === LEVELS.length && worst >= 10 && errDelta === 0;
        emit("ze.runtime.performance", ok2 ? "PASS" : "FAIL", {
          levels: LEVELS,
          window_ticks: WINDOW,
          measurements: results,
          worst_tps: Number(worst.toFixed(2)),
          total_script_errors: errDelta,
          pass_criteria: "worst_tps >= 10 \u4E14\u65E0\u811A\u672C\u9519\u8BEF\u7206\u53D1\uFF08\xA7115\uFF09",
          note: "\u65E0\u5934 BDS \u4E0A\u4EE5 Date.now() \u5B9E\u6D4B tick \u7A97\u53E3\u8017\u65F6\u6362\u7B97 TPS\uFF1B\u5171\u4EAB VM\uFF0C\u6570\u503C\u4EC5\u4F9B\u57FA\u51C6\u53C2\u8003"
        });
        return;
      }
      const n = LEVELS[idx++];
      const base = spawned.length;
      for (let i = 0; i < n; i++) {
        const gx = i % 12 - 6;
        const gz = Math.floor(i / 12) % 12 - 6;
        try {
          const e = spawnTestSubject(dim2, "minecraft:zombie", {
            x: TEST_ORIGIN.x + gx,
            y: TEST_ORIGIN.y + 1 + Math.floor(i / 144),
            z: TEST_ORIGIN.z + gz
          });
          spawned.push(e.id);
        } catch (err) {
        }
      }
      const spawnedNow = spawned.length - base;
      const tick0 = currentTick();
      const t0 = Date.now();
      const err0 = Stats.errors;
      system2.runTimeout(() => {
        const tick1 = currentTick();
        const t1 = Date.now();
        const seconds = Math.max(1e-3, (t1 - t0) / 1e3);
        const ticks = tick1 - tick0;
        results.push({
          zombies_requested: n,
          zombies_spawned: spawnedNow,
          zombies_total: spawned.length,
          ticks_observed: ticks,
          seconds: Number(seconds.toFixed(2)),
          tps: Number((ticks / seconds).toFixed(2)),
          states: stateCount(),
          brain_invocations: Stats.brainInvocations,
          block_changes: Stats.blockChanges,
          script_errors_delta: Stats.errors - err0
        });
        next();
      }, WINDOW);
    };
    try {
      next();
    } catch (e) {
      fail("ze.runtime.performance", e);
    }
  }, 10);
  push("ze.runtime.build_multi", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const bx = TEST_ORIGIN.x + 20, by = TEST_ORIGIN.y, bz = TEST_ORIGIN.z + 8;
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: bx, y: by, z: bz });
      const st = createState(z);
      if (!st) {
        fail("ze.runtime.build_multi", "createState \u8FD4\u56DE undefined");
        return;
      }
      st.disabled = false;
      st.constructionInventory = { "minecraft:dirt": 16 };
      st.buildingBudget = 16;
      st.buildBlocksThisTask = 0;
      let placed = 0;
      const reasons = [];
      for (let i = 0; i < 5; i++) {
        dim2.setBlockType({ x: bx + i, y: by - 1, z: bz }, "minecraft:stone");
        const loc = { x: bx + i, y: by, z: bz };
        dim2.setBlockType(loc, "minecraft:air");
        resetTickBudget(currentTick() + i * 2);
        const r = attemptPlace(dim2, loc, "minecraft:dirt", st);
        reasons.push(r.reason);
        if (r.ok) placed++;
      }
      const readback = [];
      for (let i = 0; i < 5; i++) {
        const rb = safe(() => dim2.getBlock({ x: bx + i, y: by, z: bz })?.typeId, "rb");
        readback.push(rb.ok ? rb.value : void 0);
      }
      const allDirt = readback.every((v) => v === "minecraft:dirt");
      const okAll = placed === 5 && allDirt && st.buildBlocksThisTask === 5;
      emit("ze.runtime.build_multi", okAll ? "PASS" : "FAIL", {
        placed,
        reasons,
        readback,
        build_blocks_this_task: st.buildBlocksThisTask,
        note: "\xA738-\xA742\uFF1A\u8FDE\u7EED 5 \u683C\u771F\u5B9E\u843D\u5730\u5E76\u8BFB\u56DE\uFF08\u6B64\u524D\u53EA\u9A8C\u8FC7\u5355\u683C\uFF09"
      });
      safe(() => z.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.build_multi", e);
    }
  }, 10);
  push("ze.runtime.build_budget", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const bx = TEST_ORIGIN.x + 20, by = TEST_ORIGIN.y, bz = TEST_ORIGIN.z + 12;
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: bx, y: by, z: bz });
      const st = createState(z);
      if (!st) {
        fail("ze.runtime.build_budget", "createState \u8FD4\u56DE undefined");
        return;
      }
      st.disabled = false;
      st.constructionInventory = { "minecraft:dirt": 16 };
      st.buildingBudget = 2;
      st.buildBlocksThisTask = 0;
      const reasons = [];
      let placed = 0;
      for (let i = 0; i < 5; i++) {
        dim2.setBlockType({ x: bx + i, y: by - 1, z: bz }, "minecraft:stone");
        const loc = { x: bx + i, y: by, z: bz };
        dim2.setBlockType(loc, "minecraft:air");
        resetTickBudget(currentTick() + i * 2);
        const r = attemptPlace(dim2, loc, "minecraft:dirt", st);
        reasons.push(r.reason);
        if (r.ok) placed++;
      }
      const rb3 = safe(() => dim2.getBlock({ x: bx + 2, y: by, z: bz })?.typeId, "rb");
      const after = rb3.ok ? rb3.value : void 0;
      const blocked = reasons.slice(2).every((r) => r === "build-budget-exhausted");
      const okAll = placed === 2 && blocked && after === "minecraft:air";
      emit("ze.runtime.build_budget", okAll ? "PASS" : "FAIL", {
        placed,
        reasons,
        third_block_after: after,
        budget_left: st.buildingBudget,
        note: "\xA741\uFF1A\u9884\u7B97=2 \u65F6\u7B2C 3 \u683C\u8D77\u5FC5\u987B\u88AB build-budget-exhausted \u62E6\u4E0B\uFF0C\u4E14\u4E16\u754C\u4E0D\u53D8"
      });
      safe(() => z.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.build_budget", e);
    }
  }, 10);
  push("ze.runtime.mine_multi", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const mx = TEST_ORIGIN.x + 24, my = TEST_ORIGIN.y, mz = TEST_ORIGIN.z + 8;
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: mx, y: my, z: mz });
      const st = createState(z);
      if (!st) {
        fail("ze.runtime.mine_multi", "createState \u8FD4\u56DE undefined");
        return;
      }
      st.disabled = false;
      st.weaponClass = "pickaxe";
      st.weaponId = "minecraft:diamond_pickaxe";
      st.weaponTier = 4;
      st.miningBudget = 16;
      st.mineBlocksThisTask = 0;
      let mined = 0;
      for (let i = 0; i < 5; i++) {
        const loc = { x: mx + i, y: my - 1, z: mz };
        dim2.setBlockType(loc, "minecraft:stone");
        resetTickBudget(currentTick() + i * 2);
        const r = attemptBreak(dim2, loc, st, "multi");
        if (r.ok) mined++;
      }
      const readback = [];
      for (let i = 0; i < 5; i++) {
        const rb = safe(() => dim2.getBlock({ x: mx + i, y: my - 1, z: mz })?.typeId, "rb");
        readback.push(rb.ok ? rb.value : void 0);
      }
      const allAir = readback.every((v) => v === "minecraft:air");
      const okAll = mined === 5 && allAir && st.mineBlocksThisTask === 5;
      emit("ze.runtime.mine_multi", okAll ? "PASS" : "FAIL", {
        mined,
        readback,
        mined_this_task: st.mineBlocksThisTask,
        note: "\xA733\uFF1A\u8FDE\u7EED 5 \u683C\u77F3\u5934\u771F\u5B9E\u6316\u6210\u7A7A\u6C14\uFF08\u6B64\u524D\u53EA\u9A8C\u8FC7\u5355\u683C\uFF09"
      });
      safe(() => z.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.mine_multi", e);
    }
  }, 10);
  push("ze.runtime.danger_avoid", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const cls = {
        lava: isDangerBlock("minecraft:lava"),
        cactus: isDangerBlock("minecraft:cactus"),
        fire: isDangerBlock("minecraft:fire"),
        magma: isDangerBlock("minecraft:magma"),
        stone: isDangerBlock("minecraft:stone"),
        dirt: isDangerBlock("minecraft:dirt")
      };
      const classOk = cls.lava && cls.cactus && cls.fire && cls.magma && !cls.stone && !cls.dirt;
      const lx = TEST_ORIGIN.x + 28, ly = TEST_ORIGIN.y, lz = TEST_ORIGIN.z + 8;
      dim2.setBlockType({ x: lx, y: ly - 1, z: lz }, "minecraft:lava");
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: lx, y: ly, z: lz });
      const st = createState(z);
      if (!st) {
        fail("ze.runtime.danger_avoid", "createState \u8FD4\u56DE undefined");
        return;
      }
      st.disabled = false;
      st.weaponClass = "pickaxe";
      st.weaponId = "minecraft:diamond_pickaxe";
      st.weaponTier = 4;
      st.miningBudget = 16;
      st.mineBlocksThisTask = 0;
      const ctx = {
        st,
        entity: z,
        dim: dim2,
        tick: currentTick(),
        target: { x: lx, y: ly - 6, z: lz },
        env: null,
        rng: makeRng(31),
        multiplier: () => 1
      };
      const out = runMine(ctx);
      const rb = safe(() => dim2.getBlock({ x: lx, y: ly - 1, z: lz })?.typeId, "rb");
      const stillLava = rb.ok && rb.value === "minecraft:lava";
      const okAll = classOk && stillLava && st.mineBlocksThisTask === 0;
      emit("ze.runtime.danger_avoid", okAll ? "PASS" : "FAIL", {
        classification: cls,
        class_ok: classOk,
        run_mine_result: out,
        lava_after: rb.ok ? rb.value : void 0,
        mined_this_task: st.mineBlocksThisTask,
        note: "\xA734\uFF1A\u5CA9\u6D46/\u4ED9\u4EBA\u638C/\u706B/\u5CA9\u6D46\u5757\u5224\u4E3A\u5371\u9669\uFF1BrunMine \u9762\u5BF9\u5CA9\u6D46\u62D2\u7EDD\u6267\u884C\u4E14\u4E16\u754C\u4E0D\u53D8"
      });
      safe(() => z.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.danger_avoid", e);
    }
  }, 10);
  push("ze.runtime.stand_on_built", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const sx = TEST_ORIGIN.x + 32, sy = TEST_ORIGIN.y, sz = TEST_ORIGIN.z + 8;
      dim2.setBlockType({ x: sx, y: sy - 1, z: sz }, "minecraft:air");
      dim2.setBlockType({ x: sx, y: sy - 2, z: sz }, "minecraft:stone");
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: sx, y: sy, z: sz });
      const st = createState(z);
      if (!st) {
        fail("ze.runtime.stand_on_built", "createState \u8FD4\u56DE undefined");
        return;
      }
      st.disabled = false;
      st.constructionInventory = { "minecraft:dirt": 8 };
      st.buildingBudget = 8;
      st.buildBlocksThisTask = 0;
      const ctx = {
        st,
        entity: z,
        dim: dim2,
        tick: currentTick(),
        target: { x: sx, y: sy + 4, z: sz },
        env: null,
        rng: makeRng(13),
        multiplier: () => 1
      };
      const out = runBuild(ctx);
      const rb = safe(() => dim2.getBlock({ x: sx, y: sy - 1, z: sz })?.typeId, "rb");
      const built = rb.ok ? rb.value : void 0;
      scratch.standBuiltId = z.id;
      scratch.standBuiltY = sy;
      scratch.standBuiltOk = built === "minecraft:dirt";
      emit("ze.runtime.stand_on_built", built === "minecraft:dirt" ? "PASS" : "FAIL", {
        run_build_result: out,
        block_under_feet: built,
        expected_y: sy,
        note: "\xA740\uFF1ArunBuild \u5728\u811A\u4E0B\u8865\u4E00\u683C\uFF1B\u4E0B\u4E00\u6B65\u5728\u7269\u7406\u7ED3\u7B97\u540E\u6821\u9A8C\u50F5\u5C38\u786E\u5B9E\u7AD9\u5728\u65B0\u5757\u4E0A"
      });
    } catch (e) {
      fail("ze.runtime.stand_on_built", e);
    }
  }, 10);
  push("ze.runtime.stand_on_built_check", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const id = scratch.standBuiltId;
      const sy = scratch.standBuiltY ?? 0;
      const ok0 = scratch.standBuiltOk === true;
      const e = id ? dim2.getEntities({ type: "minecraft:zombie" }).find((x) => x.id === id) : void 0;
      const loc = e ? safeLocation(e) : void 0;
      const stoodOnTop = !!loc && loc.y >= sy - 0.4;
      const rb = safe(() => dim2.getBlock({ x: TEST_ORIGIN.x + 32, y: sy - 1, z: TEST_ORIGIN.z + 8 })?.typeId, "rb");
      const blockStill = rb.ok && rb.value === "minecraft:dirt";
      const okAll = ok0 && stoodOnTop && blockStill;
      emit("ze.runtime.stand_on_built_check", okAll ? "PASS" : "FAIL", {
        block_placed: ok0,
        block_still_there: blockStill,
        zombie_y: loc ? Number(loc.y.toFixed(2)) : void 0,
        expected_at_least: sy - 0.4,
        note: "\xA740\uFF1A\u7269\u7406\u7ED3\u7B97\u540E\u50F5\u5C38\u4ECD\u505C\u5728\u65B0\u642D\u65B9\u5757\u4E4B\u4E0A\uFF08\u672A\u7A7F\u6A21/\u672A\u5760\u843D\uFF09"
      });
      if (e) safe(() => e.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.stand_on_built_check", e);
    }
  }, 30);
  push("ze.runtime.height_solver", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const flatFrom = { x: TEST_ORIGIN.x - 6, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z + 8 };
      const flatTarget = { x: TEST_ORIGIN.x - 6, y: TEST_ORIGIN.y + 5, z: TEST_ORIGIN.z + 8 };
      const flat = resolveHeightPlan(dim2, flatFrom, flatTarget, 24);
      const HILL_H = 4;
      const hz = TEST_ORIGIN.z + 8;
      const baseX = TEST_ORIGIN.x - 3;
      const clean = (block) => {
        for (let i = 0; i < HILL_H; i++) {
          const x = baseX + i;
          for (let y = TEST_ORIGIN.y - 2; y < TEST_ORIGIN.y + HILL_H + 2; y++)
            dim2.setBlockType({ x, y, z: hz }, "minecraft:air");
        }
        for (let i = 0; i < HILL_H; i++)
          dim2.setBlockType({ x: baseX + i, y: TEST_ORIGIN.y - 1 + i, z: hz }, block);
      };
      clean("minecraft:stone");
      const hillTop = safeBlockId(dim2, { x: baseX + HILL_H - 1, y: TEST_ORIGIN.y - 1 + HILL_H - 1, z: hz });
      const stageOk = hillTop === "minecraft:stone";
      const nat = resolveHeightPlan(dim2, flatFrom, flatTarget, 24);
      clean("minecraft:oak_planks");
      const built = resolveHeightPlan(dim2, flatFrom, flatTarget, 24);
      for (let i = 0; i < HILL_H; i++) {
        const x = baseX + i;
        for (let y = TEST_ORIGIN.y - 2; y < TEST_ORIGIN.y + HILL_H + 2; y++)
          dim2.setBlockType({ x, y, z: hz }, "minecraft:air");
      }
      const okAll = stageOk && flat === null && nat !== null && nat.kind === "natural-high-ground" && nat.gain >= 2 && built !== null && built.kind === "player-route" && built.gain >= 2;
      emit("ze.runtime.height_solver", okAll ? "PASS" : "FAIL", {
        stage_ok: stageOk,
        hill_top_block: hillTop,
        flat_result: flat,
        natural_result: nat,
        player_route_result: built,
        note: "\xA737 \u7B2C 2/3 \u6B65\uFF1A\u5E73\u5730\u5FC5\u987B\u4E0D\u8BEF\u5224\uFF08\u8FD4\u56DE null\uFF09\uFF1B4 \u683C\u77F3\u5934\u2192\u5929\u7136\u9AD8\u5730\uFF1B4 \u683C\u6728\u677F\u2192\u73A9\u5BB6\u5EFA\u7B51\u8DEF\u7EBF\uFF08\u5217\u9876\u987B\u6BD4\u81EA\u8EAB\u9AD8 \u22652 \u683C\uFF0C\u9AD8 1 \u683C\u7684\u53F0\u9636\u6309 \xA737 \u4EA4\u7ED9\u539F\u751F\u5BFC\u822A\uFF09"
      });
    } catch (e) {
      fail("ze.runtime.height_solver", e);
    }
  }, 10);
  push("ze.runtime.native_place_probe", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const o = { x: TEST_ORIGIN.x + 30, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z + 16 };
      clearStage(dim2, o, 3, 2);
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: o.x, y: o.y, z: o.z });
      scratch.npId = z.id;
      scratch.npOrigin = o;
      scratch.npBase = snapshotVolume(dim2, o, 3, 2);
      z.triggerEvent("ze:enable_native_place");
      emit("ze.runtime.native_place_probe", "PASS", {
        note: "\u5DF2\u89E6\u53D1 ze:enable_native_place\uFF08\u7EC4\u4EF6\u542B randomly_placeable_blocks\uFF09\uFF0C\u7B49 100 tick \u89C2\u5BDF\u5F15\u64CE\u662F\u5426\u771F\u7684\u653E\u4E0B\u65B9\u5757"
      });
    } catch (e) {
      fail("ze.runtime.native_place_probe", e);
    }
  }, 10);
  push("ze.runtime.native_place_probe_check", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const o = scratch.npOrigin;
      const base = scratch.npBase ?? [];
      const id = scratch.npId;
      const d = diffVolume(dim2, o, 3, 2, base);
      const works = d.placed.length > 0;
      emit("ze.runtime.native_place_probe_check", works ? "PASS" : "SKIP", {
        works,
        blocks_placed: d.placed.length,
        examples: d.placed.slice(0, 5),
        window_ticks: 150,
        per_100_ticks: Number((d.placed.length / 150 * 100).toFixed(2)),
        finding: works ? "\u5B98\u65B9 behavior.place_block \u5BF9\u50F5\u5C38**\u53EF\u751F\u6548**\uFF0C\u4F46**\u9891\u7387\u6781\u4F4E\u4E14\u4F4D\u7F6E\u968F\u673A**\uFF08\u672C\u7A97\u53E3\u4EC5 " + d.placed.length + " \u683C / 300 tick\uFF0C\u843D\u70B9\u5728 xz_range/y_range \u5185\u968F\u673A\uFF09\u3002\u5B83**\u4E0D\u80FD**\u66FF\u6362\u811A\u672C setBlockType \u2014\u2014 \xA738 \u7684\u57AB\u811A\u8981\u6C42\u300C\u5728\u6307\u5B9A\u683C\u7CBE\u786E\u653E\u7F6E\u300D\uFF0C\u800C\u539F\u751F goal \u7ED9\u4E0D\u4E86\u4F4D\u7F6E\u63A7\u5236\u3002\u53EF\u8003\u8651\u4F5C\u4E3A\u300C\u6709\u539F\u7248\u653E\u7F6E\u52A8\u753B/\u97F3\u6548\u300D\u7684\u8865\u5145\u884C\u4E3A\u3002" : "\u5B98\u65B9 behavior.place_block \u5728 150 tick \u7A97\u53E3\u5185**\u672A\u89C2\u5BDF\u5230\u751F\u6548**\uFF08\u7EC4\u4EF6 schema \u5408\u6CD5\u3001\u4E8B\u4EF6\u5DF2\u89E6\u53D1\u3001\u5750\u6807\u5728 ticking \u533A\u5185\uFF09\u3002\u6CE8\u610F\uFF1A\u53E6\u4E00\u8F6E\u5B9E\u6D4B\u66FE\u89C2\u5BDF\u5230 1 \u683C\uFF0C\u8BF4\u660E\u5B83\u662F**\u4F4E\u9891\u4E14\u4E0D\u786E\u5B9A**\u7684\u3002\u4EA7\u54C1\u4E3B\u901A\u9053\u7EE7\u7EED\u4F7F\u7528\u811A\u672C setBlockType\u3002",
        ticking_area: "x,z \u2208 [-32,48]\uFF08setupArena \u5EFA\u7ACB\uFF09",
        probe_origin: o,
        note: "KIRA v5 \u884C\u52A8\u6E05\u5355\u7B2C 1 \u9879 / v7 \u672A\u5B9E\u73B0\u6E05\u5355\u300E\u539F\u751F place_block \u5BF9\u50F5\u5C38\u662F\u5426\u751F\u6548\u300F"
      });
      const e = id ? dim2.getEntities({ type: "minecraft:zombie" }).find((x) => x.id === id) : void 0;
      if (e) safe(() => e.triggerEvent("ze:disable_native_place"), "off");
      if (e) safe(() => e.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.native_place_probe_check", e);
    }
  }, 150);
  push("ze.runtime.native_take_probe", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const o = { x: TEST_ORIGIN.x + 36, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z + 16 };
      clearStage(dim2, o, 3, 2, "minecraft:dirt");
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: o.x, y: o.y, z: o.z });
      scratch.ntId = z.id;
      scratch.ntOrigin = o;
      scratch.ntBase = snapshotVolume(dim2, o, 3, 2);
      z.triggerEvent("ze:enable_native_take");
      emit("ze.runtime.native_take_probe", "PASS", {
        note: "\u5DF2\u89E6\u53D1 ze:enable_native_take\uFF08blocks \u767D\u540D\u5355\u542B dirt\uFF09\uFF0C\u7B49 100 tick \u89C2\u5BDF\u5F15\u64CE\u662F\u5426\u771F\u7684\u53D6\u8D70\u65B9\u5757"
      });
    } catch (e) {
      fail("ze.runtime.native_take_probe", e);
    }
  }, 10);
  push("ze.runtime.native_take_probe_check", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const o = scratch.ntOrigin;
      const base = scratch.ntBase ?? [];
      const id = scratch.ntId;
      const d = diffVolume(dim2, o, 3, 2, base);
      const works = d.removed.length > 0;
      emit("ze.runtime.native_take_probe_check", works ? "PASS" : "SKIP", {
        works,
        blocks_taken: d.removed.length,
        examples: d.removed.slice(0, 5),
        window_ticks: 150,
        per_100_ticks: Number((d.removed.length / 150 * 100).toFixed(2)),
        finding: works ? "\u5B98\u65B9 behavior.take_block \u5BF9\u50F5\u5C38**\u53EF\u751F\u6548**\uFF08\u672B\u5F71\u4EBA\u540C\u6B3E\u53D6\u5757\u673A\u5236\uFF09\uFF0C\u4F46\u9891\u7387\u4F4E\u4E14\u53D6\u54EA\u4E00\u683C\u4E0D\u53EF\u63A7\uFF0C\u4E0D\u80FD\u66FF\u6362\u811A\u672C\u901A\u9053\u3002" : "\u5B98\u65B9 behavior.take_block \u5728 150 tick \u7A97\u53E3\u5185**\u672A\u89C2\u5BDF\u5230\u751F\u6548**\u3002\u4EA7\u54C1\u4E3B\u901A\u9053\u7EE7\u7EED\u4F7F\u7528\u811A\u672C setBlockType \u6316\u65B9\u5757\u3002",
        note: "KIRA v5 \u884C\u52A8\u6E05\u5355\u7B2C 1 \u9879 / v7 \u672A\u5B9E\u73B0\u6E05\u5355\u300E\u539F\u751F take_block \u5BF9\u50F5\u5C38\u662F\u5426\u751F\u6548\u300F"
      });
      const e = id ? dim2.getEntities({ type: "minecraft:zombie" }).find((x) => x.id === id) : void 0;
      if (e) safe(() => e.triggerEvent("ze:disable_native_take"), "off");
      if (e) safe(() => e.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.native_take_probe_check", e);
    }
  }, 150);
  push("ze.runtime.native_dig_probe", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const o = { x: TEST_ORIGIN.x + 42, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z + 16 };
      for (let dx = -4; dx <= 4; dx++)
        for (let dz = -4; dz <= 4; dz++) {
          dim2.setBlockType({ x: o.x + dx, y: o.y - 1, z: o.z + dz }, "minecraft:dirt");
          dim2.setBlockType({ x: o.x + dx, y: o.y, z: o.z + dz }, "minecraft:air");
          dim2.setBlockType({ x: o.x + dx, y: o.y + 1, z: o.z + dz }, "minecraft:air");
        }
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: o.x, y: o.y, z: o.z });
      scratch.ndId = z.id;
      scratch.ndOrigin = o;
      scratch.ndBase = snapshotVolume(dim2, o, 4, 1);
      z.triggerEvent("ze:enable_native_dig");
      emit("ze.runtime.native_dig_probe", "PASS", {
        note: "\u5DF2\u89E6\u53D1 ze:enable_native_dig\uFF08random_search_and_dig\uFF0Ctarget_blocks=\u6CE5\u571F\u7C7B\uFF09\uFF0C\u7B49 140 tick \u89C2\u5BDF\u662F\u5426\u6316\u8D70\u65B9\u5757"
      });
    } catch (e) {
      fail("ze.runtime.native_dig_probe", e);
    }
  }, 10);
  push("ze.runtime.native_dig_probe_check", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const o = scratch.ndOrigin;
      const base = scratch.ndBase ?? [];
      const id = scratch.ndId;
      const d = diffVolume(dim2, o, 4, 1, base);
      const works = d.removed.length > 0;
      emit("ze.runtime.native_dig_probe_check", works ? "PASS" : "SKIP", {
        works,
        blocks_dug: d.removed.length,
        examples: d.removed.slice(0, 5),
        window_ticks: 150,
        per_100_ticks: Number((d.removed.length / 150 * 100).toFixed(2)),
        finding: works ? "\u5B98\u65B9 behavior.random_search_and_dig \u5BF9\u50F5\u5C38**\u53EF\u751F\u6548**\uFF08\u55C5\u63A2\u517D\u540C\u6B3E\u641C\u7D22\u2192\u79FB\u52A8\u2192\u6316\u6398\u6D41\u7A0B\uFF09\uFF0C\u4F46\u76EE\u6807\u662F\u968F\u673A\u7684\uFF0C\u4E0D\u80FD\u66FF\u6362 \xA732 \u7684\u5B9A\u5411\u6316\u6398\u3002" : "\u5B98\u65B9 behavior.random_search_and_dig \u5728 150 tick \u7A97\u53E3\u5185**\u672A\u89C2\u5BDF\u5230\u751F\u6548**\u3002\xA732 \u7684\u641C\u7D22\u6316\u6398\u7EE7\u7EED\u7531\u811A\u672C Mine.ts \u627F\u62C5\u3002",
        note: "v7 \u672A\u5B9E\u73B0\u6E05\u5355\u300Erandom_search_and_dig \u672A\u6CE8\u5165\u300F\u2014\u2014 \u672C\u8F6E\u5DF2\u6CE8\u5165\u5E76\u5B9E\u6D4B"
      });
      const e = id ? dim2.getEntities({ type: "minecraft:zombie" }).find((x) => x.id === id) : void 0;
      if (e) safe(() => e.triggerEvent("ze:disable_native_dig"), "off");
      if (e) safe(() => e.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.native_dig_probe_check", e);
    }
  }, 150);
  push("ze.runtime.nautilus_rideable_spawn", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const o = { x: TEST_ORIGIN.x + 30, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z + 22 };
      clearStage(dim2, o, 2, 2, "minecraft:water");
      const ids = {};
      for (const t of ["minecraft:zombie_nautilus", "minecraft:zombie_horse"]) {
        try {
          const e = spawnTestSubject(dim2, t, { x: o.x, y: o.y, z: o.z });
          ids[t] = e.id;
          if (t === "minecraft:zombie_horse") {
            try {
              e.triggerEvent("minecraft:spawn_adult");
            } catch (err) {
            }
          }
        } catch (err) {
          ids[t] = null;
        }
      }
      scratch.mountIds = ids;
    } catch (e) {
      fail("ze.runtime.nautilus_rideable_spawn", e);
    }
  }, 10);
  push("ze.runtime.nautilus_rideable", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const ids = scratch.mountIds ?? {};
      const report = {};
      for (const t of ["minecraft:zombie_nautilus", "minecraft:zombie_horse"]) {
        const id = ids[t];
        if (!id) {
          report[t] = { spawned: false, error: "spawn failed" };
          continue;
        }
        const e = dim2.getEntities({ type: t }).find((x) => x.id === id);
        if (!e) {
          report[t] = { spawned: false, error: "entity gone before check" };
          continue;
        }
        let ride;
        let seats = 0;
        try {
          ride = e.getComponent("minecraft:rideable");
          seats = ride?.seatCount ?? 0;
        } catch (err) {
        }
        report[t] = { spawned: true, rideable: !!ride, seatCount: seats };
        safe(() => e.remove(), "cleanup");
      }
      const naut = report["minecraft:zombie_nautilus"];
      const horse = report["minecraft:zombie_horse"];
      const okAll = !!naut?.spawned && !!naut?.rideable && !!horse?.spawned && !!horse?.rideable;
      emit("ze.runtime.nautilus_rideable", okAll ? "PASS" : "FAIL", {
        entities: report,
        note: "\xA754 \xA758\uFF1A\u4E24\u79CD\u5750\u9A91\u90FD\u5FC5\u987B\u80FD\u88AB\u751F\u6210\u4E14\u5E26 minecraft:rideable\uFF08\u9A91\u58EB\u4F53\u7CFB\u7684\u7269\u7406\u524D\u63D0\uFF09"
      });
    } catch (e) {
      fail("ze.runtime.nautilus_rideable", e);
    }
  }, 10);
  push("ze.runtime.planner_executor_loop", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const online = world9.getAllPlayers();
      const player = online.length > 0 ? online[0] : void 0;
      const ploc = player ? safeLocation(player) : void 0;
      let o;
      if (ploc) {
        o = { x: ploc.x + 8, y: ploc.y, z: ploc.z };
      } else {
        o = { x: TEST_ORIGIN.x - 20, y: TEST_ORIGIN.y, z: TEST_ORIGIN.z + 8 };
      }
      for (let dx = -2; dx <= 2; dx++) {
        for (let dz = -2; dz <= 2; dz++) {
          dim2.setBlockType({ x: o.x + dx, y: o.y - 1, z: o.z + dz }, "minecraft:stone");
          dim2.setBlockType({ x: o.x + dx, y: o.y, z: o.z + dz }, "minecraft:air");
          dim2.setBlockType({ x: o.x + dx, y: o.y + 1, z: o.z + dz }, "minecraft:air");
        }
      }
      if (!ploc) {
        for (let i = 0; i < 12; i++) {
          dim2.setBlockType({ x: o.x + i, y: o.y - 1, z: o.z }, "minecraft:stone");
          dim2.setBlockType({ x: o.x + i, y: o.y, z: o.z }, "minecraft:air");
          dim2.setBlockType({ x: o.x + i, y: o.y + 1, z: o.z }, "minecraft:air");
        }
      }
      const z = spawnTestSubject(dim2, "minecraft:zombie", { x: o.x, y: o.y, z: o.z });
      const st = createState(z);
      if (!st) {
        fail("ze.runtime.planner_executor_loop", "createState \u8FD4\u56DE undefined");
        return;
      }
      st.disabled = false;
      if (ploc) {
        st.targetId = player.id;
        st.lastSeenPosition = ploc;
        st.lastSeenDirection = { x: -1, y: 0, z: 0 };
        st.targetConfidence = 1;
        scratch.loopTarget = { x: ploc.x, y: ploc.y, z: ploc.z };
        scratch.loopMode = "real-player";
      } else {
        st.targetId = "ze-fake-player";
        st.lastSeenPosition = { x: o.x + 8, y: o.y, z: o.z };
        st.lastSeenDirection = { x: 1, y: 0, z: 0 };
        st.targetConfidence = 0.6;
        scratch.loopTarget = { x: o.x + 8, y: o.y, z: o.z };
        scratch.loopMode = "script-impulse";
      }
      st.lastSeenTick = currentTick();
      scratch.loopId = z.id;
      scratch.loopStart = { x: o.x, y: o.y, z: o.z };
      scratch.loopStates = [];
      const states2 = [];
      scratch.loopStates = states2;
      scratch.loopHandle = system2.runInterval(() => {
        try {
          const id = scratch.loopId;
          const e = dim2.getEntities({ type: "minecraft:zombie" }).find((x) => x.id === id);
          const s = getState(id);
          if (!e || !s) return;
          tickZombie(e, makeRng(currentTick() * 31 + 7), 0, true);
          states2.push(String(s.currentState));
        } catch (err) {
        }
      }, 1);
      emit("ze.runtime.planner_executor_loop", "PASS", {
        mode: scratch.loopMode,
        player: player ? player.name : null,
        note: "\u542F\u52A8\u9010 tick Brain \u9A71\u52A8\uFF0C\u7B49 130 tick \u540E\u6D4B\u91CF\u771F\u5B9E\u4F4D\u79FB"
      });
    } catch (e) {
      fail("ze.runtime.planner_executor_loop", e);
    }
  }, 130);
  push("ze.runtime.planner_executor_loop_check", () => {
    try {
      const dim2 = world9.getDimension("overworld");
      const h = scratch.loopHandle;
      if (h !== void 0) {
        try {
          system2.clearRun(h);
        } catch (err) {
        }
      }
      const id = scratch.loopId;
      const start = scratch.loopStart;
      const tgt = scratch.loopTarget;
      const states2 = scratch.loopStates ?? [];
      const e = dim2.getEntities({ type: "minecraft:zombie" }).find((x) => x.id === id);
      if (!e) {
        fail("ze.runtime.planner_executor_loop_check", "\u5B9E\u4F53\u4E22\u5931");
        return;
      }
      const loc = safeLocation(e);
      const d0 = Math.hypot(start.x - tgt.x, start.z - tgt.z);
      const d1 = loc ? Math.hypot(loc.x - tgt.x, loc.z - tgt.z) : d0;
      const moved = loc ? Math.hypot(loc.x - start.x, loc.z - start.z) : 0;
      const uniq = Array.from(new Set(states2));
      const leftIdle = uniq.some((s) => s !== "IDLE" && s !== "undefined");
      const okAll = moved > 0.5 && leftIdle && d1 < d0 + 0.01;
      emit("ze.runtime.planner_executor_loop_check", okAll ? "PASS" : "FAIL", {
        distance_before: Number(d0.toFixed(2)),
        distance_after: Number(d1.toFixed(2)),
        moved_blocks: Number(moved.toFixed(2)),
        states_seen: uniq,
        note: "\xA720 \xA721 \xA7116 \xA7117\uFF1APlanner \u51B3\u7B56 \u2192 Executor \u6267\u884C \u2192 \u4E16\u754C\u771F\u5B9E\u4F4D\u79FB\uFF0C\u7AEF\u5230\u7AEF\u95ED\u73AF\uFF08v7 \u5217\u4E3A\u552F\u4E00\u672A\u9A8C\u7684 P1 \u9879\uFF09"
      });
      safe(() => e.remove(), "cleanup");
    } catch (e) {
      fail("ze.runtime.planner_executor_loop_check", e);
    }
  }, 80);
  push("ze.runtime.summary", () => {
    try {
      pass("ze.runtime.summary", {
        tick: currentTick(),
        states: stateCount(),
        tracked: trackedCount(),
        groups: allGroupRecords().length,
        brain_invocations: Stats.brainInvocations,
        block_changes: Stats.blockChanges,
        errors: Stats.errors,
        equipment: equipmentStats().generated
      });
    } catch (e) {
      fail("ze.runtime.summary", e);
    }
  });
}
var rng = makeRng(randomSeed());
var brainEnabled = true;
var registeredCommandNames = [];
var bootTick = -1;
var entryCensusDone = false;
try {
  system3.beforeEvents?.startup?.subscribe?.((ev) => {
    try {
      const names = registerCommands(ev);
      registeredCommandNames.push(...names);
      zlog("Commands registered", { names });
    } catch (e) {
      zlog("registerCommands failed", { error: String(e) });
    }
  });
} catch (e) {
  zlog("startup subscribe failed", { error: String(e) });
}
installHooks({
  spawnTestZombies(count, kind) {
    return spawnTestZombies(count, kind);
  },
  runSelfTest() {
    return startSelfTest();
  },
  setBrainEnabled(on) {
    brainEnabled = on;
  },
  isBrainEnabled() {
    return brainEnabled;
  }
});
installSelfTestHooks({
  registeredCommands: () => registeredCommandNames.slice()
});
function isManaged(typeId) {
  return BRAIN_MANAGED.includes(typeId);
}
var overrideMissingReported = false;
function reportOverrideMissing(err) {
  if (overrideMissingReported) return;
  overrideMissingReported = true;
  zlog("ENTITY OVERRIDE NOT ACTIVE \u2014 falling back to replaceitem", { error: err });
  fail("ze.equip.override_missing", "\u539F\u7248\u5B9E\u4F53\u8986\u76D6\u672A\u751F\u6548\uFF0C\u88C5\u5907\u8D70 replaceitem \u56DE\u9000\uFF08\u65E0\u9644\u9B54\uFF09", {
    cause: "\u5305\u672A\u767B\u8BB0\u8FDB\u4E16\u754C world_behavior_packs.json\uFF08ERR-ZE-0002\uFF09",
    impact: "\u7EBF\u4E0A\u88C5\u5907\u65E0\u9644\u9B54\uFF08\xA716-\xA718\uFF09\uFF1B\u88C5\u5907\u672C\u8EAB\u4ECD\u5728"
  });
}
function fallbackEquip(entity, st, armorProfile, weaponClass) {
  const loadout = generateLoadout({
    stage: armorProfile === "bloodmoon" || armorProfile === "elite" ? "day_41_plus" : armorProfile,
    bloodMoon: armorProfile === "bloodmoon",
    elite: armorProfile === "elite" ? "bloodmoon_knight" : null,
    rng
  });
  let applied = 0, failed = 0;
  for (const c of loadoutToCommands(loadout)) {
    const r = safe(() => {
      entity.runCommand(c.command);
      return true;
    }, "fallback-equip:" + c.slot);
    if (r.ok && r.value) applied++;
    else failed++;
  }
  const wc = loadout.weapon ? loadout.weapon.class : "none";
  const tier = loadout.weapon ? WEAPON_TIER_BY_MATERIAL[loadout.weapon.material] ?? 0 : 0;
  void weaponClass;
  void st;
  return { applied, failed, weaponClass: wc, weaponTier: tier, weaponId: loadout.weapon ? loadout.weapon.itemId : null, loadout };
}
var WEAPON_TIER_BY_MATERIAL = { wooden: 1, stone: 2, golden: 1, iron: 3, diamond: 4 };
var WEAPON_MATERIAL_BAND = {
  day_1_7: ["wooden", "stone"],
  day_8_20: ["wooden", "stone", "iron"],
  day_21_40: ["stone", "iron", "diamond"],
  day_41_plus: ["stone", "iron", "diamond"],
  bloodmoon: ["iron", "diamond"],
  elite: ["iron", "diamond"]
};
function rollWeaponClass(archKind, typeId) {
  const arch = archetypeDef(archKind);
  const pool = arch && arch.weaponPool ? arch.weaponPool.slice() : ["sword", "axe", "pickaxe", "shovel"];
  if (pool.length === 0) return "none";
  if (pool.indexOf("signature") !== -1) {
    const sig = Config.archetypes.signatureWeapon ? Config.archetypes.signatureWeapon[typeId] : void 0;
    return sig ?? "none";
  }
  const rate = arch && typeof arch.weaponRate === "number" ? arch.weaponRate : TUNABLE.weaponRate ? TUNABLE.weaponRate() : 0.85;
  if (!rng.chance(rate)) return "none";
  if (pool.length === 1) return pool[0];
  const byClass = /* @__PURE__ */ new Map();
  for (const w of Config.weapons.weapons) {
    if (pool.indexOf(w.class) === -1) continue;
    byClass.set(w.class, (byClass.get(w.class) ?? 0) + w.weight);
  }
  const items = [...byClass.entries()].map(([v, w]) => ({ v, w }));
  if (items.length === 0) return pool[0];
  const picked = rng.weighted(items);
  return picked;
}
function equipOnSpawn(entity, st) {
  if (!st) return;
  try {
    const arch = archOfState(st);
    if (arch && arch.equipment === false) {
      st.equipmentProfile = "none";
      st.weaponClass = "none";
      zlog("Archetype carries no equipment", { entity: st.entityId, archetype: st.archetype });
      return;
    }
    const loTypes = Config.archetypes.zeLoadoutTypes;
    if (loTypes && st.archetype !== "siege" && loTypes.indexOf(entity.typeId) === -1) {
      st.equipmentProfile = "native";
      st.weaponClass = "none";
      zlog("Archetype keeps native equipment", { entity: st.entityId, typeId: entity.typeId });
      return;
    }
    const armRate = arch && arch.alwaysArmed ? 1 : TUNABLE.equipmentRate();
    if (!rng.chance(armRate)) {
      st.equipmentProfile = "none";
      return;
    }
    const stage = stageIdForDay(worldDay());
    const armorProfile = st.eliteType ? "elite" : isBloodMoon() ? "bloodmoon" : stage;
    const weaponClass = rollWeaponClass(st.archetype, entity.typeId);
    const suffix = armorProfile + "_" + weaponClass;
    let triggered = false;
    try {
      entity.triggerEvent("ze:loadout_" + suffix);
      triggered = true;
    } catch (e) {
      reportOverrideMissing(String(e));
      if (st.archetype && st.archetype !== "siege") {
        st.equipmentProfile = suffix + "|NO_GROUP";
        st.weaponClass = "none";
        zlog("Loadout group missing for non-siege archetype; skipping fallback", {
          entity: st.entityId,
          archetype: st.archetype,
          profile: suffix
        });
        return;
      }
      const fb = fallbackEquip(entity, st, armorProfile, weaponClass);
      st.equipmentProfile = suffix + "|FALLBACK_replaceitem(" + fb.applied + "/" + (fb.applied + fb.failed) + ")";
      st.weaponClass = fb.weaponClass;
      st.weaponTier = fb.weaponTier;
      st.weaponId = fb.weaponId;
      st.loadout = fb.loadout;
      recordLoadout(fb.loadout);
      zlog("Loadout applied via replaceitem fallback", { entity: st.entityId, applied: fb.applied, failed: fb.failed });
      return;
    }
    st.equipmentProfile = suffix;
    st.weaponClass = weaponClass;
    const band = WEAPON_MATERIAL_BAND[armorProfile] ?? ["wooden"];
    st.weaponTier = Math.min(...band.map((m) => WEAPON_TIER_BY_MATERIAL[m] ?? 0));
    st.weaponId = null;
    st.loadout = null;
    recordLoadoutEvent(suffix, armorProfile, weaponClass);
    zlog("Loadout event triggered", { entity: st.entityId, profile: suffix, triggered, weaponClass });
  } catch (e) {
    fail("ze.equip.spawn_error", e, { entity: entity.id });
  }
}
function registerEntity(entity, source) {
  if (!isManaged(entity.typeId)) return;
  let st = getState(entity.id);
  if (!st) {
    st = createState(entity);
    if (!st) return;
    restoreKeyState(st, entity);
    try {
      grantConstructionInventory(st, rng);
    } catch {
    }
    try {
      if (Config.elite.enabled) {
        const day = worldDay();
        const stage = stageIdForDay(day);
        const eliteId = rollElite(stage, isBloodMoon(), rng);
        if (eliteId) {
          const res = applyElite(entity, st, eliteId, rng);
          if (res.applied.length > 0) st.eliteType = eliteId;
          zlog("Elite roll", {
            elite: eliteId,
            applied: res.applied.length,
            failed: res.failed,
            accepted: st.eliteType === eliteId
          });
        }
      }
    } catch (e) {
      zlog("elite roll failed", { error: String(e) });
    }
    equipOnSpawn(entity, st);
    try {
      if (Config.group.enabled) assignGroup(st, entity);
    } catch {
    }
  }
  st.lastActiveTick = currentTick();
  zlog("Zombie registered", { entity: entity.id, variant: st.variant, source });
}
try {
  world10.afterEvents.entitySpawn.subscribe((ev) => {
    try {
      registerEntity(ev.entity, "entitySpawn:" + ev.cause);
    } catch (e) {
      zlog("entitySpawn handler error", { error: String(e) });
    }
  });
} catch (e) {
  zlog("entitySpawn subscribe failed", { error: String(e) });
}
try {
  world10.afterEvents.entityLoad.subscribe((ev) => {
    try {
      registerEntity(ev.entity, "entityLoad");
    } catch (e) {
      zlog("entityLoad handler error", { error: String(e) });
    }
  });
} catch (e) {
  zlog("entityLoad subscribe failed", { error: String(e) });
}
function unregister(entityId, why) {
  const st = getState(entityId);
  if (!st) return;
  dropBrainCaches(entityId);
  dropMemory(entityId);
  dropSearchPlan(entityId);
  dropIntercept(entityId);
  dropBuildState(entityId);
  dropMineBias(entityId);
  dropEnterProgress(entityId);
  removeState(entityId);
  zlog("Zombie unregistered", { entity: entityId, why });
}
try {
  world10.afterEvents.entityDie.subscribe((ev) => {
    try {
      dropEliteSpecialMaterials(ev.deadEntity);
      unregister(ev.deadEntity.id, "entityDie");
    } catch (e) {
      zlog("entityDie handler error", { error: String(e) });
    }
  });
} catch (e) {
  zlog("entityDie subscribe failed", { error: String(e) });
}
function dropEliteSpecialMaterials(dead) {
  const st = getState(dead.id);
  if (!st || !st.eliteType) return;
  if (!Config.elite.drops.specialMaterialsEnabled) return;
  const loc = safeLocation(dead);
  if (!loc) return;
  const dim2 = dead.dimension;
  const bm = st.bloodMoonState;
  for (const spec of Config.elite.drops.specialMaterials) {
    if (spec.requireBloodMoon && !bm) continue;
    if (!rng.chance(spec.chance)) continue;
    const count = rng.int(spec.min, spec.max);
    try {
      dim2.spawnItem(new ItemStack3(spec.item, count), loc);
      zlog("Elite special material dropped", { item: spec.item, count, elite: st.eliteType, bloodMoon: bm });
      pass("ze.elite.special_drop", { item: spec.item, count, elite: st.eliteType, bloodMoon: bm });
    } catch (e) {
      zlog("special material drop failed", { item: spec.item, error: String(e) });
    }
  }
}
try {
  world10.afterEvents.entityRemove.subscribe((ev) => {
    try {
      unregister(ev.removedEntityId, "entityRemove");
    } catch (e) {
      zlog("entityRemove handler error", { error: String(e) });
    }
  });
} catch (e) {
  zlog("entityRemove subscribe failed", { error: String(e) });
}
try {
  // 1.21.60（1.17.0 API）无 entityItemPickup 事件；有则订阅，无则跳过。
  world10.afterEvents.entityItemPickup?.subscribe?.((ev) => {
    try {
      const st = getState(ev.entity.id);
      if (!st) return;
      for (const item of ev.items) {
        const id = item.typeId;
        if (isToolId(id)) {
          st.weaponId = id;
          st.weaponClass = classifyTool(id);
          st.weaponTier = 0;
          zlog("Zombie picked up tool", { entity: st.entityId, item: id, class: st.weaponClass });
        } else if (isConstructionBlock(id)) {
          st.constructionInventory[id] = (st.constructionInventory[id] ?? 0) + item.amount;
          zlog("Zombie picked up building material", { entity: st.entityId, item: id, total: st.constructionInventory[id] });
        }
      }
    } catch (e) {
      zlog("entityItemPickup handler error", { error: String(e) });
    }
  });
} catch (e) {
  zlog("entityItemPickup subscribe failed", { error: String(e) });
}
try {
  world10.beforeEvents.playerInteractWithBlock.subscribe((ev) => {
    try {
      if (!isBloodMoon()) return;
      if (!Config.bloodmoon.sleepPrevention.enabled) return;
      const id = ev.block.typeId;
      if (id !== "minecraft:bed") return;
      ev.cancel = true;
      safe(() => ev.player.onScreenDisplay.setActionBar(Config.bloodmoon.sleepPrevention.message), "actionbar");
    } catch (e) {
      zlog("bed interaction handler error", { error: String(e) });
    }
  });
} catch (e) {
  zlog("playerInteractWithBlock subscribe failed", { error: String(e) });
}
try {
  world10.afterEvents.playerLeave.subscribe((ev) => {
    try {
      const dim2 = overworld();
      if (dim2) recordHabit("missing_position", { x: 0, y: 0, z: 0 }, dim2.id);
    } catch {
    }
  });
} catch {
}
try {
  // 1.21.60（1.17.0 API）无 worldLoad 事件，回退到 worldInitialize。
  (world10.afterEvents.worldLoad ?? world10.afterEvents.worldInitialize)?.subscribe?.(() => {
    try {
      censusExisting();
    } catch (e) {
      zlog("census failed", { error: String(e) });
    }
  });
} catch (e) {
  zlog("worldLoad subscribe failed", { error: String(e) });
}
function censusExisting() {
  if (entryCensusDone) return;
  entryCensusDone = true;
  let n = 0;
  for (const dimId of ["overworld", "nether", "the_end"]) {
    const dim2 = safe(() => world10.getDimension(dimId), "census.dim");
    if (!dim2.ok || !dim2.value) continue;
    const q = safe(() => dim2.value.getEntities({ families: ["undead"], maxDistance: 256 }), "census.getEntities");
    if (!q.ok || !q.value) continue;
    for (const e of q.value) {
      if (!isManaged(e.typeId)) continue;
      registerEntity(e, "census");
      n++;
    }
    if (n > 400) break;
  }
  zlog("Entry census done", { registered: n, states: stateCount() });
}
var TOOL_SUFFIXES = ["_sword", "_axe", "_pickaxe", "_shovel", "_hoe", "_trident", "_spear"];
function isToolId(id) {
  return TOOL_SUFFIXES.some((s) => id.endsWith(s));
}
function classifyTool(id) {
  if (id.endsWith("_sword")) return "sword";
  if (id.endsWith("_axe")) return "axe";
  if (id.endsWith("_pickaxe")) return "pickaxe";
  if (id.endsWith("_shovel")) return "shovel";
  if (id.endsWith("_trident")) return "trident";
  if (id.endsWith("_spear")) return "spear";
  return "none";
}
var CONSTRUCTION_IDS = new Set(
  Config.building.constructionInventory.stacks.map((s) => s.block)
);
function isConstructionBlock(id) {
  return CONSTRUCTION_IDS.has(id);
}
function publishDebugSnapshot() {
  const on = safe(() => world10.getDynamicProperty("ze:test_mode"), "getTestMode");
  if (!on.ok || on.value !== true) return;
  const states2 = allStates();
  const zombies = states2.slice(0, 60).map((s) => {
    const e = getEntity(s.entityId);
    const loc = safeLocation(e);
    return {
      id: s.entityId,
      variant: s.variant,
      state: s.currentState,
      goal: s.currentGoal,
      confidence: Number(s.targetConfidence.toFixed(3)),
      lastSeen: s.lastSeenPosition,
      lastSeenTick: s.lastSeenTick,
      pos: loc ? { x: Math.round(loc.x), y: Math.round(loc.y), z: Math.round(loc.z) } : null,
      weaponClass: s.weaponClass,
      weaponTier: s.weaponTier,
      equipment: s.equipmentProfile,
      construction: s.constructionInventory,
      placedThisTask: s.buildBlocksThisTask,
      minedThisTask: s.mineBlocksThisTask,
      groupId: s.groupId,
      groupAngle: s.groupAngle,
      bloodMoon: s.bloodMoonState,
      elite: s.eliteType,
      failedRoutes: s.failedRoutes.length,
      errors: s.errorCount
    };
  });
  const snap = {
    tick: currentTick(),
    bloodMoon: isBloodMoon(),
    theme: null,
    zombieCount: states2.length,
    zombies,
    groups: allGroupRecords().map((g) => ({ id: g.id, members: g.memberIds.length, center: g.center })),
    stats: {
      brainInvocations: Stats.brainInvocations,
      blockChanges: Stats.blockChanges,
      errors: Stats.errors,
      reassess: Stats.reassessCount
    }
  };
  safe(() => world10.setDynamicProperty("ze:debug_snapshot", JSON.stringify(snap)), "setDebugSnapshot");
}
function worldDay() {
  const r = safe(() => world10.getDay(), "getDay");
  return r.ok && typeof r.value === "number" ? r.value : 0;
}
function timeOfDay() {
  const r = safe(() => world10.getTimeOfDay(), "getTimeOfDay");
  return r.ok && typeof r.value === "number" ? r.value : 0;
}
function spawnTestSubject(dim2, typeId, loc) {
  const e = dim2.spawnEntity(typeId, loc);
  try {
    e.triggerEvent("ze:persistent");
  } catch (err) {
    zlog("spawnTestSubject: ze:persistent unavailable", { typeId, error: String(err) });
  }
  return e;
}
function spawnTestZombies(count, kind) {
  const dim2 = overworld();
  if (!dim2) return "\u65E0\u6CD5\u83B7\u53D6 overworld";
  const origin = { x: 0, y: 100, z: 0 };
  let ok2 = 0;
  for (let i = 0; i < count; i++) {
    const r = safe(
      () => spawnTestSubject(dim2, kind, {
        x: origin.x + i % 10 - 5,
        y: origin.y,
        z: origin.z + Math.floor(i / 10) * 2 - 10
      }),
      "spawnTestZombies"
    );
    if (r.ok && r.value) ok2++;
  }
  return "\u5DF2\u751F\u6210 " + ok2 + "/" + count + " \u53EA " + kind;
}
function driveAllBrains(phase) {
  const ids = allEntityIds();
  const max = Config.brain.scheduler.maxTrackedZombies;
  const limit = Math.min(ids.length, max);
  for (let i = 0; i < limit; i++) {
    const e = getEntity(ids[i]);
    if (!e) continue;
    tickZombie(e, rng, phase);
  }
}
system3.runInterval(() => {
  const t = nextTick();
  try {
    resetTickBudget(t);
    if (bootTick < 0) {
      bootTick = t;
      loadRuntimeOverrides((k) => {
        const r = safe(() => world10.getDynamicProperty(k), "loadRuntimeOverrides");
        return r.ok ? r.value : void 0;
      });
      loadHabitMemory();
      registerScriptEventChannel();
      safe(() => world10.getDimension("overworld").runCommand("scoreboard objectives add ze_rnd dummy"), "init ze_rnd");
      try {
        restoreFromWorld();
        zlog("Blood moon restored", bloodMoonState());
      } catch (e) {
        zlog("blood moon restore failed", { error: String(e) });
      }
      zlog("Zombie Evolution boot", { runtime: "1.26.52.3", api: "@minecraft/server 2.10.0", configFiles: 16 });
      pass("ze.runtime.boot", { tick: t });
    }
    if (brainEnabled && Config.brain.enabled && t % Config.brain.scheduler.brainIntervalTicks === 0) {
      const modulo = Config.brain.scheduler.staggerModulo;
      const phase = Math.floor(t / Config.brain.scheduler.brainIntervalTicks) % modulo;
      driveAllBrains(phase);
    }
    if (t % Config.brain.scheduler.bloodMoonIntervalTicks === 0) {
      try {
        tickBloodMoon(t, worldDay(), timeOfDay());
      } catch (e) {
        zlog("bloodmoon tick error", { error: String(e) });
      }
    }
    if (Config.group.enabled && t % Config.brain.scheduler.groupIntervalTicks === 0) {
      try {
        tickGroups(t);
      } catch (e) {
        zlog("group tick error", { error: String(e) });
      }
    }
    if (t % 100 === 0) {
      try {
        tickRiders(t);
      } catch (e) {
        zlog("rider tick error", { error: String(e) });
      }
    }
    if (Config.riders.enabled && t % 200 === 0) {
      try {
        trySpawnRider();
      } catch (e) {
        zlog("rider spawn error", { error: String(e) });
      }
    }
    if (t % Config.brain.scheduler.statisticsIntervalTicks === 0) {
      try {
        sweepInvalid();
        const evicted = evictIdle();
        if (evicted > 0) zlog("Evicted idle states", { evicted });
        reportStats();
        publishDebugSnapshot();
        if (stateCount() > trackedCount()) {
          zlog("STATE LEAK DETECTED", { states: stateCount(), tracked: trackedCount() });
          fail("ze.runtime.leak", "states > tracked", { states: stateCount(), tracked: trackedCount() });
        }
      } catch (e) {
        zlog("statistics tick error", { error: String(e) });
      }
    }
    driveSelfTest(t);
  } catch (e) {
    zlog("MAIN LOOP error (isolated)", { tick: t, error: String(e) });
    safe(() => fail("ze.runtime.loop_error", e, { tick: t }), "emit");
  }
}, 1);
function trySpawnRider() {
  const dim2 = overworld();
  if (!dim2) return;
  const day = worldDay();
  const stage = stageIdForDay(day);
  const bm = isBloodMoon();
  const kind = rollRiderKind(stage, bm, rng);
  if (!kind) return;
  const anchor = activeAnchor(dim2);
  if (!anchor) return;
  const loc = { x: anchor.x + rng.int(-6, 6), y: anchor.y, z: anchor.z + rng.int(-6, 6) };
  const res = spawnRider(kind, dim2, loc, rng);
  zlog("Rider spawn attempt", {
    kind,
    stage,
    bloodMoon: bm,
    ok: res.ok,
    mount: res.mountId,
    rider: res.riderId,
    weapon: res.weapon,
    error: res.error
  });
  if (!res.ok) fail("ze.rider.spawn", res.error ?? "unknown", { kind, stage });
  else pass("ze.rider.spawn", { kind, stage, weapon: res.weapon });
}
function activeAnchor(dim2) {
  const ids = allEntityIds();
  for (let i = ids.length - 1; i >= 0 && i > ids.length - 12; i--) {
    const e = getEntity(ids[i]);
    const l = safeLocation(e);
    if (l) return l;
  }
  return null;
}
function brainState() {
  return brainEnabled;
}
function managedCount() {
  return trackedCount();
}
function avgConfidence() {
  const states2 = allStates();
  if (states2.length === 0) return 0;
  return states2.reduce((a, s) => a + s.targetConfidence, 0) / states2.length;
}
function dominantState() {
  const counts = /* @__PURE__ */ new Map();
  for (const s of allStates()) counts.set(s.currentState, (counts.get(s.currentState) ?? 0) + 1);
  let best = "IDLE" /* IDLE */;
  let n = -1;
  for (const [k, v] of counts) if (v > n) {
    n = v;
    best = k;
  }
  return best;
}
function ticksPerDay() {
  return TICKS_PER_DAY;
}
function statsSnapshotRef() {
  return Stats;
}
export {
  avgConfidence,
  brainState,
  dominantState,
  managedCount,
  statsSnapshotRef,
  ticksPerDay
};
