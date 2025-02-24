import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProcessing } from '../../store/reducers/processing';
import { changeSort } from '../../store/reducers/processing';

const Sort = () => {
  const processing = useSelector(selectProcessing)
  const dispatch = useDispatch()
  return (
    <form>
      <label>
        <input 
          type="radio" 
          name="dataSort" 
          id="old" 
          checked={!processing.sort.newFirst}
          onChange={() => dispatch(changeSort({
            type: 'newFirst',
            value: false
          }))}
        />
        Сначала старые
      </label>
      <label >
        <input 
          type="radio" 
          name="dataSort" 
          id="new" 
          checked={processing.sort.newFirst}
          onChange={() => dispatch(changeSort({
            type: 'newFirst',
            value: true
          }))}
        />
        Сначала новые
      </label>
      
    </form>
  );
};

export default Sort;