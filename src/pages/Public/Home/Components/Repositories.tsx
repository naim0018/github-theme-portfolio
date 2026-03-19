'use client';

import React, { useState } from 'react';
import { BookMarked, Star, GitBranch, Search, ChevronDown, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const repositories = [
  { name: 'microservices-framework', desc: 'Production-ready microservices framework', lang: 'TypeScript', stars: 2400, forks: 156, updated: '2 hours ago' },
  { name: 'react-performance-kit', desc: 'Essential tools for high-performance React apps', lang: 'JavaScript', stars: 1800, forks: 89, updated: '5 hours ago' },
  { name: 'ai-code-assistant', desc: 'AI-powered code assistant with intelligent suggestions', lang: 'Python', stars: 3200, forks: 234, updated: '1 day ago' },
  { name: 'cloud-native-monitor', desc: 'Monitoring solution for cloud-native applications', lang: 'Go', stars: 987, forks: 67, updated: '2 days ago' },
  { name: 'graphql-api-gateway', desc: 'GraphQL gateway with caching and rate limiting', lang: 'TypeScript', stars: 756, forks: 45, updated: '3 days ago' },
  { name: 'serverless-auth', desc: 'Authentication system for serverless applications', lang: 'JavaScript', stars: 543, forks: 34, updated: '1 week ago' },
  { name: 'kubernetes-operator', desc: 'Custom Kubernetes operator for database management', lang: 'Go', stars: 432, forks: 28, updated: '2 weeks ago' },
  { name: 'data-pipeline', desc: 'Real-time data processing pipeline', lang: 'Python', stars: 321, forks: 19, updated: '3 weeks ago' }
];

const langColors: Record<string, string> = {
  'TypeScript': '#3178c6',
  'JavaScript': '#f1e05a',
  'Python': '#3572A5',
  'Go': '#00ADD8'
};

export const Repositories = () => {
  const [search, setSearch] = useState('');

  const filteredRepos = repositories.filter(repo => 
    repo.name.toLowerCase().includes(search.toLowerCase()) || 
    repo.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center gap-2 pb-6 border-b border-border-default">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fg-muted" />
          <input 
            type="text" 
            placeholder="Find a repository..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-canvas-default border border-border-default rounded-md pl-10 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-fg/20 focus:border-accent-fg transition-all text-fg-default placeholder:text-fg-muted"
          />
        </div>
        <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto no-scrollbar py-0.5">
          <FilterButton label="Type" />
          <FilterButton label="Language" />
          <FilterButton label="Sort" />
        </div>
        <button className="github-btn-primary h-[34px] !py-0 whitespace-nowrap hidden sm:flex items-center">
          <BookMarked className="w-4 h-4" />
          New
        </button>
      </div>
      
      {/* Repository List */}
      <div className="flex flex-col">
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo, index) => (
            <div key={index} className="py-8 border-b border-border-default last:border-0 group transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <BookMarked className="w-4 h-4 text-fg-muted" />
                    <h3 className="text-xl font-bold tracking-tight">
                      <a href="#" className="text-accent-fg hover:underline transition-colors duration-200">{repo.name}</a>
                    </h3>
                    <span className="px-2 py-0.5 border border-border-default rounded-full text-xs text-fg-muted font-bold tracking-tight uppercase opacity-70">Public</span>
                  </div>
                  <p className="text-fg-muted text-[15px] leading-relaxed max-w-2xl">{repo.desc}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="github-btn !px-2.5 !py-1 text-xs font-bold leading-tight shadow-sm">
                    <Star className="w-4 h-4 text-fg-muted" />
                    Star
                    <ChevronDown className="w-3 h-3 text-fg-muted opacity-50" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs font-medium text-fg-muted">
                {repo.lang && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full border border-black/10 shadow-sm" style={{ backgroundColor: langColors[repo.lang] }} />
                    {repo.lang}
                  </span>
                )}
                <span className="flex items-center gap-1 group/item cursor-pointer hover:text-accent-fg transition-colors">
                  <Star className="w-4 h-4 transition-transform group-hover/item:-translate-y-0.5" />
                  {repo.stars.toLocaleString()}
                </span>
                <span className="flex items-center gap-1 group/item cursor-pointer hover:text-accent-fg transition-colors">
                  <GitBranch className="w-4 h-4 transition-transform group-hover/item:-rotate-12" />
                  {repo.forks}
                </span>
                <span>Updated {repo.updated}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center text-fg-muted space-y-4">
            <h3 className="text-xl font-bold text-fg-default">No repositories found</h3>
            <p>Try searching for something else or clearing filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const FilterButton = ({ label }: { label: string }) => (
  <button className="github-btn whitespace-nowrap px-3 h-[34px] !py-0 shadow-sm text-xs font-bold bg-canvas-default hover:bg-canvas-subtle transition-all">
    {label}
    <ChevronDown className="w-3.5 h-3.5 text-fg-muted opacity-50" />
  </button>
);
