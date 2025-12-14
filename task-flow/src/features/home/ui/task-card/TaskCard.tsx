// propsオブジェクトとして受け取る
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
    <li>
      <ul>{title}</ul>
      <ul>{assignee}</ul>
      <ul>{deadline}</ul>
    </li>
  );
}
