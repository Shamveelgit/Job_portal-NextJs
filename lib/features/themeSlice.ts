import { createSlice } from "@reduxjs/toolkit"

const initialState : boolean = false

const themeSlice = createSlice({
    name : "theme",
    initialState,
    reducers : {
        toggleTheme : (state : boolean) => !state
    }
})  

export default themeSlice.reducer
export const {toggleTheme} = themeSlice.actions