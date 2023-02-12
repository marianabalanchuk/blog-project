import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="nav-menu">
            <Button variant="text">
                Business
                <ExpandMoreIcon />
            </Button>
            <Button variant="text">
                Active
                <ExpandMoreIcon />
            </Button>
            <Button variant="text">
                Health
                <ExpandMoreIcon />
            </Button>
            <IconButton aria-label="favorite" size="medium" color="error">
                <FavoriteBorderIcon fontSize="inherit" />
            </IconButton>
        </div>
    )
}

export default Menu
