import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.filter(task => task != null).map((task) => (
        <Task key={task.id} task={task} onDelete={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
