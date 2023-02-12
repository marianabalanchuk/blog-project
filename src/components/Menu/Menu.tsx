import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button variant="text" color="error">
                Business
            </Button>
            <Button variant="text" color="error">
                Active
            </Button>
            <Button variant="text" color="error">
                Health
            </Button>
            <IconButton aria-label="favorite" size="medium" color="error">
                <FavoriteBorderIcon fontSize="inherit" />
            </IconButton>
        </>
    )
}

export default Menu
