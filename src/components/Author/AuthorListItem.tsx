import { Avatar } from '@mui/material'
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
        <Link to={route} className="author-item">
            <div className="author-data">
                <Avatar
                    alt="author photo"
                    src={image}
                    sx={{ width: 85, height: 85 }}
                />
                <div className="author-name-count-block">
                    <p className="author-name">{name}</p>
                    <p>
                        Articles: <span className="author-count">{count}</span>
                    </p>
                </div>

                <p className="author-about">{about}</p>
            </div>
        </Link>
    )
}

export default AuthorListItem
