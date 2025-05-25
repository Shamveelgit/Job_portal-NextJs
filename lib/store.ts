import { configureStore } from "@reduxjs/toolkit"
import theme from "./features/themeSlice"
import searchBtn from "./features/searchBtnSlice"
import searchValue from "./features/SearchBarValue"
import RecentJobs from "./features/RecentJobs"
import filterJobs from "./features/FilteredJobs"
import skipValue from "./features/SkipValue"
import checkData from "./features/checkData"
import appliedJobs from "./features/applidJob"
import GlobalJobList from "./features/JobList"
import showRoleUI from "./features/ShowRoleUi"

export const makeStore = () => configureStore({
    reducer: {
        theme,
        searchBtn,
        searchValue,
        RecentJobs,
        GlobalJobList,
        filterJobs,
        skipValue,
        checkData,
        appliedJobs,
        showRoleUI
    }
})
export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
