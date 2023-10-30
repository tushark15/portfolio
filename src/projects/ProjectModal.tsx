import React from "react";
import { Modal, Card, Button, Image, Dropdown } from "react-bootstrap";
import "../hero/Hero.css";
import github from "../assets/github.svg";
import link from "../assets/link.png";
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
}

const ProjectModal = (props: ProjectModalProps) => {
  
  return (
    <Modal
      show={props.show}
      onHide={() => props.setShowModal(false)}
      size="lg"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(5px)",
        fontWeight: "bold",
      }}
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
      <Modal.Body
        style={{
          boxShadow: "0px 10px 10px #000",
        }}
        className="p-4 d-flex flex-column gap-4 align-items-center"
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
          <GithubLinkSelector frontend={props.frontend} backend={props.backend} />
        </Card.Text>
        <button
          onClick={() => props.setShowModal(false)}
          className="btn btn-lg yellowButton"
        >
          Close
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
