import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tasks: [
    
  ],
  
}

const savedState = JSON.parse(localStorage.getItem("to-do-state"))

export const taskSlice = createSlice({
  name: 'taskSlice',
  initialState: savedState ?? initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
      localStorage.setItem('to-do-state', JSON.stringify(state))
    },
    changeCompleteStatus: (state, action) => {
      let changedTasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          task.completed = action.payload.completed
        }
        return task
      }
      )
      state.tasks = changedTasks
      localStorage.setItem('to-do-state', JSON.stringify(state))
    }, // action.payload = {id, completed}
    deleteTask: (state, action) => {
      let filteredTasks = state.tasks.filter(task =>
        task.id !== action.payload.id
      )
      state.tasks = filteredTasks
      localStorage.setItem('to-do-state', JSON.stringify(state))
    }
  }
})

export const {addTask, changeCompleteStatus, deleteTask} = taskSlice.actions

export const selectTasks = (state) => state.taskSlice.tasks

export default taskSlice.reducer