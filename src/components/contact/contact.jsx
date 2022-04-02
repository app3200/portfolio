import emailjs from "@emailjs/browser";
import { useRef } from "react";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2ys6tvr",
        "template_kg4lnql",
        form.current,
        "user_gSvWawJwFfRPCccMA0ABb"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("email sent sucessfully");
        },
        (error) => {
          console.log(error.text);
          alert("Please try again");
        }
      );
  }

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <form
        ref={form}
        id="form"
        onSubmit={(e) => {
          sendEmail(e);
        }}
      >
        <div id="frmdiv">
          <div className="frminp">
            <input placeholder="Enter name" name="name" />
          </div>
          <div className="frminp">
            <input placeholder="Enter email" name="email" />
          </div>
          <div className="frminp">
            <input placeholder="Enter subject" name="subject" />
          </div>
          <div className="frminp" id="frmtxt">
            <textarea
              className="txta"
              placeholder="Enter your message"
              name="message"
            ></textarea>
          </div>
          <div className="frminp">
            <button type="submit" className="btn btn--outline">
              Send message
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
