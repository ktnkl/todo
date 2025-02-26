import React from 'react';
import classes from './Checkbox.module.css'

const Checkbox = ({id, checked, onChange, label}) => {
  return (
    <div className={classes}>
        <input 
          type="checkbox" 
          checked={checked}
          className={classes.checkbox}
          id={id}
          onChange={onChange}
        />
        <label 
          htmlFor={id}
          className={classes.label}
        >
          {label}
        </label>
    </div>    
  );
};

export default Checkbox;