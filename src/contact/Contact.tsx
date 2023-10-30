import React from "react";
import Reveal from "../reveal/Reveal";
import Header from "../components/Header";

const Contact = () => {
  return (
    <section
      id="contact"
      className="d-flex flex-column justify-content-center align-items-center gap-3"
      style={{ color: "white", margin: "100px", marginBottom: "400px" }}
    >
      <Header>Contact</Header>

      <Reveal>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <p style={{ fontSize: "1.5em" }}>
            Shoot me an email if you want to connect!
          </p>
          <p style={{ fontSize: "1.5em" }}>
            You can also find me on
            <a
              href="https://www.linkedin.com/in/tushar-khandelwal-6178761b9/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffc83d", textDecoration: "none" }}
            >
              {" "}
              Linkedin
            </a>{" "}
            or
            <a
              href="https://instagram.com/t.u.s.h.a.r15?igshid=YTQwZjQ0NmI0OA=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffc83d", textDecoration: "none" }}
            >
              {" "}
              Instagram
            </a>{" "}
            if that's more your speed.
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
