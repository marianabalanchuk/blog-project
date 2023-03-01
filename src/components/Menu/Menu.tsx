import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MenuItem from './MenuItem'
import './Menu.scss'

type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="nav-menu">
            <MenuItem to="/business">Business</MenuItem>
            <MenuItem to="/active">Active</MenuItem>
            <MenuItem to="/health">Health</MenuItem>
            <MenuItem to="/sport">Sport</MenuItem>
            <IconButton aria-label="favorite" size="medium">
                <FavoriteBorderIcon fontSize="inherit" />
            </IconButton>
        </div>
    )
}

export default Menu
