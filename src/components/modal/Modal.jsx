import React, { useState } from "react";
import "./Modal.css";
import { useEffect } from "react";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";
import Card from "../card/Card";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [saveInputChange, setSaveInputChange] = useState("");
  const [saveTextAreaInput, setSaveTextAreaInput] = useState("");
  const [handleSubmit, sethandleSubmit] = useState("");

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  const handleInputChange = (e) => {
    setSaveInputChange(e.target.value);
  };

  const handleTextAreaInput = (e) => {
    setSaveTextAreaInput(e.target.value);
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    sethandleSubmit(saveInputChange);
    sethandleSubmit(saveTextAreaInput);

    props.onAddTeam({
      title: saveInputChange,
      description: saveTextAreaInput,
    });
  };

  return (
    <div className={`${isOpen ? "modal-wrapper" : "modal-hidden"}`}>
      <i
        onClick={closeModal}
        className="close-icon fa fa-times-circle-o"
        aria-hidden="true"
      ></i>

      <div className="modal-content">{props.children}</div>

      <Card>
        <h2>Create Todo</h2>
        <form onSubmit={handleSubmite}>
          <Input onChange={handleInputChange} placeholder="Title" type="text" />
          <TextArea onChange={handleTextAreaInput} placeholder="Description" />

          <Button type="submit">Create</Button>
        </form>
      </Card>
    </div>
  );
};

export default Modal;
