import "./Contact.css";

 import {  useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { PUBLIC_KEY, ServiceId, TemplateId } from "../global";
import { ThemeContext } from "../components/Context";


const Contact = () => {

  console.log(ServiceId)
 const formRef = useRef();
  const [done, setDone] = useState(false);
 const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        ServiceId,
        TemplateId,
        formRef.current,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src="https://www.citypng.com/public/uploads/preview/-121610565690tuizfjgulq.png"
                alt=""
                className="c-icon"
              />
              +919131272889
            </div>
            <div className="c-info-item">
              <img
                className="c-icon"
                src="https://newoldstamp.com/system/posts/og_images/000/000/298/original/Images_in_Email_Everything_You_Need_to_Know_and_Even_More_-_Facebook.png?1592831717"
                alt=""
              />
              ayushi2021.29@gmail.com
            </div>
          
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Get in Touch!</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
               style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
               style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
               style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
