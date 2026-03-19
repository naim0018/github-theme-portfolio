import {
  Mail,
  Users,
  MapPin,
  Briefcase,
  Link as LinkIcon,
  Twitter,
  Star,
  GitPullRequest,
  Heart,
  Bug,
} from "lucide-react";
import { motion } from "framer-motion";

interface SidebarProps {
  onHireClick: () => void;
}

export const Sidebar = ({ onHireClick }: SidebarProps) => {
  return (
    <aside className="flex flex-col gap-6 lg:gap-8 min-w-[280px]">
      {/* Profile Section */}
      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
            alt="Alex Developer"
            className="w-full aspect-square rounded-full border-4 border-canvas-default shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full flex items-center justify-center bg-success-fg border-4 border-canvas-default">
            <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          </div>
        </motion.div>

        <div className="pt-2">
          <h1 className="text-2xl font-bold mb-0.5 tracking-tight">
            Alex Developer
          </h1>
          <p className="text-xl text-fg-muted font-light mb-4 text-opacity-80">
            alexdev
          </p>
          <p className="text-[15px] leading-relaxed mb-6 text-fg-default/90">
            Senior Full Stack Engineer | Open Source Contributor | Tech Speaker
            🚀 Building scalable systems & mentoring devs
          </p>
          <button
            onClick={onHireClick}
            className="github-btn-primary w-full justify-center py-2.5 font-bold shadow-sm"
          >
            <Mail className="w-4 h-4" />
            Hire Me
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex items-center gap-4 text-sm text-fg-muted">
        <div className="flex items-center gap-1 cursor-pointer hover:text-accent-fg transition-colors">
          <Users className="w-4 h-4" />
          <span>
            <strong className="text-fg-default">2.4k</strong> followers
          </span>
        </div>
        <span className="text-border-default">•</span>
        <div className="flex items-center gap-1 cursor-pointer hover:text-accent-fg transition-colors">
          <span>
            <strong className="text-fg-default">180</strong> following
          </span>
        </div>
      </div>

      {/* Meta Information */}
      <div className="flex flex-col gap-3.5 text-[14px] text-fg-default/90">
        <MetaItem
          icon={<MapPin className="w-4 h-4" />}
          text="San Francisco, CA"
        />
        <MetaItem
          icon={<Briefcase className="w-4 h-4" />}
          text="Available for opportunities"
        />
        <MetaItem
          icon={<LinkIcon className="w-4 h-4" />}
          text={
            <a
              href="#"
              className="font-semibold text-fg-default hover:text-accent-fg hover:underline transition-colors"
            >
              alexdev.dev
            </a>
          }
        />
        <MetaItem
          icon={<Twitter className="w-4 h-4" />}
          text={
            <a
              href="#"
              className="font-semibold text-fg-default hover:text-accent-fg hover:underline transition-colors"
            >
              @alexdev
            </a>
          }
        />
      </div>

      <hr className="border-t border-border-default w-full" />

      {/* Achievements Section */}
      <div>
        <h3 className="text-sm font-semibold mb-5 text-fg-default uppercase tracking-wider opacity-60">
          Achievements
        </h3>
        <div className="flex flex-wrap gap-2.5">
          <AchievementBadge
            icon={<Star className="w-5 h-5 text-black" />}
            bg="linear-gradient(135deg, #ffd700, #ffed4e)"
            title="GitHub Star"
          />
          <AchievementBadge
            icon={<GitPullRequest className="w-5 h-5 text-white" />}
            bg="linear-gradient(135deg, #ff6b6b, #ee5a24)"
            title="Pull Request Pro"
          />
          <AchievementBadge
            icon={<Heart className="w-5 h-5 text-white" />}
            bg="linear-gradient(135deg, #4ecdc4, #44a3aa)"
            title="Open Source Hero"
          />
          <AchievementBadge
            icon={<Bug className="w-5 h-5 text-white" />}
            bg="linear-gradient(135deg, #a29bfe, #6c5ce7)"
            title="Bug Hunter"
          />
        </div>
      </div>

      <hr className="border-t border-border-default w-full" />

      {/* Organizations Section */}
      <div>
        <h3 className="text-sm font-semibold mb-5 text-fg-default uppercase tracking-wider opacity-60">
          Organizations
        </h3>
        <div className="flex flex-wrap gap-3">
          <OrgLogo
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=50&h=50&fit=crop"
            name="Org 1"
          />
          <OrgLogo
            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=50&h=50&fit=crop"
            name="Org 2"
          />
          <OrgLogo
            src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=50&h=50&fit=crop"
            name="Org 3"
          />
        </div>
      </div>
    </aside>
  );
};

const MetaItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) => (
  <div className="flex items-center gap-2.5 font-medium group transition-colors">
    <span className="text-fg-muted group-hover:text-accent-fg transition-colors">
      {icon}
    </span>
    {text}
  </div>
);

const AchievementBadge = ({
  icon,
  bg,
  title,
}: {
  icon: React.ReactNode;
  bg: string;
  title: string;
}) => {
  return (
    <div
      title={title}
      style={{ background: bg }}
      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 cursor-help 
                 shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 border-4 border-canvas-default"
    >
      {icon}
    </div>
  );
};

const OrgLogo = ({ src, name }: { src: string; name: string }) => (
  <img
    src={src}
    alt={name}
    className="w-8 h-8 rounded-md border border-border-default hover:scale-110 transition-transform cursor-pointer"
  />
);
