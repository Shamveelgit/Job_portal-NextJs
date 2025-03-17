const { createSlice } = require("@reduxjs/toolkit");

const RecentJobs = createSlice({
    name : "recentJobs",
    initialState : [],
    reducers : {
        addRecentJob : (state, action) => state.concat(action.payload),
        // removeRecentJob : (state, action) => state.filter(job => job.id!==action.payload)
    }
})

export default RecentJobs.reducer
export const {addRecentJob} = RecentJobs.actions