import React from "react";
import Reveal from "../reveal/Reveal";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <h3
      style={{
        fontSize: "5em",
        fontWeight: "bold",
      }}
    >
      <Reveal>
        {children}<span style={{ color: "#ffc83d" }}>.</span>
      </Reveal>
    </h3>
  );
};

export default Header;
