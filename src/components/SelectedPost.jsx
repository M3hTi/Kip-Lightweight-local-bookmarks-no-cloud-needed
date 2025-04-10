import { useParams } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";
import Tag from "./Tag";
import styles from "./SelectedPost.module.css";
function SelectedPost() {
  const { id } = useParams();
  const { posts } = usePosts();

  const matchPost = posts.find((post) => post.id === id);

  const { title, body, date, url, tags } = matchPost;

  const formattedDate = new Date(date).toLocaleDateString("en", {
    year: "numeric",
    day: "numeric",
    month: "long",
  });

  return (
    <article className={styles.selectedPost}>
      <div className={styles.postHeader}>
        <h1 className={styles["post-title"]}>{title}</h1>
        <span className={styles["post-date"]}>{formattedDate}</span>
      </div>

      <div className={styles["post-body"]}>
        <p>{body}</p>
      </div>

      <div className={styles["post-footer"]}>
        <div className={styles["post-tags"]}>
          {tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default SelectedPost;
