import { combineReducers } from "redux";
import asteroid from './asteroidReducer'

export const rootReducer=combineReducers({
    asteroid
})

export type RootState=ReturnType<typeof rootReducer>