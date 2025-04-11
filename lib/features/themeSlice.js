const { createSlice } = require("@reduxjs/toolkit");


const themeSlice = createSlice({
    name : "theme",
    initialState : false,
    reducers : {
        toggleTheme : (state) => !state
    }
})  

export default themeSlice.reducer
export const {toggleTheme} = themeSlice.actions