import React from 'react';
import Task from '../task/Task';
import classes from './TasksWrapper.module.css'

const TasksWrapper = ({tasks}) => {
  return (
    <div className={classes.wrapper}>
      {
        tasks.map(task => <Task 
          task={task}
          key={task.id}
        />)
      }
    </div>
  );
};

export default TasksWrapper;