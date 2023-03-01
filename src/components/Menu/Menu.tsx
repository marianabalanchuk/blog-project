import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MenuItem from './MenuItem'
import './Menu.scss'
import { NavLink } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="nav-menu">
            <MenuItem to="/business">Business</MenuItem>
            <MenuItem to="/active">Active</MenuItem>
            <MenuItem to="/health">Health</MenuItem>
            <MenuItem to="/sport">Sport</MenuItem>
            <IconButton aria-label="favorite" size="medium">
                <NavLink
                    to="/favourites"
                    className={({ isActive }) =>
                        isActive ? 'menu-item-active' : 'menu-item'
                    }
                >
                    <FavoriteBorderIcon fontSize={'medium'} />
                </NavLink>
            </IconButton>
        </div>
    )
}

export default Menu
