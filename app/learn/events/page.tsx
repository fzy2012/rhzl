import Link from "next/link";
import { ArrowLeft, Calendar, Users, MapPin, Clock } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "周度学习路演",
    date: "2025-10-28",
    time: "19:00-21:00",
    type: "公共舞台",
    participants: 12,
    location: "线上",
    description: "展示本周学习成果，获得同侪反馈",
  },
  {
    id: 2,
    title: "结对学习：TypeScript高级特性",
    date: "2025-10-29",
    time: "14:00-16:00",
    type: "结对学习",
    participants: 2,
    location: "线上",
    description: "深入学习TypeScript泛型、装饰器等高级特性",
  },
  {
    id: 3,
    title: "读书会：《深度工作》",
    date: "2025-11-01",
    time: "20:00-21:30",
    type: "读书会2.0",
    participants: 8,
    location: "线上",
    description: "按照读书会2.0流程分享《深度工作》",
  },
  {
    id: 4,
    title: "7日冲刺启动会",
    date: "2025-11-05",
    time: "19:00-20:00",
    type: "7日冲刺",
    participants: 15,
    location: "线上",
    description: "新一轮7日学习冲刺，设定目标和承诺",
  },
];

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/learn"
        className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>返回学习空间</span>
      </Link>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">学习日历</h1>
          <p className="text-gray-600 dark:text-gray-300">
            即将开始的学习活动和协作事件
          </p>
        </div>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          创建活动
        </button>
      </div>

      {/* Calendar View Placeholder */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
        <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
          <div className="text-center text-gray-400 dark:text-gray-500">
            <Calendar className="w-12 h-12 mx-auto mb-2" />
            <p>日历视图（待实现）</p>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">即将开始</h2>
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <span className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full">
                    {event.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{event.participants} 人参与</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 whitespace-nowrap">
                  报名参加
                </button>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 whitespace-nowrap">
                  查看详情
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
