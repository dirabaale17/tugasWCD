import React from "react";
import profile from "../assets/big-profile.png";

const Profile = () => {
  return (
    <section className="card-profile">
      <img src={profile} alt="prfofile" />

      <div>
        <p>Contact Details</p>
        <h1>nadiradkvlya@gmail.com</h1>
        <h1>+62 85759927959</h1>
      </div>

      <div>
        <p>Social</p>
        <h1>Linkedin</h1>
        <h1>Instagram</h1>
        <h1>Twitter</h1>
        <h1>Figma</h1>
      </div>
    </section>
  );
};

export default Profile;
