const { createSlice } = require("@reduxjs/toolkit");

const SearchValue = createSlice({
    name : "searchValue",
    initialState : "",
    reducers : {
        setSearchValue : (state, action) => action.payload
    }
})

export default SearchValue.reducer
export const {setSearchValue} = SearchValue.actions