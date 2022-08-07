import React, { useState } from "react";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";
import Card from "../card/Card";

const MyForm = (props) => {
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
    <div>
      <Card>
        <h2>Create Todo</h2>
        <form onSubmit={handleSubmite}>
          <Input onChange={handleInputChange} placeholder="Title" type="text" />
          <TextArea onChange={handleTextAreaInput} placeholder="Description" />

          <Button onClick={props.onCreateClick}>Create</Button>
        </form>
      </Card>
    </div>
  );
};

export default MyForm;
