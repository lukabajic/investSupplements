import React from "react";
import { useHistory } from "react-router-dom";
import "./ThankYou.css";
import Button from "../../Utility/Button/Button";

const messages = {
  thank_you_sub: {
    heading: "Thank you for subscribing.",
    text: "We'll get in touch shortly.",
  },
  thank_you_msg: {
    heading: "Thank you for reaching out.",
    text: "We'll get in touch shortly.",
  },
};

const ThankYou = ({ type }) => {
  const history = useHistory();
  return (
    <div className="thank-you">
      <h2 className="thank-you__heading">{messages[type].heading}</h2>
      <p className="thank-you__text">
        {messages[type].text}&nbsp;
        <i className="far fa-smile"></i>
      </p>
      <Button clicked={() => history.replace("/")}>Back to Home</Button>
    </div>
  );
};

export default ThankYou;
