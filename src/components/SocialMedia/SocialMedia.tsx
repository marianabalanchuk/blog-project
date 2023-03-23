import {
    faFacebook,
    faInstagram,
    faPinterest,
    faSpotify,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import './SocialMedia.scss'

type Props = {
    showPinterest?: boolean
    showSpotify?: boolean
    showInstagram?: boolean
}

const SocialMedia = (props: Props) => {
    return (
        <div className="social-media-icons">
            <IconButton>
                <Link to={'https://www.facebook.com/'} target={'_blank'}>
                    <FontAwesomeIcon icon={faFacebook} className="fb-icon" />
                </Link>
            </IconButton>
            {props.showInstagram && (
                <IconButton>
                    <Link to={'https://www.instagram.com/'} target={'_blank'}>
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="inst-icon"
                        />
                    </Link>
                </IconButton>
            )}
            {props.showPinterest && (
                <IconButton>
                    <Link to={'https://www.pinterest.com/'} target={'_blank'}>
                        <FontAwesomeIcon
                            icon={faPinterest}
                            className="pinterest-icon"
                        />
                    </Link>
                </IconButton>
            )}
            <IconButton>
                <Link to={'https://twitter.com/'} target={'_blank'}>
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="twitter-icon"
                    />
                </Link>
            </IconButton>
            {props.showSpotify && (
                <IconButton>
                    <Link to={'https://spotify.com/'} target={'_blank'}>
                        <FontAwesomeIcon
                            icon={faSpotify}
                            className="spotify-icon"
                        />
                    </Link>
                </IconButton>
            )}
        </div>
    )
}

export default SocialMedia
