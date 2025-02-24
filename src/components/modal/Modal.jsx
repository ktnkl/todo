import React from 'react';
import cx from 'classnames'
import classes from './Modal.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectModals, setInActive } from '../../store/reducers/modal';

const Modal = ({children, modalType}) => {
  const dispatch = useDispatch()
  const modals = useSelector(selectModals)
  const modalStatus = modals[modalType]
  const rootClasses = cx(classes.modal, classes[modalStatus])

  return (
    <div 
      className={rootClasses} 
      onClick={(e) => dispatch(setInActive({object: modalType}))}
      
    >
      <div 
        className={cx(classes.modalContent)} 
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;