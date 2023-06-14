import React, { useContext } from "react";
import "./Intro.css";
import profilephoto from "../../image/img1.jpg";
import { ThemeContext } from "../Context";
const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="i" id="home">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello,My name is</h2>
          <h1 className="i-name">Ayushi Pohekar</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div
                className="i-title-item"
                style={{ color: darkMode ? "#f7a73b" : "#59b256" }}
              >
                Web Developer
              </div>
              <div
                className="i-title-item"
                style={{ color: darkMode ? "#f7a73b" : "#59b256" }}
              >
                MERN stack Developer
              </div>
              <div
                className="i-title-item"
                style={{ color: darkMode ? "#f7a73b" : "#59b256" }}
              >
                FrontEnd Developer
              </div>
              <div
                className="i-title-item"
                style={{ color: darkMode ? "#f7a73b" : "#59b256" }}
              >
                React Developer
              </div>
            </div>
          </div>
          <p className="i-desc">I design and develop websites</p>
          <div>
            <a
              className="i-btn"
              href="https://drive.google.com/file/d/10f4eA3wBriXc8nTb8JgpAhXaEeuLJgiL/view?usp=sharing"
             
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div
          className="i-bg"
          style={{ backgroundColor: darkMode ? "#f7a73b" : "#59b256" }}
        ></div>
        {/* <img src="" alt="" className="i-img" /> */}
      </div>
    </div>
  );
};

export default Intro;
