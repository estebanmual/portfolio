import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Arrow from "../../../assets/right-arrow.svg";
import style from "./Contact.module.css";

function Contact() {
  const [state, handleSubmit] = useForm("xrgdgzaa");
  return (
    <section className={style.ContactSection} id="contactSection">
      <h1>
        Let's <img src={Arrow} alt="Right arrow" /> <br /> Connect.
      </h1>
      {state.succeeded ? (
        <p>{`Thank you for connecting :)`}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={style.group}>
            <input
              required
              type="text"
              id="name"
              name="name"
              className={style.input}
            />
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label className={style.label} htmlFor="name">
              Your name:
            </label>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className={style.group}>
            <input
              required
              type="email"
              id="email"
              name="email"
              className={style.input}
            />
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label className={style.label} htmlFor="email">
              Your email address:
            </label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className={style.group}>
            <textarea
              required
              type="text"
              id="message"
              name="message"
              className={style.input}
            />
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label className={style.label} htmlFor="message">
              Your message:
            </label>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className={style.submitButton} type="submit">
            Send <img src={Arrow} alt="Right Arrow" />
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
