import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
    
  return (
    <main>
      <div className={styles.loginContainer}>
        <div className={styles.formContainer}>
          <div className={styles.headerText}>
            <h1>Welcome Back</h1>
            <p>Please enter your details to sign in</p>
          </div>
          <form>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email"
                className={styles.inputBox}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Password"
                className={styles.inputBox}
              />
            </div>
            <button type="submit" className={styles.loginButton}>
              Sign In
            </button>
          </form>
          <div className={styles.footer}>
            <p>
              Don't have an account? <Link to="/contact">Contact us</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
