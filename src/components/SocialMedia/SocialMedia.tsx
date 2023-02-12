import {
    faFacebook,
    faPinterest,
    faSpotify,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@mui/material/IconButton'

type Props = {}

const SocialMedia = (props: Props) => {
    return (
        <div className="social-media-icons">
            <IconButton>
                <FontAwesomeIcon icon={faFacebook} className="fb-icon" />
            </IconButton>
            <IconButton>
                <FontAwesomeIcon
                    icon={faPinterest}
                    className="pinterest-icon"
                />
            </IconButton>
            <IconButton>
                <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
            </IconButton>
            <IconButton>
                <FontAwesomeIcon icon={faSpotify} className="spotify-icon" />
            </IconButton>
        </div>
    )
}

export default SocialMedia
