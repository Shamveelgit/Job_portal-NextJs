const { createSlice } = require("@reduxjs/toolkit");

const skipValue = createSlice({
    name : "skipValue",
    initialState : 1,
    reducers : {
        setSkipValue : (state, action) => state + 1
    }
})

export default skipValue.reducer
export const {setSkipValue} = skipValue.actions 