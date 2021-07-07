import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cryptoReducer from "./slices/cryptoSlice"
import freqReducer from "./slices/freqSlice"

export const store = configureStore({
  reducer: {
    cryptoState: cryptoReducer,
    freqState: freqReducer
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
