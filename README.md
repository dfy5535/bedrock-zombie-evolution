# 🧟 僵尸纪元 · Zombie Evolution

> 智能僵尸生态 + 12 种族群
>
> **当前版本** `v4.0.3（兼容版） / v4.1.0（满血版）` ｜ **最低版本** `1.21.60（兼容版） / 1.26.51（满血版）` ｜ **实测运行** `1.26.52.3`

[← 返回合集总仓库](https://github.com/dfy5535/minecraft-bedrock-addons)

---

## 简介

智能僵尸生态 + 12 种族群。

**内容规模**

- 12 种族群 · 18 个实体定义
- 僵尸 AI：追击 / 搭方块 / 挖穿墙壁 / 群体包抄 / 血月 / 编组
- 自定义命令 `ze:zombieai` / `ze:bloodmoon` / `ze:zombie`（仅满血版）

## 版本与兼容性

| 项 | 值 |
|---|---|
| 当前版本 | v4.0.3（兼容版） / v4.1.0（满血版） |
| 最低引擎版本 | 1.21.60（兼容版） / 1.26.51（满血版） |
| 脚本 API | @minecraft/server 1.17.0（兼容版） / 2.10.0（满血版） |
| 实测运行版本 | 1.26.52.3 |
| BP UUID | `23918460-8db1-4860-86ab-80b27a02a14e` |
| RP UUID | `616657d7-4ba6-4018-bb9d-8bed9053e83b` |

### 版本选择

| 版本 | 最低版本 | 说明 |
|---|---|---|
| v4.0.3 · 1.21.60 兼容版 | 1.21.60+ | 可在 1.21.60 运行；少上述 2 个组件 |
| v4.1.0 · 满血版 | 1.26.51+ | **与 v4.0.0 逐字节一致**（仅换 UUID/版本号），零功能损失 |

## 下载

- `dist/zombie-evolution_v4.0.3_1.21.60-compat.mcaddon` — v4.0.3 · 1.21.60 兼容版
- `dist/zombie-evolution_v4.1.0_1.26-full.mcaddon` — v4.1.0 · 满血版（零改动）

也可以在 [Releases](https://github.com/dfy5535/bedrock-zombie-evolution/releases) 里按版本下载。

## 安装

1. 下载上面的 `.mcaddon` 文件
2. 双击导入（或在游戏内「设置 → 存储 → 资源包/行为包」导入）
3. 新建世界或进入已有世界，**同时启用行为包与资源包**
4. 若提示缺少依赖，请确认两个包都启用了

## 更新日志

完整历史见 [CHANGELOG.md](./CHANGELOG.md)。最新一版：

### v4.0.3 — 2026-10-17

- 🐛 **修复** — **无损字段转换**（消除 29 条 schema 错误）：`behavior.ranged_attack` 的 `attack_range` / `attack_interval` → `attack_radius` + `attack_interval_min/max`；`random_search_and_dig` 与 `avoid_*` 的区间对象 → `range_min/range_max`。两种写法都是 1.21.60 与 1.26 原版共用的规范形式。
- 🐛 **修复** — 实体补 `minecraft:pushable`，兼容 1.21.60（1.26.10+ 不再解析该组件，互不干扰）。

## 已知限制

- **这是唯一有「代价」的 MOD**，因此提供双版本（见下）。
- 兼容版缺少 2 个 1.26 专属组件：`behavior.use_kinetic_weapon`、`freezing_immune` —— 它们在 1.26.50 原版存在、1.21.60 原版完全没有。
- 原版 `zombie_villager.json` 的 `cooldown_range` / `digging_duration_range` 写法在 1.26 schema 下也会告警（既存问题，两种改法都会导致实体加载失败，故保留原样）。

## 源码结构

```
zombie/
├── README.md            ← 本页
├── CHANGELOG.md         ← 更新日志
├── behavior_packs/      ← 行为包源码
├── resource_packs/      ← 资源包源码
├── source-full/         ← 满血版源码（零改动）
└── dist/                ← 构建产物 .mcaddon
```

## 许可证

代码与 JSON：**MIT**（见 [LICENSE](./LICENSE)）  
贴图与 3D 模型：**CC-BY-4.0**（见 [LICENSE-ASSETS](./LICENSE-ASSETS.md)）
