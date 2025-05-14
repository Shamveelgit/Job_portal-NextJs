import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobsData, jobType } from "../../types/Types";

const initialState :  JobsData = [] 

const filterJobs = createSlice({
    initialState,
    name : "filterJobs",
    reducers : {
        setFilterJobs : (state :JobsData, action : PayloadAction<JobsData>) => action.payload,
    },
    
})

export default filterJobs.reducer
export const { setFilterJobs} = filterJobs.actions