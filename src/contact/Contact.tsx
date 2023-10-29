import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="d-flex flex-column justify-content-center align-items-center gap-3"
      style={{ color: "white", margin: "100px", marginBottom: "400px" }}
    >
      <h1 style={{fontSize: "5em"}}>
        Contact<span style={{color: "green"}}>.</span>
      </h1>

      <div>
        <p style={{fontSize: "1.5em"}}>
          Shoot me an email if you want to connect! You can also find me on
          Linkedin or Twitter if that's more your speed.
        </p>
      </div>
    </section>
  );
};

export default Contact;
