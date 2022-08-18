import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = (props) => {
  const handleCheckboxChange = (value) => {
    props.sendCheckBox({ value: value, id: props.id });
  };

  const [isOpen, setIsOpen] = useState(props.sendIsOpen);

  const OpenModal = () => {
    console.log(isOpen);
  };

  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checked={!!props.completed}
            onChange={handleCheckboxChange}
          />

          <h4>{props.sendTitle}</h4>
        </div>
        <div>
          <i
            onClick={OpenModal}
            className="fa fa-pencil"
            aria-hidden="true"
          ></i>
          <i onClick={() => {}} className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>

      <div className="separator"></div>

      <p>{props.sendDescription}</p>
    </div>
  );
};

export default TodoItem;
