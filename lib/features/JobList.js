const { createSlice } = require("@reduxjs/toolkit");

const JobList = createSlice({
    name: "globalJobList",
    initialState: [],
    reducers: {
        addToGlobalJobList: (state, action) => {
            let existJobId = new Set(state.map(job => job._id))
            let newJobs = action.payload?.filter(job => !existJobId.has(job._id))
            return [...state, ...newJobs]
        },
        addGlobalListToFirst: (state, action) => {
            let existJobId = new Set(state.map(job => job._id))
            let newJobs = action.payload.filter(job => !existJobId.has(job._id))
            return [...newJobs,...state,]
        },
        addGlobalList : (state,action) => {
            return [...state,...action.payload]
        }
    }
})

export default JobList.reducer
export const { addToGlobalJobList, addGlobalListToFirst } = JobList.actions
