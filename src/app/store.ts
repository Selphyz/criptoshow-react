import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cryptoReducer from "./slices/cryptoSlice"

export const store = configureStore({
  reducer: {
    cryptoState: cryptoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
