import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Freq = { freq: "24h" | "7d" | "365d" }
const initialState: Freq = {
    freq: "24h"
}
export const freqSlice = createSlice({
    name: "freq",
    initialState,
    reducers: {
        SET_FREQ: (state, action) => {
            state.freq = action.payload
        }
    }
})
export const { SET_FREQ } = freqSlice.actions;
export const selectFreq = (state: RootState) => state.freqState.freq
export default freqSlice.reducer;