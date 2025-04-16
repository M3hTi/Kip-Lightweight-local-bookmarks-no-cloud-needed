import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";
import Tag from "./Tag";
import styles from "./SelectedPost.module.css";
import { useEffect } from "react";
import Spinner from "./Spinner";
function SelectedPost() {
  const { id } = useParams();
  const { getPost, selectedPost, status } = usePosts();
  const navigate = useNavigate();

  useEffect(() => {
    getPost(id);
  }, [id, getPost]);

  const { title, body, date, tags, url } = selectedPost;

  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  const formattedDate = new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div>
      {status === "loading" && (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      )}
      {status === "ready" && (
        <article className={styles.selectedPost}>
          <div className={styles.postHeader}>
            <h1 className={styles["post-title"]}>{title}</h1>
            <span className={styles["post-date"]}>{formattedDate}</span>
          </div>

          <div className={styles["post-body"]}>
            {url && (
              <p>
                {" "}
                <a href={url} target="_blank">
                  {url}
                </a>
              </p>
            )}
            <p>{body}</p>
          </div>

          <div className={styles["post-footer"]}>
            <div className={styles["post-tags"]}>
              {tags && tags.map((tag, i) => <Tag tag={tag} key={i} />)}
            </div>
            <button onClick={() => navigate("/app/posts")}> &larr;Back </button>
          </div>
        </article>
      )}
    </div>
  );
}

export default SelectedPost;
