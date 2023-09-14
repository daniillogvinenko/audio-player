import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from './slices'

const rootReducer = combineReducers({
    main: toolkitSlice,
})

//thunk и devtools встроены и их подключать не надо
const store = configureStore({
    reducer: rootReducer,
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;