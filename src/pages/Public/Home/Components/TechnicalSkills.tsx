
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend Development',
    level: 95,
    badges: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    level: 90,
    badges: ['Node.js', 'Python', 'Go', 'GraphQL', 'PostgreSQL'],
  },
  {
    category: 'DevOps & Cloud',
    level: 85,
    badges: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
  },
];

export const TechnicalSkills = () => {
  return (
    <div className="github-card">
      <h2 className="text-base font-bold mb-8 flex items-center gap-2.5">
        <span className="w-1.5 h-6 bg-accent-fg rounded-full" />
        Technical Skills
      </h2>
      <div className="flex flex-col gap-10">
        {skillsData.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-3 text-sm font-semibold tracking-tight">
              <span className="text-fg-default group-hover:text-accent-fg transition-colors duration-300">{skill.category}</span>
              <span className="text-fg-muted font-mono bg-border-muted px-2 py-0.5 rounded-md">{skill.level}%</span>
            </div>
            
            <div className="w-full bg-border-muted h-[10px] rounded-full overflow-hidden shadow-inner border border-border-default/5 relative">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, ease: 'circOut' }}
                viewport={{ once: true }}
                className="h-full bg-linear-to-r from-accent-emphasis to-success-fg relative group-hover:brightness-110 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-500" />
              </motion.div>
            </div>
            
            <div className="flex flex-wrap gap-2.5 mt-5">
              {skill.badges.map((badge, i) => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index * 0.1) + (i * 0.05) }}
                  viewport={{ once: true }}
                  className="bg-accent-fg/5 border border-accent-fg/20 text-accent-fg px-3 py-1 rounded-full 
                             text-[12px] font-bold tracking-tight hover:bg-accent-fg hover:text-white 
                             transition-all duration-300 cursor-default select-none shadow-sm"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
