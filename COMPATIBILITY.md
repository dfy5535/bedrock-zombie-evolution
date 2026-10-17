# 兼容性说明 · 三个版本各自的能力边界

> 本仓库同时维护三个版本，它们的最低版本与功能完整度**不同**，请按需选择。
> **原则：宁可保持较高的最低版本，也不为了降版本而削弱功能。**

---

## 一、版本对照

| 版本 | 最低版本 | 脚本 API | 功能完整度 |
|---|---|---|---|
| **v4.1.0 · 满血版** | 1.26.51 | `@minecraft/server 2.10.0` | **100%**（与 v4.0.0 逐字节一致） |
| **v4.0.3 · 1.21.60 兼容版** | **1.21.60** | `@minecraft/server 1.17.0` | **约 90%** —— 见下方损失清单 |
| **v3.5 · 普通版** | 1.26.51 | `@minecraft/server 2.10.0` | 100%（旧版分支，实体更少） |

---

## 二、v4.0.3（1.21.60 兼容版）到底损失了什么

降到 1.21.60 需要把脚本 API 从 2.10.0 降到 1.17.0，以下功能**无法保留**：

| 功能 | 原因 | 影响 |
|---|---|---|
| **自定义命令** `ze:zombieai` / `ze:bloodmoon` / `ze:zombie` | 自定义命令 API（`customCommandRegistry`、`CommandPermissionLevel` 等）在 1.17.0 不存在 | 管理/调试命令不可用，**玩法本身不受影响** |
| **工具拾取追踪**（僵尸捡起工具后换装） | `world.afterEvents.entityItemPickup` 在 1.17.0 不存在 | 僵尸靠捡拾物品换武器的能力受限 |
| **世界加载时普查** | `world.afterEvents.worldLoad` 在 1.17.0 不存在（已回退到 `worldInitialize`） | 已用 `worldInitialize` 补偿 |
| 部分 1.26 专属实体字段 | 1.21.60 schema 不认识（`behavior.use_kinetic_weapon`、`freezing_immune` 等） | 这些字段被忽略，AI 用默认值 |

### 为什么不做成「零损失」

`beforeEvents.entityHurt`、自定义命令、`entityItemPickup` 这些在 1.17.0 里**根本没有对应物**。
要用它们就必须声明 2.x，声明 2.x 就跑不了 1.21.60 —— 这是硬性二选一，没有中间态。

所以本仓库的做法是：**同时提供两个版本**，让用户按自己的游戏版本选，而不是阉割唯一版本。

---

## 三、真机验证（BDS 1.26.52.3）

| 版本 | 结果 |
|---|---|
| v4.1.0 满血版 | 0 实体加载失败；ZombieBrain 正常；自定义命令 `ze:zombieai` / `ze:bloodmoon` / `ze:zombie` 注册成功 |
| v4.0.3 兼容版 | 0 实体加载失败；ZombieBrain 正常；`KIRA_TEST_RESULT` 持续 PASS |
| v3.5 修复版 | 实体加载失败 **5 → 0**（修掉了 `must_see_note` 残留字段）；ZombieBrain 正常；命令注册成功 |

---

## 四、v3.5 的 bug 说明

v3.5 原包在实体文件里残留了一个 `must_see_note` 字段（有人把说明写成了 JSON 字段）：

```json
"must_see_note": "DSH 2026-10-10：改为 false。must_see:true 时…"
```

引擎不认这个成员 → `zombie` / `drowned` / `husk` / `zombie_villager` / `zombie_villager_v2`
共 **5 个实体整只加载失败**，游戏里根本不存在。

已删除该字段（`must_see` 本来就是 `false`，行为不变）。这是**修 bug**，不是改功能。
