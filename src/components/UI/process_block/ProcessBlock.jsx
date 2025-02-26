import React from 'react';
import classes from './ProcessBlock.module.css'

const ProcessBlock = ({title, children}) => {
  return (
    <div className={classes.block}>
      <p className={classes.title}>
        {title}
      </p>
      <div className={classes.items}>
        {children}
      </div>
    </div>
  );
};

export default ProcessBlock;