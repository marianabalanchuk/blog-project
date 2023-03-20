import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type FavoriteArticles = {
    [id: number]: number
}

export const initialState: FavoriteArticles = {}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addToFavorites: (state, action) => ({
            ...state,
            [action.payload]: action.payload,
        }),
        removeFromFavorites: (state, action) => omit(state, action.payload),
    },
})

export const { addToFavorites, removeFromFavorites } = likeSlice.actions

export default likeSlice.reducer
