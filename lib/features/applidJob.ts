import { Action, ActionCreator, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ActionDispatch } from "react";
    
const { createSlice } = require("@reduxjs/toolkit");


let appliedJobs = createSlice({
    initialState : [
        {
            name  : "hello"
        },
        {
            name : "test"
        }
    ],
    name : "appliedJobs",
    reducers : {
        addToAppliedJobs : (state : any ,action : any) => [...state,action],
        removeToAppliedJobs : ((state : any,action : any) => {
            state.splice(action.payload,1)
            return state
        })
    }
})

export default appliedJobs.reducer
export const {addToAppliedJobs ,removeToAppliedJobs} = appliedJobs.actions