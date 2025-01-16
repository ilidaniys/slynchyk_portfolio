"use client";
import React from "react";
import { Linkedin } from "lucide-react";
import GitHubIcon from "~/app/(headerPart)/GitHubIcon";
import {
  GITHUB_URL,
  handleSocialMediaClick,
  LINKED_IN_URL,
} from "../(headerPart)/Header";

const Footer = () => {
  return (
    <div
      className={
        "flex h-20 items-start justify-between border-t border-white border-opacity-20 px-4 pt-4"
      }
    >
      <div></div>
      <div className={"flex items-center justify-center gap-5 opacity-100"}>
        <div
          className={"hover:animate-wiggle cursor-pointer"}
          onClick={() => handleSocialMediaClick(LINKED_IN_URL)}
        >
          <Linkedin width={20} />
        </div>
        <div
          className={"hover:animate-wiggle w-6 cursor-pointer"}
          onClick={() => handleSocialMediaClick(GITHUB_URL)}
        >
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
