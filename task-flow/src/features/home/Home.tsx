import Header from "../shared/ui/header/Header";
import useTasks from "./functions/fetch-tasks";
import TaskCard from "./ui/task-card/TaskCard";

export default function Home() {
  const tasks = useTasks();
  return (
    <div>
      <Header />
      <div>
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
