import { useState } from "react";
import styles from "./input.module.css";
function TodoForm({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(value);
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
