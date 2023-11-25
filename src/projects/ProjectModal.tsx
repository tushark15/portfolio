import React, {useEffect, useState} from "react";
import { Modal, Card } from "react-bootstrap";
import "../hero/Hero.css";
import styled from "styled-components";
import GithubLinkSelector from "./GithubLinkSelector";

interface ProjectModalProps {
  setShowModal: (show: boolean) => void;
  show: boolean;
  title: string;
  image: string;
  skills: string[];
  largeDesc?: string;
  frontend?: string;
  backend?: string;
  live?: string;
}

const ProjectModal = (props: ProjectModalProps) => {
  const MODAL = styled(Modal)`
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    font-weight: bold;

  `;
  const ModalBody = styled(Modal.Body)`
    background-color: #f8f9fa;
    border-radius: 5px;
    box-shadow: 0px 10px 10px #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 4rem;
    @media (max-width: 768px) {
      padding: 2rem;
      font-size: 2rem;
    }
  `;

  return (
    <MODAL
      show={props.show}
      onHide={() => props.setShowModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="d-flex flex-column p-0">
        <Card.Img
          style={{ borderRadius: "5px", boxShadow: "0 0 10px #000" }}
          variant="top"
          src={props.image}
        />
      </Modal.Header>
      <ModalBody
      >
        <Modal.Title
          style={{
            fontSize: "2em",
            color: "black",
          }}
        >
          {props.title}{" "}
        </Modal.Title>
        <Card.Text
          style={{
            fontSize: "1.2em",
          }}
        >
          <span> {props.skills}</span>
        </Card.Text>
        <Card.Text
          style={{
            width: "90%",
            textAlign: "center",
            lineHeight: "1.8em",
            marginTop: "-20px",
          }}
        >
          {props.largeDesc}
        </Card.Text>
        <Card.Text className="d-flex gap-3">
          Project Links:
          <GithubLinkSelector
            frontend={props.frontend}
            backend={props.backend}
            live={props.live}
          />
        </Card.Text>
        <button
          onClick={() => props.setShowModal(false)}
          className="btn btn-lg yellowButton"
        >
          Close
        </button>
      </ModalBody>
    </MODAL>
  );
};

export default ProjectModal;
