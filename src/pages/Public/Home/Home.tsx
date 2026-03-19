"use client";

import { useState } from "react";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { ContributionGraph } from "./Components/ContributionGraph";
import { ExperienceTimeline } from "./Components/ExperienceTimeline";
import { TechnicalSkills } from "./Components/TechnicalSkills";
import { PinnedRepositories } from "./Components/PinnedRepositories";
import { RecentActivity } from "./Components/RecentActivity";
import { Repositories } from "./Components/Repositories";
import { Footer } from "./Components/Footer";
import { HireMeModal } from "./Components/HireMeModal";
import {
  BookOpen,
  BookMarked,
  LayoutGrid,
  Package,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: "repositories",
      label: "Repositories",
      icon: <BookMarked className="w-4 h-4" />,
      count: 42,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <LayoutGrid className="w-4 h-4" />,
    },
    {
      id: "packages",
      label: "Packages",
      icon: <Package className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-canvas-default text-fg-default font-sans">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-x-8 lg:gap-x-12 gap-y-12">
          {/* Left Sidebar */}
          <Sidebar onHireClick={() => setIsHireModalOpen(true)} />

          {/* Main Content Area */}
          <div className="flex flex-col gap-6">
            {/* Tab Navigation */}
            <nav className="flex items-center gap-1 border-b border-border-default mb-2 overflow-x-auto no-scrollbar scroll-smooth">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap group relative",
                    activeTab === tab.id
                      ? "text-fg-default border-accent-fg"
                      : "text-fg-muted border-transparent hover:text-fg-default hover:border-border-muted",
                  )}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className="px-2 py-0.5 rounded-full bg-border-muted text-xs font-semibold text-fg-muted group-hover:text-fg-default transition-colors">
                      {tab.count}
                    </span>
                  )}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tabUnderline"
                      className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-accent-fg"
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Tab Content Wrapper */}
            <div className="min-h-[500px]">
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-10"
                  >
                    <ContributionGraph />
                    <PinnedRepositories />
                    <TechnicalSkills />
                    <ExperienceTimeline />
                    <RecentActivity />
                  </motion.div>
                )}

                {activeTab === "repositories" && (
                  <motion.div
                    key="repositories"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Repositories />
                  </motion.div>
                )}

                {activeTab === "projects" && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <ProjectCard
                      title="E-Commerce Platform"
                      desc="Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard."
                      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
                      tags={["React", "Node.js", "MongoDB"]}
                    />
                    <ProjectCard
                      title="DevOps Dashboard"
                      desc="Centralized monitoring dashboard for Kubernetes clusters with real-time metrics and alerting."
                      image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop"
                      tags={["Vue.js", "Go", "Prometheus"]}
                    />
                    <ProjectCard
                      title="AI Content Generator"
                      desc="AI-powered content generation tool with support for multiple languages and content types."
                      image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop"
                      tags={["Python", "FastAPI", "OpenAI"]}
                    />
                    <ProjectCard
                      title="Blockchain Explorer"
                      desc="Real-time blockchain explorer with transaction tracking and smart contract analysis."
                      image="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=300&fit=crop"
                      tags={["React", "Web3.js", "Solidity"]}
                    />
                  </motion.div>
                )}

                {activeTab === "packages" && (
                  <motion.div
                    key="packages"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="github-card text-center py-24 flex flex-col items-center justify-center gap-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-canvas-default border border-border-default flex items-center justify-center text-fg-muted">
                      <Package className="w-10 h-10" />
                    </div>
                    <div className="max-w-md mx-auto">
                      <h3 className="text-xl font-bold mb-3 text-fg-default">
                        Publish your first package
                      </h3>
                      <p className="text-fg-muted text-sm leading-relaxed mb-8">
                        Publish your packages to the GitHub Package Registry for
                        better control over your software enterprise-wide.
                      </p>
                      <button className="github-btn-primary">Learn more</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <HireMeModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
      />
    </div>
  );
}

const ProjectCard = ({
  title,
  desc,
  image,
  tags,
}: {
  title: string;
  desc: string;
  image: string;
  tags: string[];
}) => (
  <div className="github-card p-0 overflow-hidden group flex flex-col h-full border-border-default hover:border-accent-fg/40 transition-all duration-300">
    <div className="relative h-48 overflow-hidden bg-canvas-default">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas-subtle/80 to-transparent opacity-60" />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-lg font-bold mb-2 group-hover:text-accent-fg transition-colors duration-300">
        {title}
      </h3>
      <p className="text-fg-muted text-sm mb-6 flex-1 leading-relaxed">
        {desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-2.5 py-0.5 rounded-full bg-accent-fg/5 border border-accent-fg/20 text-accent-fg text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-6 border-t border-border-default pt-4 mt-auto">
        <a
          href="#"
          className="flex items-center gap-1.5 text-xs font-semibold text-fg-muted hover:text-fg-default transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          Live Demo
        </a>
        <a
          href="#"
          className="flex items-center gap-1.5 text-xs font-semibold text-fg-muted hover:text-fg-default transition-colors"
        >
          <Github className="w-4 h-4" />
          View Source
        </a>
      </div>
    </div>
  </div>
);
