import React from "react";
import { useHistory } from "react-router-dom";
import "./Contact.css";

import Button from "../../Utility/Button/Button";

const form = [
  {
    label: "first name",
    type: "text",
    name: "firstname",
    required: true,
  },
  {
    label: "last name",
    type: "text",
    name: "lastname",
    required: true,
  },
  {
    label: "email",
    type: "email",
    name: "email",
    required: true,
  },
  {
    label: "message",
    type: "text",
    name: "message",
    required: true,
  },
  {
    label: "additional details",
    type: "textarea",
    name: "details",
    required: false,
  },
];

const Contact = () => {
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    history.replace("/thank_you_msg");
  };

  const rendererdItems = form.map((item) => (
    <div className="form__group" key={item.name}>
      <label htmlFor={item.name}>
        {item.label}
        {!item.required ? <span className="form__optional">optional</span> : ""}
      </label>
      {item.type === "textarea" ? (
        <textarea name={item.name} required={item.required} rows="3"></textarea>
      ) : (
        <input type={item.type} name={item.name} required={item.required} />
      )}
    </div>
  ));

  return (
    <div className="contact">
      <div className="contact__text">
        <h2 className="contact__question">Got any question?</h2>
        <p>
          We're here to help and answer any questions you might have.&nbsp;
          <i className="far fa-smile"></i>
        </p>
      </div>
      <div className="form-container">
        <form className="form" onSubmit={submitHandler}>
          {rendererdItems}
          <div className="form__button">
            <Button>Send message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
