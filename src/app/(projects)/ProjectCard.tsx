import React, { useMemo } from "react";
import Image, { type StaticImageData } from "next/image";

export interface ProjectCardProps {
  img: StaticImageData;
  title: string;
  description: string;
  skills: string[];
  src?: string;
  website?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const skillsList = useMemo(
    () =>
      props.skills.map((skill, index) => (
        <div
          key={index}
          className={
            "rounded bg-[#717171] px-2 py-1 text-[10px] font-bold text-white"
          }
        >
          {skill}
        </div>
      )),
    [props.skills],
  );
  return (
    <div
      className={
        "flex max-w-[500px] flex-col items-start justify-between gap-5 rounded-xl border border-white p-5"
      }
    >
      <div className={"rounded"}>
        <Image
          className={"rounded-xl"}
          src={props.img}
          alt={"title"}
          width={500}
          height={500}
        />
      </div>
      <h3>{props.title}</h3>
      <p className={"text-sm font-extralight"}>{props.description}</p>
      <div className={"flex flex-wrap gap-1"}>{skillsList}</div>
      <div>
        <button>123</button>
      </div>
    </div>
  );
};

export default ProjectCard;
