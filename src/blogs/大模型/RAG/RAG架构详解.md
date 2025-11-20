---
title: RAG架构详解：模式、组件与流程
description: 深入解析RAG（检索增强生成）的常用架构模式，包括基本RAG链、迭代RAG、自适应RAG和多路RAG，并详细阐述其核心组件和工作流程，为构建高效、可扩展的RAG系统提供理论基础。
date: 2025-04-11
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 302
meta:
  - name: description
    content: RAG 架构 模式 组件 流程 深度解析
  - name: keywords
    content: RAG 架构 模式 检索器 生成器 向量数据库
tags:
 - RAG
 - 架构
categories:
 - 大模型
---
RAG（检索增强生成）系统的架构设计是其性能和灵活性的关键。本文将深入探讨RAG的多种常用架构模式，包括简单直接的基本RAG链、具备自我修正能力的迭代RAG、根据查询动态调整策略的自适应RAG，以及整合多源信息的复杂多路RAG。我们将详细解析这些架构模式的核心思想、工作流程、优缺点，并结合伪代码示例，帮助读者理解如何根据不同应用场景选择和构建最适合的RAG系统。
<!--more-->

## 1. RAG 的常用架构模式

::: tip 浅层理解
RAG的架构就像搭积木，有不同的搭法，可以根据需求选择最合适的。
:::

RAG系统并非一成不变，根据应用场景和复杂度的不同，可以采用多种架构模式。

### 1.1 基本RAG链 (Basic RAG Chain) <Badge text="基础" type="info"/>

*   **核心思想**：最直接、最基础的RAG实现，遵循“检索-生成”的线性流程。
*   **工作流程**：
    1.  用户查询（Query）输入。
    2.  检索器（Retriever）从知识库中检索相关文档片段。
    3.  将查询和检索到的文档片段拼接成Prompt。
    4.  LLM接收Prompt并生成答案。
*   **优点**：实现简单，易于理解和部署。
*   **缺点**：检索质量直接影响生成结果，缺乏灵活性和自我修正能力。
*   **适用场景**：对实时性要求不高、知识库相对稳定、查询意图明确的简单问答系统。
*   **伪代码示例：基本RAG链**
    ```pseudocode
    Function BasicRAGChain(User_Query, Knowledge_Base, LLM):
        // 1. 查询编码
        Query_Embedding = Encode(User_Query)
        
        // 2. 检索相关文档片段
        Retrieved_Chunks = Retrieve_Top_K(Query_Embedding, Knowledge_Base, K=3) // 从知识库中检索最相关的K个片段
        
        // 3. 构建增强型Prompt
        Prompt_Template = "根据以下信息回答问题：\n{context}\n问题：{query}\n回答："
        Context = Join_Chunks(Retrieved_Chunks) // 将检索到的片段拼接成上下文
        Enhanced_Prompt = Format(Prompt_Template, context=Context, query=User_Query)
        
        // 4. LLM生成答案
        Answer = LLM.Generate(Enhanced_Prompt)
        
        Return Answer
    ```
    这个伪代码展示了基本RAG链的线性流程：首先将用户查询编码，然后从知识库中检索最相关的文档片段，接着将查询和检索到的片段组合成一个增强型Prompt，最后由LLM基于这个Prompt生成答案。

### 1.2 迭代RAG (Iterative RAG / Self-RAG) <Badge text="进阶" type="tip"/>

*   **核心思想**：在生成过程中，LLM可以根据需要多次触发检索，以获取更详细或补充的信息，并对检索结果进行评估和修正。
*   **工作流程**：
    1.  用户查询输入。
    2.  LLM生成初步答案或判断需要更多信息。
    3.  如果需要，LLM生成新的检索查询。
    4.  检索器根据新查询检索文档。
    5.  LLM评估检索结果，并结合原始查询和新文档生成更完善的答案。
    6.  此过程可迭代进行，直到LLM认为答案足够好。
