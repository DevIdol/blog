import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/posts/postSlice";

export const store = configureStore({
  reducer: {
    posts : postSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
