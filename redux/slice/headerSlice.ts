import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type headerState = {
	height: number
}

const INITIAL_STATE: headerState = {
	height: 0
}

export const headerSlice = createSlice({
  name: 'height',
  initialState: INITIAL_STATE,
  reducers: {
    updateHeight: (state, action: PayloadAction<number>) => {
      const newHeight = action.payload;

			state.height = newHeight;
		}
  },
})

const headerReducer = headerSlice.reducer

export const { updateHeight } = headerSlice.actions;

export default headerReducer