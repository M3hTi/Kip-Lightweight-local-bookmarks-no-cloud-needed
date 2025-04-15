import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";
import Error from "../components/Error";
import emailjs from "@emailjs/browser";

import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function submit(data) {
    console.log("submitted");
    // console.log(data);
    const { email, message } = data;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          reply_to: email,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          reset();
        },
        (error) => {
          console.log("Failed:", error.text);
        }
      );
  }
  return (
    <main>
      <div className={styles.sectionContainer}>
        <div className={styles.headerContainer}>
          <h1>Get in touch.</h1>
          <p>Interested to collaborate? Feel free to drop me an email.</p>
        </div>
        <div className={styles.contactFormContainer}>
          <form className={styles.contactForm} onSubmit={handleSubmit(submit)}>
            <input
              className={styles.inputBox}
              placeholder="Enter your email"
              name="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <Error className="errMsg">
                {errors.email.message || "Please Enter Your Email!"}
              </Error>
            )}
            <textarea
              name="message"
              id="message"
              className={`${styles.inputBox} ${styles.bodyInput}`}
              placeholder="Your Message"
              {...register("message", {
                required: true,
                minLength: 10,
              })}
            ></textarea>
            {errors.message && (
              <Error className="errMsg">
                Your Message must be contain at least 10 character
              </Error>
            )}
            <button type="submit" className={styles.contactButton}>
              Send Email
            </button>
          </form>
        </div>
      </div>
      <button>
        <Link to="/" className={styles.homeButton}>
          <IoHome className={styles.homeIcon} />
        </Link>
      </button>
    </main>
  );
}

export default Contact;
