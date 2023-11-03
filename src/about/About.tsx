import Skills from "../skills/Skills";
import Reveal from "../reveal/Reveal";
import SocialLinks from "../socialMedia/SocialLinks";
import RevealUp from "../reveal/RevealUp";
import Header from "../components/Header";
import styled from "styled-components";

const About = () => {
  const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 50px 150px;
    margin-bottom: 200px;
    @media (max-width: 768px) {
      width: 100%;
      font-size: 2rem;
    }
  `;

  const AboutHeader = styled.div`
    display: flex;
    gap: 3rem;
    width: 100%;
    margin-bottom: 20px;
    color: black;
    @media (max-width: 768px) {
      font-size: 1.5rem;
      gap: 1rem;
      flex-direction: column;
    }
  `;

  const Seperator = styled.hr`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    @media (max-width: 768px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  `;
  return (
    <AboutSection id="about">
      <AboutHeader>
        <Header>About</Header>

        <Seperator />
      </AboutHeader>
      <div className="d-flex gap-5 ms-2 justify-content-center aboutContent ">
        <div className="d-flex flex-column gap-3 w-50 aboutText">
          <Reveal>
            <p>
              Hey there, I'm Tushar, a 22-year-old explorer of the digital realm
              and a soon-to-be Full Stack Developer extraordinaire! I might not
              have a treasure trove of work experience just yet, but what I lack
              in experience, I make up for with boundless enthusiasm and an
              unquenchable thirst for knowledge. 🎓💡
            </p>
          </Reveal>
          <Reveal>
            <p>
              As I cruise through the final semester of my BCA program, I'm on a
              quest to unlock the secrets of the MERN stack – MongoDB, Express,
              React, and Node.js. I'm your go-to guy for all things web
              development, ready to tackle any challenge that comes my way. 💻🌐
            </p>
          </Reveal>
          <Reveal>
            <p>
              Based in the heart of Delhi 🏙️, I'm game for adventure in all
              forms – whether it's unraveling the mysteries of code or exploring
              the vibrant streets of Gurugram, Delhi, and Noida. And for those
              projects that require a bit of distance, I'm your guy for remote
              work too! 🌍🏡
            </p>
          </Reveal>
          <Reveal>
            <p>
              When I'm not hunched over my keyboard, you'll find me immersed in
              a world of anime, watching epic battles and unraveling intricate
              storylines. My love for music is unwavering – I can keep the tunes
              flowing all day long, fueling my coding marathons. 🎵📺
            </p>
          </Reveal>
          <Reveal>
            <p>
              Being the extrovert that I am, I thrive on connections with
              people. Collaboration and communication are my superpowers. I'm
              not just about coding, but about creating experiences that
              resonate with users. 🤝💬
            </p>
          </Reveal>
          <Reveal>
            <p>
              And if I'm not coding, anime-watching, or jamming to music, you
              might catch me in the kitchen, whipping up a culinary masterpiece,
              or sketching and indulging in some delightful DIY projects.
              Creativity knows no bounds in my world! 🍳✏️🎨
            </p>
          </Reveal>
          <Reveal>
            <p>
              I'm on the lookout for exciting opportunities to dive headfirst
              into the world of web development. Whether it's an internship, a
              job, or a chance to prove my mettle, I'm up for the challenge.
              Let's embark on this epic coding adventure together! 💼🚀
            </p>
          </Reveal>
          <Reveal>
            <p>
              So, whether it's lines of code, beats of music, or the allure of
              new horizons – I'm ready. Let's create something amazing together!
              🚀🌟
            </p>
          </Reveal>
          <RevealUp>
            <p
              style={{ color: "black", fontWeight: "900" }}
              className="d-flex gap-2"
            >
              My Links - <SocialLinks />
            </p>
          </RevealUp>
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
