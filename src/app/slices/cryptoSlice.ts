import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface ICripto {
    crypto: string[]
}
const initialState: ICripto = {
    crypto: ["bitcoin", "ethereum", "cardano", "litecoin"]
}
export const cryptoSlice = createSlice({
    name: "crypto",
    initialState,
    reducers: {
        SET_CRYPTO: (state, action) => {
            state.crypto = action.payload
        },
        DELETE_CRYPTO: (state, action) => {
            state.crypto = action.payload
        }

    }
})
export const { SET_CRYPTO, DELETE_CRYPTO } = cryptoSlice.actions
export const selectCrypto = (state: RootState) => state.cryptoState.crypto
export default cryptoSlice.reducer