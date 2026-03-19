
import { motion } from 'framer-motion';

const experienceData = [
  {
    title: 'Senior Full Stack Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2022 - Present',
    isCurrent: true,
    points: [
      'Led migration from monolith to microservices, improving scalability by 300%',
      'Architected real-time data processing pipeline handling 1M+ events/day',
      'Mentored team of 8 engineers, established coding standards and best practices',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    period: 'Jun 2019 - Dec 2021',
    isCurrent: false,
    points: [
      'Built core product features used by 100K+ users',
      'Reduced API response time by 60% through optimization',
      'Implemented automated testing, achieving 85% code coverage',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Digital Agency Pro',
    location: 'Remote',
    period: 'Aug 2017 - May 2019',
    isCurrent: false,
    points: [
      'Delivered 20+ client projects across various industries',
      'Developed custom CMS solution used by 50+ clients',
    ],
  },
];

export const ExperienceTimeline = () => {
  return (
    <div className="github-card" id="experience">
      <h2 className="text-base font-semibold mb-6">Work Experience</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="timeline-item pl-6 relative mb-8 last:mb-0"
          >
            {item.isCurrent && (
              <div className="mb-2">
                <span className="bg-success-fg text-white px-3 py-1 rounded-full text-xs font-medium">
                  Current
                </span>
              </div>
            )}
            <h3 className="font-semibold text-fg-default">{item.title}</h3>
            <p className="text-accent-fg text-sm">{item.company}</p>
            <p className="text-fg-muted text-xs mb-2">{item.period} • {item.location}</p>
            <ul className="text-sm text-fg-muted space-y-1 list-none">
              {item.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
