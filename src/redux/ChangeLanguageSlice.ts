import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store";

const initialState = {
    name: "en-US"
}

const ChangeLanguageSlice = createSlice({
    name: 'ChangeLanguageSlice',
    initialState,
    reducers: {
        addLanguage(state, action) {
            state.name = action.payload
        }
    }
});


export const { addLanguage } = ChangeLanguageSlice.actions;
export const selectedLanguage = (state: RootState) => state.ChangeLanguageSlice.name

export default ChangeLanguageSlice.reducer;