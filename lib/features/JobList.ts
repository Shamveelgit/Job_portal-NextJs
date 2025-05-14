import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobsData, jobType } from "../../types/Types";
import { RootState } from "../store";

const initialState : JobsData = []

const JobList = createSlice({
    name: "globalJobList",
    initialState,
    reducers: {
        addToGlobalJobList: (state : JobsData, action : PayloadAction<JobsData>) => {
            let existJobId = new Set(state.map((job : any) => job._id))
            let newJobs = action.payload?.filter(job => !existJobId.has(job._id))
            return [...state, ...newJobs]
        },
        addGlobalListToFirst: (state : JobsData, action : PayloadAction<JobsData>) => {
            let existJobId = new Set(state.map(job => job?._id))
            let newJobs = action.payload.filter(job => !existJobId.has(job._id))
            return [...newJobs,...state,]
        },
        addGlobalList : (state : JobsData ,action : PayloadAction<JobsData>) => {
            return [...state,...action.payload]
        }
    }
})

export default JobList.reducer
export const { addToGlobalJobList, addGlobalListToFirst } = JobList.actions
export const globalJobList = (state : RootState) => state.GlobalJobList

