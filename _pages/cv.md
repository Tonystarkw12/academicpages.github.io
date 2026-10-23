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
  * 生命科学学院 · [薛毅实验室 (Rainbow Lab)](http://rainbow.life.tsinghua.edu.cn) · 导师：薛毅 教授
  * 研究方向：NMR 与人工智能交叉 —— 科学程序（pulse program）生成 + NMR 实验验证
  * 目标：用大模型生成可实际执行的 Bruker 脉冲程序，并用模拟与实验闭环验证其正确性
* 学士，南方科技大学，2019 – 2023
  * 生命科学学院 · 生物科学专业 · 综合 GPA：3.84 / 4.0（前五学期排名：4/34）
  * 英语能力：CET-4 634 分、CET-6 589 分、TOEFL 99 分（听力 30 满分，阅读 26）
  * 核心基础课程：高等数学A、线性代数A、大学物理B、化学A、计算机程序设计A（Python）、计算生物学、生物统计学、生物化学、分子生物学、细胞生物学、遗传学等

科研经历
======
* 2023 – 至今：博士研究生，清华大学（导师：薛毅 教授）
  * 微调 NMR pulse program 生成模型（Qwen3.5-27B，SFT + DPO，自建 1,800+ 偏好对训练数据）
  * 构建 NMR pulse program 评测基准：observable 粗匹配 + strict score + coverage/confidence 多级架构，50 文件 / 2,192 条有效语句回归验证，并行化结果逐字节一致
  * 打通 NMRSIM 验证闭环：AI 生成程序与官方程序在规范化 pulse pattern 层面做等价性评测
  * 构建 NMR 知识库与 RAG 检索：70+ 份 Bruker/NMR 手册结构化入库，支撑生成与检索
  * 修正与标注 Bruker 脉冲序列解析（phase cycle、多通道脉冲、梯度、shape envelope 等）
* 2021.10 – 2022.05：细胞间黏附信号通路与 IP7-RhoGAP 互作机制研究，南方科技大学（指导老师：饶枫 教授）
  * 作为发起人组织 5 人竞赛科研团队，聚焦 RhoA/ROCK 与 IP6K2/IP7 调控细胞间黏附的分子通路
  * 针对 RhoGAP 家族蛋白进行多序列比对与保守结构域分析，设计多组特异性引物并完成重组质粒构建（PCR、酶切酶连与测序验证）
  * 表达纯化 GST 融合蛋白，通过等温滴定量热法（ITC）定量检测焦磷酸肌醇（IP7）小分子与蛋白结构域的结合互作
* 2021.07 – 2021.08：组蛋白伴侣基因克隆与蛋白分离纯化（暑期科研），南方科技大学（指导老师：黄鸿达 教授）
  * 开展组蛋白伴侣（Histone Chaperones）克隆实验，探索其在核小体正确组装中的存储与转运机制
  * 完成目的片段筛选、载体组装、感受态细胞转化与蓝白斑正向筛选；摇菌进行 IPTG 诱导表达，利用超声破碎、Ni-NTA 亲和层析与凝胶过滤层析（分子筛）纯化目标重组蛋白
* 2020.09 – 2021.01：大鼠海马下区齿状回关联记忆编码的电生理研究，南方科技大学（指导老师：侯圣陶 教授）
  * 参与电生理实验，探究大鼠自由探索新物体时海马局部场电位（LFP）慢伽马（slow gamma）神经振荡活动
  * 协助完成大鼠脑内立体定位电极埋植手术与多通道神经电信号采集；设计反向验证实验，在麻醉状态下施加周期性电刺激并记录行为及电生理响应

开源与工程
======
* 维护开源项目：[ccse](https://github.com/Tonystarkw12/cc-switch-enhanced)（Claude Code Switch Enhanced）、[GraphPulse](https://github.com/Tonystarkw12/graphpulse)（脉冲序列时序图可视化）、[NMRagent](https://github.com/Tonystarkw12/NMRagent)（NMR 智能 Agent）、[evalpulse](https://github.com/Tonystarkw12/evalpulseprogram)（脉冲程序评测基准）、[pp2ast](https://github.com/Tonystarkw12/pp2ast)（脉冲程序 AST 语法解析器）、[nmr-posttrain](https://github.com/Tonystarkw12/nmr-posttrain)（脉冲程序 LLM 后训练套件）、[topspincli](https://github.com/Tonystarkw12/topspincli)（TopSpin 命令行与模拟工具）、[topspinRE](https://github.com/Tonystarkw12/topspinRE)（脉冲程序逆向与 AST 解析）、[competition](https://github.com/Tonystarkw12/competition)（可解释 RNA 能量模型）、[xingling](https://github.com/Tonystarkw12/xingling)（星灵小说站）、[AIlove](https://github.com/Tonystarkw12/AIlove)（AI 情侣匹配）、[spinachpython](https://github.com/Tonystarkw12/spinachpython)、[pp2label](https://github.com/Tonystarkw12/pp2label)、prodopy-wt
* 独立开发并部署多个科研与创作服务：[NMR Pulse Program AI 生成平台](https://nmr.201014.xyz)、[ccse 在线服务](https://ccswitch.201014.xyz/)、[NMRagent 智能助手](https://nmragent.201014.xyz)、[GraphPulse 脉冲序列可视化器](https://graphpulse.201014.xyz)、[星灵小说站](https://xingling.201014.xyz)、[AI 情侣匹配](https://ailove.201014.xyz) 及配套自托管服务

荣誉与竞赛
======
* **优秀奖**，第一届全球大学生生命科学挑战赛（华北赛区 · 研究生组 · 赛道二：AI 基因编辑与核酸工具设计），2026年9月
  * 项目题目：AI驱动的可解释RNA能量模型及其在核酸工具设计中的应用
  * 团队成员：康健宁（队长）、周子航、袁雅萱、时钰
  * 核心成果：针对经典 Turner 2004 模型在 RNA 自由能与温度依赖性刻画不足的瓶颈，构建融合物理热力学与深度学习修正的可解释 RNA 能量模型（MotifCorrectionNet / Turner-Energy-AI）；在近简并困难构象区分率上大幅提升（60.34% → 80.28%），应用于温度响应型 RNA 开关/温度计的理性设计与实验验证
  * 项目链接：[GitHub 仓库](https://github.com/Tonystarkw12/competition) · [赛事官网](https://competition.openlifesci-alliance.org)
* **年度优秀学生二等奖**，南方科技大学，2019 – 2020 学年
* **年度优秀学生三等奖**，南方科技大学，2020 – 2021 学年
* **入学优秀新生奖学金**，南方科技大学，2019 年 11 月

技能
======
* **AI 与模型后训练 / 强化学习对齐**：精通 SFT、DPO、GRPO、RLHF、RLVR 等大模型后训练前沿技术；熟练掌握 **LLaMA-Factory、ms-swift** 等主流大模型微调与强化学习对齐框架；擅长领域数据集构建与审计、模型自主对齐与多级评测 Benchmark 设计
* **AI Agent 与 RAG 智能体技术**：熟练掌握 **LangChain、LangGraph、RAG（检索增强生成）** 等 Agent 架构与框架；擅长复杂长链路推理规划、多 Agent 协作流、函数调用（Function Calling / Tool Use）以及专业领域知识库体系搭建
* **Agent 生态与工具链适配 (Skills / CLI / MCP / Plugins)**：精通 Skills、CLI 命令行工具链、MCP（Model Context Protocol）协议开发与 Plugins 插件生态扩展；具备针对 **Claude Code、OpenClaw、Pi、DSH、Codex** 等多 Agent 平台与客户端的深度生态适配、跨环境协议对接与智能体工具包自研经验
* **全栈开发与系统工程**：熟练掌握现代全栈开发技术栈，具备前端（React、TypeScript、Vite、现代响应式 CSS）、后端（Python、FastAPI、Node.js）、数据库与向量检索（SQLite、Vector DB、Redis）及 DevOps（Docker 容器化、Linux 环境运维、Git、CI/CD 与自托管云服务交付）全流程实战经验
* **计算生物学与分子模拟**：熟练掌握分子对接（Molecular Docking）、分子动力学模拟（Molecular Dynamics, MD）；精通 Bruker TopSpin、NMR 脉冲序列设计与解析、NMRSIM 仿真验证闭环

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
  * School of Life Sciences · [Yi Xue Lab (Rainbow Lab)](http://rainbow.life.tsinghua.edu.cn) · Advisor: Prof. Yi Xue
  * Focus: Intersection of NMR and AI —— Scientific Pulse Program Generation + Experimental Validation
  * Goal: Generating executable Bruker pulse sequences via domain LLMs with simulation and experimental closed-loop verification
* B.S. in Biological Sciences, Southern University of Science and Technology (SUSTech), 2019 – 2023
  * School of Life Sciences · Major in Biological Sciences · Cumulative GPA: 3.84 / 4.0 (Top 4/34 in first five semesters)
  * English Proficiency: CET-4 634, CET-6 589, TOEFL 99 (Listening: 30/30 full score, Reading: 26)
  * Core Coursework: Advanced Mathematics A, Linear Algebra A, General Physics B, General Chemistry A, Computer Programming A (Python), Computational Biology, Biostatistics, Biochemistry, Molecular Biology, Cell Biology, Genetics, etc.

Research Experience
===================
* 2023 – Present: Doctoral Researcher, Tsinghua University (Advisor: Prof. Yi Xue)
  * Fine-tuning domain LLMs for NMR pulse programs (Qwen3.5-27B, SFT + DPO, 1,800+ curated preference pairs)
  * Developing multi-tier NMR pulse program benchmarks: observable matching + strict statement scoring + simulation coverage, covering 50 files / 2,192 valid statements with bit-level reproducibility
  * Establishing NMRSIM validation loop: evaluating physical equivalence between AI-generated and official Bruker programs across normalized pulse patterns
  * Constructing NMR knowledge bases and RAG retrieval over 70+ technical manuals
  * Structural annotation and parsing of Bruker pulse sequences (phase cycles, multi-channel RF, gradients, shape envelopes)
* Oct 2021 – May 2022: Intercellular Adhesion Signaling & IP7-RhoGAP Interaction, SUSTech (Advisor: Prof. Feng Rao)
  * Initiated and led a 5-member student research competition team investigating RhoA/ROCK and IP6K2/IP7 pathways in cell adhesion
  * Conducted multiple sequence alignment and homology domain analysis across 12 RhoGAP family proteins; designed primers and constructed recombinant plasmids verified by sequencing
  * Overexpressed and purified GST-tagged recombinant proteins; quantified small molecule (IP7) binding affinity using Isothermal Titration Calorimetry (ITC)
* Jul 2021 – Aug 2021: Histone Chaperone Gene Cloning & Protein Purification (Summer Research), SUSTech (Advisor: Prof. Hongda Huang)
  * Carried out molecular cloning of histone chaperones to study storage and chaperone mechanisms in nucleosome assembly
  * Performed target screening, vector assembly, competent cell transformation, and blue-white colony screening; induced expression with IPTG and purified target proteins via Ni-NTA affinity chromatography and size-exclusion chromatography (SEC)
* Sep 2020 – Jan 2021: Electrophysiological Study of Gamma Oscillations in Hippocampal Dentate Gyrus, SUSTech (Advisor: Prof. Shengtao Hou)
  * Investigated slow gamma neural oscillations in local field potentials (LFP) during rat novel object exploration
  * Assisted in stereotaxic brain surgery for electrode implantation and multi-channel LFP recording; conducted reverse perturbation experiments using periodic electrical stimulation under anesthesia

Open Source & Engineering
=========================
* Core repositories: [ccse](https://github.com/Tonystarkw12/cc-switch-enhanced) (Claude Code Switch Enhanced), [GraphPulse](https://github.com/Tonystarkw12/graphpulse) (Pulse Sequence Visualizer), [NMRagent](https://github.com/Tonystarkw12/NMRagent) (AI Agent for NMR), [evalpulse](https://github.com/Tonystarkw12/evalpulseprogram) (Pulse Program Benchmark Suite), [pp2ast](https://github.com/Tonystarkw12/pp2ast) (Pulse Program AST Parser), [nmr-posttrain](https://github.com/Tonystarkw12/nmr-posttrain) (Pulse Program LLM Post-Training), [topspincli](https://github.com/Tonystarkw12/topspincli) (TopSpin CLI Automation), [topspinRE](https://github.com/Tonystarkw12/topspinRE) (Pulse Program Reverse Engineering & AST), [competition](https://github.com/Tonystarkw12/competition) (Interpretable RNA Energy Model), [xingling](https://github.com/Tonystarkw12/xingling) (Sci-Fi Portal), [AIlove](https://github.com/Tonystarkw12/AIlove) (AI Love Matching), [spinachpython](https://github.com/Tonystarkw12/spinachpython), [pp2label](https://github.com/Tonystarkw12/pp2label), prodopy-wt
* Scientific & creative cloud platforms: [NMR Pulse Program AI Platform](https://nmr.201014.xyz), [ccse Service](https://ccswitch.201014.xyz/), [NMRagent Web Assistant](https://nmragent.201014.xyz), [GraphPulse Timing Visualizer](https://graphpulse.201014.xyz), [Xingling Portal](https://xingling.201014.xyz), [AI Match](https://ailove.201014.xyz)

Honors & Competitions
=====================
* **Excellence Award (优秀奖)**, 1st Global College Students Life Science Challenge, September 2026
  * Track: North China Division · Graduate Track · Track 2: AI Gene Editing & Nucleic Acid Tool Design
  * Project: AI-Driven Interpretable RNA Energy Model and Its Application in Nucleic Acid Tool Design
  * Team: Jianning Kang (Lead), Zihang Zhou, Yaxuan Yuan, Yu Shi
  * Core Achievements: Overcame limitations of classic Turner 2004 nearest-neighbor models in free energy precision and temperature dependence; designed `MotifCorrectionNet` / `Turner-Energy-AI`, significantly improving near-degenerate decoy discrimination (60.34% → 80.28%), applied to rational design and experimental testing of temperature-responsive RNA switches/thermometers
  * Links: [GitHub Repository](https://github.com/Tonystarkw12/competition) · [Official Site](https://competition.openlifesci-alliance.org)
* **Outstanding Student Scholarship (2nd Prize)**, Southern University of Science and Technology, Academic Year 2019 – 2020
* **Outstanding Student Scholarship (3rd Prize)**, Southern University of Science and Technology, Academic Year 2020 – 2021
* **Outstanding Freshman Scholarship**, Southern University of Science and Technology, Nov 2019

Technical Skills
================
* **AI & LLM Alignment / Post-Training**: Expert in SFT, DPO, GRPO, RLHF, RLVR, and domain LLM post-training pipelines; proficient in mainstream fine-tuning and alignment frameworks including **LLaMA-Factory** and **ms-swift**; dataset curation & auditing, model alignment, and multi-tier benchmark evaluation
* **AI Agents & RAG Frameworks**: Proficient in **LangChain, LangGraph, RAG (Retrieval-Augmented Generation)**, multi-agent orchestration, complex reasoning/planning workflows, tool calling/function execution, and domain knowledge base engineering
* **Agent Ecosystem & Toolchain Adaptation (Skills / CLI / MCP / Plugins)**: Expert in designing, building, and adapting Skills, CLI developer toolchains, MCP (Model Context Protocol) servers/clients, and custom Plugins; specialized in deep multi-agent platform adaptation across **Claude Code, OpenClaw, Pi, DSH, Codex**, etc.
* **Full-Stack Development & Engineering**: Proficient in modern full-stack engineering across Frontend (React, TypeScript, Vite, Modern CSS), Backend (Python, FastAPI, Node.js), Data/Vector Storage (SQLite, Vector DB, Redis), and DevOps (Docker containerization, Linux sysadmin, Git, CI/CD, and self-hosted cloud platform deployment)
* **Computational Biology & Molecular Simulation**: Proficient in Molecular Docking and Molecular Dynamics (MD) simulations; expert in Bruker TopSpin, NMR pulse sequence design/parsing, and NMRSIM simulation loops

Publications
============
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Open Source & Services
======================
* Dedicated to long-term maintenance of NMR × AI scientific repositories, documentation, and user support

</div>
