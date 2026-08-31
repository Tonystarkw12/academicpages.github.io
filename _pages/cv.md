---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

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
* 维护开源项目：[spinachpython](https://github.com/Tonystarkw12/spinachpython)、[pp2label](https://github.com/Tonystarkw12/pp2label)、[NMRagent](https://github.com/Tonystarkw12/NMRagent)、prodopy-wt
* 独立开发并部署 [NMR Pulse Program AI 生成平台](https://nmr.201014.xyz) 及多个自托管服务

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
