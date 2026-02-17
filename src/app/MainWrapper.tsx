import React from "react";

const MainWrapper = (props: { children: React.ReactNode }) => {
  return (
    <main className="relative flex h-screen w-screen bg-[#0e0f14] text-[#f0f0f0]">
      <div className={"pointer-events-none absolute h-full w-full overflow-hidden"}>
        <div
          className={"absolute left-1/2 top-1/2 h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full"}
          style={{
            background:
              "radial-gradient(circle, rgba(74,242,200,0.04) 0%, transparent 70%)",
          }}
        />
        <div
          className={
            "absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full"
          }
          style={{
            background: "rgba(74,242,200,0.03)",
            animationDelay: "0s",
          }}
        />
        <div
          className={
            "absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full"
          }
          style={{
            background: "rgba(74,242,200,0.03)",
            animationDelay: "7s",
          }}
        />
      </div>
      <div
        className={
          "scrollbar-none z-20 flex h-full min-h-screen w-full flex-col items-center overflow-y-auto pt-40"
        }
      >
        {props.children}
      </div>
    </main>
  );
};

export default MainWrapper;
