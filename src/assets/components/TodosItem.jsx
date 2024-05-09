function TodosItem({ status, title }) {
  return (
    <ul>
      <li>{title}</li>
      <li>{status ? "completed" : "uncomplete"}</li>
    </ul>
  );
}

export default TodosItem;
