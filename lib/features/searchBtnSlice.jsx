const { createSlice } = require("@reduxjs/toolkit");


const SearchBtnSlice = createSlice({
    name : "searchBtn",
    initialState : false,
    reducers : {
        toggleSearchBtn : (state) => !state
    }
})


export default SearchBtnSlice.reducer
export const {toggleSearchBtn} = SearchBtnSlice.actions