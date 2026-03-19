'use client';

import React from 'react';
import { BookMarked, Star, GitBranch } from 'lucide-react';

const pinnedRepos = [
  {
    name: 'microservices-framework',
    desc: 'A production-ready microservices framework with built-in service discovery, load balancing, and circuit breaker patterns.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: '2.4k',
    forks: '156',
  },
  {
    name: 'react-performance-kit',
    desc: 'Essential tools and patterns for building high-performance React applications with optimization techniques.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: '1.8k',
    forks: '89',
  },
  {
    name: 'ai-code-assistant',
    desc: 'AI-powered code assistant that helps developers write better code with intelligent suggestions and refactoring.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: '3.2k',
    forks: '234',
  },
  {
    name: 'cloud-native-monitor',
    desc: 'Comprehensive monitoring solution for cloud-native applications with real-time metrics and alerting.',
    lang: 'Go',
    langColor: '#00ADD8',
    stars: '987',
    forks: '67',
  },
];

export const PinnedRepositories = () => {
  return (
    <div>
      <h2 className="text-base font-semibold mb-4">Pinned</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pinnedRepos.map((repo, index) => (
          <div 
            key={index}
            className="github-card repo-card hover:border-accent-fg hover:shadow-lg transition-all cursor-pointer group flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-fg-muted" />
                <a href="#" className="font-semibold text-sm text-accent-fg hover:underline">{repo.name}</a>
              </div>
              <span className="px-2 py-0.5 border border-border-default rounded-full text-xs text-fg-muted">Public</span>
            </div>
            <p className="text-fg-muted text-sm mb-4 flex-1 line-clamp-2">{repo.desc}</p>
            <div className="flex items-center gap-4 text-xs text-fg-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.langColor }} />
                {repo.lang}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {repo.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitBranch className="w-3 h-3" />
                {repo.forks}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
