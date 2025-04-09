import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.headerText}>
        <h1>Welcome to Kip</h1>
        <p>
          Kip is a simple, local bookmarking tool that helps you save and
          organize your favorite links without relying on the cloud. Keep your
          bookmarks private and easily accessible, all in one place.
        </p>
      </div>
      <div className={styles.headerButtons}>
        <Link to="/login" className={`${styles.btn} ${styles.btnWhite}`}>
          login
        </Link>
        <Link
          to="/contact"
          className={`${styles.btn} ${styles.btnTransparent}`}
        >
          Contact with me
        </Link>
      </div>
      <div className={styles.gif}>
        <DotLottieReact
          src="https://lottie.host/427852c3-db62-407a-baa3-e6d940ef5140/j4rp9eVLYi.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
}

export default Home;
