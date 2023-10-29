import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import reactImage from "../assets/react.svg";

const NavigationBar = () => {
  const Navlink = styled(Nav.Link)`
    color: #ccc;
    font-size: 1.2em;
    margin-top: 10px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    transform: rotate(90deg);
    border-radius: 10px;
    transition: all 0.3s;

    &:hover,
    &:focus,
    &:active,
    &:visited,
    &.active {
      box-shadow: 0 0 10px 0 #ccc !important;
      color: #ccc !important;
    }
  `;
  return (
    <Navbar
      className="bg-body-tertiary d-flex justify-content-center"
      style={{
        width: "70px",
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
          padding: "0",
          backgroundColor: "#1b1a21",
        }}
      >
        <Navlink href="#home">
          <Image src={reactImage} />
        </Navlink>
        <Navlink href="#about">About</Navlink>
        <Navlink href="#projects">Projects</Navlink>
        <Navlink href="#contact">Contact</Navlink>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
