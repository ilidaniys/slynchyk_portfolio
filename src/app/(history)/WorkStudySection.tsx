import React, { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import Step, { type WorkStepProps } from "~/app/(history)/Step";
import NineTwoThree from "../../../public/NineTwoTree.png";
import EightAllocate from "../../../public/Allocate.png";
import LeanSquad from "../../../public/LeanSquad.png";
import Erbis from "../../../public/Erbis.png";
import Psychology from "../../../public/PsychologyDepartment.png";

const workSteps: WorkStepProps[] = [
  {
    title: "Ninetwothree",
    image: NineTwoThree,
    fallBack: "NT",
    position: "Software engineer",
    startDate: "2024.06.01",
    endDate: "2025.01",
  },
  {
    title: "Point Education",
    fallBack: "PO",
    position: "Lead developer",
    startDate: "2024.03",
    endDate: "2024.06",
  },
  {
    title: "8allocate",
    image: EightAllocate,
    fallBack: "8A",
    position: "Software engineer",
    startDate: "2024.06.01",
    endDate: "2025.01",
  },
  {
    title: "LeanSquad",
    image: LeanSquad,
    fallBack: "LS",
    position: "Software engineer",
    startDate: "2023.06",
    endDate: "2023.11",
  },
  {
    title: "Erbis",
    image: Erbis,
    fallBack: "ER",
    position: "Software engineer",
    startDate: "2021",
    endDate: "2023.06",
  },
];

const studySteps: WorkStepProps[] = [
  {
    title: "Taras Shevchenko National University of Kyiv - Kyiv, Ukraine",
    image: Psychology,
    fallBack: "PD",
    position: "Psychology Department",
    startDate: "2019",
    endDate: "2023",
  },
  {
    title: "Kyiv-Pechersk Lyceum No171 “Lider”",
    fallBack: "LL",
    position: "mathematics class",
    startDate: "2012",
    endDate: "2019",
  },
];

const WorkStudySection = () => {
  const workStepsList = useMemo(
    () => workSteps.map((step, index) => <Step key={index} {...step} />),
    [],
  );
  const studyStepsList = useMemo(
    () => studySteps.map((step, index) => <Step key={index} {...step} />),
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
            {studyStepsList}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default WorkStudySection;
