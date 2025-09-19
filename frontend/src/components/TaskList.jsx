import React from "react";
import TaskCard from "./TaskCard";
import TaskEmptyState from "./TaskEmptyState";

const TaskList = ({ filteredTask, filter, handleTaskChanged }) => {
  if (!filteredTask || filteredTask.length === 0) {
    return <TaskEmptyState filter={filter} />;
  }

  return (
    <div className="space-y-3">
      {filteredTask.map((task, index) => (
        <TaskCard
          key={task._id ?? index}
          task={task}
          index={index}
          handleTaskChanged={handleTaskChanged}
        />
      ))}
    </div>
  );
};

export default TaskList;