*   **优点**：提高了生成内容的准确性和深度，增强了模型的自我修正能力。
*   **缺点**：增加了系统的复杂性和延迟。
*   **适用场景**：需要复杂推理、多步骤信息获取、对答案质量要求高的问答系统。
*   **伪代码示例：迭代RAG流程**
    ```pseudocode
    Function IterativeRAG(User_Query, Knowledge_Base, LLM, Max_Iterations=2):
        Current_Query = User_Query
        Context_Accumulator = ""
        
        For iteration = 1 to Max_Iterations:
            // 1. 检索阶段
            Query_Embedding = Encode(Current_Query)
            Retrieved_Chunks = Retrieve_Top_K(Query_Embedding, Knowledge_Base, K=3)
            
            // 2. 构建增强型Prompt
            Prompt_Template = "你是一个助手。根据以下信息和用户问题，生成一个初步回答或提出新的检索问题以获取更多信息。\n" + \
                              "---历史上下文---\n{history_context}\n" + \
                              "---新检索到的信息---\n{retrieved_context}\n" + \
                              "用户问题：{query}\n" + \
                              "思考：[你的思考过程]\n" + \
                              "行动：[Generate(初步回答) 或 Retrieve(新的检索问题)]\n"
            
            Current_Context = Join_Chunks(Retrieved_Chunks)
            Enhanced_Prompt = Format(Prompt_Template, history_context=Context_Accumulator, retrieved_context=Current_Context, query=User_Query)
            
            // 3. LLM生成初步回答或新的检索问题
            LLM_Response = LLM.Generate(Enhanced_Prompt)
            
            // 4. 解析LLM响应
            If LLM_Response starts with "Generate":
                Final_Answer = Extract_Answer(LLM_Response)
                Return Final_Answer
            Else If LLM_Response starts with "Retrieve":
                New_Retrieval_Query = Extract_Retrieval_Query(LLM_Response)
                Context_Accumulator += Current_Context // 累积上下文
                Current_Query = New_Retrieval_Query
            Else:
                // 错误处理或默认行为
                Return "无法生成有效回答。"
                
        Return "达到最大迭代次数，无法生成完整回答。"
    ```
    这个伪代码展示了迭代RAG如何通过LLM的“思考”来决定是否需要进行多轮检索，从而逐步完善答案。

### 1.3 自适应RAG (Adaptive RAG) <Badge text="智能" type="warning"/>

*   **核心思想**：根据查询的复杂性、LLM的置信度或任务类型，动态决定是否进行检索，或调整检索策略。
*   **工作流程**：
    1.  用户查询输入。
    2.  一个“决策模块”（可以是另一个小型LLM或规则引擎）评估查询。
    3.  如果查询可以直接由LLM回答（如常识性问题），则跳过检索阶段，直接生成。
    4.  如果查询需要外部知识，则触发检索，并可能根据查询类型选择不同的检索器或知识库。
    5.  LLM结合检索结果生成答案。
*   **优点**：提高了系统效率，避免不必要的检索，优化资源利用。
*   **缺点**：决策模块的设计和训练可能较为复杂。
*   **适用场景**：混合型问答系统，既包含常识性问题也包含知识密集型问题。
*   **伪代码示例：自适应RAG决策流程**
    ```pseudocode
    Function AdaptiveRAG(User_Query, LLM, Knowledge_Base, Decision_Module):
        // 1. 决策模块评估查询
        Decision = Decision_Module.Evaluate(User_Query, LLM.Confidence(User_Query))
        
        If Decision.Should_Retrieve == False:
            // 直接由LLM生成答案 (例如，常识性问题)
            Answer = LLM.Generate(User_Query)
            Return Answer
        Else:
            // 2. 检索阶段 (可能根据Decision调整检索策略)
            Retrieval_Strategy = Decision.Get_Retrieval_Strategy()
            Query_Embedding = Encode(User_Query, Retrieval_Strategy.Embedding_Model)
            Retrieved_Chunks = Retrieve_Top_K(Query_Embedding, Knowledge_Base, K=Decision.K_Value)
            
            // 3. 构建增强型Prompt
            Context = Join_Chunks(Retrieved_Chunks)
            Enhanced_Prompt = BuildPrompt(User_Query, Context)
            
            // 4. LLM生成答案
            Answer = LLM.Generate(Enhanced_Prompt)
            Return Answer
    ```
    这个伪代码展示了自适应RAG如何通过一个决策模块智能地判断是否需要检索以及如何检索，从而提高系统的效率和响应速度。

