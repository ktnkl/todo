import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPagesArray from '../../utils/numeration';
import addThreeDots from '../../utils/addThreeDots';
import { selectPage, setPage } from '../../store/reducers/page';
import classes from './Numeration.module.css'
import classNames from 'classnames';

const Numeration = ({tasksCount}) => {
  let pagesAmount
  if (tasksCount % 10 === 0) {
    pagesAmount = Math.floor(tasksCount / 10)
  } else {
    pagesAmount = Math.floor(tasksCount / 10) + 1
  }
  const pagesArray = getPagesArray(pagesAmount)
  const dispatch = useDispatch()
  const currentPage = useSelector(selectPage)
  const pagesArrayWithDots = addThreeDots(pagesArray, currentPage)
  const handleClick = (e) => {
    const content = Number(e.target.innerHTML)
    if (!content) {
      return
    } 
    dispatch(setPage({newPage: content}))
  }
  return (
    <div className={classNames({
      [classes.wrapper]: true,
    })}>
      {
        tasksCount
        ?
        pagesArrayWithDots.map(p => 
          <span
            key={p}
            className={classNames({
              [classes.item]: true,
              [classes["item_active"]]: p === currentPage ? true : false,
              [classes["item_dots"]]: p === "..." ? true : false,
            })}
            onClick={e => handleClick(e)}
          >
            {p}
          </span>
        )
        :
        <div>Список задач пустой, нажмите на кнопку "Добавить задачу"</div>
      }
    </div>
  );
};

export default Numeration;