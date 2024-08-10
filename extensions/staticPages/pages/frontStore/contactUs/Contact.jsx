import React, { useState } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./Contact.scss";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/mgejknzl", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setError(false);
        event.target.reset();
        setTimeout(() => setIsSubmitted(false), 3000); // Hide after 3 seconds
      } else {
        console.error("Form submission error:", await response.text());
        setError(true);
        setTimeout(() => setError(false), 3000); // Hide after 3 seconds
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(true);
      setTimeout(() => setError(false), 3000); // Hide after 3 seconds
    }
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In
        <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with us. We are always open to discuss new
            projects, creative ideas, or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail Us</span>
                <h4 className="info__desc">gauravrai2783@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call Us</span>
                <h4 className="info__desc">+917991732058</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.instagram.com/rug.harbor/?igsh=eGlpcHNzNjV3anNs&utm_source=qr"
              className="contact__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              className="contact__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              className="contact__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://facebook.com"
              className="contact__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="form__control"
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form__control"
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                name="subject"
                className="form__control"
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              name="message"
              className="form__control textarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>

      {isSubmitted && !error && (
        <div className="message-box">
          <p>Message Sent Successfully!</p>
        </div>
      )}

      {error && (
        <div className="message-box">
          <p>Oops! Something went wrong. Please try again.</p>
        </div>
      )}
    </section>
  );
};

export const layout = {
  areaId: 'content',
  sortOrder: 1
};

export default Contact;
