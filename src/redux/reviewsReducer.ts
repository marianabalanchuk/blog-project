import { createSlice, AnyAction } from '@reduxjs/toolkit'

export type Review = {
    id: number
    articleId: number
    comment: string
    name: string
    email: string
}

export const initialState: Review[] = [
    {
        id: 1,
        articleId: 2,
        comment:
            'Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius.Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni.',
        email: 'a@gmail.com',
        name: 'Denys',
    },
    {
        id: 2,
        articleId: 1,
        comment:
            'Etiam vitae dapibus rhoncus. Quis sem justo nisi varius.Eget etiam aenean nisi montes felis pretium donec veni. ',
        email: 'a@gmail.com',
        name: 'Anna',
    },
    {
        id: 3,
        articleId: 1,
        comment:
            'Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius.',
        email: 'a@gmail.com',
        name: 'John',
    },
]

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action) => [...state, action.payload],
    },
})

export const { addReview } = reviewsSlice.actions

export default reviewsSlice.reducer
