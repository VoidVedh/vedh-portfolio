import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Terminal, Cpu, Cloud, Code2, ShieldAlert, Sparkles } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';

/**
 * Category Icon Resolver
 */
function getCategoryIcon(slug) {
  switch (slug) {
    case 'cloud-devops':
      return <Cloud className="w-4 h-4 text-sky-400" aria-hidden="true" />;
    case 'machine-learning':
      return <Cpu className="w-4 h-4 text-amber-400" aria-hidden="true" />;
    case 'systems-security':
      return <ShieldAlert className="w-4 h-4 text-indigo-400" aria-hidden="true" />;
    case 'web-development':
    default:
      return <Code2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />;
  }
}

/**
 * ProofHeader Component
 * Clean, technical section header communicating verifiable evidence
 */
export function ProofHeader() {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono font-medium text-sky-400 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
        01 · PROOF OF WORK
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100 mb-3">
        Things I've actually built.
      </h2>
      <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
        Selected projects, experiments, and technical work — with the decisions, architectures, and technologies behind them.
      </p>
    </div>
  );
}

/**
 * ProjectFilters Component
 * Keyboard-accessible, compact segmented control for categories
 */
export function ProjectFilters({ activeCategory, onSelectCategory }) {
  return (
    <div 
      className="flex items-center gap-1.5 p-1 bg-zinc-900/60 border border-zinc-800/80 rounded-lg overflow-x-auto no-scrollbar mb-8 max-w-full"
      role="tablist"
      aria-label="Filter projects by technical category"
    >
      {projectCategories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat.id)}
            className={`
              relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-all duration-150 outline-none
              focus-visible:ring-2 focus-visible:ring-sky-500/50
              ${isActive ? 'text-zinc-100 font-semibold' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'}
            `}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-zinc-800 border border-zinc-700/60 rounded-md shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/**
 * ProjectCard Component
 * Linear / Raycast-inspired technical card with 16:9 visual preview,
 * tech stack badges, and authentic action buttons.
 */
export function ProjectCard({ project, onExplain, onUnderTheHood }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative flex flex-col bg-zinc-900/50 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-zinc-700 rounded-xl overflow-hidden shadow-sm hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.15)] transition-all duration-200"
    >
      {/* 16:9 Visual Preview Header */}
      <div className="relative aspect-video w-full bg-zinc-950 border-b border-zinc-800/60 overflow-hidden flex items-center justify-center">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(244, 244, 245, 0.2) 1px, transparent 0)`,
            backgroundSize: '16px 16px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

        {/* Center Technical Badge / Icon Preview */}
        <div className="relative z-10 flex flex-col items-center gap-2 p-4 text-center">
          <div className="w-10 h-10 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:border-zinc-700 group-hover:scale-105 transition-transform duration-200">
            {getCategoryIcon(project.categorySlug)}
          </div>
          <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
            {project.systemType}
          </span>
        </div>

        {/* Status Badge in top right */}
        <div className="absolute top-3 right-3 z-20">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono font-medium text-zinc-300 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Category & Title */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1.5">
          <span>{project.category}</span>
        </div>

        <h3 className="text-lg font-medium text-zinc-100 group-hover:text-sky-300 transition-colors duration-150 mb-2">
          {project.title}
        </h3>

        {/* Problem/Solution Description */}
        <p className="text-sm leading-relaxed text-zinc-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Proof / Verification Tags */}
        {project.proofTags && project.proofTags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.proofTags.map((tag, idx) => (
              <span
                key={idx}
                className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800/80 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="mt-auto pt-4 border-t border-zinc-800/60">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="bg-zinc-800/60 text-zinc-300 text-xs px-2.5 py-1 rounded-md border border-zinc-700/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="bg-zinc-800/30 text-zinc-400 text-xs px-2 py-1 rounded-md border border-zinc-800">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Footer */}
          <div className="flex items-center flex-wrap gap-2 pt-2">
            <button
              type="button"
              onClick={() => onExplain && onExplain(project)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/60 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500/50"
              aria-label={`Explain ${project.title} technical breakdown`}
            >
              <Terminal className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              <span>Explain</span>
            </button>

            <button
              type="button"
              onClick={() => onUnderTheHood && onUnderTheHood(project)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500/50"
              aria-label={`View architecture flow for ${project.title}`}
            >
              <Layers className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
              <span>Under the Hood</span>
            </button>

            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors ml-auto focus-visible:ring-2 focus-visible:ring-sky-500/50"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Source</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-sky-500 hover:bg-sky-400 text-zinc-950 transition-colors ml-auto focus-visible:ring-2 focus-visible:ring-sky-500/50"
                aria-label={`View live deployment of ${project.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/**
 * ProjectGrid Component
 * Responsive grid layout with layout animations
 */
export function ProjectGrid({ projects, onExplain, onUnderTheHood }) {
  return (
    <motion.div 
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
    >
      <AnimatePresence>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onExplain={onExplain}
            onUnderTheHood={onUnderTheHood}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * ProofSection - Main Section Component
 * Agency-grade Proof of Work Showcase
 */
export default function ProofSection({ onExplain, onUnderTheHood }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.categorySlug === activeCategory);
  }, [activeCategory]);

  return (
    <section 
      id="proof" 
      className="py-20 bg-zinc-950 border-b border-zinc-800/80 relative"
      aria-label="Proof of Work and Personal Projects Showcase"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ProofHeader />
        <ProjectFilters 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />
        <ProjectGrid 
          projects={filteredProjects} 
          onExplain={onExplain}
          onUnderTheHood={onUnderTheHood}
        />
      </div>
    </section>
  );
}
