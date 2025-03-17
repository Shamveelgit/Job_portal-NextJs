const { createSlice } = require("@reduxjs/toolkit");

const JobList = createSlice({
    name: ["allJobs"],
    initialState: [],
    reducers: {
        addToGlobalJobList: (state, action) => [...state, ...action.payload],
        addGlobalListToFirst: (state, action) => [...action.payload, ...state]
    }
})

export default JobList.reducer
export const { addToGlobalJobList,addGlobalListToFirst} = JobList.actions
