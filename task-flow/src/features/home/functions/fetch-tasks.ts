import type { TaskCard } from "../interface/task-card";

// mock
export default function fetchTasks(): TaskCard[] {
  return [
    { id: 1, title: "新人教育", assignee: "内山", deadline: "2025/12/15" },
    { id: 2, title: "認証基盤構築b", assignee: "石田", deadline: "2025/12/20" },
    {
      id: 3,
      title: "レガシーSQL改修",
      assignee: "佐藤",
      deadline: "2025/12/27",
    },
    {
      id: 4,
      title: "POS問い合わせ対応",
      assignee: "大田",
      deadline: "2025/12/19",
    },
    { id: 5, title: "AWS申請対応", assignee: "高川", deadline: "2025/12/28" },
  ];
}
