import { IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import './ArticleListItem.scss'
import moment from 'moment'
import { Category } from 'utils/CategoriesArray'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    title: string
    category: Category
    author: string
    date: Date
    image: string
    summary: string
    addFavoriteArticle: (id: number) => void
    removeFavoriteArticle: (id: number) => void
    favoriteArticles: {
        [id: number]: number
    }
}

const ArticlesListItem = ({
    id,
    title,
    category,
    author,
    date,
    image,
    summary,
    addFavoriteArticle,
    removeFavoriteArticle,
    favoriteArticles,
}: Props) => {
    const onLikeClick = (id: number) => {
        favoriteArticles[id]
            ? removeFavoriteArticle(id)
            : addFavoriteArticle(id)
    }

    return (
        <div className="article">
            <div>
                <img src={image} alt="article image" />
            </div>

            <div className="article-data">
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
                        onClick={() => onLikeClick(id)}
                    >
                        <FavoriteBorderIcon
                            fontSize="inherit"
                            className="like-btn"
                        />
                    </IconButton>
                </div>
                <p className="article-summary">{summary}</p>
            </div>
        </div>
    )
}

export default ArticlesListItem
