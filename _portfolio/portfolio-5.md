---
title: '<span class="lang-zh">GraphPulse —— NMR 脉冲序列时序可视化工具</span><span class="lang-en">GraphPulse —— Interactive NMR Pulse Sequence Visualizer</span>'
excerpt: '<span class="lang-zh">TopSpin 风格的 NMR 脉冲程序交互式可视化查看器：基于 AST 语义解析的多泳道时序渲染与源码事件双向高亮</span><span class="lang-en">TopSpin-inspired interactive visualizer for NMR pulse programs with AST semantic parsing and multi-lane timing diagrams.</span>'
collection: portfolio
---

**[在线服务：graphpulse.201014.xyz](https://graphpulse.201014.xyz)** · **[GitHub 仓库](https://github.com/Tonystarkw12/graphpulse)**

### 项目概述

**GraphPulse** 是一款受 Bruker TopSpin 脉冲序列图灵感启发的轻量、现代交互式脉冲程序可视化工具。

通过将复杂的 Bruker `.pp` 代码解析为结构化可视化中间表示（Visual IR），以直观的多通道时序图（Lane Model）呈现射频脉冲、延迟、梯度与采集事件，并支持代码行与时序图形的双向对齐高亮。

- **在线体验**：[https://graphpulse.201014.xyz](https://graphpulse.201014.xyz)
- **代码仓库**：[https://github.com/Tonystarkw12/graphpulse](https://github.com/Tonystarkw12/graphpulse)

---

### 核心特性

1. **AST 语义解析支持**
   - 基于 `PpAstParser` 对脉冲程序进行语义解析与模式匹配；
   - 提取对齐脉冲组（aligned pulse groups）、相位循环与嵌套时序结构。

2. **多通道泳道渲染模型（Semantic Lanes）**
   - 独立并列展示 `f1`、`f2`（多射频通道）、`grad`（梯度脉冲通道）、`delay`（延时通道）、`acq`（采集门控）及 `meta` 通道；
   - 严格保留跨通道事件的时序对齐与并发关系。

3. **交互式双向高亮**
   - 源码 ↔ 事件双向联动：点击代码行即可聚焦对应通道脉冲事件，悬浮图形元素即时溯源底层语句；
   - 支持参考图层对比（如 `hsqcph.png`）与半透明叠加，辅助检验时序对齐精度。
