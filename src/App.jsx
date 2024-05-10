import { useState } from "react";
import Todos from "./assets/components/Todos";
import "./App.css";
import TodoForm from "./assets/components/Input/TodoForm";
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
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="container">
      <h1 className="header">My Todo List</h1>
      <TodoForm />
      <Todos
        todosData={todos}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
