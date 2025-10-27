import Link from "next/link";
import { ArrowLeft, Calendar, Eye, Heart, Tag, Edit, Trash2 } from "lucide-react";

// 这里会从数据库获取，现在使用mock数据
const getKnowledgeById = (id: string) => {
  const knowledge = {
    "1": {
      id: 1,
      title: "3E学习体验模型详解",
      description: "深入探讨Explore、Engage、Embed三个阶段的设计原则与实施方法",
      content: `
# 3E学习体验模型详解

## 概述

3E学习体验模型是一个完整的学习体验设计框架，包含三个核心阶段：

### 1. Explore (探索阶段)

**目标**: 快速建立知识地图，明确学习方向

**核心活动**:
- 快速预览和浏览相关内容
- 对比不同观点和方法
- 标注重点和疑问
- 建立问题清单
- 绘制关键词地图

**工具支持**:
- 知识卡片预览
- 思维导图工具
- 快速标注功能
- 问题清单模板

### 2. Engage (投入阶段)

**目标**: 深度学习，产出成果

**核心活动**:
- 围绕问题清单进行深度学习
- 完成产出式练习
- 参与同侪讨论
- 获得即时反馈
- 迭代优化

**工具支持**:
- MLS任务系统
- 协作讨论区
- 互评系统
- 作品展示平台

### 3. Embed (嵌入阶段)

**目标**: 知识固化，形成能力

**核心活动**:
- 将新知绑定到具体任务
- 创建可复用模板
- 集成到工作流程
- 持续应用和优化

**工具支持**:
- 模板库
- 工作流集成
- 应用场景记录
- 效果追踪

## 实施建议

### 最小学习单元(MLS)

将学习任务拆解为30-90分钟可完成的最小单元：

1. **明确目标**: 本次学习要达成什么具体目标
2. **时间限制**: 设定明确的时间边界
3. **产出要求**: 定义清晰的产出物
4. **验收标准**: 如何判断完成质量

### 72小时闭环

确保学习-应用-反馈在3天内完成：

- Day 1: 学习和理解（Explore + Engage）
- Day 2: 应用和实践（Embed）
- Day 3: 反馈和优化（复盘）

## 常见问题

**Q: 如何避免停留在Explore阶段？**

A: 设置明确的时间限制和产出要求。Explore阶段不超过总时间的20%。

**Q: Engage阶段如何保持动力？**

A: 通过公共舞台、同侪压力、游戏化激励等机制维持投入度。

**Q: 如何确保Embed阶段真正发生？**

A: 将知识与具体的工作任务绑定，设置应用场景检查点。

## 相关资源

- [MLS任务模板](/learn/scenarios/mls)
- [互评指南](/learn/peer-review)
- [模板库](/tools/templates)
      `,
      category: "学习方法论",
      tags: ["体验设计", "学习模型", "教育"],
      author: "学习者",
      createdAt: "2025-10-20",
      updatedAt: "2025-10-20",
      views: 156,
      likes: 23,
    },
    "2": {
      id: 2,
      title: "知识管理工具对比分析",
      description: "对比Notion、Obsidian、Roam Research等知识管理工具的优缺点",
      content: `
# 知识管理工具对比分析

## 概述

本文对比分析主流知识管理工具，帮助你选择最适合的工具。

## 工具对比

### Notion
**优点**:
- 界面美观，使用门槛低
- 模板丰富
- 协作功能强大

**缺点**:
- 离线功能弱
- 加载速度慢
- 数据迁移困难

### Obsidian
**优点**:
- 本地存储，数据安全
- 插件生态丰富
- Markdown原生支持

**缺点**:
- 学习曲线陡峭
- 协作功能较弱
- 需要自行配置

### Roam Research
**优点**:
- 双向链接强大
- 思维网络可视化
- 适合知识连接

**缺点**:
- 价格昂贵
- 性能问题
- 移动端体验差

## 选择建议

根据你的需求选择：
- 团队协作 → Notion
- 个人深度学习 → Obsidian
- 知识网络构建 → Roam Research
      `,
      category: "工具评测",
      tags: ["工具", "效率", "知识管理"],
      author: "学习者",
      createdAt: "2025-10-18",
      updatedAt: "2025-10-18",
      views: 234,
      likes: 45,
    },
    "3": {
      id: 3,
      title: "游戏化设计在学习中的应用",
      description: "如何通过XP、徽章、连胜等游戏化元素提升学习动力",
      content: `
# 游戏化设计在学习中的应用

## 为什么需要游戏化？

学习本身是反人性的，需要外部激励系统来维持动力。

## 核心元素

### 1. XP经验值系统
- 完成任务获得XP
- 累积XP提升等级
- 等级解锁新功能

### 2. 成就徽章
- 里程碑式奖励
- 社交展示价值
- 收集驱动

### 3. 连胜记录
- 每日完成维持连胜
- 连胜奖励
- 社交压力

## 实施建议

合理设置奖励梯度，避免过度游戏化。
      `,
      category: "产品设计",
      tags: ["游戏化", "动机设计", "UX"],
      author: "学习者",
      createdAt: "2025-10-15",
      updatedAt: "2025-10-15",
      views: 189,
      likes: 34,
    },
  };

  return knowledge[id as keyof typeof knowledge] || knowledge["1"];
};

export default function KnowledgeDetailPage({ params }: { params: { id: string } }) {
  const knowledge = getKnowledgeById(params.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        href="/knowledge"
        className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>返回知识库</span>
      </Link>

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-6">
        <div className="flex items-start justify-between mb-4">
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
            {knowledge.category}
          </span>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Edit className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-red-600 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4">{knowledge.title}</h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          {knowledge.description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>创建于 {knowledge.createdAt}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{knowledge.views} 次浏览</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className="w-4 h-4" />
            <span>{knowledge.likes} 个赞</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {knowledge.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center space-x-1 px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
            >
              <Tag className="w-3 h-3" />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: knowledge.content.replace(/\n/g, "<br />") }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center justify-between">
        <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Heart className="w-5 h-5" />
          <span>点赞</span>
        </button>
        <div className="flex space-x-2">
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            分享
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            收藏
          </button>
        </div>
      </div>
    </div>
  );
}
