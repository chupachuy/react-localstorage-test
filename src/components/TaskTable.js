import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {

  const taskTableRows = (doneValue) => {
    return(
      tasks.filter(task => task.done === doneValue).map((task) => {
        return (
          <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
        );
      })
    )
  }


  return (
    <table className="table table-dark table-striped table-bordered border">
      <thead>
        <tr className="table-primary">
          <td>Task</td>
        </tr>
      </thead>
      <tbody>
        {
         taskTableRows(showCompleted)
        }
      </tbody>
    </table>
  );
};

export default TaskTable;
