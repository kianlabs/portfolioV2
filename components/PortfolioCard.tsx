"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MiniScreen, { type MiniScreenVariant } from "./MiniScreen";

export type PortfolioProject = {
  id: string;
  type: MiniScreenVariant;
  category: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  url: string;
};

type PortfolioCardProps = {
  project: PortfolioProject;
  index: number;
};

export default function PortfolioCard({
  project,
  index,
}: PortfolioCardProps) {
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 40 };

  return (
    <motion.article
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col rounded-[24px] border border-black/10 bg-[#FDFFFC] p-5"
    >
      <div
        className="pointer-events-none absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: project.accent }}
      >
        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
      </div>

      <MiniScreen
        variant={project.type}
        accent={project.accent}
        url={project.url}
      />

      <div className="mt-5 flex flex-1 flex-col">
        <span
          className="text-xs font-semibold uppercase tracking-[0.18em] text-[#626773]"
        >
          {project.category}
        </span>

        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#161925] sm:text-[1.6rem]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#514f59]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 bg-[#F1D302]/10 px-3 py-1.5 text-xs text-[#161925]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#kontak"
          className="mt-7 inline-flex items-center justify-center rounded-full bg-[#161925] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C1292E]"
        >
          Diskusikan project serupa
        </a>
      </div>
    </motion.article>
  );
}
