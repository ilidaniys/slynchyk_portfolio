import React from "react";
import { FileDown } from "lucide-react";
import { handleSocialMediaClick } from "~/app/(headerPart)/Header";

const CV_FILE_NAME = "Andreu_Slynchyk_CV.pdf";

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
      onClick={() => handleSocialMediaClick("/" + CV_FILE_NAME)}
      className={
        "relative z-10 flex cursor-pointer items-center gap-3 overflow-hidden rounded border border-white bg-main px-5"
      }
    >
      <div className="absolute inset-0 w-0 bg-white transition-all hover:w-full"></div>
      <FileDown width={15} />
      <p className={"text-sm font-bold"}>Resume</p>
    </div>
  );
};

export default CVButton;
