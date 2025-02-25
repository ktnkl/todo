import React from 'react';
import classes from './Input.module.css'
import classNames from 'classnames';
import "./Input.module.css"

const Input = ({label, id, type, onChange, name, checked, value}) => {
  const wrapperClass = classNames({
    [classes.vertical]: 
      type === 'text'
      || type === 'email'
      || type === 'number'
      || type === 'password'
      ,
      [classes.gorizontal]: 
      type === 'checkbox'
      || type === 'radio'
    ,
  })

  const inputClass = classNames({
    [classes.radio]: type === 'radio',
    [classes.checkbox]: type === 'checkbox',
    [classes.text]: type === 'text',
    [classes.number]: type === 'number',
    [classes.password]: type === 'password',
    [classes.email]: type === 'email',
  })
  return (
    <div className={wrapperClass}>
      <input
        className={inputClass}
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        {...(type === "checkbox" ? { checked } : {})}
      />
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
    </div>
    
  );
};

export default Input;