### 1.4 多路RAG (Multi-path RAG / Advanced RAG) <Badge text="复杂" type="danger"/>

*   **核心思想**：同时从多个知识库或使用多种检索策略获取信息，然后进行融合，以提高信息覆盖率和准确性。
*   **工作流程**：
    1.  用户查询输入。
    2.  并行使用多个检索器（例如，一个基于关键词，一个基于向量相似度）或从多个知识库（例如，一个内部文档库，一个外部网页库）检索文档。
    3.  对检索到的所有文档进行去重、排序和融合。
    4.  LLM结合融合后的上下文生成答案。
*   **优点**：提高了检索的全面性和鲁棒性，减少了单一检索源的局限性。
*   **缺点**：增加了系统的复杂性，需要有效的融合策略。
*   **适用场景**：需要从多样化信息源获取知识、对信息完整性要求高的复杂问答系统。
*   **伪代码示例：多路RAG融合**
    ```pseudocode
    Function MultiPathRAG(User_Query, Knowledge_Base_1, Knowledge_Base_2, Keyword_Retriever, Vector_Retriever, LLM):
        // 1. 并行检索
        // 从知识库1使用向量检索
        Query_Embedding = Encode(User_Query)
        Vector_Retrieved_Chunks = Vector_Retriever.Retrieve_Top_K(Query_Embedding, Knowledge_Base_1, K=3)
        
        // 从知识库2使用关键词检索
        Keyword_Retrieved_Chunks = Keyword_Retriever.Retrieve_Top_K(User_Query, Knowledge_Base_2, K=2)
        
        // 2. 融合检索结果
        All_Retrieved_Chunks = Vector_Retrieved_Chunks + Keyword_Retrieved_Chunks
        Unique_Chunks = Remove_Duplicates(All_Retrieved_Chunks) // 去重
        
        // 3. (可选) 重排序融合后的结果
        Reranked_Chunks = RerankDocuments(User_Query, Unique_Chunks)
        
        // 4. 构建增强型Prompt
        Context = Join_Chunks(Reranked_Chunks)
        Enhanced_Prompt = BuildPrompt(User_Query, Context)
        
        // 5. LLM生成答案
        Answer = LLM.Generate(Enhanced_Prompt)
        
        Return Answer
    ```
    这个伪代码展示了多路RAG如何通过并行检索和结果融合来汇聚来自不同来源或不同策略的信息，从而为LLM提供更全面、更可靠的上下文。

## 2. RAG 架构的核心组件

RAG系统的核心在于其模块化的设计，每个组件都承担着特定的职责，共同协作以实现知识增强的生成。

### 2.1 查询编码器 (Query Encoder) <Badge text="组件" type="info"/>

*   **功能**：将用户输入的自然语言查询转换为高维向量表示（Query Embedding）。
*   **原理**：通常采用预训练的语言模型（如Sentence-BERT、OpenAI Embeddings），这些模型能够捕捉文本的语义信息，使得语义相似的查询在向量空间中距离更近。
*   **技术细节**：
    *   **模型选择**：选择与知识库文档嵌入模型一致或兼容的编码器，以确保向量空间的一致性。
    *   **微调**：在特定领域，可以通过少量标注数据对编码器进行微调，以提高其在该领域查询的语义匹配能力。

### 2.2 知识库 (Knowledge Base) <Badge text="组件" type="info"/>

*   **功能**：存储用于检索的外部信息，可以是结构化或非结构化数据。
*   **组成**：
    *   **原始文档**：如PDF、网页、数据库记录、Markdown文件、API文档等。
    *   **文档分块 (Chunks)**：为了适应LLM的上下文窗口和提高检索效率，原始文档会被切分成较小的、语义完整的文本片段。
    *   **文档嵌入 (Document Embeddings)**：每个文档分块通过嵌入模型转换为向量表示。
*   **管理**：需要有效的机制来管理知识库的更新、去重、版本控制和质量保证。

### 2.3 向量数据库 (Vector Database) <Badge text="组件" type="info"/>

