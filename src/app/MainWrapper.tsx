import React from "react";

const MainWrapper = (props: { children: React.ReactNode }) => {
  return (
    <main className="relative flex h-screen w-screen bg-[#181922] text-white">
      <div className={"absolute h-full w-full overflow-hidden"}>
        <div
          className={
            "absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full bg-[#5e5d5d1a]"
          }
        />
        <div
          className={
            "absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full bg-[#5e5d5d1a]"
          }
          style={{ animationDelay: "2s" }}
        />
        <div
          className={
            "absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full bg-[#5e5d5d1a]"
          }
          style={{ animationDelay: "4s" }}
        />
      </div>
      <div
        className={
          "scroll scrollbar-none z-20 flex h-full min-h-screen w-full flex-col items-center overflow-y-auto pt-40"
        }
      >
        {props.children}
      </div>
    </main>
  );
};

export default MainWrapper;
