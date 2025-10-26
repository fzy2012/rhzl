import { User, Settings, TrendingUp, BookOpen, Award, Calendar } from "lucide-react";

const userStats = {
  name: "学习者",
  level: 8,
  xp: 1250,
  joinDate: "2025-08-15",
  totalLearningDays: 72,
  longestStreak: 15,
  currentStreak: 7,
  totalKnowledge: 45,
  totalWorks: 23,
  totalReviews: 18,
};

const recentActivity = [
  {
    id: 1,
    type: "knowledge",
    action: "创建了知识",
    title: "3E学习体验模型详解",
    time: "2小时前",
  },
  {
    id: 2,
    type: "task",
    action: "完成了任务",
    title: "学习React Server Components",
    time: "5小时前",
  },
  {
    id: 3,
    type: "review",
    action: "参与了互评",
    title: "张三的周度复盘",
    time: "1天前",
  },
  {
    id: 4,
    type: "achievement",
    action: "获得成就",
    title: "7日连胜 🔥",
    time: "1天前",
  },
];

const badges = [
  { id: 1, name: "早起鸟", icon: "🐦", description: "连续7天早上6点前学习", earned: true },
  { id: 2, name: "知识创作者", icon: "✍️", description: "创建10篇知识文章", earned: true },
  { id: 3, name: "互评达人", icon: "👥", description: "参与20次同侪互评", earned: false },
  { id: 4, name: "月度冠军", icon: "👑", description: "单月XP第一名", earned: false },
  { id: 5, name: "公开分享", icon: "🎤", description: "完成首次公开路演", earned: true },
  { id: 6, name: "百日修行", icon: "💯", description: "累计学习100天", earned: false },
];

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{userStats.name}</h1>
              <div className="flex items-center space-x-4 text-sm">
                <span className="px-3 py-1 bg-white/20 rounded-full">
                  等级 {userStats.level}
                </span>
                <span>{userStats.xp} XP</span>
                <span>加入于 {userStats.joinDate}</span>
              </div>
            </div>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
            <Settings className="w-5 h-5" />
            <span>设置</span>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-2xl font-bold mb-6">数据概览</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {userStats.totalLearningDays}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">累计学习天数</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                  {userStats.longestStreak}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">最长连胜</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {userStats.currentStreak}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">当前连胜</div>
              </div>
            </div>
          </div>

          {/* Activity Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-2xl font-bold mb-6">创作统计</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                  <span className="font-medium">知识文章</span>
                </div>
                <span className="text-2xl font-bold">{userStats.totalKnowledge}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <span className="font-medium">学习作品</span>
                </div>
                <span className="text-2xl font-bold">{userStats.totalWorks}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-purple-500" />
                  <span className="font-medium">互评参与</span>
                </div>
                <span className="text-2xl font-bold">{userStats.totalReviews}</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-2xl font-bold mb-6">最近动态</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    {activity.type === "knowledge" && <BookOpen className="w-5 h-5 text-blue-600" />}
                    {activity.type === "task" && <TrendingUp className="w-5 h-5 text-green-600" />}
                    {activity.type === "review" && <User className="w-5 h-5 text-purple-600" />}
                    {activity.type === "achievement" && <Award className="w-5 h-5 text-yellow-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="text-gray-600 dark:text-gray-300">{activity.action}</span>{" "}
                      <span className="font-medium">{activity.title}</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Badges */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-xl font-bold">成就徽章</h2>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`relative flex flex-col items-center p-3 rounded-lg border-2 transition-all ${
                    badge.earned
                      ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                      : "border-gray-200 dark:border-gray-700 opacity-50 grayscale"
                  }`}
                  title={badge.description}
                >
                  <span className="text-3xl mb-1">{badge.icon}</span>
                  <span className="text-xs text-center font-medium">{badge.name}</span>
                  {badge.earned && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
              已获得 {badges.filter((b) => b.earned).length} / {badges.length} 个徽章
            </p>
          </div>

          {/* Learning Calendar */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-blue-500 mr-2" />
              <h2 className="text-xl font-bold">学习日历</h2>
            </div>
            <div className="aspect-square bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                日历视图（待实现）
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-200 rounded"></div>
                <span>已完成</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-200 rounded"></div>
                <span>进行中</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-200 rounded"></div>
                <span>未开始</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
