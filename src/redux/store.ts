import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'

export const store = configureStore({
    reducer: {
        articlesLike: likeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
