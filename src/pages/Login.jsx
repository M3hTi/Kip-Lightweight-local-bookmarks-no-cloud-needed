import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import Error from "../components/Error";

function Login() {
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
      <div className={styles.loginContainer}>
        <div className={styles.formContainer}>
          <div className={styles.headerText}>
            <h1>Welcome Back</h1>
            <p>Please enter your details to sign in</p>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <div className={styles.inputGroup}>
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email"
                className={styles.inputBox}
              />
              {errors.email && (
                <Error className="errMsg">
                  {errors.email.message || "Please Enter Your Email"}
                </Error>
              )}
            </div>
            <div className={styles.inputGroup}>
              <input
                {...register("password", {
                  required: true,
                  minLength: 5,
                  maxLength: 5,
                })}
                placeholder="Password"
                className={styles.inputBox}
              />
              {errors.password && (
                <Error className="errMsg">
                  Your password must be contain exactly 5 characters
                </Error>
              )}
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
