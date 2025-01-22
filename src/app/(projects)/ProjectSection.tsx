import React, { useMemo } from "react";
import ProjectCard, {
  type ProjectCardProps,
} from "~/app/(projects)/ProjectCard";
import myndy from "../../../public/MyndyProject.png";
import pointEducationBanner from "../../../public/PointEducationBanner.png";
import logiGroupBanner from "../../../public/LogiGroupBanner.png";

const projects: ProjectCardProps[] = [
  {
    img: myndy,
    title: "Myndy",
    description:
      "Myndy is a platform that partners with organizations to build mentally fit teams through research-backed training and strategic consulting",
    skills: ["TypeScript", "NodeJS", "ExpressJS", "PostgresSQL", "React"],
    website: "https://www.myndy.co/",
  },
  {
    img: pointEducationBanner,
    title: "Point Education",
    description:
      "An innovative project redefining education in universities and schools through course graphs. This approach enables students to build personalized learning paths by visualizing the connections between subjects and modules, fostering deeper understanding and critical thinking.",
    skills: ["TypeScript", "NodeJS", "NestJs", "MongoDB", "NextJs"],
    website: "https://point.education/tree",
  },
  {
    img: logiGroupBanner,
    title: "LogiGuide",
    description:
      "An innovative product designed for efficient and fast retrieval of contact information in logistics. It streamlines communication by providing quick access to critical data, ensuring seamless coordination across the supply chain.",
    skills: ["TypeScript", "NodeJS", "ExpressJS", "PostgresSQL", "RemixJs"],
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
