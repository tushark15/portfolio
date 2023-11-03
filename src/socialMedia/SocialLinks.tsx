import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.png";
import instagram from "../assets/instagram.svg";
import styled from "styled-components";
import RevealUp from "../reveal/RevealUp";

export const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transform: rotate(3deg) scale(1.1);
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
const SocialLinks = () => {
  return (
    <div style={{ marginBottom: "150px" }} className="d-flex gap-2">
      <RevealUp>
        <a
          href="https://github.com/tushark15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={github} />
        </a>
      </RevealUp>
      <RevealUp delay={0.3}>
        <a
          href="https://www.linkedin.com/in/tushar-khandelwal-6178761b9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkedin} />
        </a>
      </RevealUp>
      <RevealUp delay={0.35}>
        <a
          href="mailto:tusharkhandelwal1512@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={mail} />
        </a>
      </RevealUp>
      <RevealUp delay={0.4}>
        <a
          href="https://instagram.com/t.u.s.h.a.r15?igshid=YTQwZjQ0NmI0OA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={instagram} />
        </a>
      </RevealUp>
    </div>
  );
};

export default SocialLinks;
