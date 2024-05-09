import styles from "../todos.module.css";
import bin from "../../bin.svg";
function DeleteButton() {
  return (
    <button className={styles.btnDelete}>
      <img src={bin} alt="Delete Button" />
    </button>
  );
}

export default DeleteButton;
