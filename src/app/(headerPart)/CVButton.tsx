import React from "react";
import { FileDown } from "lucide-react";

const CVButton = () => {
  return (
    <div
      className={
        "bg-main z-10 flex items-center gap-3 rounded border border-white px-5"
      }
    >
      <FileDown width={15} />
      <p className={"text-sm font-bold"}>Resume</p>
    </div>
  );
};

export default CVButton;
