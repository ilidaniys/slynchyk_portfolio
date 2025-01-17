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
          "text-md flex items-center justify-center rounded border border-gray-300 bg-slate-500 bg-opacity-20 px-2 py-1 font-extralight shadow-md"
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
