import React from "react";
import ProjectCard from "./ProjectCard";
interface projectType {
  title: string;
  img: string;
  desc: string;
}

const Projects = () => {
  const projects: projectType[] = [
    { title: "Your Places", img: "", desc: "" },
    { title: "Online Homework Management System", img: "", desc: "" },
    { title: "Todo APP API", img: "", desc: "" },
  ];
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center gap-3"
      style={{ color: "white", margin: "100px", marginBottom: "400px" }}
    >
      <div
        className="d-flex gap-3"
        style={{ width: "100%", marginBottom: "70px" }}
      >
        <h3>Projects 🧑🏻‍💻</h3>
        <hr style={{ width: "85%", marginLeft: "10px" }} />
      </div>
      <div
        className="d-flex flex-wrap align-items-center justify-content-center"
        style={{ width: "100%", gap: "100px" }}
      >
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              desc={project.desc}
              image={project.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
