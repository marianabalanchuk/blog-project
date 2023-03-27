import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleSidebar } from 'redux/sidebarReducer'
import SubscribeForm from './SubscribeForm'

export default function SubscribeSidebar() {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector((store) => store.sidebar['right'])
    const right = 'right'

    const toggleDrawer =
        () => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }

            dispatch(toggleSidebar(right))
        }

    return (
        <React.Fragment key={right}>
            <Drawer
                anchor={right}
                open={isOpen}
                onClose={toggleDrawer()}
                className="subscribe-sidebar"
            >
                <SubscribeForm />
            </Drawer>
        </React.Fragment>
    )
}
