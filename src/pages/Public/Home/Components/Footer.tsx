'use client';

import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border-default mt-12 py-8 bg-canvas-default">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-fg-muted">
          <span>&copy; 2024 Alex Developer</span>
          <a href="#" className="text-accent-fg hover:underline">Terms</a>
          <a href="#" className="text-accent-fg hover:underline">Privacy</a>
          <a href="#" className="text-accent-fg hover:underline">Security</a>
          <a href="#" className="text-accent-fg hover:underline">Status</a>
          <a href="#" className="text-accent-fg hover:underline">Docs</a>
          <a href="#" className="text-accent-fg hover:underline">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <SocialIcon href="#"><Github className="w-5 h-5" /></SocialIcon>
          <SocialIcon href="#"><Twitter className="w-5 h-5" /></SocialIcon>
          <SocialIcon href="#"><Linkedin className="w-5 h-5" /></SocialIcon>
          <SocialIcon href="#"><Mail className="w-5 h-5" /></SocialIcon>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-fg-muted hover:text-fg-default transition-colors">
    {children}
  </a>
);
