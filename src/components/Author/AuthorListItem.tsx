import { Avatar } from '@mui/material'
import SocialMedia from 'components/SocialMedia/SocialMedia'
import { Link } from 'react-router-dom'
import SocialMediaConstants from 'utils/SocialMediaConstants'
import './AuthorListItem.scss'

type Props = {
    id: number
    name: string
    about: string
    count: number
    image: string
    route: string
    socialMediaPosition: string
}

const AuthorListItem = ({
    name,
    count,
    route,
    image,
    about,
    socialMediaPosition,
}: Props) => {
    return (
        <div className="author-item">
            <Link to={route}>
                <Avatar
                    alt="author photo"
                    src={image}
                    sx={{ width: 85, height: 85 }}
                />
            </Link>
            <div>
                <Link to={route}>
                    <p className="author-name">{name}</p>
                </Link>
                {socialMediaPosition == SocialMediaConstants.LEFT && (
                    <div className="author-count-links">
                        <p>
                            Articles:{' '}
                            <span className="author-count">{count}</span>
                        </p>
                        <SocialMedia showInstagram={true} />
                    </div>
                )}
            </div>
            <p className="author-about">{about}</p>

            {socialMediaPosition == SocialMediaConstants.RIGHT && (
                <div className="author-count-links">
                    <p>
                        Articles: <span className="author-count">{count}</span>
                    </p>
                    <SocialMedia showInstagram={true} />
                </div>
            )}
        </div>
    )
}

export default AuthorListItem
