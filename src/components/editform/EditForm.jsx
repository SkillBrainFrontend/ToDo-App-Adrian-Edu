import React, { useState } from "react";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";
import Card from "../card/Card";

const EditForm = (props) => {
  const [saveInputChange, setSaveInputChange] = useState(
    props.intialData.title
  );
  const [description, setDescription] = useState(props.intialData.description);

  const handleInputChange = (e) => {
    setSaveInputChange(e.target.value);
  };

  const handleTextAreaInput = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmite = (e) => {
    e.preventDefault();

    props.onEdit({
      title: saveInputChange,
      description: description,
      id: props.intialData.id,
      completed: props.initialData.completed,
    });

    setSaveInputChange("");
    setDescription("");
  };

  return (
    <div>
      <Card>
        <h2>Create Todo</h2>
        <form onSubmit={handleSubmite}>
          <Input
            value={saveInputChange}
            onChange={handleInputChange}
            placeholder="Title"
            type="text"
          />
          <TextArea
            value={description}
            onChange={handleTextAreaInput}
            placeholder="Description"
          />

          <Button onClick={props.onCreateClick}>Create</Button>
        </form>
      </Card>
    </div>
  );
};

export default EditForm;
