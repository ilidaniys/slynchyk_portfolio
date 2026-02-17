"use client";
import React, { useMemo } from "react";
import Image, { type StaticImageData } from "next/image";
import { Button } from "~/components/ui/button";
import { Globe } from "lucide-react";
import { handleSocialMediaClick } from "~/app/(headerPart)/Header";

export interface ProjectCardProps {
  img?: StaticImageData;
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
            "rounded bg-white/10 px-2 py-1 text-[10px] font-medium text-[#8b8fa8]"
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
        "group flex max-w-[500px] flex-col items-start justify-between gap-5 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:scale-[1.01] hover:border-white/20"
      }
    >
      {props.img && (
        <div className={"overflow-hidden rounded-xl"}>
          <Image
            className={"h-[200px] w-full rounded-xl object-cover"}
            src={props.img}
            alt={props.title}
            width={500}
            height={200}
          />
        </div>
      )}
      <h3 className={"text-xl font-bold"}>{props.title}</h3>
      <p className={"text-sm font-light text-[#8b8fa8]"}>{props.description}</p>
      <div className={"flex flex-wrap gap-1"}>{skillsList}</div>
      <div className={"flex w-full justify-between"}>
        {props.website && (
          <Button
            variant="secondary"
            onClick={() =>
              props.website && handleSocialMediaClick(props.website)
            }
          >
            <Globe />
            website
          </Button>
        )}
        {!props.website && !props.src && (
          <div className={"text-sm text-[#8b8fa8]"}>coming soon...</div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
