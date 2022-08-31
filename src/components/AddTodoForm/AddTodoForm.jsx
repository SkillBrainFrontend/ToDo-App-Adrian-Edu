import React, { useState } from "react";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";
import Card from "../card/Card";
import { useEffect } from "react";

const AddForm = (props) => {
  const [saveTitle, setSaveTitle] = useState("");
  const [saveDescription, setSaveDescription] = useState("");

  const handleInputChange = (e) => {
    setSaveTitle(e.target.value);
  };

  const handleTextAreaInput = (e) => {
    setSaveDescription(e.target.value);
  };

  const handleSubmite = (e) => {
    e.preventDefault();

    props.onAddTeam({
      title: saveTitle,
      description: saveDescription,
    });

    setSaveTitle("");
    setSaveDescription("");
  };

  return (
    <div>
      <Card>
        <h2>Create Todo</h2>
        <form onSubmit={handleSubmite}>
          <Input
            value={saveTitle}
            onChange={handleInputChange}
            placeholder="Title"
            type="text"
          />
          <TextArea
            value={saveDescription}
            onChange={handleTextAreaInput}
            placeholder="Description"
          />

          <Button onClick={props.onCreateClick}>Create</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddForm;
