import { configureStore } from "@reduxjs/toolkit"
import theme from "./features/themeSlice"
import searchBtn from "./features/searchBtnSlice"
import searchValue from "./features/SearchBarValue"


export const makeStore = () => {
    return configureStore({
        reducer : {
            theme,
            searchBtn,
            searchValue
        }
    })
}