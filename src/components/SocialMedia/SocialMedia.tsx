import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import IconButton from '@mui/material/IconButton'

type Props = {}

const SocialMedia = (props: Props) => {
    return (
        <div>
            <IconButton aria-label="facebook" size="medium" color="error">
                <FacebookRoundedIcon fontSize="inherit" />
            </IconButton>
        </div>
    )
}

export default SocialMedia
