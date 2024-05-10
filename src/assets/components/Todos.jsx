import TodosItem from "./TodoItem/TodosItem";
import styles from "./todos.module.css";

function Todos({ todosData, onComplete, onDelete }) {
  return (
    <ul className={`${styles.list}`}>
      {todosData.length > 0 ? (
        todosData.map((item) => (
          <TodosItem
            key={item.id}
            status={item.completed}
            title={item.title}
            onComplete={onComplete}
            onDelete={onDelete}
            id={item.id}
          />
        ))
      ) : (
        <li className={`${styles.listItem}  `}>
          <p className={styles.itemTitle}>Tidak ada Data </p>
        </li>
      )}
    </ul>
  );
}

export default Todos;
