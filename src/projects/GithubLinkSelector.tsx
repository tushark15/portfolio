import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import github from "../assets/github.svg";
import link from "../assets/link.png";
import styled from "styled-components";

interface GithubLinkSelectorProps {
  frontend?: string;
  backend?: string;
}

const DropdownItem = styled(Dropdown.Item)`
  background-color: #1b1a21;
  color: white;
  &:hover {
    background-color: #ffc83d;
    color: black;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const ImageLink = styled(Image)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  &:hover {
    transform: rotate(3deg) scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
const GithubLinkSelector = (props: GithubLinkSelectorProps) => {
  return (
    <>
      {props.frontend && props.backend ? (
        <Dropdown style={{ marginTop: "-5px" }}>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              backgroundColor: "white",
              color: "black",
              border: "none",
              width: "fit-content",
            }}
          >
            <ImageLink src={github} />
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{
              backgroundColor: "#1b1a21",
              color: "white",
              padding: "0",
            }}
          >
            <DropdownItem
              href={props.frontend}
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend
            </DropdownItem>
            <DropdownItem
              href={props.backend}
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend
            </DropdownItem>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <a
          href={props.frontend ? props.frontend : props.backend}
          style={{ color: "black" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageLink src={github}/>
        </a>
      )}
      <a
        href=""
        style={{ color: "black" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageLink src={link}/>
      </a>
    </>
  );
};

export default GithubLinkSelector;
