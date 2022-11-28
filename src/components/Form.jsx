import React, { useState } from "react";

const Form = (props) => {
  // Initialize datatype inside of useState
  const [addedTask, setAddedTask] = useState("");

  const handleChange = (e) => setAddedTask(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTask(addedTask)
    console.log(addedTask);
    setAddedTask("");
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Add A Task</h1>
      <input type="text" value={addedTask} onChange={handleChange} />
      <button>Add Task</button>
    </form>
  );
};

export default Form;
