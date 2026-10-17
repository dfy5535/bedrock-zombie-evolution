# 更新日志 · 僵尸纪元

> 本文件记录每一次发布。以后更新只需在顶部追加一节。

[← 返回 MOD 页](./README.md)

## v3.5 · 修复版（普通版）— 2026-10-17

- 🐛 **修复** — **5 个实体整只加载失败**。实体文件里残留了 `must_see_note` 字段
  （有人把说明写成了 JSON 字段：`"must_see_note": "DSH 2026-10-10：改为 false……"`），
  引擎不认这个成员，导致 `zombie` / `drowned` / `husk` / `zombie_villager` / `zombie_villager_v2`
  全部解析失败、在游戏里根本不存在。
  已删除该字段（`must_see` 本来就是 `false`，行为不变）。
- 🔧 **变更** — 更换 BP/RP UUID，版本号由 `1.0.0` 统一为 `3.5.0`（与文件名 v3.5 对齐）。
- 🧪 **验证** — BDS 1.26.52.3 真机：实体加载失败 **5 → 0**，ZombieBrain 正常运行，
  自定义命令 `ze:zombieai` / `ze:bloodmoon` / `ze:zombie` 注册成功。
- 📌 **说明** — 这是「普通版」旧版分支，与 v4.x「扩展版」并存。

## v4.0.3 — 2026-10-17

- 🐛 **修复** — **无损字段转换**（消除 29 条 schema 错误）：`behavior.ranged_attack` 的 `attack_range` / `attack_interval` → `attack_radius` + `attack_interval_min/max`；`random_search_and_dig` 与 `avoid_*` 的区间对象 → `range_min/range_max`。两种写法都是 1.21.60 与 1.26 原版共用的规范形式。
- 🐛 **修复** — 实体补 `minecraft:pushable`，兼容 1.21.60（1.26.10+ 不再解析该组件，互不干扰）。

## v4.1.0 — 2026-10-17

- 🎉 **新增** — **零代价满血版**：内容与 v4.0.0 逐字节一致，仅更换 UUID 与版本号，便于与兼容版并存。
- 🐛 **修复** — 真机验证：0 个实体加载失败、ZombieBrain 正常运行、自定义命令注册成功。

## v4.0.2 — 2026-10-17

- 🔧 **变更** — `min_engine_version` `[1,26,51]` → `[1,21,60]`；`@minecraft/server` `2.10.0` → `1.17.0`。
- 🐛 **修复** — 脚本去除 2.x 专属 API：自定义命令的**静态具名导入**（缺导出会导致模块链接失败）改为命名空间导入 + 运行时判定；`system.beforeEvents` / `worldLoad` / `entityItemPickup` 改为可选链或回退 `worldInitialize`；`isValid` 兼容方法/属性两种形态。
- 🔧 **变更** — 实体 `format_version` 降到 1.21.60（19 个文件）。

## v4.0.0 — 2026-10-16

- 🎉 **新增** — 首个 v4 版本：12 种族群 + 血月 + 编组 AI。
