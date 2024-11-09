import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { tasksReducer } from "./tasksSlice";

export const store = configureStore({
  reducer: tasksReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
