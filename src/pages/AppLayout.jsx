import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div class={styles.container}>
      <div class={styles.item}>Header</div>
      <div class={styles.item}>Sidebar</div>
      <div class={styles.item}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
