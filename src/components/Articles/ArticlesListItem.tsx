import { IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import './ArticleListItem.scss'
import moment from 'moment'
import { Category } from 'utils/CategoriesArray'
import { NavLink } from 'react-router-dom'

type Props = {
    title: string
    category: Category
    author: string
    date: Date
    image: string
    summary: string
}

const ArticlesListItem = ({
    title,
    category,
    author,
    date,
    image,
    summary,
}: Props) => {
    return (
        <div className="article">
            <img src={image} alt="article image" />
            <div className="article-title">{title}</div>
            <NavLink to={category.route}>
                <div
                    className="article-category"
                    style={{ backgroundColor: category.color }}
                >
                    {category.title}
                </div>
            </NavLink>
            <div className="article-info">
                <div className="article-author">
                    <a href="#">{author}</a>
                </div>
                <div className="article-date">
                    {moment(date).format('MMM DD, YYYY')}
                </div>
                <IconButton aria-label="favorite" size="small">
                    <FavoriteBorderIcon
                        fontSize="inherit"
                        className="like-btn"
                    />
                </IconButton>
            </div>
            <p className="article-summary">{summary}</p>
        </div>
    )
}

export default ArticlesListItem
