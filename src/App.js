import { useSelector } from 'react-redux';
import Task from './components/task/Task';
import { selectTasks } from './store/reducers/tasks';
import './App.css'
import TopRow from './components/top-row/TopRow';
import Numeration from './components/numeration/Numeration';
import Modal from './components/modal/Modal';
import Form from './components/form/Form';
import { selectProcessing } from './store/reducers/processing';
import { useSort, useTask } from './hooks/useTask';
import Sort from './components/sort/Sort';
import Filter from './components/filter/Filter';

function App() {
  const tasks = useSelector(selectTasks)
  const processing = useSelector(selectProcessing)

  const allProcessedTasks = useSort(tasks, processing)
  const currentProcessedTasks = useTask(tasks, processing)
  
  return (
    <div className="App">
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

      {
        currentProcessedTasks.map(task => <Task 
          task={task}
        />)
      }
      <Numeration tasksCount={allProcessedTasks.length}/>
    </div>
  );
}

export default App;
