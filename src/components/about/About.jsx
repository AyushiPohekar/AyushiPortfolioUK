import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://c.pxhere.com/photos/63/d6/cellphone_desk_iphone_laptop_macbook_notebook_notepad_pencil-972233.jpg!s2"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h2 className="a-title">About Me</h2>

        <div className="a-desc">
          I am an Electrical Engineer by education who wants to change her
          career profile and hence started exploring the fascinating world of
          Web development since May 2022. I have enjoyed working on projects
          that involve problem solving; creating attractive, unique,
          user-friendly and dynamic UI designs; and supporting it with a strong
          backend. I have build skills in MERN stack i.e. MongoDB, ExpressJS,
          ReactJS, NodeJS and currently I'm looking for job/internship
          opportunities where I could apply those skills. I am a hard-working
          individual with a consistently good academic record and I'd strive
          hard to add value to the company I'm employed with and to continuously
          expand my skillset.
        </div>
      </div>
    </div>
  );
};

export default About;
