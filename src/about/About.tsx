import React from "react";
import Skills from "../skills/Skills";

const About = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center gap-3"
      style={{ color: "white", margin: "100px", marginBottom: "400px" }}
    >
      <div className="d-flex gap-3" style={{ width: "100%", marginBottom:"70px" }}>
        <h3>About Me: Unleashing the MERN Maestro 🚀🌟</h3>{" "}
        <hr style={{ width: "50%", marginLeft: "10px" }} />
      </div>
      <div className="d-flex gap-5 ms-2 justify-content-center  ">
        <div className="d-flex flex-column gap-3 w-50">
          <p>
            Hey there, I'm Tushar, a 22-year-old explorer of the digital realm
            and a soon-to-be Full Stack Developer extraordinaire! I might not
            have a treasure trove of work experience just yet, but what I lack
            in experience, I make up for with boundless enthusiasm and an
            unquenchable thirst for knowledge. 🎓💡
          </p>
          <p>
            As I cruise through the final semester of my BCA program, I'm on a
            quest to unlock the secrets of the MERN stack – MongoDB, Express,
            React, and Node.js. I'm your go-to guy for all things web
            development, ready to tackle any challenge that comes my way. 💻🌐
          </p>
          <p>
            Based in the heart of Delhi 🏙️, I'm game for adventure in all forms
            – whether it's unraveling the mysteries of code or exploring the
            vibrant streets of Gurugram, Delhi, and Noida. And for those
            projects that require a bit of distance, I'm your guy for remote
            work too! 🌍🏡
          </p>
          <p>
            When I'm not hunched over my keyboard, you'll find me immersed in a
            world of anime, watching epic battles and unraveling intricate
            storylines. My love for music is unwavering – I can keep the tunes
            flowing all day long, fueling my coding marathons. 🎵📺
          </p>
          <p>
            Being the extrovert that I am, I thrive on connections with people.
            Collaboration and communication are my superpowers. I'm not just
            about coding, but about creating experiences that resonate with
            users. 🤝💬
          </p>
          <p>
            And if I'm not coding, anime-watching, or jamming to music, you
            might catch me in the kitchen, whipping up a culinary masterpiece,
            or sketching and indulging in some delightful DIY projects.
            Creativity knows no bounds in my world! 🍳✏️🎨
          </p>
          <p>
            I'm on the lookout for exciting opportunities to dive headfirst into
            the world of web development. Whether it's an internship, a job, or
            a chance to prove my mettle, I'm up for the challenge. Let's embark
            on this epic coding adventure together! 💼🚀
          </p>
          <p>
            So, whether it's lines of code, beats of music, or the allure of new
            horizons – I'm ready. Let's create something amazing together! 🚀🌟
          </p>
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
