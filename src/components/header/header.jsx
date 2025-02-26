import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
      <p className={classes.title}>ToDo App</p>
      <div className={classes["right-side"]}></div>
    </div>
  );
};

export default Header;