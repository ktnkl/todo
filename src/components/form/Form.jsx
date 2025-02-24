import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/reducers/tasks';
import cx from 'classnames';
import classes from './Form.module.css'
import Button from '../button/Button';

const Form = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const dispatch = useDispatch()
  return (
    <div className={cx(classes.form)}>
      <input 
        type="text"
        className={cx(classes.input)}
        value={taskTitle}
        onChange={e => setTaskTitle(e.target.value)} 
      />
      <Button 
        handleClick={() => {
          dispatch(addTask({
            id: Date.now(),
            title: taskTitle,
            completed: false
          }))
          setTaskTitle('')
        }}
      >Добавить</Button>
    </div>
  );
};

export default Form;