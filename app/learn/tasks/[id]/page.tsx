import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Target, CheckCircle, PlayCircle, Edit } from "lucide-react";

const getTaskById = (id: string) => {
  const tasks = {
    "1": {
      id: 1,
      title: "学习React Server Components",
      type: "MLS",
      description: "深入学习React Server Components的概念、使用方法和最佳实践",
      progress: 60,
      status: "in_progress",
      timeEstimate: 90,
      timeSpent: 90,
      dueDate: "2025-10-28",
      createdAt: "2025-10-25",
      mls: [
        { id: 1, title: "阅读官方文档", completed: true, time: 30 },
        { id: 2, title: "观看教程视频", completed: true, time: 30 },
        { id: 3, title: "动手实践代码", completed: false, time: 30 },
      ],
      notes: "Server Components是Next.js 13引入的重要特性，需要理解它与Client Components的区别。",
    },
    "2": {
      id: 2,
      title: "阅读《深度工作》并输出读书卡片",
      type: "读书会2.0",
      description: "完整阅读《深度工作》一书，按照读书会2.0模式输出学习卡片",
      progress: 30,
      status: "in_progress",
      timeEstimate: 180,
      timeSpent: 45,
      dueDate: "2025-10-30",
      createdAt: "2025-10-24",
      mls: [
        { id: 1, title: "快速通读全书", completed: true, time: 60 },
        { id: 2, title: "提取关键概念", completed: false, time: 60 },
        { id: 3, title: "输出知识卡片", completed: false, time: 60 },
      ],
      notes: "重点关注深度工作的4大原则和具体实践方法。",
    },
  };

  return tasks[id as keyof typeof tasks] || tasks["1"];
};

export default function TaskDetailPage({ params }: { params: { id: string } }) {
  const task = getTaskById(params.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/learn"
        className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>返回学习空间</span>
      </Link>

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-6">
        <div className="flex items-start justify-between mb-4">
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
            {task.type}
          </span>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <Edit className="w-4 h-4" />
            <span>编辑</span>
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-4">{task.title}</h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          {task.description}
        </p>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span>进度</span>
            <span>{task.progress}%</span>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-green-600 rounded-full h-3 transition-all"
              style={{ width: `${task.progress}%` }}
            />
          </div>
        </div>

        {/* Meta Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="w-4 h-4 text-gray-400" />
            <div>
              <div className="text-gray-500 dark:text-gray-400">截止日期</div>
              <div className="font-medium">{task.dueDate}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="w-4 h-4 text-gray-400" />
            <div>
              <div className="text-gray-500 dark:text-gray-400">已投入</div>
              <div className="font-medium">{task.timeSpent} 分钟</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Target className="w-4 h-4 text-gray-400" />
            <div>
              <div className="text-gray-500 dark:text-gray-400">预计</div>
              <div className="font-medium">{task.timeEstimate} 分钟</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <div
              className={`w-3 h-3 rounded-full ${
                task.status === "in_progress" ? "bg-green-500" : "bg-gray-400"
              }`}
            />
            <div>
              <div className="text-gray-500 dark:text-gray-400">状态</div>
              <div className="font-medium">
                {task.status === "in_progress" ? "进行中" : "待开始"}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <PlayCircle className="w-5 h-5" />
            <span>开始学习</span>
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            暂停
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            完成
          </button>
        </div>
      </div>

      {/* MLS Breakdown */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">MLS 拆解</h2>
        <div className="space-y-3">
          {task.mls.map((mls) => (
            <div
              key={mls.id}
              className={`flex items-center justify-between p-4 border rounded-lg ${
                mls.completed
                  ? "border-green-300 bg-green-50 dark:bg-green-900/20"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="flex items-center space-x-3">
                <CheckCircle
                  className={`w-6 h-6 ${
                    mls.completed ? "text-green-600" : "text-gray-400"
                  }`}
                />
                <div>
                  <div className={`font-medium ${mls.completed ? "line-through" : ""}`}>
                    {mls.title}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    预计 {mls.time} 分钟
                  </div>
                </div>
              </div>
              {!mls.completed && (
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  开始
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-4">学习笔记</h2>
        <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300">{task.notes}</p>
        </div>
        <textarea
          placeholder="添加你的学习笔记和心得..."
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="mt-3 flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            保存笔记
          </button>
        </div>
      </div>
    </div>
  );
}
