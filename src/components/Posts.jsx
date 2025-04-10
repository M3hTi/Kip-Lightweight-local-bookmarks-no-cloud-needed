import { usePosts } from "../contexts/PostsContext";
import Post from "./Post";
import styles from "./Posts.module.css";

function Posts() {
  const { posts, status } = usePosts();
  return (
    <div className={styles.posts}>
      <div className={styles.headerPosts}>
        <h6>You have {posts.length} posts</h6>
      </div>
      <div>
        {posts.map((post) => (
          <Post postObj={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
