
import { GitCommit, GitPullRequest, MessageCircle, Star } from 'lucide-react';

const activities = [
  {
    icon: <GitCommit className="w-4 h-4 text-fg-muted" />,
    text: (
      <>
        Pushed 3 commits to <a href="#" className="text-accent-fg hover:underline">microservices-framework</a>
      </>
    ),
    time: '2 hours ago',
  },
  {
    icon: <GitPullRequest className="w-4 h-4 text-success-fg" />,
    text: (
      <>
        Opened pull request <a href="#" className="text-accent-fg hover:underline">#234</a> in ai-code-assistant
      </>
    ),
    time: '5 hours ago',
  },
  {
    icon: <MessageCircle className="w-4 h-4 text-attention-fg" />,
    text: (
      <>
        Reviewed pull request <a href="#" className="text-accent-fg hover:underline">#89</a> in react-performance-kit
      </>
    ),
    time: 'Yesterday',
  },
  {
    icon: <Star className="w-4 h-4 text-attention-fg" />,
    text: (
      <>
        Starred <a href="#" className="text-accent-fg hover:underline">kubernetes/kubernetes</a>
      </>
    ),
    time: '2 days ago',
  },
];

export const RecentActivity = () => {
  return (
    <div className="github-card">
      <h2 className="text-base font-semibold mb-4">Recent Activity</h2>
      <div className="flex flex-col">
        {activities.map((item, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 py-3 border-b border-border-default last:border-0"
          >
            <div className="mt-0.5">{item.icon}</div>
            <div className="flex-1">
              <p className="text-sm">{item.text}</p>
              <p className="text-fg-muted text-xs mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
