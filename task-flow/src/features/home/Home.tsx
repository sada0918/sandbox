import Header from "../shared/ui/header/Header";
import useTasks from "./functions/fetch-tasks";
import TaskCard from "./ui/task-card/TaskCard";
import styles from "./Home.module.css";

export default function Home() {
  const tasks = useTasks();
  return (
    <div>
      <Header />
      <div className={styles.container}>
        {tasks.map((task) => (
          <TaskCard
            title={task.title}
            assignee={task.assignee}
            deadline={task.deadline}
          />
        ))}
      </div>
    </div>
  );
}
