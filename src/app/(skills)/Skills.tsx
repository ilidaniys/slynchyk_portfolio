import React, { useMemo } from "react";

const skillList: string[] = [
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "SQL",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Spring Boot",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "CI/CD",
  "Microservices",
  "System Design",
  "Serverless",
  "LLM Integration",
  "Agile",
];

const Skills = () => {
  const skills = useMemo(() => {
    return skillList.map((skill) => (
      <div
        className={
          "flex cursor-default items-center justify-center rounded border border-white/10 bg-white/[0.03] px-2 py-1 text-sm font-light text-[#8b8fa8] shadow-md transition-all duration-200 hover:border-[#4af2c8]/40 hover:bg-[#4af2c8]/[0.05] hover:text-[#f0f0f0]"
        }
        key={skill}
      >
        {skill}
      </div>
    ));
  }, []);
  return (
    <div className={"flex flex-col gap-5"}>
      <h3 className={"text-3xl font-bold tracking-tight"}>Skills</h3>
      <div className={"flex w-full flex-wrap gap-2"}> {skills}</div>
    </div>
  );
};

export default Skills;
