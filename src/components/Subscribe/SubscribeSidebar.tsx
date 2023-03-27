import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleSidebar } from 'redux/sidebarReducer'
import SubscribeModal from './SubscribeModal'
import SubscribeForm from './SubscribeForm'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function SubscribeSidebar() {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector((store) => store.sidebar['right'])
    const right = 'right'

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
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
        <div>
            <React.Fragment key={right}>
                {/* <Button onClick={toggleDrawer(right, true)}>
                        {right}
                    </Button> */}
                <Drawer
                    anchor={right}
                    open={isOpen}
                    onClose={toggleDrawer(right, false)}
                >
                    <SubscribeForm />
                </Drawer>
            </React.Fragment>
        </div>
    )
}
