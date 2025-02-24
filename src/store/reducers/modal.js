import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: 'inactive',
  filter: 'inactive',
  add: 'inactive',
}

export const modalsSlice = createSlice({
  name: 'modalsSlice',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state[action.payload.object] = 'active'
    },
    setInActive: (state, action) => {
      state[action.payload.object] = 'inactive'
    }
  }
})

export const {setActive, setInActive} = modalsSlice.actions

export const selectModals = (state) => state.modalsSlice
export default modalsSlice.reducer