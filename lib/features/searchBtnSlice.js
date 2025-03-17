const { createSlice } = require("@reduxjs/toolkit");


const SearchBtnSlice = createSlice({
    name : "searchBtn",
    initialState : true,
    reducers : {
        toggleSearchBtn : (state,actions) => actions.payload 
    }
})


export default SearchBtnSlice.reducer
export const {toggleSearchBtn} = SearchBtnSlice.actions