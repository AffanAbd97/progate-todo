import { useContext } from "react";
import TodosItem from "./TodoItem/TodosItem";
import styles from "./todos.module.css";
import { AppContext } from "../../context/AppContext";

function Todos({ todosData }) {

  const {handleComplete,handleDelete} = useContext(AppContext)
  return (
    <ul className={`${styles.list}`}>
      {todosData.length > 0 ? (
        todosData.map((item) => (
          <TodosItem
            key={item.id}
            status={item.completed}
            title={item.title}
            onComplete={handleComplete}
            onDelete={handleDelete}
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
