import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

const SearchBtnSlice = createSlice({
    name : "searchBtn",
    initialState : true,
    reducers : {
        toggleSearchBtn : (state : boolean,actions : PayloadAction<boolean>)  => actions.payload 
    }
})


export default SearchBtnSlice.reducer
export const {toggleSearchBtn} = SearchBtnSlice.actions