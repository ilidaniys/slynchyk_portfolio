import React, { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import WorkStep, { type WorkStepProps } from "~/app/(history)/WorkStep";

const workSteps: WorkStepProps[] = [
  {
    title: "Account",
    image: "/images/work-study/account.svg",
    fallBack: "ER",
    position: "Update your account information.",
    startDate: "2021-09-01",
    endDate: "2021-09-30",
  },
];

const WorkStudy = () => {
  const workStepsList = useMemo(
    () => workSteps.map((step, index) => <WorkStep key={index} {...step} />),
    [],
  );
  return (
    <div className={"w-full"}>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className={"w-full"}>
          <TabsTrigger className={"w-1/2"} value="account">
            Account
          </TabsTrigger>
          <TabsTrigger className={"w-1/2"} value="password">
            Password
          </TabsTrigger>
        </TabsList>
        <div className={"mt-2 transition-all"}>
          <TabsContent
            className={"rounded-xl border border-white"}
            value="account"
          >
            {workStepsList}
          </TabsContent>
          <TabsContent
            className={"rounded-xl border border-white"}
            value="password"
          >
            {workStepsList}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default WorkStudy;
