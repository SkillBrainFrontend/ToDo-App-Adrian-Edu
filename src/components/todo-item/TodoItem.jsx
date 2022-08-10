import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = (props) => {
  const handleCheckboxChange = (value) => {
    const id = Math.random().toString(36).slice(2, 10);

    props.sendCheckBox({ valuare: value, id: id });
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
          <i className="fa fa-pencil" aria-hidden="true"></i>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>

      <div className="separator"></div>

      <p>{props.sendDescription}</p>
    </div>
  );
};

export default TodoItem;
