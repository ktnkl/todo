import React from 'react';
import cx from 'classnames'
import classes from './Button.module.css'

const Button = ({children, handleClick, type, customClass}) => {
  const buttonClasses = cx({
    [classes.button]: true,
    [classes[type]]: true,
    [classes[customClass]]: true,
  })
  return (
    <button 
      className={buttonClasses}
      onClick={handleClick}
    >
      {children}
    </button>

  );
};

export default Button;