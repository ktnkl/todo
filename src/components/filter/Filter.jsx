import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectProcessing } from '../../store/reducers/processing';

const Filter = () => {
  const processing = useSelector(selectProcessing)
  const dispatch = useDispatch()
  return (
    <form>
      <label>
        <input 
          type="radio" 
          name="completedFilter" 
          id="all"
          checked={processing.filter.completed.all}
          onClick={() => dispatch(changeFilter({
            type: 'completed',
            newFilter: 'all'
          }))}
        />
        Показать все
      </label>
      <label>
        <input 
          type="radio" 
          name="completedFilter" 
          id="completedTrue" 
          checked={processing.filter.completed.completed}
          onClick={() => dispatch(changeFilter({
            type: 'completed',
            newFilter: 'completed'
          }))}
          />
        Только выполненные
      </label>
      <label>
        <input 
          type="radio" 
          name="completedFilter" 
          id="completedFalse" 
          checked={processing.filter.completed.uncompleted}
          onClick={() => dispatch(changeFilter({
            type: 'completed',
            newFilter: 'uncompleted'
          }))}
          />
        Только невыполненные
      </label>
    </form>
  );
};

export default Filter;