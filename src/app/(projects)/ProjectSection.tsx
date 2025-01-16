import React, { useMemo } from "react";
import ProjectCard, {
  type ProjectCardProps,
} from "~/app/(projects)/ProjectCard";
import myndy from "../../../public/img.png";

const projects: ProjectCardProps[] = [
  {
    img: myndy,
    title: "Project 1",
    description:
      "This search allows you search the entire page, chat with it ask questions to it.",
    skills: ["Skill 1", "Skill 2"],
    src: "https://example.com",
  },
  {
    img: myndy,
    title: "Project 1",
    description:
      "This search allows you search the entire page, chat with it ask questions to it.",
    skills: ["Skill 1", "Skill 2"],
    src: "https://example.com",
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
      <div className={"grid grid-cols-2 gap-5"}>{projectsList}</div>
    </div>
  );
};

export default ProjectSection;
