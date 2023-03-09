import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'

type Props = {
    favoriteArticles: {
        [id: number]: number
    }
}
const Header = (props: Props) => {
    return (
        <AppBar position="fixed" className="app-bar">
            <Container>
                <Toolbar>
                    <Logo image="images/logo_black.png" width={140} />
                    <Menu favoriteArticles={props.favoriteArticles} />

                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
