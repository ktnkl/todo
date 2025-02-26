import React from 'react';
import Button from '../button/Button';
import cx from 'classnames'
import classes from './TopRow.module.css'
import { useDispatch } from 'react-redux';
import { setActive } from '../../store/reducers/modal';

const TopRow = () => {
  const dispatch = useDispatch()
  return (
    <div className={cx(classes['top-row'])}>
      <div className={cx(classes['left-side'])}>
        <Button
          handleClick={() => dispatch(setActive({object: 'sort'}))}
          type="secondary"
        >
          Сортировка
        </Button>

        <Button
          handleClick={() => dispatch(setActive({object: 'filter'}))}
          type="secondary"
        >
          Фильтрация
        </Button>
      </div>
      <div >
        <Button
          handleClick={() => dispatch(setActive({object: 'add'}))}
          type="secondary"
        >
          Добавить задачу
        </Button>
      </div>
    </div>
  );
};

export default TopRow;