*   **功能**：高效存储和检索海量的文本嵌入向量，是RAG系统的核心基础设施。
*   **原理**：支持近似最近邻（Approximate Nearest Neighbor, ANN）搜索算法，能够在高维向量空间中快速找到与查询向量最相似的文档向量。
*   **常用产品**：
    *   **Pinecone**：托管式向量数据库，提供高性能、可扩展的向量搜索服务。
    *   **Weaviate**：开源向量搜索引擎，支持语义搜索和多模态数据。
    *   **Milvus**：开源向量数据库，专为大规模向量相似度搜索设计。
    *   **Chroma**：轻量级、易于使用的开源向量数据库，适合小型项目和本地开发。
    *   **Faiss (Facebook AI Similarity Search)**：一个用于高效相似度搜索的库，常作为向量数据库的底层引擎。

### 2.4 检索器 (Retriever) <Badge text="组件" type="info"/>

*   **功能**：根据查询向量，从向量数据库中检索出最相关的文档分块。
*   **类型**：
    *   **向量检索 (Vector Search)**：基于查询嵌入和文档嵌入的相似度进行检索。
    *   **关键词检索 (Keyword Search)**：传统的基于关键词匹配的检索，如BM25。
    *   **混合检索 (Hybrid Search)**：结合向量检索和关键词检索，以提高召回率和准确性。
*   **优化**：可以通过重排序（Re-ranking）模块进一步优化检索结果。

### 2.5 重排序器 (Re-ranker) (可选) <Badge text="组件" type="info"/>

*   **功能**：对初步检索到的文档分块进行二次排序，以提高相关性。
*   **原理**：通常使用一个更复杂的模型（如交叉编码器Cross-Encoder）来评估查询和每个检索到的文档之间的精细相关性，从而选出最相关的文档子集。
*   **重要性**：在初步检索结果包含大量噪声或相关性不高的文档时，重排序能显著提升最终答案的质量。

### 2.6 大型语言模型 (Large Language Model, LLM) <Badge text="组件" type="info"/>

*   **功能**：接收用户查询和检索到的上下文信息，生成最终的答案。
*   **原理**：利用其强大的语言理解、推理和生成能力，将检索到的信息整合到连贯、准确的回答中。
*   **选择**：根据任务需求（如生成质量、速度、成本）选择合适的LLM，如GPT系列、Claude、Gemini、LLaMA等。

## 3. RAG 架构的工作流程

RAG系统的工作流程是一个多阶段的管道，确保信息从知识库流向LLM，并最终生成高质量的答案。

### 3.1 离线阶段：知识库构建与索引 <Badge text="离线" type="tip"/>

1.  **数据收集**：从各种来源（文档、网页、数据库等）收集原始数据。
2.  **数据清洗与预处理**：去除噪声、格式化、去重等，确保数据质量。
3.  **文档分块**：将长文档切分成适合检索和LLM上下文窗口的文本片段（Chunks）。
4.  **生成嵌入**：使用文本嵌入模型为每个文档分块生成向量表示（Embeddings）。
5.  **索引存储**：将文档分块的文本内容和对应的向量存储到向量数据库中，建立索引以支持高效检索。

### 3.2 在线阶段：查询处理与答案生成 <Badge text="在线" type="tip"/>

1.  **用户查询**：系统接收用户输入的自然语言查询。
2.  **查询编码**：使用与文档嵌入相同的编码器，将用户查询转换为查询向量。
3.  **初步检索**：在向量数据库中执行相似度搜索，找出与查询向量最相似的K个文档分块。
4.  **重排序 (可选)**：对初步检索结果进行二次排序，以提高相关性。
5.  **上下文构建**：将原始用户查询和经过筛选、排序后的文档分块拼接成一个增强型Prompt。
6.  **LLM生成**：将增强型Prompt输入给LLM，LLM基于这些信息生成最终答案。
7.  **答案输出**：将LLM生成的答案返回给用户。

::: tip 总结
RAG架构通过将信息检索能力与大型语言模型的生成能力相结合，有效解决了LLM的知识盲区和“幻觉”问题。理解其不同的架构模式、核心组件及其详细工作流程，是成功设计和实现高效RAG系统的关键。
:::
