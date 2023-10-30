import "./Hero.css";
import Reveal from "../reveal/Reveal";
import resumeFile from "../resume/Tushar.pdf";
import SocialLinks from "../socialMedia/SocialLinks";
import Header from "../components/Header";
import { Image } from "react-bootstrap";
import displayPicture from "../assets/displayPicture.jpg";

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Tushar.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="d-flex justify-content-start "
      style={{
        color: "black",
        marginBottom: "200px",
        marginLeft: "150px",
        marginTop: "25px",
        height: "100vh",
      }}
    >
      <div>
        <SocialLinks />
        <div className="d-flex flex-row-reverse gap-5">
          <div
            className="imageDiv"
          ></div>
          <div className="d-flex flex-column gap-3 ">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
