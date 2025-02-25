import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  processing: {
    sort: {
      newFirst: true
    },
    filter: {
      completed: {
        all: true,
        completed: false,
        uncompleted: false,
      }
    }
  }
}

export const processingSlice = createSlice({
  name: 'processing',
  initialState,
  reducers: {
    changeSort: (state, action) => {
      state.processing.sort[action.payload.type] = action.payload.value
    }, //payload: {type: 'newFirst', value: true }
    changeFilter: (state, action) => {
      const newState = {}
      
      for (let key in state.processing.filter[action.payload.type]) {
        
        if (key === action.payload.newFilter) {
          newState[key] = true
        } else {
          newState[key] = false
        }
      }
      state.processing.filter[action.payload.type] = {...newState }
    } // payload: {type: 'completed', newFilter: 'uncompleted'}
  }
})

export const {
  changeSort,
  changeFilter} = processingSlice.actions

export const selectProcessing = (state) => state.processingSlice.processing

export default processingSlice.reducer