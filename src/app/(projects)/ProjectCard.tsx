"use client";
import React, { useMemo } from "react";
import Image, { type StaticImageData } from "next/image";
import { Button } from "~/components/ui/button";
import { Globe } from "lucide-react";
import { handleSocialMediaClick } from "~/app/(headerPart)/Header";
import { useHolographicEffect } from "~/hooks/useHolographicEffect";

export interface ProjectCardProps {
  img?: StaticImageData;
  title: string;
  description: string;
  skills: string[];
  src?: string;
  website?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { cardRef, holographic } = useHolographicEffect();
  const { tiltX, tiltY, glareX, glareY, shimmerX, shimmerY, isHovered } =
    holographic;

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

  const edgeShadowX = Math.abs(tiltX) > 2 ? (tiltX > 0 ? -1 : 1) : 0;
  const edgeShadowY = Math.abs(tiltY) > 2 ? (tiltY > 0 ? -1 : 1) : 0;
  const edgeGlowIntensity = Math.sqrt(tiltX * tiltX + tiltY * tiltY) / 12;
  const mintOpacity = Math.abs(tiltY) / 12;
  const purpleOpacity = Math.abs(tiltX) / 12;

  const cardStyle: React.CSSProperties = {
    transform: `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
    transition: isHovered ? "transform 0.05s ease-out" : "transform 0.35s ease-out",
    willChange: "transform",
    boxShadow: isHovered
      ? [
          `inset ${edgeShadowX * 6}px ${edgeShadowY * 6}px 12px rgba(74, 242, 200, ${mintOpacity * 0.3 * edgeGlowIntensity})`,
          `inset ${-edgeShadowX * 6}px ${-edgeShadowY * 6}px 12px rgba(138, 99, 255, ${purpleOpacity * 0.3 * edgeGlowIntensity})`,
        ].join(", ")
      : undefined,
  };

  const shimmerStyle: React.CSSProperties = {
    background: `linear-gradient(
      ${tiltY * 3}deg,
      rgba(74, 242, 200, 0.18) 0%,
      rgba(138, 99, 255, 0.14) 25%,
      rgba(56, 130, 246, 0.14) 50%,
      rgba(20, 210, 220, 0.14) 75%,
      rgba(74, 242, 200, 0.18) 100%
    )`,
    backgroundSize: "200% 200%",
    backgroundPosition: `${shimmerX}% ${shimmerY}%`,
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease-out",
  };

  const glareStyle: React.CSSProperties = {
    background: `radial-gradient(
      circle at ${glareX}% ${glareY}%,
      rgba(255, 255, 255, 0.07) 0%,
      transparent 60%
    )`,
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease-out",
  };

  return (
    <div
      ref={cardRef}
      className={
        "group relative flex max-w-[500px] flex-col items-start justify-between gap-5 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/20"
      }
      style={cardStyle}
    >
      {/* Shimmer — iridescent gradient shifting with mouse position */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={shimmerStyle}
        aria-hidden="true"
      />
      {/* Glare — radial spotlight tracking cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={glareStyle}
        aria-hidden="true"
      />
      {/* Card content above overlays */}
      <div className="relative z-10 flex w-full flex-col items-start gap-5">
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
    </div>
  );
};

export default ProjectCard;
