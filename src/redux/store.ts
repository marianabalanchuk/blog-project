import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'
import reviewsReducer from './reviewsReducer'
import sidebarReducer from './sidebarReducer'

export const store = configureStore({
    reducer: {
        articlesLike: likeReducer,
        reviews: reviewsReducer,
        sidebar: sidebarReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
