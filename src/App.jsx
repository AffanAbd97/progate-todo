import { useState } from "react";
import Todos from "./assets/components/Todos";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  const handleComplete = (id) => {
    console.log(id);
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1 className="header">My Todo List</h1>
      <Todos todosData={todos} onComplete={handleComplete} />
    </div>
  );
}

export default App;
