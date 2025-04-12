import React from "react";
import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  //console.log(props);
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    //console.log(newTaskName);

    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="Enter a new Task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <button className="col-3 btn btn-primary btn-sm">Add Task</button>
    </form>
  );
};
