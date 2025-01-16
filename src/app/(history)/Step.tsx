import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import moment from "moment";

export interface WorkStepProps {
  title: string;
  image: string;
  fallBack: string;
  startDate: string;
  endDate: string;
  position: string;
}

const Step = (props: WorkStepProps) => {
  const startDateFormated = moment(props.startDate).format("MMM YYYY");
  const endDateFormated = moment(props.endDate).format("MMM YYYY");

  return (
    <div className={"relative flex h-28 items-center gap-5 px-10"}>
      <div className={"absolute left-[66px] h-full w-0 border border-white"} />
      <Avatar>
        <AvatarImage src={props.image} />
        <AvatarFallback>{props.fallBack}</AvatarFallback>
      </Avatar>
      <div className={"flex flex-col gap-2 text-sm"}>
        <div className={"flex"}>
          {startDateFormated}-{endDateFormated}
        </div>
        <div>{props.title}</div>
        <div>{props.position}</div>
      </div>
    </div>
  );
};

export default Step;
