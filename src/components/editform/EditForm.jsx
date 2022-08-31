import React, { useState } from "react";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";
import Card from "../card/Card";

const EditForm = (props) => {
  const [saveTitle, setSaveTitle] = useState(props.intialData.title);
  const [saveDescription, setSaveDescription] = useState(
    props.intialData.description
  );

  const handleInputChange = (e) => {
    setSaveTitle(e.target.value);
  };

  const handleTextAreaInput = (e) => {
    setSaveDescription(e.target.value);
  };

  const handleSubmite = (e) => {
    e.preventDefault();

    props.onEditUpdateData({
      id: props.intialData.id,
      title: saveTitle,
      description: saveDescription,
      completed: props.intialData.completed,
    });

    setSaveTitle("");
    setSaveDescription("");
  };

  return (
    <div>
      <Card>
        <h2>Edit Todo</h2>
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

          <Button onClick={props.onEditUpdateData}>Save</Button>
        </form>
      </Card>
    </div>
  );
};

export default EditForm;
