import { useForm } from "react-hook-form";
import Error from "./Error";
import styles from "./AddPost.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function AddPost() {
  const [date, setDate] = useState(new Date());
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
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h1>Add New Post</h1>
        <p>Create a new bookmark by filling out the form below</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <div className={styles.inputGroup}>
          <input
            placeholder="Title"
            className={styles.input}
            {...register("title", {
              required: true,
            })}
          />
          {errors.title && <Error className="errMsg">Please Enter title</Error>}
        </div>

        <div className={styles.inputGroup}>
          <DatePicker
            className={styles.input}
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            placeholder="Tags (comma separated)"
            className={styles.input}
            {...register("tags", {
              required: true,
            })}
          />
          {errors.tags && (
            <Error className="errMsg">Please Enter at least one tag</Error>
          )}
        </div>

        <div className={styles.inputGroup}>
          <input
            placeholder="URL"
            className={styles.input}
            {...register("url")}
          />
        </div>

        <div className={styles.inputGroup}>
          <textarea
            placeholder="Body"
            className={`${styles.input} ${styles.textarea}`}
            {...register("content", {
              required: true,
            })}
          ></textarea>
          {errors.content && (
            <Error className="errMsg">Please Enter your content</Error>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Create Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
