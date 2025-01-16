"use client";
import { Linkedin, MapPin } from "lucide-react";
import React from "react";
import CVButton from "~/app/(headerPart)/CVButton";
import GitHubIcon from "~/app/(headerPart)/GitHubIcon";

export const LINKED_IN_URL = "https://www.linkedin.com/in/andreu-slynchyk/";
export const GITHUB_URL = "https://github.com/ilidaniys";

export const handleSocialMediaClick = (url: string) => {
  window.open(url, "_blank");
};

const Header = () => {
  return (
    <div className={"z-10 flex flex-col items-start gap-5"}>
      <h1 className={"animate-popUp text-5xl font-bold"}>Slynchyk Andreu</h1>
      <p className={"animate-popUp text-2xl font-extralight"}>
        Software Engineer
      </p>
      <div className={"animate-popUp flex gap-5"}>
        <MapPin />
        <p>Ukraine, Kyiv</p>
      </div>
      <div className={"animate-popUp z-10 flex items-center gap-5"}>
        <CVButton />
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

export default Header;
