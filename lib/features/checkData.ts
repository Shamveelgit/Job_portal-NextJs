import { createSlice } from "@reduxjs/toolkit"


const initialState : boolean = false

const checkData = createSlice({
    initialState,
    name : "checkData",
    reducers : {
        setDataExist : (state : boolean,action : {payload : boolean}) => action.payload
    }
})

export default checkData.reducer
export const {setDataExist} = checkData.actions