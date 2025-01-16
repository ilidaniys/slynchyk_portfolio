import React, { useMemo } from "react";

const skillList: string[] = [
  "JavaScript",
  "Java",
  "NextJs",
  "TypeScript",
  "React",
  "AWS",
  "NodeJS",
  "ExpressJS",
  "React Native",
  "HTML & CSS",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Contentful",
  "Redux",
  "CI/CD",
  "Scrum",
];

const Skills = () => {
  const skills = useMemo(() => {
    return skillList.map((skill) => (
      <div
        className={
          "text-md flex items-center justify-center rounded border border-gray-300 bg-slate-800 bg-opacity-80 p-2"
        }
        key={skill}
      >
        {skill}
      </div>
    ));
  }, []);
  return (
    <div className={"flex flex-col gap-5"}>
      <h3 className={"text-3xl font-bold"}>Skills</h3>
      <div className={"flex w-full flex-wrap gap-2"}> {skills}</div>
    </div>
  );
};

export default Skills;
