import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export interface WorkStepProps {
  title: string;
  image: string;
  fallBack: string;
  startDate: string;
  endDate: string;
  position: string;
}

const WorkStep = (props: WorkStepProps) => {
  return (
    <div className={"relative flex h-28 items-center px-10"}>
      <div className={"absolute left-[66px] h-full w-0 border border-white"} />
      <Avatar>
        <AvatarImage src={props.image} />
        <AvatarFallback>{props.fallBack}</AvatarFallback>
      </Avatar>
      <div className={"flex flex-col gap-2"}>
        <div>
          {props.startDate}-{props.endDate}
        </div>
        <div>{props.title}</div>
        <div>{props.position}</div>
      </div>
    </div>
  );
};

export default WorkStep;
