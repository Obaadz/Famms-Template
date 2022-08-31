import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type scrollState = {
  isVisible: boolean;
};

const INITIAL_STATE: scrollState = {
  isVisible: false,
};

export const scrollSlice = createSlice({
  name: "isVisible",
  initialState: INITIAL_STATE,
  reducers: {
    updateIsVisible: (state, action: PayloadAction<boolean>) => {
      const isVisible = action.payload;

      state.isVisible = isVisible;
    },
  },
});

const scrollReducer = scrollSlice.reducer;

export const { updateIsVisible } = scrollSlice.actions;

export default scrollReducer;
