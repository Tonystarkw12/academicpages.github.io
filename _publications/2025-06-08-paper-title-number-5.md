---
title: "NMR 脉冲程序生成模型与评测基准（撰写中）"
collection: publications
category: manuscripts
permalink: /publication/2025-nmr-pulse-generation-benchmark
excerpt: '面向 Bruker 脉冲程序的 LLM 生成与多级评测：SFT+DPO 领域微调、observable/strict/coverage 三级 benchmark 与 NMRSIM 验证闭环'
date: 2025-06-08
venue: '在研工作（Preprint 准备中）'
paperurl: ''
citation: '周子航. (在研). NMR 脉冲程序生成模型与评测基准.'
---

**状态**：撰写中（in preparation），尚无可引用版本。

**问题**：让大模型生成可实际执行的 Bruker NMR 脉冲程序，并量化"生成质量"。

**方法**：
- 以 Qwen3.5-27B 为基座做领域微调：SFT 后接 DPO，偏好对数据 1,800+ 对，全部来自唯一源程序的单突变构造
- 提出多级评测：observable 粗匹配 + strict score + SimulationCoverage（exact / approximate / skipped / unsupported），兼顾召回与可信度
- 以 NMRSIM 模拟做验证闭环，与官方程序在规范化 pulse pattern（时间线 / 相位程序 / 相位策略）层面比对等价性

**进展**：50 文件基准（2,192 条有效语句）回归验证通过，并行化输出与单进程逐字节一致；已观察到生成程序与官方 zg 程序在规范化层面完全等价的样本。
