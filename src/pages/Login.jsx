import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import Error from "../components/Error";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, isAuthenticate } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/app");
    }
  }, [isAuthenticate, navigate]);

  function submit(data) {
    console.log("submitted");
    // console.log(data);
    const { username, password } = data;

    login(username, password);
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
                {...register("username", {
                  required: true,
                  minLength: 5,
                  maxLength: 5,
                })}
                placeholder="username"
                className={styles.inputBox}
              />
              {errors.username && (
                <Error className="errMsg">
                  Your user name must be contain exactly 5 characters
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
