import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCompleteStatus, deleteTask } from '../../store/reducers/tasks';
import Button from '../button/Button';
import classes from './Task.module.css'

const Task = ({task}) => {
  const dispatch = useDispatch()
  return (
    <div 
      className={classes.task}
      key={task.id}
    >
      <div className={classes.leftSide}>
        <input 
          type="checkbox" 
          checked={task.completed}
          className={classes.checkbox}
          id={task.id}
          onChange={e => {
            dispatch(changeCompleteStatus({
              id: task.id, 
              completed: e.target.checked
            }))
          }}
        />
        <label htmlFor={task.id} className={classes.label}>{task.title}</label>
      </div>  
      <Button handleClick={() => dispatch(deleteTask({
        id: task.id
      }))}>удалить</Button>
    </div>
  );
};

export default Task;