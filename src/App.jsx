import React, { useContext, useState } from "react";
import Card from "./components/card/Card";
import TodoItem from "./components/todo-item/TodoItem";
import Button from "./components/button/Button";
import "./App.css";
import Modal from "./components/modal/Modal";
import MyForm from "./components/addTodoForm/AddTodoForm";

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
  const [toDoList, setToDoList] = useState(TODOS_MOCK);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFrom, setIsOpenFrom] = useState(
    { openfromadd: "Add" },
    { openfromedit: "Edit" }
  );

  const addingTeam = (todo) => {
    const id = Math.random().toString(36).slice(2, 10);
    setToDoList((prevState) => [
      ...prevState,
      { ...todo, id: id, completed: false },
    ]);
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const onCheckTodo = (item) => {
    setToDoList((prevState) => {
      const newState = prevState.map((team) => {
        if (team.id === item.id) {
          return { ...team, completed: item.value };
        }
        return team;
      });
      return newState;
    });
  };

  const handleDeleteToDo = (id) => {
    setToDoList((prevState) =>
      prevState.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div className="App">
      <div className="app-container">
        {/* 
            This is your Create Card component.
          */}

        <Modal isOpen={isOpen} onClose={closeModal}>
          <MyForm
            onAddTeam={addingTeam}
            onCreateClick={openModal}
            //}
          />
        </Modal>

        {/* 
          My Todos
        */}

        <Card>
          <h1>My todos</h1>
          <Button onClick={openModal}>Add +</Button>
          <div className="list-container">
            {toDoList
              .filter((val) => !val.completed)
              .map((val) => (
                <TodoItem
                  key={val.id}
                  completed={val.completed}
                  title={val.title}
                  description={val.description}
                  onCheckBoxChange={onCheckTodo}
                  id={val.id}
                  isOpen={isOpen}
                  onEdit={openModal}
                  onCloseEdit={closeModal}
                  newTodo={handleDeleteToDo}
                />
              ))}
          </div>
          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
            {toDoList
              .filter((val) => val.completed)
              .map((val) => (
                <TodoItem
                  key={val.id}
                  completed={val.completed}
                  title={val.title}
                  description={val.description}
                  onCheckBoxChange={onCheckTodo}
                  id={val.id}
                  isOpen={isOpen}
                  onEdit={openModal}
                  onCloseEdit={closeModal}
                  newTodo={handleDeleteToDo}
                />
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
