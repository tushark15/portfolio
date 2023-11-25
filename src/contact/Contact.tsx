import Reveal from "../reveal/Reveal";
import Header from "../components/Header";
import styled from "styled-components";

const Contact = () => {
  const ContactSection = styled.section`
    color: white;
    margin: 100px;
    margin-bottom: 300px;
    margin-top: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3;
    @media (max-width: 768px) {
      margin-left: 180px;
      width: 100%;
      font-size: 2em;
      margin-bottom: 1200px;
    }
  `;
  return (
    <ContactSection id="contact">
      <Header>Contact</Header>

      <Reveal>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <p style={{ fontSize: "1.5em" }}>
            Shoot me an{" "}
            <a
              href="mailto:tusharkhandelwal1512@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffc83d", textDecoration: "none" }}
            >
              email
            </a>{" "}
            if you want to connect!
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
    </ContactSection>
  );
};

export default Contact;
