import { Avatar } from '@mui/material'
import SocialMedia from 'components/SocialMedia/SocialMedia'
import { Link } from 'react-router-dom'
import './AuthorListItem.scss'

type Props = {
    id: number
    name: string
    about: string
    count: number
    image: string
    route: string
}

const AuthorListItem = ({ name, count, route, image, about }: Props) => {
    return (
        <div className="author-item">
            <Link to={route}>
                <Avatar
                    alt="author photo"
                    src={image}
                    sx={{ width: 85, height: 85 }}
                />
            </Link>
            <div className="author-name-count-links">
                <Link to={route}>
                    <p className="author-name">{name}</p>
                </Link>
                <p>
                    Articles: <span className="author-count">{count}</span>
                </p>
                <SocialMedia showInstagram={true} />
            </div>

            <p className="author-about">{about}</p>
        </div>
    )
}

export default AuthorListItem
