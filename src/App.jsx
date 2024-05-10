import { useState } from "react";
import Todos from "./assets/components/Todos";
import "./App.css";
import TodoForm from "./assets/components/Input/TodoForm";
import { AppContext } from "./context/AppContext";
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

  const handleAdd = (text) => {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    setTodos((prev) => [
      ...prev,
      {
        id: newId,
        title: text,
        completed: false,
      },
    ]);
  };

  return (
    <AppContext.Provider value={{handleComplete,handleDelete,handleAdd}}>
      <div className="container">
        <h1 className="header">My Todo List</h1>
        <TodoForm  />
        <Todos
          todosData={todos}
         
        />
      </div>
    </AppContext.Provider>
  );
}

export default App;
