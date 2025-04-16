import { Controller, useForm } from "react-hook-form";
import Error from "./Error";
import styles from "./AddPost.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useReducer, useState } from "react";
import { usePosts } from "../contexts/PostsContext";

const initialState = {
  isFormSubmitted: false,
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FORM_SUBMITTED":
      return { ...state, isFormSubmitted: true, message: action.payload };
    case "default":
      return initialState;
    default:
      throw new Error("Unkonwn Accction");
  }
}

function AddPost() {
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isFormSubmitted, message } = state;
  useReducer();
  const [date, setDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const { addPost } = usePosts();

  useEffect(() => {
    let timer;
    if (isFormSubmitted) {
      timer = setTimeout(() => dispatch({ type: "default" }), 2000);
      reset();
    }

    return () => clearTimeout(timer);
  }, [reset, isFormSubmitted]);


  useEffect(() => {
    document.title = "Add New Post"
  },[])

  function submit(data) {
    console.log("submitted");
    // console.log(data);
    const { content, tags, title, url, date: newDate } = data;

    const formatted = new Date(newDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const post = {
      title,
      body: content,
      date: formatted,
      tags: tags.split(","),
      url,
    };

    // console.log(post);

    addPost(post);

    dispatch({ type: "SET_FORM_SUBMITTED", payload: "Post Created" });
  }
  return (
    <>
      {isFormSubmitted && (
        <span className={styles["post-created"]}>{message}</span>
      )}
      <div
        className={`${styles.formContainer} ${
          isFormSubmitted ? styles.loading : ""
        }`}
      >
        <div className={styles.formHeader}>
          <h1>Add New Post</h1>
          <p>Create a new bookmark by filling out the form below</p>
        </div>

        <form className={`${styles.form}`} onSubmit={handleSubmit(submit)}>
          <div className={styles.inputGroup}>
            <input
              placeholder="Title"
              className={styles.input}
              {...register("title", {
                required: true,
              })}
            />
            {errors.title && (
              <Error className="errMsg">Please Enter title</Error>
            )}
          </div>

          <div className={styles.inputGroup}>
            <Controller
              control={control}
              name="date"
              defaultValue={new Date()}
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select date"
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  className={styles.input}
                />
              )}
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
    </>
  );
}

export default AddPost;
