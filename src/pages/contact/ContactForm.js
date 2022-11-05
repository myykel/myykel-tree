import "./ContactForm.css";

// IMPORTS
import { useState } from "react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (!message) {
      setError("Please Enter a message");
    } else {
      console.log(firstName, lastName, email, message, checked);
      setEmail("");
      setFirstName("");
      setLastName("");
      setMessage("");
      setChecked(false);
    }
  };

  return (
    <div className="contact-form">
      <h1>Contact Me</h1>
      <h4>Hi there, contact me to ask me about anything you have in mind.</h4>

      <form onSubmit={handleSubmit}>
        <div className="name-wrapper">
          <label className="form-label">
            <span>First name</span>
            <input
              id="first_name"
              placeholder="Enter your first name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </label>

          <label className="form-label">
            <span>Last name</span>
            <input
              id="last_name"
              placeholder="Enter your last name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </label>
        </div>

        <label className="form-label">
          <span>Email</span>
          <input
            id="email"
            placeholder="yourname@email.com"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label className={error ? "form-label error" : "form-label"}>
          <span>Message</span>
          <textarea
            id="message"
            placeholder="Send me a message and i'll reply as soon as possible..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          {error && <p>{error}</p>}
        </label>

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="checkbox"
            onClick={() => {
              setChecked(checked ? false : true);
            }}
            className={checked ? "checked" : ""}
          />
          <label htmlFor="checkbox">
            You agree to providing your data to Myykel_ who may contact you
          </label>
        </div>
        <button id="btn__submit">Send message</button>
      </form>
    </div>
  );
}
