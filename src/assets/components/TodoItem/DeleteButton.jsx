import styles from "../todos.module.css";
import bin from "../../bin.svg";
function DeleteButton({onClick}) {
  return (
    <button className={styles.btnDelete} onClick={onClick}>
      <img src={bin} alt="Delete Button" />
    </button>
  );
}

export default DeleteButton;
