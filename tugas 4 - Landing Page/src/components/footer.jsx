import React from "react";
import profile from "../assets/profile.jpg";
import Button from "./button";

const Footer = ({ isShow }) => {
  return (
    <footer className="footer">
      {isShow && (
        <section className="footer-top">
          <div>
            <h1>Have something in mind?</h1>
            <h1>
              <img src={profile} alt="profile" />
              let’s build it together.
            </h1>
          </div>
          <div>
            <Button type="light" title="Get in touch" path="/contact" />
          </div>
        </section>
      )}
      <section className="footer-bottom">
        <div>
          <p>Build with 💖 by nadira dika </p>
        </div>
        <div>
          <p>Linkedin</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
