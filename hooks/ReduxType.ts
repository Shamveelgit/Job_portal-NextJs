
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../lib/store'

// Correctly typed custom hooks
export const UseAppDispatch = () => useDispatch<AppDispatch>()
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector
