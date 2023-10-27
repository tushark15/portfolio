import React from "react";
// import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="d-flex justify-content-center align-items-center"
      style={{ color: "white", margin: "100px", marginBottom:"400px"  }}
    >
      <div className="d-flex flex-column gap-3 ">
        <h1 style={{fontSize:"5em"}}>Hi There👋, I'm Tushar</h1>
        <h2 style={{fontSize:"3em"}}>I'm a FullStack Developer👌</h2>
        <p style={{fontSize:"1.5em"}}>
        I've spent the last 3 years building and learing software. Let's connect!🤓
        </p>
      </div>
    </section>
  );
};

export default Hero;
