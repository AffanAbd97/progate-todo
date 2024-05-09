import TodosItem from "./TodoItem/TodosItem";
import styles from "./todos.module.css";

function Todos({ todosData, onComplete }) {
  return (
    <ul className={`${styles.list}`}>
      {todosData.map((item) => (
        <TodosItem
          key={item.id}
          status={item.completed}
          title={item.title}
          onComplete={onComplete}
          id={item.id}
        />
      ))}
    </ul>
  );
}

export default Todos;
