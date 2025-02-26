import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectProcessing } from '../../store/reducers/processing';
import Radio from '../UI/radio/Radio';
import ProcessBlock from '../UI/process_block/ProcessBlock';

const Filter = () => {
  const processing = useSelector(selectProcessing)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    console.log(e)
    dispatch(changeFilter({
      type: 'completed',
      newFilter: e.target.id
    }))
  }
  return (
    <ProcessBlock title="Готовность:">
      <Radio 
        id="all"
        name="completedFilter"
        checked={processing.filter.completed.all}
        label="Показать все"
        onChange={handleChange}
      />
      <Radio 
        id="completed"
        name="completedFilter"
        checked={processing.filter.completed.completed}
        label="Только выполненные"
        onChange={handleChange}
      />
      <Radio 
        id="uncompleted"
        name="completedFilter"
        checked={processing.filter.completed.uncompleted}
        label="Только невыполненные"
        onChange={handleChange}
      />
    </ProcessBlock>
  );
};

export default Filter;