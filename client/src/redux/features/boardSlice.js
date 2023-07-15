import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }

export const boardSlice = createSlice({
  // name: 'user',
  name:'board',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setBoards } = boardSlice.actions

export default boardSlice.reducer