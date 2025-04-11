import styles from "./NotFound.module.css";
function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles["image-container"]}>
        <img src="../../public/Ghost-big.png" alt="" />
      </div>
      <div>
        <h4
          style={{
            textAlign: "center",
            marginTop: "24px",
            color: "rgb(95, 116, 156)",
          }}
        >
          This Page is a Ghost
        </h4>
      </div>
      <div>
        <p
          style={{
            textAlign: "center",
            marginTop: "24px",
            color: "rgb(95, 116, 156)",
          }}
        >
          Once alive and now dead, this ghost appears to have some unfinished
          business. Could it be with you? Or the treasure hidden under the
          floorboards of the old mansion in the hills that may never reach its
          rightful owner, a compassionate school teacher in Brooklyn.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
