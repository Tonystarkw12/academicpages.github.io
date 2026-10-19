---
title: '<span class="lang-zh">NMR Pulse Program AI 生成平台</span><span class="lang-en">AI NMR Pulse Sequence Generation Platform</span>'
excerpt: '<span class="lang-zh">端到端的 NMR 脉冲程序生成、评测与验证平台：SFT+DPO 微调模型 + benchmark + NMRSIM 闭环</span><span class="lang-en">End-to-end platform for generating and benchmarking NMR pulse sequences with fine-tuned LLMs and NMRSIM closed-loop validation.</span>'
collection: portfolio
---

**[nmr.201014.xyz](https://nmr.201014.xyz)** —— 用 AI 生成并评估 NMR pulse sequence 的端到端平台。

- 以 Qwen3.5-27B 为基座做领域微调（SFT + DPO，自建 1,800+ 偏好对数据）
- 配套多级评测基准：observable 匹配 + strict score + coverage/confidence
- 生成结果经 NMRSIM 模拟验证，与官方程序在规范化 pulse pattern 层面比对等价性

目标是提升脉冲程序研发效率，并让"模型生成的程序能不能上机"变成可量化的问题。
