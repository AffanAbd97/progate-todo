import styles from "../todos.module.css";
import DeleteButton from "./DeleteButton";

function TodosItem({ id, status, title, onDelete, onComplete }) {
  const handleCheck = () => {
    onComplete(id);
  };
  return (
    <li className={`${styles.listItem}  `}>
      <div>
        <input type="checkbox" checked={status} onChange={handleCheck} />
        <p className={`${styles.itemTitle} ${status && styles.active}`}>
          {title}
        </p>
        <div className={styles.endItem}>
          <p
            className={`${styles.badge} ${
              status ? styles.badgeSuccess : styles.badgeRunning
            }`}
          >
            {status ? "completed" : "Running"}
          </p>
          <DeleteButton />
        </div>
      </div>
    </li>
  );
}

export default TodosItem;
