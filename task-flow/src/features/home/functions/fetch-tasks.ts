import type { TaskCard } from "../interface/task-card";

// mock
export default function fetchTasks(): TaskCard[] {
  return [
    { id: 1, title: "ボタンUI実装", assignee: "田中", deadline: "2025/12/15" },
    { id: 2, title: "インフラ構築", assignee: "山田", deadline: "2025/12/20" },
    {
      id: 3,
      title: "SQL改修",
      assignee: "佐藤",
      deadline: "2025/12/27",
    },
    {
      id: 4,
      title: "POS問い合わせ対応",
      assignee: "伊藤",
      deadline: "2025/12/19",
    },
    { id: 5, title: "APIバグ修正", assignee: "佐々木", deadline: "2025/12/28" },
  ];
}
