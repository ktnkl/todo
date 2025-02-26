import TopRow from './components/top-row/TopRow';
import Numeration from './components/numeration/Numeration';
import Modal from './components/modal/Modal';
import Form from './components/form/Form';
import Sort from './components/sort/Sort';
import Filter from './components/filter/Filter';
import TasksWrapper from './components/tasksWrapper/TasksWrapper';
import Header from './components/header/Header';

import './App.css'

import { useSelector } from 'react-redux';
import { selectTasks } from './store/reducers/tasks';
import { selectProcessing } from './store/reducers/processing';
import { useSort, useTask } from './hooks/useTask';

function App() {
  const tasks = useSelector(selectTasks)
  const processing = useSelector(selectProcessing)

  const allProcessedTasks = useSort(tasks, processing)
  const currentProcessedTasks = useTask(tasks, processing)
  
  return (
    <div className="App">
      <Header />
      <div className='main-block'>
        <TopRow />

        <Modal 
          modalType={'add'}
        >
          <Form />
        </Modal>

        <Modal 
          modalType={'sort'}
        >
          <Sort />
        </Modal>

        <Modal 
          modalType={'filter'}
        >
          <Filter />
        </Modal>

        <TasksWrapper 
          tasks={currentProcessedTasks}
        />

        <Numeration tasksCount={allProcessedTasks.length}/>
      </div>
      
    </div>
  );
}

export default App;
