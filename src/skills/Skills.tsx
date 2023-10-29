import SkillTablet from "./SkillTablet";

const Skills = () => {
  const skills = [
    "MERN Stack",
    "JavaScript",
    "React",
    "ExpressJS",
    "MongoDb",
    "NodeJS",
    "HTML",
    "CSS",
    "Bootstrap",
    "TailwindCSS",
    "React-Bootstrap",
    "Material-UI",
    "Next.js",
    "ExpressJs",
    "TypeScript",
    "Docker",
    "SwaggerUI",
    "Git",
    "AWS S3",
  ];
  return (
    <>
      <div>
        <h3>Skills</h3>
      </div>
      <div
        className="d-flex flex-wrap gap-2"
        style={{ marginTop: "20px", width: "400px"}}
      >
        {skills.map((skill, index) => {
          return <SkillTablet key={index} skill={skill} />;
        })}
      </div>
    </>
  );
};

export default Skills;
