import React from "react";
import styled from "styled-components";
import RevealUp from "../reveal/RevealUp";
import { Card, Modal, Image } from "react-bootstrap";
import ProjectModal from "./ProjectModal";
import GithubLinkSelector from "./GithubLinkSelector";

interface ProjectCardProps {
  title: string;
  desc: string;
  image: string;
  skills: string[];
  largeDesc?: string;
  frontend?: string;
  backend?: string;
}

const CardImage = styled(Card.Img)`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  translate: 0% 20%;
  width: 90%;
  margin: 10px auto;
  cursor: pointer;

  &:hover {
    transform: rotate(3deg) scale(1.1);
    translate: 0% 10%;
    transition: all 0.3s ease-in-out;
  }
`;
const ProjectCard = (props: ProjectCardProps) => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <RevealUp>
        <ProjectModal
          show={openModal}
          setShowModal={setOpenModal}
          title={props.title}
          image={props.image}
          skills={props.skills}
          largeDesc={props.largeDesc}
          frontend={props.frontend}
          backend={props.backend}
        />
      </RevealUp>
      <RevealUp>
        <Card
          style={{
            width: "450px",
            height: "450px",
            borderRadius: "20px",
            padding: "5px",
            backgroundColor: "white",
            border: "none",
          }}
        >
          <RevealUp>
            <CardImage
              onClick={() => setOpenModal(true)}
              variant="top"
              src={props.image}
            />
          </RevealUp>
          <Card.Body>
            <RevealUp>
              <Card.Title style={{ color: "black" }}>{props.title}</Card.Title>
            </RevealUp>
              <div className="d-flex flex-row gap-2 justify-content-center align-items-center " style={{ width:"400px"}}>
                <hr 
                  style={{
                    width: "100%",
                  }}
                 />
                <GithubLinkSelector frontend={props.frontend} backend={props.backend} />
              </div>
            <RevealUp>
              <Card.Text className="d-flex gap-2">
                {props.skills.map((skill) => {
                  return (
                    <span key={skill} style={{ fontSize: "0.9em" }}>
                      {skill}
                    </span>
                  );
                })}
              </Card.Text>
            </RevealUp>
            <RevealUp>
              <Card.Text style={{ color: "black", fontSize: "1em" }}>
                {props.desc}
              </Card.Text>
            </RevealUp>
          </Card.Body>
        </Card>
      </RevealUp>
    </>
  );
};

export default ProjectCard;
