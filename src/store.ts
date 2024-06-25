import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";

const store = configureStore({
  reducer: {
    converting: appSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
