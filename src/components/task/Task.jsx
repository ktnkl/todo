import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCompleteStatus, deleteTask } from '../../store/reducers/tasks';
import Button from '../button/Button';
import classes from './Task.module.css'
import Checkbox from '../UI/checkbox/Checkbox';

const Task = ({task}) => {
  const dispatch = useDispatch()
  const changeHandler = (e) => {
    dispatch(changeCompleteStatus({
      id: task.id, 
      completed: e.target.checked
    }))
  }
  return (
    <div 
      className={classes.task}
    >
      <div className={classes.leftSide}>
        <Checkbox 
          id={task.id}
          onChange={changeHandler}
          checked={task.completed}
          label={task.title}
        />
      </div>  
      <Button 
        handleClick={() => dispatch(deleteTask({
          id: task.id
        }))}
        type="danger"
      >
        удалить
      </Button>
    </div>
  );
};

export default Task;