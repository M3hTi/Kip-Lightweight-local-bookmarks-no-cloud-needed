import React from "react";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";
import Tag from "./Tag";

const Post = ({ postObj }) => {
  const { body, date, tags, title, url, id } = postObj;

  const formattedDate = new Date(date).toLocaleDateString("en", {
    year: "numeric",
    day: "numeric",
    month: "long",
  });

  const truncateText = (text, wordCount) => {
    const words = text.split(" ");
    if (words.length <= wordCount) return text;
    return words.slice(0, wordCount).join(" ") + "...";
  };

  return (
    <article className={styles.post}>
      <div className={styles.postHeader}>
        <h2 className={styles["post-title"]}>{title}</h2>
        <span className={styles["post-date"]}>{formattedDate}</span>
      </div>
      <div className={styles["post-body"]}>
        <p>{truncateText(body, 20)}</p>
      </div>
      <div className={styles["post-footer"]}>
        <div className={styles["post-comments"]}>
          <span>
            {tags.map((tag) => (
              <Tag tag={tag} />
            ))}
          </span>

          <button className={styles["post-comment-btn"]}>
            <Link className="clean-link" to={`${id}`}>
              see Full Post
            </Link>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Post;
