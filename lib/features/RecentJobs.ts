import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { JobsData } from "../../types/Types"

const initialState : JobsData = []

const RecentJobs = createSlice({
    name : "recentJobs",
    initialState,
    reducers : {
        addRecentJob : (state : JobsData, action : PayloadAction<JobsData>) => [...state,...action.payload],
        // removeRecentJob : (state, action) => state.filter(job => job.id!==action.payload)
    }
})

export default RecentJobs.reducer
export const {addRecentJob} = RecentJobs.actions