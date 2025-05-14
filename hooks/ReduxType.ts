import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../lib/store";

export const UseAppDispatch = useDispatch.withTypes<AppDispatch>()
export const UseAppSelector : TypedUseSelectorHook<RootState>= useSelector 