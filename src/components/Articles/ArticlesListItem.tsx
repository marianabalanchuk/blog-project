import { IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import './ArticleListItem.scss'
import moment from 'moment'
import { Category } from 'utils/CategoriesArray'
import { Link } from 'react-router-dom'

type Props = {
    title: string
    category: Category
    author: string
    date: Date
    image: string
    summary: string
    addLikedArticles: () => void
}

const ArticlesListItem = ({
    title,
    category,
    author,
    date,
    image,
    summary,
    addLikedArticles,
}: Props) => {
    return (
        <div className="article">
            <img src={image} alt="article image" />

            <Link to={category.route}>
                <div
                    className="article-category"
                    style={{ backgroundColor: category.color }}
                >
                    {category.title}
                </div>
            </Link>

            <div className="article-title">{title}</div>
            <div className="article-info">
                <div className="article-author">
                    <Link to={'/'}>{author}</Link>
                </div>
                <div className="article-date">
                    {moment(date).format('MMM DD, YYYY')}
                </div>
                <IconButton
                    aria-label="favorite"
                    size="small"
                    onClick={addLikedArticles}
                >
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
