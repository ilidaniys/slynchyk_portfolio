import React from "react";
import { FileDown } from "lucide-react";

const CV_FILE_NAME = "Andrey_Slynchyk_Senior_Product_Engineer.pdf";

const CVButton = () => {
  const handleDownload = () => {
    const fileUrl = "/" + CV_FILE_NAME;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = CV_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      onClick={handleDownload}
      className={
        "group relative z-10 flex cursor-pointer items-center gap-3 overflow-hidden rounded border border-[#4af2c8]/40 px-5 py-1.5 hover:border-[#4af2c8]"
      }
    >
      <div className="absolute inset-0 w-0 bg-[#4af2c8] transition-all group-hover:w-full"></div>
      <FileDown
        width={15}
        className={"relative z-10 text-[#4af2c8] group-hover:text-[#0e0f14]"}
      />
      <p
        className={
          "relative z-10 text-sm font-bold group-hover:text-[#0e0f14]"
        }
      >
        Resume
      </p>
    </div>
  );
};

export default CVButton;
