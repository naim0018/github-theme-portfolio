import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'React', level: 97, icon: '⚛️', color: '#61DAFB' },
      { name: 'TypeScript', level: 94, icon: '🔷', color: '#3178C6' },
      { name: 'Next.js', level: 91, icon: '▲', color: '#c9d1d9' },
      { name: 'Vue.js', level: 82, icon: '💚', color: '#42B883' },
      { name: 'Tailwind CSS', level: 96, icon: '🌊', color: '#06B6D4' },
    ],
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 93, icon: '🟢', color: '#339933' },
      { name: 'Python', level: 90, icon: '🐍', color: '#3776AB' },
      { name: 'Go', level: 78, icon: '🔵', color: '#00ADD8' },
      { name: 'GraphQL', level: 88, icon: '◈', color: '#E10098' },
      { name: 'PostgreSQL', level: 85, icon: '🐘', color: '#4169E1' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    skills: [
      { name: 'AWS', level: 87, icon: '☁️', color: '#FF9900' },
      { name: 'Kubernetes', level: 80, icon: '⎈', color: '#326CE5' },
      { name: 'Docker', level: 92, icon: '🐳', color: '#2496ED' },
      { name: 'Terraform', level: 76, icon: '🏗️', color: '#7B42BC' },
      { name: 'CI/CD', level: 89, icon: '🔄', color: '#3fb950' },
    ],
  },
];

function getSkillTier(level: number): { label: string; color: string } {
  if (level >= 95) return { label: 'Expert', color: '#a371f7' };
  if (level >= 90) return { label: 'Advanced', color: '#58a6ff' };
  if (level >= 80) return { label: 'Proficient', color: '#3fb950' };
  if (level >= 70) return { label: 'Intermediate', color: '#d29922' };
  return { label: 'Learning', color: '#8b949e' };
}

// Radial progress ring for each skill
function RadialProgress({ level, color, size = 48 }: { level: number; color: string; size?: number }) {
  const strokeWidth = 3.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90 shrink-0">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-border-muted)"
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
    </svg>
  );
}

function SkillRow({ skill, index, catIndex }: { skill: Skill; index: number; catIndex: number }) {
  const tier = getSkillTier(skill.level);

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: catIndex * 0.05 + index * 0.06 }}
      viewport={{ once: true }}
      className="group relative flex items-center gap-4 py-3 px-3 rounded-lg hover:bg-canvas-default/60 transition-all duration-200 cursor-default"
    >
      {/* Radial ring */}
      <div className="relative">
        <RadialProgress level={skill.level} color={skill.color} size={46} />
        <span className="absolute inset-0 flex items-center justify-center text-[13px] font-bold font-mono rotate-0 text-fg-default">
          {skill.level}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm">{skill.icon}</span>
          <span className="text-sm font-semibold text-fg-default group-hover:text-white transition-colors duration-200 truncate">
            {skill.name}
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md border ml-auto shrink-0"
            style={{
              color: tier.color,
              borderColor: `${tier.color}33`,
              backgroundColor: `${tier.color}12`,
            }}
          >
            {tier.label}
          </span>
        </div>

        {/* Bar */}
        <div className="w-full bg-border-muted/70 h-[5px] rounded-full overflow-hidden mt-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, ease: 'circOut', delay: catIndex * 0.05 + index * 0.06 }}
            viewport={{ once: true }}
            className="h-full rounded-full"
            style={{ backgroundColor: skill.color }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function CategorySection({ category, catIndex }: { category: SkillCategory; catIndex: number }) {
  const avgLevel = Math.round(category.skills.reduce((a, b) => a + b.level, 0) / category.skills.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: catIndex * 0.1 }}
      viewport={{ once: true }}
      className="space-y-1"
    >
      {/* Category header */}
      <div className="flex items-center justify-between px-3 mb-2">
        <div className="flex items-center gap-2.5">
          <span className="text-base">{category.icon}</span>
          <h3 className="text-[13px] font-bold uppercase tracking-wider text-fg-muted">
            {category.category}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-fg-muted">avg</span>
          <span className="text-[12px] font-bold font-mono text-accent-fg bg-accent-fg/10 px-2 py-0.5 rounded-md">
            {avgLevel}%
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border-default/60 mx-3" />

      {/* Skills list */}
      <div className="flex flex-col">
        {category.skills.map((skill, index) => (
          <SkillRow key={skill.name} skill={skill} index={index} catIndex={catIndex} />
        ))}
      </div>
    </motion.div>
  );
}

