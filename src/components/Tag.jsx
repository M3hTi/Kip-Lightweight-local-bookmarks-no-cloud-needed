import { usePosts } from "../contexts/PostsContext";
import styles from "./Tag.module.css";

function Tag({ tag }) {
  const { filterPostsByTag } = usePosts();
  function handleSelectedTag() {
    // console.log(tag);
    filterPostsByTag(tag);
  }
  return (
    <span role="button" className={styles.tag} onClick={handleSelectedTag}>
      #{tag}
    </span>
  );
}

export default Tag;
