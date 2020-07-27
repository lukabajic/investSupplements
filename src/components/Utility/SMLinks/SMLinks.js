import React from "react";
import "./SMLinks.css";

const SMLinks = () => {
  return (
    <ul className="sm-links">
      <li>
        <a
          href="https://www.instagram.com/"
          target="blank"
          className="sm-links__link"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/"
          target="blank"
          className="sm-links__link"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/"
          target="blank"
          className="sm-links__link"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/"
          target="blank"
          className="sm-links__link"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </li>
    </ul>
  );
};

export default SMLinks;
