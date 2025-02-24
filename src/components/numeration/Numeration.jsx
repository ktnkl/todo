import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPagesArray from '../../utils/numeration';
import addThreeDots from '../../utils/addThreeDots';
import { selectPage, setPage } from '../../store/reducers/page';

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
  return (
    <div>
      {
        tasksCount
        ?
        pagesArrayWithDots.map(p => 
          <span
            style={{margin: '5px'}}
            onClick={() => {
              if (p !== '...') {
                dispatch(setPage({newPage: p}))
              }
            }}
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