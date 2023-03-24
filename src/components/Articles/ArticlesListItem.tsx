import { IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import './ArticleListItem.scss'
import moment from 'moment'
import { Category } from 'utils/CategoriesArray'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addToFavorites, removeFromFavorites } from 'redux/likeReducer'
import RemoveConfirmation from 'components/DislikeConfirmation/DislikeConfirmation'
import { Author } from 'utils/AuthorsArray'

type Props = {
    id: number
    title: string
    category?: Category
    author?: Author
    date?: Date
    image: string
    summary?: string
    mainslider?: boolean
    sideslider?: boolean
}

const ArticlesListItem = ({
    id,
    title,
    category,
    author,
    date,
    image,
    summary,
}: Props) => {
    const isLiked = useAppSelector((store) => store.articlesLike[id])
    const dispatch = useAppDispatch()

    const [isOpenModal, setIsOpenModal] = useState(false)

    const onLikeClick = (id: number) => {
        isLiked ? setIsOpenModal(true) : dispatch(addToFavorites(id))
    }

    const removeArticle = (isTrue: boolean) => {
        if (isTrue) {
            dispatch(removeFromFavorites(id))
        }
    }

    return (
        <div className="article">
            <RemoveConfirmation
                open={isOpenModal}
                removeArticle={removeArticle}
                setOpen={setIsOpenModal}
            />

            <div>
                <img
                    src={image}
                    alt="article image"
                    className="article-image"
                />
            </div>

            <div className="article-data">
                {category && (
                    <Link to={category!.route}>
                        <div
                            className="article-category"
                            style={{ backgroundColor: category!.color }}
                        >
                            {category!.title}
                        </div>
                    </Link>
                )}
                <Link to={`/article/${id}`} className="article-title">
                    {title}
                </Link>

                {date && (
                    <div className="article-info">
                        <div className="article-author">
                            <Link to={author?.route!}>{author?.name}</Link>
                        </div>

                        <div className="article-date">
                            {moment(date).format('MMM DD, YYYY')}
                        </div>

                        <IconButton
                            aria-label="favorite"
                            size="small"
                            onClick={() => onLikeClick(id)}
                        >
                            {isLiked ? (
                                <FavoriteIcon
                                    fontSize="inherit"
                                    className="like-btn"
                                    style={{
                                        color: '#ff3152',
                                    }}
                                />
                            ) : (
                                <FavoriteBorderIcon
                                    fontSize="inherit"
                                    className="like-btn"
                                    style={{
                                        color: '#ff3152',
                                    }}
                                />
                            )}
                        </IconButton>
                    </div>
                )}
                {summary && <p className="article-summary">{summary}</p>}
            </div>
        </div>
    )
}

export default ArticlesListItem
