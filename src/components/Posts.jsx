import { useEffect } from "react";
import { usePosts } from "../contexts/PostsContext";
import Post from "./Post";
import styles from "./Posts.module.css";
import Spinner from "./Spinner";

function Posts() {
  const { posts, status, selectedTag, clearSelectedTag } = usePosts();

  useEffect(() => {
    document.title = "Your Saved Posts";
  }, []);
  return (
    <div>
      {status === "loading" && (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      )}
      {status === "ready" && (
        <div className={styles.posts}>
          <div className={styles.headerPosts}>
            <h6>You have {posts.length} posts</h6>

            <span>
              selected Tag : {selectedTag || "You didn't select any Tag yet"}
            </span>
            <button onClick={clearSelectedTag}>Clear Selected Tag</button>
          </div>
          <div>
            {posts.map((post) => (
              <Post postObj={post} key={post.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Posts;
