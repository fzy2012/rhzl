import { ExternalLink, Plus, Star } from "lucide-react";
import Link from "next/link";

// Mock data - 将来会从数据库或配置文件获取
const tools = [
  {
    id: 1,
    name: "ADPC工具",
    description: "自建的ADPC应用工具，提供高效的数据处理能力",
    url: "https://adpc.ruhang365.cn/",
    category: "自建工具",
    icon: "🛠️",
    isExternal: true,
    featured: true,
  },
  {
    id: 2,
    name: "知识卡片生成器",
    description: "快速将笔记转换为可复用的知识卡片",
    url: "/tools/card-generator",
    category: "学习工具",
    icon: "📇",
    isExternal: false,
    featured: true,
  },
  {
    id: 3,
    name: "学习任务规划器",
    description: "基于MLS模型的学习任务拆解与规划工具",
    url: "/tools/task-planner",
    category: "学习工具",
    icon: "📋",
    isExternal: false,
    featured: false,
  },
  {
    id: 4,
    name: "复盘模板生成器",
    description: "一键生成标准化的复盘文档",
    url: "/tools/review-template",
    category: "效率工具",
    icon: "🔄",
    isExternal: false,
    featured: false,
  },
  {
    id: 5,
    name: "互评表生成器",
    description: "创建结构化的同侪互评表格",
    url: "/tools/peer-review",
    category: "协作工具",
    icon: "👥",
    isExternal: false,
    featured: false,
  },
  {
    id: 6,
    name: "进度追踪看板",
    description: "可视化展示学习进度与XP增长",
    url: "/tools/progress-board",
    category: "可视化",
    icon: "📊",
    isExternal: false,
    featured: true,
  },
];

const categories = ["全部", "自建工具", "学习工具", "效率工具", "协作工具", "可视化"];

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">工具集</h1>
          <p className="text-gray-600 dark:text-gray-300">
            集成各类实用工具，提升学习与工作效率
          </p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>添加工具</span>
        </button>
      </div>

      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "全部"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Tools */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Star className="w-6 h-6 text-yellow-500 mr-2" />
          精选工具
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools
            .filter((tool) => tool.featured)
            .map((tool) => (
              <ToolCard key={tool.id} tool={tool} featured />
            ))}
        </div>
      </div>

      {/* All Tools */}
      <div>
        <h2 className="text-2xl font-bold mb-6">所有工具</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolCard({ tool, featured = false }: { tool: any; featured?: boolean }) {
  const CardWrapper = tool.isExternal ? "a" : Link;
  const wrapperProps = tool.isExternal
    ? { href: tool.url, target: "_blank", rel: "noopener noreferrer" }
    : { href: tool.url };

  return (
    <CardWrapper
      {...wrapperProps}
      className={`group bg-white dark:bg-gray-800 rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden ${
        featured
          ? "border-purple-300 dark:border-purple-700"
          : "border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-4xl">{tool.icon}</div>
            <div>
              <h3 className="text-xl font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex items-center">
                {tool.name}
                {tool.isExternal && (
                  <ExternalLink className="w-4 h-4 ml-2 text-gray-400" />
                )}
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {tool.category}
              </span>
            </div>
          </div>
          {featured && (
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {tool.description}
        </p>

        <div className="flex items-center justify-between">
          <button className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline">
            {tool.isExternal ? "打开工具 →" : "使用工具 →"}
          </button>
        </div>
      </div>
    </CardWrapper>
  );
}
