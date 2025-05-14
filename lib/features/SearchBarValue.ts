import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState : string = ""

const SearchValue = createSlice({
    name : "searchValue",
    initialState,
    reducers : {
        setSearchValue : (state : string, action : PayloadAction<string>) => action.payload
    }
})

export default SearchValue.reducer
export const {setSearchValue} = SearchValue.actions