import { Search, Plus, Filter, Tag } from "lucide-react";
import Link from "next/link";

// Mock data - 将来会从数据库获取
const knowledgeItems = [
  {
    id: 1,
    title: "3E学习体验模型详解",
    description: "深入探讨Explore、Engage、Embed三个阶段的设计原则与实施方法",
    category: "学习方法论",
    tags: ["体验设计", "学习模型", "教育"],
    createdAt: "2025-10-20",
    views: 156,
    likes: 23,
  },
  {
    id: 2,
    title: "知识管理工具对比分析",
    description: "对比Notion、Obsidian、Roam Research等知识管理工具的优缺点",
    category: "工具评测",
    tags: ["工具", "效率", "知识管理"],
    createdAt: "2025-10-18",
    views: 234,
    likes: 45,
  },
  {
    id: 3,
    title: "游戏化设计在学习中的应用",
    description: "如何通过XP、徽章、连胜等游戏化元素提升学习动力",
    category: "产品设计",
    tags: ["游戏化", "动机设计", "UX"],
    createdAt: "2025-10-15",
    views: 189,
    likes: 34,
  },
];

const categories = ["全部", "学习方法论", "工具评测", "产品设计", "技术文档", "个人成长"];

export default function KnowledgePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">知识库</h1>
          <p className="text-gray-600 dark:text-gray-300">
            结构化的知识管理与快速检索
          </p>
        </div>
        <Link
          href="/knowledge/new"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>新建知识</span>
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索知识库..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Filter className="w-5 h-5" />
            <span>筛选</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "全部"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Knowledge Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {knowledgeItems.map((item) => (
          <Link
            key={item.id}
            href={`/knowledge/${item.id}`}
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                  {item.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.createdAt}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center space-x-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{item.views} 次浏览</span>
                <span>❤️ {item.likes}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          加载更多
        </button>
      </div>
    </div>
  );
}
