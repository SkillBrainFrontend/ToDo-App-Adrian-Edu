import React, { useContext, useState } from "react";
import Card from "./components/card/Card";
import TodoItem from "./components/todo-item/TodoItem";
import Button from "./components/button/Button";
import "./App.css";
import Modal from "./components/modal/Modal";
import MyForm from "./components/myform/myform";

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
  const [isOpen, setIsOpen] = useState(false);
  const [receiveDataFromCheckBox, setreceiveDataFromCheckBox] =
    useState(TODOS_MOCK);

  const AddTeam = (team) => {
    const id = Math.random().toString(36).slice(2, 10);
    setUpdateData((prevState) => [
      ...prevState,
      { ...team, id: id, completed: false },
    ]);
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const receiveCheckout = (id, value) => {
    setreceiveDataFromCheckBox((prevState) =>
      prevState.map((team) => {
        if (id === team.id && value !== team.completed) {
          return {};
        }
        return {};
      })
    );
  };

  return (
    <div className="App">
      <div className="app-container">
        {/* 
            This is your Create Card component.
          */}

        <Modal isOpen={isOpen} onClose={close}>
          <MyForm
            onAddTeam={AddTeam}
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
            {updateData
              .filter((val) => {
                if (val.completed === false) {
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
                      sendCheckBox={receiveCheckout}
                    ></TodoItem>
                  </div>
                );
              })}
          </div>
          <div className="separator"></div>

          <h2>Completed</h2>
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
                      sendCheckBox={receiveCheckout}
                    ></TodoItem>
                  </div>
                );
              })}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;

// <TodoItem completed={false} sendCheckBox={receiveCheckout} />
