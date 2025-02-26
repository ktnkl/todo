import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProcessing } from '../../store/reducers/processing';
import { changeSort } from '../../store/reducers/processing';
import Radio from '../UI/radio/Radio';
import ProcessBlock from '../UI/process_block/ProcessBlock';

const Sort = () => {
  const processing = useSelector(selectProcessing)
  const dispatch = useDispatch()
  const handleChange = (e) => {dispatch(changeSort({
    type: 'newFirst',
    value: e.target.id === 'new' ? true : false
  }))}
    
  
  return (
    <ProcessBlock title="По дате: ">
      <Radio
        label="Сначала старые"
        id="old"
        name="datasort"
        onChange={handleChange}
        checked={!processing.sort.newFirst}
      />
      <Radio
        label="Сначала новые"
        type="radio"
        id="new"
        name="datasort"
        onChange={handleChange}
        checked={processing.sort.newFirst}
      />
      
    </ProcessBlock>
  );
};

export default Sort;