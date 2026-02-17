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
      <div className="overflow-hidden">
        <h1
          className={"animate-popUp text-5xl font-bold tracking-tight text-[#4af2c8]"}
          style={{ animationDelay: "0ms", opacity: 0 }}
        >
          Andrey Slynchyk
        </h1>
      </div>
      <div className="overflow-hidden">
        <p
          className={"animate-popUp text-base font-light uppercase tracking-[0.25em] text-[#8b8fa8]"}
          style={{ animationDelay: "150ms", opacity: 0 }}
        >
          Senior Product Engineer
        </p>
      </div>
      <div className="overflow-hidden">
        <div
          className={"animate-popUp flex items-center gap-2 text-sm text-[#8b8fa8]"}
          style={{ animationDelay: "300ms", opacity: 0 }}
        >
          <MapPin size={14} />
          <p>Ukraine, Kyiv</p>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className={"animate-popUp z-10 flex items-center gap-5"}
          style={{ animationDelay: "450ms", opacity: 0 }}
        >
          <CVButton />
          <div
            className={"cursor-pointer text-[#8b8fa8] transition-all duration-200 hover:scale-110 hover:text-[#4af2c8]"}
            onClick={() => handleSocialMediaClick(LINKED_IN_URL)}
          >
            <Linkedin width={20} />
          </div>
          <div
            className={"w-6 cursor-pointer text-[#8b8fa8] transition-all duration-200 hover:scale-110 hover:text-[#4af2c8]"}
            onClick={() => handleSocialMediaClick(GITHUB_URL)}
          >
            <GitHubIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
