"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Copy } from "lucide-react";

export default function CardGeneratorPage() {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState<Array<{ type: string; content: string }>>([]);

  const generateCards = () => {
    // 简单的演示逻辑
    const mockCards = [
      { type: "原子卡", content: "从输入文本中提取的核心概念1" },
      { type: "原子卡", content: "从输入文本中提取的核心概念2" },
      { type: "主题卡", content: "将多个原子卡整合后的主题" },
    ];
    setCards(mockCards);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/tools"
        className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>返回工具集</span>
      </Link>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white">
        <div className="text-5xl mb-4">📇</div>
        <h1 className="text-3xl font-bold mb-2">知识卡片生成器</h1>
        <p className="text-lg text-blue-100">
          将笔记和文章快速转换为可复用的知识卡片
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-bold mb-4">输入内容</h2>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="粘贴你的笔记、文章或学习内容...&#10;&#10;工具会自动识别关键概念，生成原子卡、主题卡和项目卡。"
            rows={20}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={generateCards}
            disabled={!input.trim()}
            className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            生成知识卡片
          </button>
        </div>

        {/* Output */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">生成的卡片</h2>
            {cards.length > 0 && (
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <Copy className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {cards.length === 0 ? (
            <div className="flex items-center justify-center h-full min-h-[400px] text-gray-400 dark:text-gray-500">
              <div className="text-center">
                <p className="text-lg mb-2">暂无卡片</p>
                <p className="text-sm">输入内容后点击生成按钮</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded"
                >
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {card.type}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    {card.content}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-4">使用说明</h2>
        <div className="space-y-3 text-gray-600 dark:text-gray-300">
          <p>
            <strong>原子卡</strong>：单一概念或观点，最小知识单元
          </p>
          <p>
            <strong>主题卡</strong>：多个相关原子卡的整合，形成主题
          </p>
          <p>
            <strong>项目卡</strong>：将主题卡应用到具体项目或场景
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            💡 提示：输入内容越结构化，生成的卡片质量越高
          </p>
        </div>
      </div>
    </div>
  );
}
