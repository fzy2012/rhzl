import Link from "next/link";
import { ArrowLeft, Award, Trophy, Star, Target } from "lucide-react";

const allAchievements = [
  { id: 1, name: "早起鸟", icon: "🐦", description: "连续7天早上6点前学习", earned: true, date: "2025-10-15" },
  { id: 2, name: "知识创作者", icon: "✍️", description: "创建10篇知识文章", earned: true, date: "2025-10-18" },
  { id: 3, name: "互评达人", icon: "👥", description: "参与20次同侪互评", earned: false, progress: 15 },
  { id: 4, name: "月度冠军", icon: "👑", description: "单月XP第一名", earned: false },
  { id: 5, name: "公开分享", icon: "🎤", description: "完成首次公开路演", earned: true, date: "2025-10-22" },
  { id: 6, name: "百日修行", icon: "💯", description: "累计学习100天", earned: false, progress: 72 },
  { id: 7, name: "连胜之王", icon: "🔥", description: "保持30天学习连胜", earned: false, progress: 7 },
  { id: 8, name: "知识传播者", icon: "📢", description: "文章被转发50次", earned: false },
  { id: 9, name: "完美主义", icon: "⭐", description: "完成率100%连续10个任务", earned: false },
];

export default function AchievementsPage() {
  const earnedCount = allAchievements.filter(a => a.earned).length;
  const totalCount = allAchievements.length;
  const completionRate = Math.round((earnedCount / totalCount) * 100);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/learn"
        className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>返回学习空间</span>
      </Link>

      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg p-8 mb-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <Trophy className="w-12 h-12" />
          <div>
            <h1 className="text-3xl font-bold">成就系统</h1>
            <p className="text-lg text-yellow-100">
              已解锁 {earnedCount} / {totalCount} 个成就 ({completionRate}%)
            </p>
          </div>
        </div>
        <div className="bg-white/20 rounded-full h-3">
          <div
            className="bg-white rounded-full h-3"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allAchievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`relative p-6 rounded-lg border-2 transition-all ${
              achievement.earned
                ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 opacity-75"
            }`}
          >
            {achievement.earned && (
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">✓</span>
              </div>
            )}
            <div className="text-center mb-4">
              <div className="text-5xl mb-3">{achievement.icon}</div>
              <h3 className="text-xl font-bold mb-2">{achievement.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </div>
            {achievement.earned ? (
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                获得于 {achievement.date}
              </div>
            ) : achievement.progress ? (
              <div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <span>进度</span>
                  <span>{achievement.progress}/{achievement.description.match(/\d+/)?.[0]}</span>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2"
                    style={{ width: `${(achievement.progress / parseInt(achievement.description.match(/\d+/)?.[0] || "100")) * 100}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="text-center text-sm text-gray-400">未解锁</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
