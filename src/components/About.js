/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Header from "./Header";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { useMediaPredicate } from "react-media-hook";
const About = () => {
  const moreThan800 = useMediaPredicate("(min-width: 800px)");
  const lessThan800 = useMediaPredicate("(max-width: 800px)");
  return (
    <>
      <Header />
      <div className="about">
        <div className="about__title">
          👨‍💻 <br />
          Hi, my name is Lewi Hansel
        </div>
        <div className="about__slider">
          I'm a
          <div className="about__sliderTextParent">
            <div>Python</div>
            <div>Django</div>
            <div>Java Script</div>
            <div>Node.Js</div>
            <div>React</div>
          </div>
          {moreThan800 && "Developer"}
        </div>
        {lessThan800 && <div className="about__slider">Developer</div>}
        <div className="about__description">
          I start my developer journey as a Python developer. My first coding
          project was in the field of data science. As a marketing manager in my
          previous company, I prefer to be driven by data.
        </div>
        <div className="about__description">
          Nowadays, I prefer to develop using React as a frontend, and Firebase
          as a backend. Why? Because it's faster to develop, from ideas to
          implementation. 🚀
        </div>
        <div className="about__list">
          Developing Knowledge:
          <ul>
            <li>
              <FaReact /> React
              <ul>
                <li>Function Base Component (converting from class base)</li>
                <li>Routing (using react router)</li>
                <li>State Management (react useContext hooks, Redux, etc)</li>
                <li>
                  Fetching Data from API, Querying database (SQL or noSQL)
                </li>
              </ul>
            </li>
            <li>
              <FaGitAlt /> Git
              <ul>
                <li>
                  Using Git Vesion control system (commit, revert and push)
                </li>
                <li>
                  Using github to store code and deploy triger (Netlify, Heroku,
                  etc)
                </li>
              </ul>
            </li>
            <li>
              <FaNodeJs /> Node.Js
              <ul>
                <li>
                  Creating backend function (API request, database Querying)
                </li>
                <li>Database Integration, basic API desing (MongoDB, etc)</li>
                <li>Integrating with React</li>
              </ul>
            </li>
            <li>
              <DiDjango /> Django
              <ul>
                <li>Function base view (and basic Class Base View)</li>
                <li>Database set up (postgreSQL, SQLite, etc)</li>
                <li>Django Form</li>
                <li>Django Routing</li>
              </ul>
            </li>
            <li>
              <FaPython /> Data Science
              <ul>
                <li>Data preprocessing (Pandas, Numpy, Scipy, etc) </li>
                <li>Data modelling (Scikit Learn, XG-Boost, etc)</li>
                <li>Hyperparameter tuning (Scikit Learn)</li>
                <li>Data Visualization (Seaborn, Matplotlib)</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="about__footer">
          <img
            className="about__footerPic"
            src="https://firebasestorage.googleapis.com/v0/b/brown-sandbox.appspot.com/o/Brown_stack%2Fprofile-pic.png?alt=media&token=6eb85082-9434-4393-a99e-59344d25cdd6"
            alt="portrait of Lewi Hansel or James Brown"
          />
          <div className="about__footerText">
            <strong>Let's get in touch.</strong>
            <span>
              In case you have any app/website or business idea to implement, or
              just want to share your experience about the "pandemic", or
              anything I can help you with. Reach me at one of this accout. ✌️
            </span>
            <div className="about__links">
              <div className="about__linksRow">
                <a
                  href="https://github.com/lewihansel"
                  target="_blank"
                  className="about__url"
                >
                  <IoLogoGithub /> <p>Github</p>
                </a>
                <a
                  href="https://www.instagram.com/lewihansel/"
                  target="_blank"
                  className="about__url"
                >
                  <IoLogoInstagram /> <p>Instagram</p>
                </a>
              </div>
              <div className="about__linksRow">
                <a
                  href="https://wa.me/6285780008389?text=Hi%20Hansel%20👋"
                  target="_blank"
                  className="about__url"
                >
                  <FaWhatsapp /> <p>What'sApp</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/lewihansel/"
                  target="_blank"
                  className="about__url"
                >
                  <IoLogoLinkedin /> <p>Linkedin</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
