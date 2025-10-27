import Link from "next/link";
import { ArrowLeft, BookOpen, MessageCircle, Target, RefreshCw } from "lucide-react";

export default function ReadingClubPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/learn"
        className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>返回学习空间</span>
      </Link>

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 mb-8 text-white">
        <div className="text-5xl mb-4">📚</div>
        <h1 className="text-3xl font-bold mb-2">读书会 2.0</h1>
        <p className="text-lg text-purple-100">
          速读卡 + 复述 + 质询 + 迁移练习的高效读书方法
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-6">
        <h2 className="text-2xl font-bold mb-6">方法介绍</h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">15分钟速读卡</h3>
              <p className="text-gray-600 dark:text-gray-300">
                快速浏览书籍章节，提取核心观点和关键词，记录在速读卡上。
                不求细节完整，只求建立整体框架。
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">5分钟复述</h3>
              <p className="text-gray-600 dark:text-gray-300">
                用自己的话向他人（或镜子/录音）复述核心内容。
                检验理解深度，暴露知识盲区。
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <Target className="w-5 h-5 text-green-600 dark:text-green-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">10分钟质询</h3>
              <p className="text-gray-600 dark:text-gray-300">
                同侪提出挑战性问题："为什么"、"如果不"、"还有什么"。
                深化思考，建立批判性视角。
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-orange-600 dark:text-orange-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">20分钟迁移练习</h3>
              <p className="text-gray-600 dark:text-gray-300">
                将书中概念应用到具体场景：工作项目、生活问题、案例分析。
                形成可执行的行动清单。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-6">
        <h2 className="text-2xl font-bold mb-4">模板下载</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2">速读卡模板</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              结构化记录书籍核心内容的模板
            </p>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              下载模板
            </button>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2">质询清单</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              100个高质量质询问题参考
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              下载清单
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold mb-4">开始读书会</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          创建一个读书会2.0任务，按照流程完成学习
        </p>
        <Link
          href="/learn/tasks/new"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <span>创建读书会任务</span>
        </Link>
      </div>
    </div>
  );
}
