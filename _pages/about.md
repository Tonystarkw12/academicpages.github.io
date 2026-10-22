---
permalink: /
title: '<span class="lang-zh shiny-text">你好，我是周子航 👋</span><span class="lang-en shiny-text">Hello, I am Zihang Zhou 👋</span>'
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="lang-zh" markdown="1">

关于我
======

我目前在**清华大学生命科学学院[薛毅教授实验室（Rainbow Lab）](http://rainbow.life.tsinghua.edu.cn)**攻读博士学位，本科毕业于**南方科技大学**生命科学专业。研究方向聚焦 **NMR 与人工智能**。现阶段主要工作是微调 NMR pulse program 生成模型，并建立可靠的 benchmark，评估 AI 生成脉冲程序的质量。

我也持续开发 AI 辅助科研工具，常用技术包括 **Python、Bash、Docker 与 Linux**。做工程时，我更看重代码质量、可复现性和稳健交付。

研究方向
------

- **NMR pulse program 生成**：构建和微调面向 NMR 脉冲程序的生成模型
- **模型评估**：围绕 9 个测试用例建立 benchmark，并使用 NMRSIM 验证生成质量
- **科研数据工程**：制作高质量 NMR pulse program 微调数据集
- **AI 科研工具**：开发帮助研究者生成、解析、比较和验证脉冲程序的工具

荣誉与竞赛
------

- **优秀奖** · **第一届全球大学生生命科学挑战赛**（华北赛区 · 研究生组 · 赛道二：AI 基因编辑与核酸工具设计），2026 年 9 月
  - 项目：**AI驱动的可解释RNA能量模型及其在核酸工具设计中的应用**
  - 团队成员：康健宁（队长）、周子航、袁雅萱、时钰
  - 核心工作：融合纯 Python Turner 2004 热力学引擎与基序级神经网络修正，解决近简并构象辨识与变温外推难题，应用于 RNA 温度计等温度响应型核酸工具设计。
  - 链接：[代码仓库](https://github.com/Tonystarkw12/competition) · [赛事官网](https://competition.openlifesci-alliance.org)

项目
----

### AI NMR Pulse Sequence 生成

[nmr.201014.xyz](https://nmr.201014.xyz)

用 AI 生成并评估 NMR pulse sequence，目标是提升脉冲程序研发效率和结果可靠性。

### NMRagent —— 面向 NMR 的 AI Agent

[nmragent.201014.xyz](https://nmragent.201014.xyz) · [GitHub 仓库](https://github.com/Tonystarkw12/NMRagent)

帮助 NMR 研究者生成、解析、比较和验证脉冲程序的 Agent 智能助手与服务平台，结合 70+ 份领域手册构建的结构化知识库与 RAG 检索。

### GraphPulse —— NMR 脉冲序列时序图可视化

[graphpulse.201014.xyz](https://graphpulse.201014.xyz) · [GitHub 仓库](https://github.com/Tonystarkw12/graphpulse)

TopSpin 风格的现代交互式 NMR 脉冲程序可视化查看器，基于 AST 语义解析将 Bruker 脉冲程序渲染为多通道并发泳道，并支持代码语句与时序事件联动高亮。

### AI 驱动的可解释 RNA 能量模型（竞赛获奖项目）

[GitHub 仓库](https://github.com/Tonystarkw12/competition) · [赛事官网](https://competition.openlifesci-alliance.org)

第一届全球大学生生命科学挑战赛优秀奖项目（团队：康健宁、周子航、袁雅萱、时钰）。构建可解释 RNA 能量模型，通过最近邻基序修正与物理双链表示优化，实现高精度 RNA 自由能计算与构象切换理性设计。

### 开源项目

我主要维护以下 NMR AI、RNA 与 Python 开源项目：

- [GraphPulse](https://github.com/Tonystarkw12/graphpulse)（[在线服务](https://graphpulse.201014.xyz)）：TopSpin 风格的 NMR 脉冲序列时序图交互式可视化工具
- [NMRagent](https://github.com/Tonystarkw12/NMRagent)（[在线服务](https://nmragent.201014.xyz)）：面向 NMR 研究者的 AI Agent 智能助手
- [evalpulse](https://github.com/Tonystarkw12/evalpulseprogram)：兼容 DeepEval 的 NMR 脉冲程序多级评测基准与语义打分套件
- [pp2ast](https://github.com/Tonystarkw12/pp2ast)：Bruker NMR 脉冲程序语法解析器与抽象语法树（AST）构建工具，支持结构分析与 LSP 语言服务器
- [nmr-posttrain](https://github.com/Tonystarkw12/nmr-posttrain)：NMR 脉冲程序大模型后训练套件（SFT + RL/GRPO），统一管理课程微调与物理验证
- [topspincli](https://github.com/Tonystarkw12/topspincli)：Bruker TopSpin 命令行操控与批处理/NMRSIM 自动化工具链
- [topspinRE](https://github.com/Tonystarkw12/topspinRE)：Bruker 脉冲程序逆向工程与 AST 结构化解析工具
- [competition](https://github.com/Tonystarkw12/competition)：AI 驱动的可解释 RNA 能量模型与核酸工具设计
- [spinachpython](https://github.com/Tonystarkw12/spinachpython)：NMR 语义分析与 Python 工具集
- [pp2label](https://github.com/Tonystarkw12/pp2label)：脉冲程序标注与微调数据工程
- [prodopy-wt](https://github.com/Tonystarkw12/prodopy-wt)：Python 科学工程工具

### 其他作品

- [ccse](https://ccswitch.201014.xyz/)（[GitHub 仓库](https://github.com/Tonystarkw12/cc-switch-enhanced)）：Claude Code Switch Enhanced 增强切换工具与服务
- [星灵小说站](https://xingling.201014.xyz)（[GitHub 仓库](https://github.com/Tonystarkw12/xingling)）：展示长篇小说《星灵一》与相关创作的个人站点
- [AI 情侣匹配](https://ailove.201014.xyz)（[GitHub 仓库](https://github.com/Tonystarkw12/AIlove)）：个人开发的 AI 匹配应用
- [长篇小说《星灵一》](https://fanqienovel.com/page/7513553317675420734?enter_from=search)：围绕“人为什么活着”展开的科幻小说；累计写作约 57 万字

技能
----

- **AI 与模型后训练 / 强化学习对齐**：精通 SFT、DPO、GRPO、RLHF、RLVR 等大语言模型后训练技术；熟练进行领域数据集构建、微调对齐与多级评测 benchmark 设计
- **AI Agent 与 RAG 智能体技术**：熟练掌握 **LangChain、LangGraph、RAG（检索增强生成）** 等 Agent 架构与多 Agent 协同流，精通工具调用（Tool Use）与科学知识库检索
- **Agent 生态与工具链适配 (Skills / CLI / MCP / Plugins)**：精通 Skills、CLI 工具链、MCP（Model Context Protocol）协议与 Plugins 插件生态扩展；具备针对 **Claude Code、OpenClaw、Pi、DSH、Codex** 等多 Agent 平台与客户端的深度生态适配、跨智能体协议打通与工具集成能力
- **全栈开发与系统工程**：熟练掌握现代全栈开发技术栈（前端 React / TypeScript / Modern CSS，后端 Python / FastAPI / Node.js，数据库 SQLite / Vector DB / Redis，DevOps Docker / Linux / Git / CI/CD 及自托管服务高可用运维）
- **计算生物学与分子模拟**：熟练掌握分子对接（Molecular Docking）、分子动力学模拟（Molecular Dynamics, MD）；精通 NMR pulse program 脉冲序列设计、解析与 NMRSIM 模拟验证闭环

兴趣
----

工作之外，我喜欢小说创作、钢琴、游泳。影音上是重度科幻/机甲爱好者：《星球大战》系列、《攻壳机动队》《新世纪福音战士》《爱，死亡和机器人》《黑客帝国》，漫威宇宙几乎全看，动画追番清单也很长（《JOJO 的奇妙冒险》《咒术回战》《间谍过家家》《Re:0》等）。游戏偏爱高操作战斗与电影化叙事，《艾尔登法环》《赛博朋克 2077》都通关得很投入。歌单常驻 Starset 和泽野弘之。

联系我
------

全网统一网名：**星灵技术**

- 📧 [zhou-zh23@mails.tsinghua.edu.cn](mailto:zhou-zh23@mails.tsinghua.edu.cn)
- 💻 [GitHub](https://github.com/Tonystarkw12) · [ModelScope](https://modelscope.cn/profile/tonykw12) · [Hugging Face](https://huggingface.co/tonykw12) · [CNB](https://cnb.cool/tonykw12)
- 🎓 [Google Scholar](https://scholar.google.com/citations?user=PS_CX0AAAAAJ)
- 📺 [Bilibili](https://space.bilibili.com/492814737)
- 📘 知乎 / 微信公众号 / 小红书 / 知识星球：**星灵技术**

</div>

<div class="lang-en" markdown="1">

About Me
========

I am currently a **Ph.D. student in the School of Life Sciences at Tsinghua University**, advised by Prof. **Yi Xue** in the **[Yi Xue Laboratory (Rainbow Lab)](http://rainbow.life.tsinghua.edu.cn)**. I received my B.S. in Biological Sciences from **Southern University of Science and Technology (SUSTech)**. My research is focused on the intersection of **Nuclear Magnetic Resonance (NMR) and Artificial Intelligence**. Currently, my primary work revolves around fine-tuning domain-specific LLMs for NMR pulse program generation and establishing rigorous benchmarks to quantitatively evaluate AI-generated pulse sequences.

I also continuously engineer AI-assisted scientific tools with a technical stack centered around **Python, Bash, Docker, and Linux**, prioritizing code quality, reproducibility, and robust delivery.

Research Interests
------------------

- **NMR Pulse Program Generation**: Developing and fine-tuning domain-specific large language models for scientific pulse sequence generation.
- **Model Evaluation & Benchmarking**: Building multi-tier benchmarks (observable coarse matching, strict scoring, simulation coverage) and validating generative quality using NMRSIM simulation.
- **Scientific Data Engineering**: Curating and auditing high-quality NMR pulse program datasets for domain alignment.
- **AI Scientific Tooling**: Building interactive tools and AI agents to generate, parse, compare, and verify pulse sequences.

Honors & Competitions
---------------------

- **Excellence Award (优秀奖)** · **1st Global College Students Life Science Challenge**, September 2026
  - Division: North China Division · Graduate Track · Track 2: AI Gene Editing & Nucleic Acid Tool Design
  - Project: **AI-Driven Interpretable RNA Energy Model and Its Application in Nucleic Acid Tool Design**
  - Team Members: Jianning Kang (Lead), Zihang Zhou, Yaxuan Yuan, Yu Shi
  - Core Highlights: Built a pure Python Turner 2004 nearest-neighbor engine coupled with a motif-level neural residual network (`MotifCorrectionNet`), substantially improving near-degenerate decoy discrimination (60.34% → 80.28%) and enabling rational design of temperature-responsive RNA switches and thermometers.
  - Links: [Code Repository](https://github.com/Tonystarkw12/competition) · [Official Site](https://competition.openlifesci-alliance.org)

Featured Projects
-----------------

### AI NMR Pulse Sequence Generation

[nmr.201014.xyz](https://nmr.201014.xyz)

An end-to-end platform for generating and benchmarking NMR pulse sequences with AI, aiming to boost research efficiency and synthesis reliability.

### NMRagent —— AI Agent for NMR Spectroscopy

[nmragent.201014.xyz](https://nmragent.201014.xyz) · [GitHub Repository](https://github.com/Tonystarkw12/NMRagent)

An intelligent agent assistant and web platform for NMR researchers, supporting pulse sequence generation, parsing, comparison, and verification backed by structured RAG retrieval over 70+ technical manuals.

### GraphPulse —— Interactive Pulse Sequence Diagram Visualizer

[graphpulse.201014.xyz](https://graphpulse.201014.xyz) · [GitHub Repository](https://github.com/Tonystarkw12/graphpulse)

A TopSpin-inspired modern interactive viewer for NMR pulse programs. Powered by AST semantic parsing (`PpAstParser`), it renders concurrent multi-channel lanes (`f1`, `f2`, `grad`, `delay`, `acq`, `meta`) with bidirectional source-to-event highlighting.

### AI-Driven Interpretable RNA Energy Model (Award-Winning Project)

[GitHub Repository](https://github.com/Tonystarkw12/competition) · [Official Site](https://competition.openlifesci-alliance.org)

Award-winning project from the 1st Global College Students Life Science Challenge (Team: Jianning Kang, Zihang Zhou, Yaxuan Yuan, Yu Shi). Constructs an interpretable RNA energy framework using nearest-neighbor motif residual learning and physical duplex modeling for high-precision free energy computation and dynamic conformation switching.

### Open Source Projects

I actively maintain the following NMR AI, RNA, and scientific software repositories:

- [GraphPulse](https://github.com/Tonystarkw12/graphpulse) ([Live Service](https://graphpulse.201014.xyz)): Interactive TopSpin-style NMR pulse sequence timing visualizer
- [NMRagent](https://github.com/Tonystarkw12/NMRagent) ([Live Service](https://nmragent.201014.xyz)): Domain-specific AI Agent assistant for NMR spectroscopy
- [evalpulse](https://github.com/Tonystarkw12/evalpulseprogram): DeepEval-compatible evaluation benchmark & semantic testing suite for NMR pulse sequences
- [pp2ast](https://github.com/Tonystarkw12/pp2ast): Bruker NMR pulse program parser into structured ASTs with tree-sitter support, visualization & LSP IDE integration
- [nmr-posttrain](https://github.com/Tonystarkw12/nmr-posttrain): Pulse program LLM post-training suite (SFT + RL/GRPO) for autonomous NMR pulse sequence design
- [topspincli](https://github.com/Tonystarkw12/topspincli): Command-line harness for Bruker TopSpin automation, batch processing & NMRSIM simulations
- [topspinRE](https://github.com/Tonystarkw12/topspinRE): Reverse engineering & AST parsing toolkit for Bruker TopSpin pulse programs
- [competition](https://github.com/Tonystarkw12/competition): Interpretable RNA energy model & nucleic acid tool design
- [spinachpython](https://github.com/Tonystarkw12/spinachpython): Python tools for NMR simulation, semantic parsing & analysis
- [pp2label](https://github.com/Tonystarkw12/pp2label): Pulse program annotation & dataset curation
- [prodopy-wt](https://github.com/Tonystarkw12/prodopy-wt): Scientific Python engineering utilities

### Other Creative Works

- [ccse](https://ccswitch.201014.xyz/) ([GitHub](https://github.com/Tonystarkw12/cc-switch-enhanced)): Claude Code Switch Enhanced configuration manager & live service
- [Xingling Novel Portal](https://xingling.201014.xyz) ([GitHub](https://github.com/Tonystarkw12/xingling)): Personal website showcasing the sci-fi novel *Xingling I* and related creations
- [AI Match](https://ailove.201014.xyz) ([GitHub](https://github.com/Tonystarkw12/AIlove)): An experimental AI matching web application
- [Sci-Fi Novel *Xingling I*](https://fanqienovel.com/page/7513553317675420734?enter_from=search): Long-form hard sci-fi exploring "why humanity lives" (~570k words written)

Technical Skills
----------------

- **AI & LLM Alignment / Post-Training**: Expert in SFT, DPO, GRPO, RLHF, RLVR, and large language model post-training pipelines; domain dataset engineering and multi-tier benchmark design
- **AI Agents & RAG Frameworks**: Proficient in **LangChain, LangGraph, RAG (Retrieval-Augmented Generation)**, multi-agent workflows, autonomous tool calling (Tool Use), and scientific knowledge base construction
- **Agent Ecosystem & Toolchain Adaptation (Skills / CLI / MCP / Plugins)**: Expert in designing and developing Skills, CLI toolchains, MCP (Model Context Protocol), and Plugins; specialized in deep multi-agent ecosystem adaptation across **Claude Code, OpenClaw, Pi, DSH, Codex**, etc.
- **Full-Stack Development & Engineering**: Proficient in modern full-stack development (Frontend: React / TypeScript / Modern CSS; Backend: Python / FastAPI / Node.js; Data: SQLite / Vector DB / Redis; DevOps: Docker / Linux / Git / CI/CD and self-hosted cloud platform management)
- **Computational Biology & Molecular Simulation**: Proficient in Molecular Docking and Molecular Dynamics (MD) simulations; expert in Bruker NMR pulse sequence design, parsing, and NMRSIM validation loops

Personal Interests
------------------

Outside research and engineering, I enjoy writing science fiction, playing the piano, and swimming. I am a dedicated sci-fi and mecha enthusiast (*Star Wars*, *Ghost in the Shell*, *Evangelion*, *Love, Death & Robots*, *The Matrix*, Marvel Universe, *Jujutsu Kaisen*, *Spy × Family*, *Re:Zero*). In gaming, I gravitate toward combat mechanics and cinematic storytelling (*Elden Ring*, *Cyberpunk 2077*). My playlists feature Starset and Hiroyuki Sawano.

Contact Me
----------

Online alias across all platforms: **星灵技术** (Xingling Tech)

- 📧 [zhou-zh23@mails.tsinghua.edu.cn](mailto:zhou-zh23@mails.tsinghua.edu.cn)
- 💻 [GitHub](https://github.com/Tonystarkw12) · [ModelScope](https://modelscope.cn/profile/tonykw12) · [Hugging Face](https://huggingface.co/tonykw12) · [CNB](https://cnb.cool/tonykw12)
- 🎓 [Google Scholar](https://scholar.google.com/citations?user=PS_CX0AAAAAJ)
- 📺 [Bilibili](https://space.bilibili.com/492814737)
- 📘 Zhihu / WeChat Official Account / Xiaohongshu / Knowledge Planet: **星灵技术**

</div>
