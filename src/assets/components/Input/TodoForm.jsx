import { useContext, useState } from "react";
import styles from "./input.module.css";
import { AppContext } from "../../../context/AppContext";
function TodoForm() {
  const [value, setValue] = useState("");
  const { handleAdd } = useContext(AppContext);
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    handleAdd(value);
    setValue("");
  };

  return (
    <section className={styles.forms}>
      <div>
        <input
          type="text"
          value={value}
          onChange={(val) => handleValueChange(val)}
        />
        <button type="button" onClick={handleSubmit}>
          Tambah
        </button>
      </div>
    </section>
  );
}

export default TodoForm;
