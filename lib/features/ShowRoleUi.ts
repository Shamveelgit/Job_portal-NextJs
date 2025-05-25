import { createSlice } from "@reduxjs/toolkit";



let showRoleUi = createSlice({
    initialState : false,
    name : "showRoleUi",
    reducers : {
        isShowRoleUi : state => !state
    }
})

export default showRoleUi.reducer
export const {isShowRoleUi} = showRoleUi.actions