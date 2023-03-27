import { createSlice } from '@reduxjs/toolkit'

type SidebarState = {
    [key: string]: boolean
}

export const initialState: SidebarState = {
    right: false,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
    },
})

export const { toggleSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer
