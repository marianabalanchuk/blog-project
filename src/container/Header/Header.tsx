import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import { useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { toggleSidebar } from 'redux/sidebarReducer'

type Props = {}
const Header = (props: Props) => {
    const dispatch = useAppDispatch()

    return (
        <AppBar position="fixed" className="app-bar">
            <Container>
                <Toolbar>
                    <Logo image="/images/logo_black.png" width={140} />
                    <Menu />

                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => dispatch(toggleSidebar('right'))}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
