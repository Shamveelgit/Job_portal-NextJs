import { configureStore } from "@reduxjs/toolkit"
import theme from "./features/themeSlice"
import searchBtn from "./features/searchBtnSlice"
import searchValue from "./features/SearchBarValue"
import RecentJobs  from "./features/RecentJobs"
import GlobalJobList from "./features/JobList"


export const makeStore = () => {
    return configureStore({
        reducer : {
            theme,
            searchBtn,
            searchValue,
            RecentJobs,
            GlobalJobList
        }
    })
}