"use client";
import React from "react";
import { Linkedin } from "lucide-react";
import GitHubIcon from "~/app/(headerPart)/GitHubIcon";
import {
  GITHUB_URL,
  handleSocialMediaClick,
  LINKED_IN_URL,
} from "../(headerPart)/Header";
import { useMagneticEffect } from "~/hooks/useMagneticEffect";

const Footer = () => {
  const { magnetRef: linkedInRef, magnetStyle: linkedInStyle } = useMagneticEffect();
  const { magnetRef: githubRef, magnetStyle: githubStyle } = useMagneticEffect();

  return (
    <div
      className={
        "flex h-20 items-start justify-between border-t border-white/10 px-4 pt-4"
      }
    >
      <div></div>
      <div className={"flex items-center justify-center gap-5 opacity-100"}>
        <div
          ref={linkedInRef}
          style={linkedInStyle}
          className={"cursor-pointer text-[#8b8fa8] transition-colors duration-200 hover:text-[#4af2c8]"}
          onClick={() => handleSocialMediaClick(LINKED_IN_URL)}
        >
          <Linkedin width={20} />
        </div>
        <div
          ref={githubRef}
          style={githubStyle}
          className={"w-6 cursor-pointer text-[#8b8fa8] transition-colors duration-200 hover:text-[#4af2c8]"}
          onClick={() => handleSocialMediaClick(GITHUB_URL)}
        >
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
