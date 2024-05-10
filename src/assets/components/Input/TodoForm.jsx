import { useState } from "react";
import styles from "./input.module.css";
function TodoForm() {
  const [value, setValue] = useState("second");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
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
