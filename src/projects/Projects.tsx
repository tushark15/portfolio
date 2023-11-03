import ProjectCard from "./ProjectCard";
import Header from "../components/Header";
import { projects } from "./ProjectsDetails";
import styled from "styled-components";

const Projects = () => {
  const ProjectSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 50px 150px;
    margin-bottom: 200px;
    @media (max-width: 768px) {
      width: 100%;
    }
  `;
  const ProjectHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 3rem;
    width: 100%;
    margin-bottom: 70px;
    color: black;
    @media (max-width: 768px) {
      flex-direction: column;
      font-size: 2rem;
      gap: 0;
      margin-bottom: 0;
    }
  `;
  return (
    <ProjectSection id="projects">
      <ProjectHeader>
        <Header>Projects</Header>

        <hr
          style={{
            width: "100%",
            marginTop: "50px",
          }}
        />
      </ProjectHeader>
      <div
        className="d-flex flex-wrap align-items-center justify-content-center projectsContainer"
        style={{ width: "100%", gap: "100px" }}
      >
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              desc={project.desc}
              image={project.img}
              skills={project.skills}
              largeDesc={project.largeDesc}
              frontend={project.frontend}
              backend={project.backend}
            />
          );
        })}
      </div>
    </ProjectSection>
  );
};

export default Projects;
