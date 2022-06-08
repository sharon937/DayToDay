import { configureStore } from '@reduxjs/toolkit';
import wishReducer from "./wishSlice";

export const store = configureStore({
  reducer: {
    wishtask: wishReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});