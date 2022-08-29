import React, { useContext, useState } from "react";
import Card from "./components/card/Card";
import TodoItem from "./components/todo-item/TodoItem";
import Button from "./components/button/Button";
import "./App.css";
import Modal from "./components/modal/Modal";
import AddForm from "./components/addtodoform/AddTodoForm";
import EditForm from "./components/editform/EditForm";
import { useEffect } from "react";

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
  const [editState, setEditState] = useState(null);

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

  const onEdit = (id) => {
    const gaseste = toDoList.find((item) => {
      // console.log("item.id", item.id);
      //  console.log("id", id);
      return item.id === id;
    });
    setEditState(gaseste);
    setIsOpen(true);
  };

  /* 

  useEffect(() => {
    console.log(editState);
  }, [editState]);

  */

  const onEditUpdateData = (item) => {
    setToDoList((prevState) => {
      const newState = prevState.map((team) => {
        if (item.id === team.id) {
          return {
            ...team,
            id: item.id,
            title: item.title,
            description: item.description,
            completed: item.completed,
          };
        }
        return team;
      });
      setIsOpen(false);
      return newState;
    });
  };

  return (
    <div className="App">
      <div className="app-container">
        {/* 
            This is your Create Card component.
          */}

        <Modal isOpen={isOpen} onClose={closeModal}>
          {!editState ? (
            <AddForm onAddTeam={addingTeam} onCreateClick={openModal} />
          ) : (
            <EditForm
              intialData={editState}
              //    onEditTeam={addingTeam}
              onEditUpdateData={onEditUpdateData}
            />
          )}
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
                  //  onEdit={openModal}
                  onCloseEdit={closeModal}
                  newTodo={handleDeleteToDo}
                  editButton={onEdit}
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
                  //  onEdit={openModal}
                  onCloseEdit={closeModal}
                  newTodo={handleDeleteToDo}
                  editButton={onEdit}
                />
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
