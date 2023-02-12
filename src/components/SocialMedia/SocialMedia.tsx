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
                <a href="https://www.facebook.com/" target={'_blank'}>
                    <FontAwesomeIcon icon={faFacebook} className="fb-icon" />
                </a>
            </IconButton>
            <IconButton>
                <a href="https://www.pinterest.com/" target={'_blank'}>
                    <FontAwesomeIcon
                        icon={faPinterest}
                        className="pinterest-icon"
                    />
                </a>
            </IconButton>
            <IconButton>
                <a href="https://twitter.com/" target={'_blank'}>
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="twitter-icon"
                    />
                </a>
            </IconButton>
            <IconButton>
                <a href="https://spotify.com/" target={'_blank'}>
                    <FontAwesomeIcon
                        icon={faSpotify}
                        className="spotify-icon"
                    />
                </a>
            </IconButton>
        </div>
    )
}

export default SocialMedia
