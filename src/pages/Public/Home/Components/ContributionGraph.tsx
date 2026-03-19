'use client';

import React, { useMemo } from 'react';
import { ChevronDown } from 'lucide-react';

export const ContributionGraph = () => {
  const cells = useMemo(() => {
    const weights = [0.6, 0.2, 0.1, 0.07, 0.03];
    const newCells = [];
    
    for (let i = 0; i < 371; i++) {
      const random = Math.random();
      let levelIndex = 0;
      let cumulative = 0;
      
      for (let j = 0; j < weights.length; j++) {
        cumulative += weights[j];
        if (random < cumulative) {
          levelIndex = j;
          break;
        }
      }
      
      newCells.push({
        level: levelIndex,
        date: new Date(2024, 0, i).toDateString(),
        count: Math.floor(Math.random() * 20)
      });
    }
    return newCells;
  }, []);

  return (
    <div className="github-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-normal text-base">
          <span className="font-semibold">2,847</span> contributions in the last year
        </h2>
        <div className="flex items-center gap-1 text-fg-muted text-xs cursor-pointer hover:text-fg-default">
          <span>Contribution settings</span>
          <ChevronDown className="w-3 h-3" />
        </div>
      </div>
      
      <div className="flex gap-4 text-xs text-fg-muted mb-2">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
      </div>
      
      <div className="contribution-graph gap-0.75">
        {cells.map((cell, i) => (
          <div 
            key={i}
            className={`contribution-cell level-${cell.level}`}
            title={`${cell.count} contributions on ${cell.date}`}
          />
        ))}
      </div>
      
      <div className="flex justify-end items-center gap-2 mt-4 text-xs text-fg-muted">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm level-0" />
          <div className="w-3 h-3 rounded-sm level-1" />
          <div className="w-3 h-3 rounded-sm level-2" />
          <div className="w-3 h-3 rounded-sm level-3" />
          <div className="w-3 h-3 rounded-sm level-4" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
};
