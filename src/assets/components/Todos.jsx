import TodosItem from "./TodosItem";

function Todos({ todosData }) {
  return (
    <>
      {todosData.map((item) => (
        <TodosItem key={item.id} status={item.completed} title={item.title} />
      ))}
    </>
  );
}

export default Todos;
