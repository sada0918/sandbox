import styles from "./TaskCard.module.css";

export default function TaskCard({
  title,
  assignee,
  deadline,
}: {
  title: string;
  assignee: string;
  deadline: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div>担当者：{assignee}</div>
      <div>期限：{deadline}</div>
    </div>
  );
}
