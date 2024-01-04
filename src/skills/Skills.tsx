import SkillTablet from "./SkillTablet";
import Reveal from "../reveal/Reveal";
import code from "../assets/code.png";
import "./Skills.css";
import { Image } from "../socialMedia/SocialLinks";

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
    "Styled-Components",
    "Ant-Design",
    "ExpressJs",
    "TypeScript",
    "Docker",
    "SwaggerUI",
    "Git",
    "AWS S3",
    "Digital Ocean",
    "Ubuntu",
    "Nginx",
    "Server Management",
  ];
  return (
    <>
      <div>
        <Reveal>
          <div className="d-flex gap-1">
            <Image id="skillsImage" src={code} />

            <h3 className="skillsHeading">Skills</h3>
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
