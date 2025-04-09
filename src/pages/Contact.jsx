import styles from "./Contact.module.css";
function Contact() {
  return (
    <main>
      <div className={styles.sectionContainer}>
        <div className={styles.headerContainer}>
          <h1>Get in touch.</h1>
          <p>Interested to collaborate? Feel free to drop me an email.</p>
        </div>
        <div className={styles.contactFormContainer}>
          <form className={styles.contactForm}>
            <input
              type="text"
              className={styles.inputBox}
              placeholder="Enter your email"
            />
            <textarea
              name="message"
              id="message"
              className={`${styles.inputBox} ${styles.bodyInput}`}
              placeholder="Your Message"
            ></textarea>
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
