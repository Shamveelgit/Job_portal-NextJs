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
        addToAppliedJobs : ((state,action) => [...state,action.payload]),
        removeToAppliedJobs : ((state,action) => {
            state.splice(action.payload,1)
            return state
        })
    }
})

export default appliedJobs.reducer
export const {addToAppliedJobs ,removeToAppliedJobs} = appliedJobs.actions