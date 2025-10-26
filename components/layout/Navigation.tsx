"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Wrench, GraduationCap, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "首页", href: "/", icon: null },
  { name: "知识库", href: "/knowledge", icon: BookOpen },
  { name: "工具集", href: "/tools", icon: Wrench },
  { name: "学习空间", href: "/learn", icon: GraduationCap },
  { name: "个人", href: "/profile", icon: User },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              儒航智库
            </div>
          </Link>

          <div className="flex space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200",
                    isActive
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
