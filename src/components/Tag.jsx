import styles from "./Tag.module.css";

function Tag({ tag }) {
  return <span className={styles.tag}>#{tag}</span>;
}

export default Tag;
