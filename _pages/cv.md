---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="lang-zh" markdown="1">

教育经历
======
* 博士（在读），清华大学，2023 – 至今
  * 生命科学学院 · 导师：薛毅 教授
  * 研究方向：NMR 与人工智能交叉 —— 科学程序（pulse program）生成 + NMR 实验验证
  * 目标：用大模型生成可实际执行的 Bruker 脉冲程序，并用模拟与实验闭环验证其正确性
* 本科，生命科学，南方科技大学，2019 – 2023

科研经历
======
* 2023 – 至今：博士研究生，清华大学
  * 微调 NMR pulse program 生成模型（Qwen3.5-27B，SFT + DPO，自建 1,800+ 偏好对训练数据）
  * 构建 NMR pulse program 评测基准：observable 粗匹配 + strict score + coverage/confidence 多级架构，50 文件 / 2,192 条有效语句回归验证，并行化结果逐字节一致
  * 打通 NMRSIM 验证闭环：AI 生成程序与官方程序在规范化 pulse pattern 层面做等价性评测
  * 构建 NMR 知识库与 RAG 检索：70+ 份 Bruker/NMR 手册结构化入库，支撑生成与检索
  * 修正与标注 Bruker 脉冲序列解析（phase cycle、多通道脉冲、梯度、shape envelope 等）

