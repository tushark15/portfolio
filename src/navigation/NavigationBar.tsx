import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import reactImage from "../assets/react.svg";
import RevealUp from "../reveal/RevealUp";
import tIcon from "../assets/tIcon.png";

const Navlink = styled(Nav.Link)<{
  $transition?: boolean;
  $rotate?: Boolean;
}>`
  color: #ccc;
  font-size: 1.2em;
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: auto;
  transform: rotate(${(props) => (props.$rotate ? "90deg" : "0deg")});
  border-radius: 10px;

  &:hover,
  &:focus,
  &:active,
  &.active {
    ${(props) =>
      props.$transition &&
      `box-shadow: 0 0 10px 0 #ffc83d !important;
    color: #ccc !important;
    transform: rotate(90deg) scale(1.1);
    transition: all 0.3s;`}
  }
`;
const NavigationBar = () => {
  return (
    <Navbar
      className="d-flex justify-content-center"
      style={{
        width: "60px",
        height: "100%",
        position: "fixed",
        padding: "0",
        margin: "0",
      }}
    >
      <Nav
        className="d-flex flex-column gap-3 align-items-center"
        style={{
          height: "100%",
          backgroundColor: "#1b1a21",
        }}
      >
        <RevealUp direction="left">
          <Navlink href="#home">
            <Image src={tIcon} />
          </Navlink>
        </RevealUp>
        <RevealUp direction="left">
          <Navlink href="#about" $transition={true} $rotate={true}>
            About
          </Navlink>
        </RevealUp>
        <RevealUp direction="left" delay={0.3}>
          <Navlink href="#projects" $transition={true} $rotate={true}>
            Projects
          </Navlink>
        </RevealUp>
        <RevealUp direction="left" delay={0.35}>
          <Navlink href="#contact" $transition={true} $rotate={true}>
            Contact
          </Navlink>
        </RevealUp>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
