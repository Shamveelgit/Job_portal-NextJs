const { createSlice } = require("@reduxjs/toolkit");


const filterJobs = createSlice({
    initialState : [],
    name : "filterJobs",
    reducers : {
        setFilterJobs : (state, action) => action.payload,
    },
    
})

export default filterJobs.reducer
export const { setFilterJobs} = filterJobs.actions