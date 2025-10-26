import { Trophy, Target, Users, Calendar, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

// Mock data
const learningStats = {
  xp: 1250,
  level: 8,
  nextLevelXP: 1500,
  streak: 7,
  completedTasks: 23,
  activeTasks: 5,
};

const activeLearningTasks = [
  {
    id: 1,
    title: "学习React Server Components",
    type: "MLS",
    progress: 60,
    dueDate: "2025-10-28",
    timeSpent: 90, // minutes
    status: "in_progress",
  },
  {
    id: 2,
    title: "阅读《深度工作》并输出读书卡片",
    type: "读书会2.0",
    progress: 30,
    dueDate: "2025-10-30",
    timeSpent: 45,
    status: "in_progress",
  },
  {
    id: 3,
    title: "完成周度复盘",
    type: "复盘",
    progress: 0,
    dueDate: "2025-10-27",
    timeSpent: 0,
    status: "pending",
  },
];

const recentAchievements = [
  { id: 1, name: "7日连胜", icon: "🔥", date: "2025-10-26" },
  { id: 2, name: "10篇知识卡片", icon: "📇", date: "2025-10-24" },
  { id: 3, name: "首次公开分享", icon: "🎤", date: "2025-10-22" },
];

const upcomingEvents = [
  {
    id: 1,
    title: "周度学习路演",
    date: "2025-10-28 19:00",
    participants: 12,
    type: "公共舞台",
  },
  {
    id: 2,
    title: "结对学习：TypeScript高级特性",
    date: "2025-10-29 14:00",
    participants: 2,
    type: "结对学习",
  },
];

export default function LearnPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">学习空间</h1>
        <p className="text-gray-600 dark:text-gray-300">
          基于3E模型的体验式学习中心
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <Trophy className="w-8 h-8" />
            <span className="text-3xl font-bold">{learningStats.level}</span>
          </div>
          <div className="text-blue-100">等级</div>
          <div className="mt-4 bg-blue-400 rounded-full h-2">
            <div
              className="bg-white rounded-full h-2"
              style={{
                width: `${(learningStats.xp / learningStats.nextLevelXP) * 100}%`,
              }}
            />
          </div>
          <div className="text-xs text-blue-100 mt-1">
            {learningStats.xp} / {learningStats.nextLevelXP} XP
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-4xl">🔥</span>
            <span className="text-3xl font-bold">{learningStats.streak}</span>
          </div>
          <div className="text-orange-100">连胜天数</div>
          <div className="text-xs text-orange-100 mt-2">
            继续保持，再坚持3天解锁新成就！
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-8 h-8" />
            <span className="text-3xl font-bold">{learningStats.completedTasks}</span>
          </div>
          <div className="text-green-100">已完成任务</div>
          <div className="text-xs text-green-100 mt-2">
            本周已完成 5 个任务
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8" />
            <span className="text-3xl font-bold">{learningStats.activeTasks}</span>
          </div>
          <div className="text-purple-100">进行中</div>
          <div className="text-xs text-purple-100 mt-2">
            3个任务即将到期
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Active Tasks */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">当前任务</h2>
              <Link
                href="/learn/tasks/new"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                + 新建任务
              </Link>
            </div>

            <div className="space-y-4">
              {activeLearningTasks.map((task) => (
                <Link
                  key={task.id}
                  href={`/learn/tasks/${task.id}`}
                  className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{task.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">
                          {task.type}
                        </span>
                        <span>⏱️ {task.timeSpent}分钟</span>
                        <span>📅 {task.dueDate}</span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        task.status === "in_progress"
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {task.status === "in_progress" ? "进行中" : "待开始"}
                    </span>
                  </div>

                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>进度</span>
                      <span>{task.progress}%</span>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 rounded-full h-2 transition-all"
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Learning Scenarios */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-2xl font-bold mb-6">学习场景模板</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/learn/scenarios/reading-club"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-semibold mb-1">读书会 2.0</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  速读卡 + 复述 + 质询 + 迁移练习
                </p>
              </Link>

              <Link
                href="/learn/scenarios/knowledge-cards"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="text-3xl mb-2">📇</div>
                <h3 className="font-semibold mb-1">知识卡片流</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  原子卡 → 主题卡 → 项目卡
                </p>
              </Link>

              <Link
                href="/learn/scenarios/build-public"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-semibold mb-1">Build in Public</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  每周日志 + 公开承诺 + Demo展示
                </p>
              </Link>

              <Link
                href="/learn/scenarios/sprint"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold mb-1">7日冲刺</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  日更作品 + 末日路演 + 同侪评分
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-xl font-bold">最近成就</h2>
            </div>
            <div className="space-y-3">
              {recentAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium">{achievement.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {achievement.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/learn/achievements"
              className="block mt-4 text-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              查看全部成就 →
            </Link>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-purple-500 mr-2" />
              <h2 className="text-xl font-bold">即将开始</h2>
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-sm">{event.title}</h3>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded text-xs">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>📅 {event.date}</span>
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {event.participants}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/learn/events"
              className="block mt-4 text-center text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
            >
              查看日历 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
