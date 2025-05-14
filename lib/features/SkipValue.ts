import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState : number = 1

const skipValue = createSlice({
    name : "skipValue",
    initialState,
    reducers : {
        setSkipValue : (state : number, action : PayloadAction) => state + 1
    }
})

export default skipValue.reducer
export const {setSkipValue} = skipValue.actions 