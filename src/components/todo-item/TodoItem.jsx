import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = (props) => {
  const handleCheckboxChange = (value) => {
    console.log(value);
  };

  const RecieveChecout = (data) => {
    console.log("ba", data);
  };

  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checked={!!props.completed}
            onChange={handleCheckboxChange}
            sendCheckout={RecieveChecout}
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
