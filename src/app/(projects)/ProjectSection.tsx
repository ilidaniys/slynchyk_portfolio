import React, { useMemo } from "react";
import ProjectCard, {
  type ProjectCardProps,
} from "~/app/(projects)/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "ArtTrader",
    description:
      "An AI-powered cryptocurrency trading platform that lets users automate their strategies across exchanges like Binance and Bybit — deploying customizable trading robots that execute trades 24/7 based on configured indicators and rules.",
    skills: ["TypeScript", "Next.js", "NestJS", "PostgreSQL", "AWS"],
    website: "https://artrader.org/",
  },
  {
    title: "Mora",
    description:
      "A life management app that helps users structure their life into meaningful areas, transform scattered thoughts into actionable goals through AI assistance, and execute tasks using focused work segments.",
    skills: ["TypeScript", "Next.js", "Node.js", "LLM Integration"],
    website: "https://moradesktop.vercel.app/",
  },
];

const ProjectSection = () => {
  const projectsList = useMemo(
    () => projects.map((step, index) => <ProjectCard key={index} {...step} />),
    [],
  );

  return (
    <div className={"flex flex-col gap-5"}>
      <h1 className={"text-3xl font-bold"}>Projects</h1>
      <div
        className={
          "grid grid-cols-1 justify-items-center gap-5 align-middle md:grid-cols-2"
        }
      >
        {projectsList}
      </div>
    </div>
  );
};

export default ProjectSection;
