import React from "react";
import "../App.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <div className="social">
        <h1 className="home-about-social">FIND ME ON</h1>

        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/kuppamkamalesh"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://twitter.com/Kamalesh_047"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/kamalesh-kuppam-5ab40b252/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/kamalesh_047/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{
          marginTop: "10%",
          width: "95%",
          textAlign: "end",
        }}
      >
        <button
          className="btn"
          onClick={(e) => {
            window.location.href = "#nv";
          }}
          style={{
            width: "70px",
            height: "40px",
            borderRadius: "10px",
            border: "2px solid violet",
            color: "white",
            marginBottom: "15px",
          }}
        >
          &uarr; Top
        </button>
      </div>
    </div>
  );
};
export default Contact;
