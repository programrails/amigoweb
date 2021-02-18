import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ValObj } from '../../app/types'

interface AuthState {
  inputValidities: Array<ValObj>,
}

const initialState: AuthState = {
  inputValidities: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInputValidities(state, action: PayloadAction<ValObj>) {
      state.inputValidities = {...state.inputValidities, ...action.payload}
    },
  },
})

export const { setInputValidities } = authSlice.actions

export default authSlice.reducer