export function TechnicalSkills() {
  const [activeView, setActiveView] = useState<'list' | 'grid'>('list');

  const allSkills = skillsData.flatMap((c) => c.skills);
  const totalAvg = Math.round(allSkills.reduce((a, b) => a + b.level, 0) / allSkills.length);
  const topSkills = [...allSkills].sort((a, b) => b.level - a.level).slice(0, 3);

  return (
    <div className="github-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-bold flex items-center gap-2.5">
          Technical Skills
        </h2>
        <div className="flex items-center gap-1 bg-canvas-default rounded-lg p-0.5 border border-border-default">
          <button
            onClick={() => setActiveView('list')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
              activeView === 'list'
                ? 'bg-border-muted text-fg-default shadow-sm'
                : 'text-fg-muted hover:text-fg-default'
            }`}
          >
            List
          </button>
          <button
            onClick={() => setActiveView('grid')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
              activeView === 'grid'
                ? 'bg-border-muted text-fg-default shadow-sm'
                : 'text-fg-muted hover:text-fg-default'
            }`}
          >
            Grid
          </button>
        </div>
      </div>

      {/* Summary strip */}
      {/* <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center gap-3 mb-6 p-3 bg-canvas-default rounded-lg border border-border-default"
      >
        <div className="flex items-center gap-2 pr-4 border-r border-border-default">
          <span className="text-[11px] uppercase tracking-wider text-fg-muted font-semibold">Total</span>
          <span className="text-lg font-bold font-mono text-accent-fg">{allSkills.length}</span>
        </div>
        <div className="flex items-center gap-2 pr-4 border-r border-border-default">
          <span className="text-[11px] uppercase tracking-wider text-fg-muted font-semibold">Avg</span>
          <span className="text-lg font-bold font-mono text-success-fg">{totalAvg}%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-wider text-fg-muted font-semibold">Top</span>
          <div className="flex gap-1.5">
            {topSkills.map((s) => (
              <span
                key={s.name}
                className="text-[11px] font-bold px-2 py-0.5 rounded-md border"
                style={{
                  color: s.color,
                  borderColor: `${s.color}40`,
                  backgroundColor: `${s.color}15`,
                }}
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div> */}

      {/* List view */}
      {activeView === 'list' && (
        <div className="flex flex-col gap-6">
          {skillsData.map((category, catIndex) => (
            <CategorySection key={category.category} category={category} catIndex={catIndex} />
          ))}
        </div>
      )}

      {/* Grid view */}
      {activeView === 'grid' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {allSkills
            .sort((a, b) => b.level - a.level)
            .map((skill, index) => {
              const tier = getSkillTier(skill.level);
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center gap-2.5 p-4 rounded-xl bg-canvas-default border border-border-default hover:border-border-muted hover:bg-border-muted/30 transition-all duration-300 cursor-default"
                  style={{ borderColor: `${skill.color}15` }}
                  whileHover={{ borderColor: `${skill.color}50`, y: -2 }}
                >
                  <div className="relative">
                    <RadialProgress level={skill.level} color={skill.color} size={56} />
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold font-mono text-fg-default">
                      {skill.level}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-0.5">
                      <span className="text-xs">{skill.icon}</span>
                      <span className="text-[13px] font-bold text-fg-default">{skill.name}</span>
                    </div>
                    <span
                      className="text-[9px] font-bold uppercase tracking-widest"
                      style={{ color: tier.color }}
                    >
                      {tier.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-border-default">
        {[
          { label: 'Expert', color: '#a371f7', range: '95-100' },
          { label: 'Advanced', color: '#58a6ff', range: '90-94' },
          { label: 'Proficient', color: '#3fb950', range: '80-89' },
          { label: 'Intermediate', color: '#d29922', range: '70-79' },
        ].map((tier) => (
          <div key={tier.label} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: tier.color }}
            />
            <span className="text-[11px] text-fg-muted font-medium">
              {tier.label} <span className="font-mono opacity-60">{tier.range}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
