'use client';

import React from 'react';
import { Github, Bell, Plus, ChevronDown, Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <header className="sticky top-0 z-[100] bg-canvas-default border-b border-border-default h-16 shadow-sm backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 lg:gap-6 flex-1">
          {/* Logo & Name */}
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
            >
              <Github className="w-8 h-8 text-fg-default group-hover:text-accent-fg transition-colors" />
            </motion.div>
            <span className="font-bold text-lg tracking-tight hidden sm:block group-hover:text-accent-fg transition-colors">AlexDev</span>
          </div>

          {/* Quick Search - GitHub Style */}
          <div className="hidden md:flex items-center flex-1 max-w-[320px] relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="w-3.5 h-3.5 text-fg-muted" />
            </div>
            <input 
              type="text" 
              placeholder="Search or jump to..." 
              className="w-full bg-canvas-default border border-border-default rounded-md pl-9 pr-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-accent-fg focus:border-accent-fg transition-all text-fg-default placeholder:text-fg-muted font-medium bg-opacity-50"
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <span className="text-[10px] font-bold border border-border-default px-1.5 rounded-md bg-border-muted text-fg-muted">/</span>
            </div>
          </div>

          {/* Nav Links Removed */}
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3.5">
          <div className="hidden sm:flex items-center gap-2 border-r border-border-default pr-4 mr-1">
            <NavIconButton icon={<Bell className="w-4 h-4" />} badge />
            <div className="flex items-center gap-1 group cursor-pointer hover:bg-border-muted px-2 py-1 rounded-md transition-all">
              <Plus className="w-4 h-4 text-fg-muted" />
              <ChevronDown className="w-3 h-3 text-fg-muted opacity-50" />
            </div>
          </div>
          
          <div className="relative group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
              alt="Profile" 
              className="w-8 h-8 rounded-full border border-border-default group-hover:border-accent-fg transition-all duration-300"
            />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-success-fg border-2 border-canvas-default rounded-full" />
          </div>

          <button className="lg:hidden p-2 text-fg-muted hover:text-fg-default transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};



const NavIconButton = ({ icon, badge = false }: { icon: React.ReactNode; badge?: boolean }) => (
  <button className="p-2 text-fg-muted hover:text-fg-default hover:bg-border-muted rounded-md transition-all relative group">
    {icon}
    {badge && (
      <span className="absolute top-2 right-2.5 w-2 h-2 bg-accent-emphasis border-2 border-canvas-default rounded-full group-hover:scale-110 transition-transform" />
    )}
  </button>
);
