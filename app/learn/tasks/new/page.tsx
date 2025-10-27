"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Plus, X } from "lucide-react";

export default function NewTaskPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    type: "MLS",
    description: "",
    timeEstimate: 60,
    dueDate: "",
    mls: [] as string[],
  });
  const [newMLS, setNewMLS] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating task:", formData);
    alert("学习任务创建成功！（演示版本）");
    router.push("/learn");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addMLS = () => {
    if (newMLS.trim()) {
      setFormData({
        ...formData,
        mls: [...formData.mls, newMLS.trim()],
      });
      setNewMLS("");
    }
  };

  const removeMLS = (index: number) => {
    setFormData({
      ...formData,
      mls: formData.mls.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/learn"
        className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>返回学习空间</span>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">新建学习任务</h1>
        <p className="text-gray-600 dark:text-gray-300">
          创建基于MLS模型的学习任务，拆解为30-90分钟的最小学习单元
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          {/* Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              任务标题 *
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="例如：学习React Server Components"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              学习类型 *
            </label>
            <select
              name="type"
              required
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="MLS">MLS - 最小学习单元</option>
              <option value="读书会2.0">读书会 2.0</option>
              <option value="知识卡片流">知识卡片流</option>
              <option value="Build in Public">Build in Public</option>
              <option value="7日冲刺">7日冲刺</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              任务描述 *
            </label>
            <textarea
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="描述这个学习任务的目标、背景和预期产出..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Time Estimate */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              预计时长（分钟）*
            </label>
            <input
              type="number"
              name="timeEstimate"
              required
              min="30"
              max="180"
              value={formData.timeEstimate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              建议：30-90分钟为一个MLS单元
            </p>
          </div>

          {/* Due Date */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              截止日期 *
            </label>
            <input
              type="date"
              name="dueDate"
              required
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* MLS Breakdown */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              MLS拆解
            </label>
            <div className="flex space-x-2 mb-3">
              <input
                type="text"
                value={newMLS}
                onChange={(e) => setNewMLS(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addMLS())}
                placeholder="添加一个学习单元..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={addMLS}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            {formData.mls.length > 0 && (
              <div className="space-y-2">
                {formData.mls.map((mls, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <span className="text-sm">{mls}</span>
                    <button
                      type="button"
                      onClick={() => removeMLS(index)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.push("/learn")}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            取消
          </button>
          <button
            type="submit"
            className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <Save className="w-5 h-5" />
            <span>创建任务</span>
          </button>
        </div>
      </form>
    </div>
  );
}
