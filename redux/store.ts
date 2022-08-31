import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slice/headerSlice";
import scrollReducer from "./slice/scrollSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    scrollIntersection: scrollReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
