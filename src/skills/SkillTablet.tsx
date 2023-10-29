import"./SkillTablet.css"
interface SkillTabletProps {
  skill: string;
}

const SkillTablet = (props: SkillTabletProps) => {
  return (
    <div
      className=" p-2 skillTablet"
      style={{ borderRadius: "20px", marginBottom: "5px" }}
    >
      {props.skill}
    </div>
  );
};

export default SkillTablet;
