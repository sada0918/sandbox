import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>タスク管理ツール</div>
      <div className={styles.user_name}>田中</div>
      <button
        className={styles.logout}
        onClick={() => alert("ログイン機能作成時に動きを追加する")}
      >
        ログアウト
      </button>
    </div>
  );
}
