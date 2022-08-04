import React, { useState } from "react";
import Card from "./components/card/Card";
import TodoItem from "./components/todo-item/TodoItem";
import Button from "./components/button/Button";
import "./App.css";

import CreateCard from "./components/new-modal/New-modal";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App(props) {
  const [updateData, setUpdateData] = useState(TODOS_MOCK);

  const AddTeam = (team) => {
    setUpdateData((prevState) => [...prevState, team]);
  };

  return (
    <div className="App">
      <div className="app-container">
        {/* 
            This is your Create Card component.
          */}
        <CreateCard onAddTeam={AddTeam} />

        {/* 
          My Todos
        */}
        <Card>
          <h1>My todos</h1>
          <Button onClick={() => console.log("Open Modal")}>Add +</Button>
          <div className="list-container">
            {updateData
              .filter((val) => {
                if (val.completed !== false) {
                  return true;
                }
              })
              .map((val, key) => {
                return (
                  <div key={key}>
                    <TodoItem
                      completed={false}
                      sendTitle={val.title}
                      sendDescription={val.description}
                    />
                  </div>
                );
              })}
          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
            <TodoItem completed={false} />
            <TodoItem completed={true} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
