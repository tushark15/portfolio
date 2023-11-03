import React from "react";
import styled from "styled-components";
import RevealUp from "../reveal/RevealUp";
import { Card } from "react-bootstrap";
import ProjectModal from "./ProjectModal";
import GithubLinkSelector from "./GithubLinkSelector";
import "./ProjectCard.css";

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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CARD = styled(Card)`
  border-radius: 20px;
  padding: 5px;
  background-color: white;
  border: none;
  width: 450px;
  height: 450px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
    height: 50em;
  }
  @media (max-width: 1024px) {
    width: 90%;
    margin-left: 70px;
  }
`;

const CardTitle = styled(Card.Title)`
  color: black;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 4em;
  }
`;

const LinkLineDiv = styled.div`
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
  width: 400px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardText = styled(Card.Text)`
  color: black;
  font-size: 1em;
  @media (max-width: 768px) {
    font-size: 2rem;
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
        <CARD>
          <RevealUp>
            <CardImage
              onClick={() => setOpenModal(true)}
              variant="top"
              src={props.image}
            />
          </RevealUp>
          <Card.Body>
            <RevealUp>
              <CardTitle>{props.title}</CardTitle>
            </RevealUp>
            <LinkLineDiv>
              <hr
                style={{
                  width: "100%",
                }}
              />
              <GithubLinkSelector
                frontend={props.frontend}
                backend={props.backend}
              />
            </LinkLineDiv>
            <RevealUp>
              <Card.Text className="d-flex gap-2">
                {props.skills.map((skill) => {
                  return (
                    <span key={skill} className="skillSpan">
                      {skill}
                    </span>
                  );
                })}
              </Card.Text>
            </RevealUp>
            <RevealUp>
              <CardText>{props.desc}</CardText>
            </RevealUp>
          </Card.Body>
        </CARD>
      </RevealUp>
    </>
  );
};

export default ProjectCard;
