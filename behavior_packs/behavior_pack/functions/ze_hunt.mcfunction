# ============================================================================
# ze_hunt —— ZE 每 tick 物理执行层
#
# ★ 语法：1.26.51 新语法（旧语法 `execute @e[...] ~ ~ ~ <cmd>` 已移除，
#   照抄老版猎人模组会导致**整个函数加载失败**，实测踩过）
#   execute as @e[SEL] at @s [if block ...] run <cmd>
#
# ★ 门控分两类（关键）：
#   ① 挖掘 / 清障 / 挖地 —— 用**概率门控** `scores={ze_rnd=1}`（照猎人
#      `scoreboard players random ... 1 N` 的做法）。**绝不依赖脚本状态** ——
#      实测挂 tag=ze_act 时因为 Planner 从不选 BREACH，挖地一次都没触发。
#   ② 搭方块 / 台阶 —— 用 `tag=ze_act`，因为"该不该搭"是脚本的判断。
#
# ★ 选择器 family=zombie 覆盖 zombie/husk/drowned/zombie_villager，
#   不误伤 skeleton / zombie_horse。
# ============================================================================

# ── 0) 关掉命令反馈（照 hunter.mcfunction 第 13-14 行）────────────────────
# 本函数每 tick 都跑 setblock/effect；不关的话会不停往聊天框刷
# 「Changed the block at ...」。
gamerule commandblockoutput false
gamerule sendcommandfeedback false

# ── 1) 概率门控（照 hunter 第 26-27 行 scoreboard players random）─────────
# 每 tick 给所有僵尸掷 1..6，只有掷到 1 的才动手 → 约 1/6，天然限频。
# 注意：objective 由脚本在**启动时创建一次**（main.ts），不能放这里 ——
#       重复 add 已存在的 objective 会每 tick 报错、刷爆日志。
scoreboard players random @e[family=zombie] ze_rnd 1 6

# ── 2) ★挖地★：垂直下看时挖掉脚下那一格（照 hunter 第 46 行）─────────────
# 这是"挖地"的核心：僵尸低头看时，把脚下的方块挖掉 → 掉下去 → 继续挖 → 凿出竖井。
execute as @e[family=zombie, tag=ze_act, rx=90, rxm=85] at @s run setblock ~ ~-1 ~ air destroy

# ── 3) 挖掘：低头看 → 挖前方下方（照 hunter 第 44-45 行）──────────────────
execute as @e[family=zombie, tag=ze_act, rx=90, rxm=60] at @s run setblock ^ ^0.4 ^0.88 air destroy
execute as @e[family=zombie, tag=ze_act, rx=90, rxm=60] at @s run setblock ^ ^0.5 ^1 air destroy

# ── 4) ★破墙★：挖掉正前方那一格（照 hunter 第 194-208 行）────────────────
# 「玩家躲在房子里也能凿进去」的关键：原生 AI 把僵尸转向玩家（must_see:false
# 让它在隔墙时也能锁定），墙就在正前方，^ ^ ^1 挖掉 → 一格一格凿穿。
# 加「玩家在 6 格内」：只在够得着玩家时才凿，不会到处拆地形。
execute as @e[family=zombie, tag=ze_act] at @s if entity @p[r=6] unless block ^ ^ ^1 air run setblock ^ ^ ^1 air destroy
execute as @e[family=zombie, tag=ze_act] at @s if entity @p[r=6] unless block ^ ^1 ^1 air run setblock ^ ^1 ^1 air destroy

# ── 5) 抬头清障：逐级清掉头顶挡路的方块（照 hunter 第 51-54 行）──────────
execute as @e[family=zombie, tag=ze_act, rx=-28, rxm=-90] at @s run setblock ~ ~0.5 ~ air destroy
execute as @e[family=zombie, tag=ze_act, rx=-30, rxm=-90] at @s run setblock ~ ~1 ~ air destroy
execute as @e[family=zombie, tag=ze_act, rx=-33, rxm=-90] at @s run setblock ~ ~2 ~ air destroy
execute as @e[family=zombie, tag=ze_act, rx=-33, rxm=-90] at @s run setblock ~ ~3 ~ air destroy

# ── 6) 清障：树叶 / 水（照 hunter 第 48-50 行）──────────────────────────
execute as @e[family=zombie, scores={ze_rnd=1}] at @s if block ~ ~ ~ leaves run setblock ~ ~ ~ air destroy
execute as @e[family=zombie, scores={ze_rnd=1}] at @s if block ~ ~ ~ leaves2 run setblock ~ ~ ~ air destroy
execute as @e[family=zombie, scores={ze_rnd=1}] at @s if block ~ ~ ~ water run setblock ~ ~ ~ air destroy

# ── 7) 起手式：制造「离地窗口」（照 hunter 第 58-59 行）──────────────────
# 站在实地上脚下那块是实的，没地方放方块 —— 必须先跳起来。
# jump_boost 是主起手（抬头 >50°），levitation 是备用（已在空中时补）。
execute as @e[family=zombie, tag=ze_act, rx=-50, rxm=-90] at @s run effect @s jump_boost 2 3 true
execute as @e[family=zombie, tag=ze_act, rx=-42, rxm=-90] at @s if block ~ ~-1 ~ air run effect @s levitation 1 2 true

# ── 8) 垫脚：离地后在脚下放方块往上爬（照 hunter 第 55-57 行）────────────
# 只有脚下是空气（= 已离地）才放，否则会把地面本身替换掉。
execute as @e[family=zombie, tag=ze_act, rx=-40, rxm=-90] at @s if block ~ ~-1 ~ air run setblock ~ ~-1 ~ minecraft:cobblestone replace

# ── 9) 楼梯：前方下方是空 → 在前方砌一格台阶（照 hunter 第 60-62 行）──────
execute as @e[family=zombie, tag=ze_act] at @s if block ^ ^-1 ^1 air if block ^ ^-2 ^1 air unless block ^ ^-1 ^ air run setblock ^ ^-1 ^1 minecraft:cobblestone replace
