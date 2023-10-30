import SkillTablet from "./SkillTablet";
import Reveal from "../reveal/Reveal";
import code from "../assets/code.png";

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
        <Reveal>
          <div className="d-flex gap-1">
            <img style={{ width: "30px", height: "35px" }} src={code} />

            <h3>Skills</h3>
          </div>
        </Reveal>
      </div>
      <div
        className="d-flex flex-wrap gap-2"
        style={{ marginTop: "20px", width: "400px" }}
      >
        {skills.map((skill, index) => {
          return <SkillTablet key={index} skill={skill} />;
        })}
      </div>
    </>
  );
};

export default Skills;
