import React, { useState } from "react";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";
import Card from "../card/Card";

function CreateCard(props) {
  const [saveInputChange, setSaveInputChange] = useState("");
  const [saveTextAreaInput, setSaveTextAreaInput] = useState("");
  const [handleSubmit, sethandleSubmit] = useState("");

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
    <Card>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmite}>
        <Input onChange={handleInputChange} placeholder="Title" type="text" />
        <TextArea onChange={handleTextAreaInput} placeholder="Description" />

        <Button type="submit">Create</Button>
      </form>
    </Card>
  );
}

export default CreateCard;