开源与工程
======
* 维护开源项目：[ccse](https://github.com/Tonystarkw12/cc-switch-enhanced)（Claude Code Switch Enhanced）、[GraphPulse](https://github.com/Tonystarkw12/graphpulse)（脉冲序列时序图可视化）、[NMRagent](https://github.com/Tonystarkw12/NMRagent)（NMR 智能 Agent）、[evalpulse](https://github.com/Tonystarkw12/evalpulseprogram)（脉冲程序评测基准）、[topspincli](https://github.com/Tonystarkw12/topspincli)（TopSpin 命令行与模拟工具）、[topspinRE](https://github.com/Tonystarkw12/topspinRE)（脉冲程序逆向与 AST 解析）、[competition](https://github.com/Tonystarkw12/competition)（可解释 RNA 能量模型）、[xingling](https://github.com/Tonystarkw12/xingling)（星灵小说站）、[AIlove](https://github.com/Tonystarkw12/AIlove)（AI 情侣匹配）、[spinachpython](https://github.com/Tonystarkw12/spinachpython)、[pp2label](https://github.com/Tonystarkw12/pp2label)、prodopy-wt
* 独立开发并部署多个科研与创作服务：[NMR Pulse Program AI 生成平台](https://nmr.201014.xyz)、[ccse 在线服务](https://ccswitch.201014.xyz/)、[NMRagent 智能助手](https://nmragent.201014.xyz)、[GraphPulse 脉冲序列可视化器](https://graphpulse.201014.xyz)、[星灵小说站](https://xingling.201014.xyz)、[AI 情侣匹配](https://ailove.201014.xyz) 及配套自托管服务

荣誉与竞赛
======
* **优秀奖**，第一届全球大学生生命科学挑战赛（华北赛区 · 研究生组 · 赛道二：AI 基因编辑与核酸工具设计），2026年9月
  * 项目题目：AI驱动的可解释RNA能量模型及其在核酸工具设计中的应用
  * 团队成员：康健宁（队长）、周子航、袁雅萱、时钰
  * 核心成果：针对经典 Turner 2004 模型在 RNA 自由能与温度依赖性刻画不足的瓶颈，构建融合物理热力学与深度学习修正的可解释 RNA 能量模型（MotifCorrectionNet / Turner-Energy-AI）；在近简并困难构象区分率上大幅提升（60.34% → 80.28%），应用于温度响应型 RNA 开关/温度计的理性设计与实验验证
  * 项目链接：[GitHub 仓库](https://github.com/Tonystarkw12/competition) · [赛事官网](https://competition.openlifesci-alliance.org)

技能
======
* **编程与工程**：Python、Bash、Docker、Linux、Git
* **AI 与模型**：LLM 微调（SFT / DPO）、数据集构建与审计、Agent 工具开发、模型评测与 benchmark 设计
* **NMR 领域**：Bruker TopSpin、脉冲序列设计与解析、NMRSIM 模拟验证

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

开源与服务
======
* 长期维护多个 NMR × AI 方向开源项目，并提供使用文档与 issue 支持

</div>

<div class="lang-en" markdown="1">

Education
=========
* Ph.D. in Life Sciences, Tsinghua University, 2023 – Present
  * School of Life Sciences · Advisor: Prof. Yi Xue
  * Focus: Intersection of NMR and AI —— Scientific Pulse Program Generation + Experimental Validation
  * Goal: Generating executable Bruker pulse sequences via domain LLMs with simulation and experimental closed-loop verification
* B.S. in Biological Sciences, Southern University of Science and Technology (SUSTech), 2019 – 2023

Research Experience
===================
* 2023 – Present: Doctoral Researcher, Tsinghua University
  * Fine-tuning domain LLMs for NMR pulse programs (Qwen3.5-27B, SFT + DPO, 1,800+ curated preference pairs)
  * Developing multi-tier NMR pulse program benchmarks: observable matching + strict statement scoring + simulation coverage, covering 50 files / 2,192 valid statements with bit-level reproducibility
  * Establishing NMRSIM validation loop: evaluating physical equivalence between AI-generated and official Bruker programs across normalized pulse patterns
  * Constructing NMR knowledge bases and RAG retrieval over 70+ technical manuals
  * Structural annotation and parsing of Bruker pulse sequences (phase cycles, multi-channel RF, gradients, shape envelopes)

Open Source & Engineering
=========================
* Core repositories: [ccse](https://github.com/Tonystarkw12/cc-switch-enhanced) (Claude Code Switch Enhanced), [GraphPulse](https://github.com/Tonystarkw12/graphpulse) (Pulse Sequence Visualizer), [NMRagent](https://github.com/Tonystarkw12/NMRagent) (AI Agent for NMR), [evalpulse](https://github.com/Tonystarkw12/evalpulseprogram) (Pulse Program Benchmark Suite), [topspincli](https://github.com/Tonystarkw12/topspincli) (TopSpin CLI Automation), [topspinRE](https://github.com/Tonystarkw12/topspinRE) (Pulse Program Reverse Engineering & AST), [competition](https://github.com/Tonystarkw12/competition) (Interpretable RNA Energy Model), [xingling](https://github.com/Tonystarkw12/xingling) (Sci-Fi Portal), [AIlove](https://github.com/Tonystarkw12/AIlove) (AI Love Matching), [spinachpython](https://github.com/Tonystarkw12/spinachpython), [pp2label](https://github.com/Tonystarkw12/pp2label), prodopy-wt
* Scientific & creative cloud platforms: [NMR Pulse Program AI Platform](https://nmr.201014.xyz), [ccse Service](https://ccswitch.201014.xyz/), [NMRagent Web Assistant](https://nmragent.201014.xyz), [GraphPulse Timing Visualizer](https://graphpulse.201014.xyz), [Xingling Portal](https://xingling.201014.xyz), [AI Match](https://ailove.201014.xyz)

Honors & Competitions
=====================
* **Excellence Award (优秀奖)**, 1st Global College Students Life Science Challenge, September 2026
  * Track: North China Division · Graduate Track · Track 2: AI Gene Editing & Nucleic Acid Tool Design
  * Project: AI-Driven Interpretable RNA Energy Model and Its Application in Nucleic Acid Tool Design
  * Team: Jianning Kang (Lead), Zihang Zhou, Yaxuan Yuan, Yu Shi
  * Core Achievements: Overcame limitations of classic Turner 2004 nearest-neighbor models in free energy precision and temperature dependence; designed `MotifCorrectionNet` / `Turner-Energy-AI`, significantly improving near-degenerate decoy discrimination (60.34% → 80.28%), applied to rational design and experimental testing of temperature-responsive RNA switches/thermometers
  * Links: [GitHub Repository](https://github.com/Tonystarkw12/competition) · [Official Site](https://competition.openlifesci-alliance.org)

Technical Skills
================
* **Programming & Engineering**: Python, Bash, Docker, Linux, Git
* **AI & Machine Learning**: LLM Fine-Tuning (SFT / DPO), Dataset Curation & Auditing, AI Agent Tools, Benchmark Design
* **NMR Domain**: Bruker TopSpin, Pulse Program Architecture, NMRSIM Simulation & Validation

Publications
============
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Open Source & Services
======================
* Dedicated to long-term maintenance of NMR × AI scientific repositories, documentation, and user support

</div>
