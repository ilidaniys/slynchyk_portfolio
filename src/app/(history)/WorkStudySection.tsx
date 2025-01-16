import React, { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import Step, { type WorkStepProps } from "~/app/(history)/Step";

const workSteps: WorkStepProps[] = [
  {
    title: "Account",
    image: "/images/work-study/account.svg",
    fallBack: "ER",
    position: "Update your account information.",
    startDate: "2021-09-01",
    endDate: "2021-09-30",
  },
  {
    title: "Account",
    image: "/images/work-study/account.svg",
    fallBack: "ER",
    position: "Update your account information.",
    startDate: "2021-09-01",
    endDate: "2021-09-30",
  },
];

const WorkStudySection = () => {
  const workStepsList = useMemo(
    () => workSteps.map((step, index) => <Step key={index} {...step} />),
    [],
  );
  return (
    <div className={"w-full"}>
      <Tabs defaultValue="work" className="w-full">
        <TabsList className={"w-full"}>
          <TabsTrigger className={"w-1/2"} value="work">
            Work
          </TabsTrigger>
          <TabsTrigger className={"w-1/2"} value="education">
            Education
          </TabsTrigger>
        </TabsList>
        <div className={"mt-2 transition-all"}>
          <TabsContent
            className={"rounded-xl border border-white"}
            value="work"
          >
            {workStepsList}
          </TabsContent>
          <TabsContent
            className={"rounded-xl border border-white"}
            value="education"
          >
            {workStepsList}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default WorkStudySection;
