import React from "react";

const MainWrapper = (props: { children: React.ReactNode }) => {
  return (
    <main className="relative flex h-full w-full bg-[#181922] text-white">
        <div className={"absolute overflow-hidden w-full h-full"}>
      <div
        className={
          "animate-ripple absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5e5d5d1a]"
        }
      />
      <div
        className={
          "animate-ripple absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5e5d5d1a]"
        }
        style={{ animationDelay: "2s" }}
      />
      <div
        className={
          "animate-ripple absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5e5d5d1a]"
        }
        style={{ animationDelay: "4s" }}
      />
        </div>
      <div
        className={
          "flex h-full min-h-screen w-full flex-col items-center pt-40"
        }
      >
        {props.children}
      </div>
    </main>
  );
};

export default MainWrapper;
