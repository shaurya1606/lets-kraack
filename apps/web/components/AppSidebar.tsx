"use client"

import React from 'react';
import Link from 'next/link';
import { Home, Code, BookOpen, Award, Settings, LogOut } from 'lucide-react';
import { Sidebar } from '@/components/ui/sidebar';

export default function AppSidebar() {
  return (
    <Sidebar className="border-r border-zinc-800 bg-black w-64 h-full flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white">LetsKraack</h1>
      </div>
      
      <nav className="flex-1 px-3">
        <div className="space-y-1">
          <SidebarLink href="/dashboard" icon={<Home className="h-5 w-5" />} text="Dashboard" />
          <SidebarLink href="/challenges" icon={<Code className="h-5 w-5" />} text="Challenges" />
          <SidebarLink href="/learning" icon={<BookOpen className="h-5 w-5" />} text="Learning" />
          <SidebarLink href="/achievements" icon={<Award className="h-5 w-5" />} text="Achievements" />
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-800">
          <h3 className="px-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Settings</h3>
          <div className="mt-2 space-y-1">
            <SidebarLink href="/settings" icon={<Settings className="h-5 w-5" />} text="Settings" />
            <SidebarLink href="/logout" icon={<LogOut className="h-5 w-5" />} text="Logout" />
          </div>
        </div>
      </nav>
      
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-zinc-800"></div>
          <div>
            <p className="text-sm font-medium text-white">Username</p>
            <p className="text-xs text-zinc-400">user@example.com</p>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

type SidebarLinkProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

function SidebarLink({ href, icon, text }: SidebarLinkProps) {
  return (
    <Link 
      href={href}
      className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors duration-200"
    >
      <span className="mr-3 text-zinc-400">{icon}</span>
      {text}
    </Link>
  );
}