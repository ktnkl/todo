import React from 'react';
import classes from './Radio.module.css'

const Radio = ({id, name, onChange, checked, label}) => {
  return (
    <div>
      <input 
        type="radio"
        className={classes.radio}
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Radio;