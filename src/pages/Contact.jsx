import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";
import Error from "../components/Error";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submit(data) {
    console.log("submitted");
    console.log(data);
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
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <Error>
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
                maxLength: 500,
              })}
            ></textarea>
            {errors.message && (
              <Error>Your Message must be contain at least 10 character</Error>
            )}
            <button type="submit" className={styles.contactButton}>
              Send Email
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
