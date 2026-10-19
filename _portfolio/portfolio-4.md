---
title: '<span class="lang-zh">AI 驱动的可解释 RNA 能量模型与核酸工具设计</span><span class="lang-en">AI-Driven Interpretable RNA Energy Model</span>'
excerpt: '<span class="lang-zh">第一届全球大学生生命科学挑战赛优秀奖：融合经典 Turner 2004 热力学模型与深度学习修正的 RNA 自由能计算与动态构象设计框架</span><span class="lang-en">1st Global Life Science Challenge Excellence Award: Interpretable RNA energy model combining Turner 2004 with deep learning.</span>'
collection: portfolio
---

**[GitHub 仓库](https://github.com/Tonystarkw12/competition)** · **[赛事官网](https://competition.openlifesci-alliance.org)**

### 竞赛荣誉

本项目为团队参加 **2026 年 9 月第一届全球大学生生命科学挑战赛**（华北赛区 · 研究生组 · 赛道二：AI 基因编辑与核酸工具设计）的参赛成果，最终荣获**优秀奖**。

- **项目名称**：AI驱动的可解释RNA能量模型及其在核酸工具设计中的应用
- **团队成员**：康健宁（队长）、周子航、袁雅萱、时钰
- **获奖时间**：2026 年 9 月
- **代码仓库**：[https://github.com/Tonystarkw12/competition](https://github.com/Tonystarkw12/competition)
- **赛事官网**：[https://competition.openlifesci-alliance.org](https://competition.openlifesci-alliance.org)

---

### 背景与挑战

RNA 的生物学功能高度依赖其动态构象，可编程的构象切换是 RNA 温度传感器、分子开关等核酸工具实现功能调控的核心物理基础。然而：
1. **经验筛选局限**：目前核酸工具设计多依赖实验试错或简单序列枚举；
2. **经典热力学模型短板**：经典的 Turner 2004 参数集虽然具有严谨的物理可解释性，但在刻画不同候选构象的微小自由能差（尤其是近简并构象对）以及任意温度下的温度依赖性方面存在误差累积；
3. **端到端黑盒缺乏可解释性**：纯深度学习模型虽然预测准确，但往往缺乏热力学可解释性，难以导出逐基序的能量分解，且无法外推到变温场景。

---

### 核心方法与技术创新

本项目提出了一套由实验热力学数据与已知结构信息共同约束的**可解释 RNA 能量计算与设计框架**：

1. **可审计纯 Python Turner 2004 引擎 (`Turner_energy_calc`)**
   - 零外部系统依赖，纯 Python 实现；
   - 能够输入序列与固定二级结构（DBN），自动拆分最近邻基序（Stacking、Hairpin、Internal loop、Bulge、Multibranch 等）；
   - 输出逐参数、逐基序的 $(\Delta H, \Delta S)$ 账本与合计，与基准表值对账残差 $\le 10^{-12}$，为深度学习修正提供严格可逆的特征底座。

2. **基序级神经修正网络 (`MotifCorrectionNet` / `Turner-Energy-AI`)**
   - 不破坏经典物理骨架，保留 Turner 的基序分解体系；
   - 神经网络对每个 motif 预测残差修正量 $(\delta H, \delta S)$ 并全局累加，支持任意温度求值 $\Delta G(T) = \Delta H - T \cdot \Delta S / 1000$；
   - 采用 chain-aware 物理双链表示，消除双链拼接引入的人工伪影。

3. **双重约束与评测表现**
   - **熔解实验数据约束**：结合紫外熔融曲线（UV melting curves）进行基准热力学拟合，$\Delta G$ 平均绝对误差由 0.941 降至 0.769 kcal/mol；
   - **近简并困难构象区分**：针对已知实验结构生成大量次优构象（decoys），强化真实天然结构与近简并替代结构间的能量间隙；在 PlanarFold 外部测试集上，困难近简并构象对（8,215对）的正确满足率由 60.34% 跃升至 80.28%。

4. **核酸工具设计应用闭环**
   - 面向温度响应型核酸工具（如 RNA thermometer / 温度计），基于目标工作温度与期望切换温度进行候选序列能量景观评估与动态优化；
   - 结合变温 NMR 等实验手段设计验证闭环，支撑功能核酸工具的理性开发。
