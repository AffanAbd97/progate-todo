import { useState } from "react";



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

  console.log(todos);

  return (
    <div>
      {
        todos.map((item)=>(
          <p key={item.id}>{item.title}</p>
        ))
      }
    </div>
  );
}

export default App;
