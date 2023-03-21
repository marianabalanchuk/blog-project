import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MenuItem from './MenuItem'
import './Menu.scss'
import { NavLink } from 'react-router-dom'
import CategoryConstants from 'utils/CategoryConstants'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const Menu = (props: Props) => {
    const favoriteArticles = useAppSelector((store) => store.articlesLike)
    return (
        <div className="nav-menu">
            <MenuItem to={`/authors`}>Authors</MenuItem>
            <MenuItem to={`/${CategoryConstants.BUSINESS.toLowerCase()}`}>
                {CategoryConstants.BUSINESS}
            </MenuItem>
            <MenuItem to={`/${CategoryConstants.INSPIRATION.toLowerCase()}`}>
                {CategoryConstants.INSPIRATION}
            </MenuItem>
            <MenuItem to={`/${CategoryConstants.HEALTH.toLowerCase()}`}>
                {CategoryConstants.HEALTH}
            </MenuItem>
            <MenuItem to={`/${CategoryConstants.SPORT.toLowerCase()}`}>
                {CategoryConstants.SPORT}
            </MenuItem>
            <IconButton aria-label="favorite" size="medium">
                <NavLink
                    to="/favourites"
                    className={({ isActive }) =>
                        isActive ? 'menu-item-active' : 'menu-item'
                    }
                >
                    <FavoriteBorderIcon fontSize={'medium'} />
                    <div className="like-counter">
                        {Object.keys(favoriteArticles).length}
                    </div>
                </NavLink>
            </IconButton>
        </div>
    )
}

export default Menu
