const { createSlice } = require("@reduxjs/toolkit");


const checkData = createSlice({
    initialState : false,
    name : "checkData",
    reducers : {
        setDataExist : (state,action) => action.payload
    }
})

export default checkData.reducer
export const {setDataExist} = checkData.actions