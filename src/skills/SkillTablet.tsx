import"./SkillTablet.css"
import Reveal from "../reveal/Reveal";
interface SkillTabletProps {
  skill: string;
}

const SkillTablet = (props: SkillTabletProps) => {
  return (
    <Reveal>
    <div
      className=" p-2 skillTablet"
      style={{ borderRadius: "20px", marginBottom: "5px"}}
    >
      {props.skill}
    </div>
    </Reveal>
  );
};

export default SkillTablet;
