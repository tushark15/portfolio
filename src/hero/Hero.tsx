import "./Hero.css";
import Reveal from "../reveal/Reveal";
import resumeFile from "../resume/Tushar.pdf";
import SocialLinks from "../socialMedia/SocialLinks";
import Header from "../components/Header";
import styled from "styled-components";
const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Tushar.pdf";
    link.click();
  };
  const HeroSection = styled.section`
    color: black;
    margin-bottom: 200px;
    margin-left: 150px;
    margin-top: 25px;
    height: 100vh;
    display: flex;
    justify-content: start;
    @media (max-width: 768px) {
      margin-top: 80px;
      margin-bottom: 0px;
      height: 100%;
      width: 100%;
      font-size: 2em;
    }
  `;

  const HeroContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (max-width: 426px) {
      margin-top: 400px;
      margin-bottom: 200px;
    }
  `;

  return (
    <HeroSection id="home">
      <div>
        <SocialLinks />
        <div className="d-flex flex-row-reverse gap-5">
          <div className="imageDiv"></div>
          <HeroContentDiv>
            <Reveal>
              <Header>Hi, I'm Tushar</Header>
            </Reveal>
            <Reveal>
              <h2 style={{ fontSize: "2em" }}>I'm a FullStack Developer👌</h2>
            </Reveal>
            <Reveal>
              <p style={{ fontSize: "1.5em" }}>
                I've spent the last 3 years building and learing software. Let's
                connect!🤓
              </p>
            </Reveal>
            <Reveal>
              <div className="d-flex flex-row gap-3">
                <a href="#contact">
                  <button className="btn btn-lg yellowButton">
                    Get In Touch
                  </button>
                </a>
                <a href="#projects">
                  <button className="btn btn-lg yellowButton">
                    See My Work
                  </button>
                </a>
                <a href="">
                  <button
                    className="btn btn-lg yellowButton"
                    onClick={handleResumeDownload}
                  >
                    My Resume
                  </button>
                </a>
              </div>
            </Reveal>
          </HeroContentDiv>
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;
