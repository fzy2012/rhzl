import Link from "next/link";
import { BookOpen, Wrench, GraduationCap, Sparkles, Target, Users, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          儒航智库
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          把学习从"摄入信息"升级为"设计体验"
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          在"知识触手可及"的时代，稀缺的不再是信息本身，而是「获取知识的体验」。
          只有把学习过程设计为可感、可玩、可复用的体验，知识才会被真正吸收、转化并沉淀为能力资产。
        </p>
      </div>

      {/* 3E Learning Model */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">3E 学习体验模型</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold">Explore 探索</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              快速预览、对比、标注，建立问题清单与关键词地图
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-purple-500 mr-3" />
              <h3 className="text-xl font-semibold">Engage 投入</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              围绕问题清单做产出式练习+同侪讨论，形成即时反馈
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Trophy className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-xl font-semibold">Embed 嵌入</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              把新知绑定到具体任务、模板与工作流中，形成可复用资产
            </p>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">核心功能</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/knowledge" className="group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <BookOpen className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">知识库</h3>
              <p className="text-blue-100">
                结构化知识管理、全文搜索、标签分类
              </p>
            </div>
          </Link>

          <Link href="/tools" className="group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Wrench className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">工具集</h3>
              <p className="text-purple-100">
                集成自建应用与第三方工具
              </p>
            </div>
          </Link>

          <Link href="/learn" className="group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <GraduationCap className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">学习空间</h3>
              <p className="text-green-100">
                MLS任务卡、进度追踪、游戏化系统
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Key Principles */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">设计原则</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold mb-2">仪式化入口</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                固定时间 + 固定动作 + 固定载体，形成"开机键"
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300 font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold mb-2">产出即目标</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                每个单元以"作品/决策/清单"收尾，而非只做摘抄笔记
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-300 font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold mb-2">公共舞台</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                周更 Demo、5 分钟闪电分享，制造正向压力与迭代动力
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-300 font-bold">
              4
            </div>
            <div>
              <h4 className="font-semibold mb-2">72 小时闭环</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                学习—应用—反馈在 3 天内走完，缩短认知-行为距离
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
