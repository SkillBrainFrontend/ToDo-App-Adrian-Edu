import React, { useState } from "react";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";
import Card from "../card/Card";
import { useEffect } from "react";
import "./AddTodoForm.css";

const AddForm = (props) => {
  const [saveTitleChange, setSaveTitleChang] = useState("");
  const [saveDescription, setSaveDescription] = useState("");
  const [condition, setCondition] = useState({
    saveTitleChange: "",
    saveDescription: "",
    isValid: true,
  });

  const handleInputChange = (e) => {
    setSaveTitleChang(e.target.value);
  };

  const handleTextAreaInput = (e) => {
    setSaveDescription(e.target.value);
  };

  const handleSubmite = (e) => {
    e.preventDefault();

    props.onAddTeam({
      title: saveTitleChange,
      description: saveDescription,
    });

    setSaveTitleChang("");
    setSaveDescription("");
  };

  useEffect(() => {
    if (condition.saveTitleChange === "") {
      setCondition((prevState) => ({
        ...prevState,
        saveTitleChange: "This field is required",
        saveDescription: "",
        isValid: false,
      }));
    } else {
      setCondition((prevState) => ({
        ...prevState,
        saveTitleChange: "",
        saveDescription: "",
        isValid: true,
      }));
    }
  }, [saveDescription, saveTitleChange]);

  return (
    <div>
      <Card>
        <h2>Create Todo</h2>
        <form onSubmit={handleSubmite}>
          <Input
            value={saveTitleChange}
            onChange={handleInputChange}
            placeholder="Title"
            type="text"
            className={`primary-input ${condition.saveTitleChange && "error"}`}
          />
          <span>{condition.saveTitleChange}</span>
          <TextArea
            value={saveDescription}
            onChange={handleTextAreaInput}
            placeholder="Description"
            className={`primary-input textarea ${
              condition.saveDescription && "error"
            }`}
          />

          <span>{condition.saveDescription}</span>

          <Button disabled={!condition.isValid} onClick={props.onCreateClick}>
            Create
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddForm;
