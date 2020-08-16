import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <span>
        <small>Created by: </small>
        <strong>
          <Link
            to="/about"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Lewi Hansel Panjaitan
          </Link>
        </strong>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/brown-sandbox.appspot.com/o/Brown_stack%2Fprofile-pic.png?alt=media&token=6eb85082-9434-4393-a99e-59344d25cdd6"
          alt="JamesBrown alias Lewi Hansel"
        />
      </span>
    </footer>
  );
};

export default Footer;
