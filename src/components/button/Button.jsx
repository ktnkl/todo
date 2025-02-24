import React from 'react';
import cx from 'classnames'
import clases from './Button.module.css'

const Button = ({children, handleClick}) => {
  return (
    <button 
      className={cx(clases.button)}
      onClick={handleClick}
    >
      {children}
    </button>

  );
};

export default Button;