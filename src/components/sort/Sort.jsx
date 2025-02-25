import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProcessing } from '../../store/reducers/processing';
import { changeSort } from '../../store/reducers/processing';
import Input from '../UI/input/Input';

const Sort = () => {
  const processing = useSelector(selectProcessing)
  console.log(processing.sort.newFirst)
  const dispatch = useDispatch()
  const handleChange = (e) => {dispatch(changeSort({
    type: 'newFirst',
    value: e.target.id === 'new' ? true : false
  }))}
    
  
  return (
    <form>
      <Input
        label="Сначала старые"
        type="radio"
        id="old"
        name="datasort"
        onChange={handleChange}
        checked={!processing.sort.newFirst}
      />
      <Input
        label="Сначала новые"
        type="radio"
        id="new"
        name="datasort"
        onChange={handleChange}
        checked={processing.sort.newFirst}
      />
      {/* <span>По дате:</span>
      <div>
      <Radio
          name="dataSort" 
          id="old"
          checked={!processing.sort.newFirst}
          changeHandler={dispatch(changeSort({
            type: 'newFirst',
            value: false
          }))}
          label="Сначала старые"
        />
      </div>
      <div>
        <Radio
          name="dataSort" 
          id="new"
          checked={processing.sort.newFirst}
          changeHandler={dispatch(changeSort({
            type: 'newFirst',
            value: true
          }))}
          label="Сначала новые"
        />
        
      </div> */}
    </form>
  );
};

export default Sort;