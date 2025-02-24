import { createSlice } from "@reduxjs/toolkit";


export const pageSlice = createSlice({
  name: 'pageSlice',
  initialState: {
    pageNumber: 1
  },
  reducers: {
    setPage: (state, action) => {
      state.pageNumber = action.payload.newPage
    }
  }
})

export const {setPage} = pageSlice.actions

export const selectPage = (state) => state.pageSlice.pageNumber

export default pageSlice.reducer