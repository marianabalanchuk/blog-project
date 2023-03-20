import { IconButton, Typography } from '@mui/material'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import ArticlesArray, { Article, getArticlesObject } from 'utils/ArticlesArray'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { useState } from 'react'
import { addToFavorites, removeFromFavorites } from 'redux/likeReducer'
import RemoveConfirmation from 'components/RemoveConfirmation/RemoveConfirmation'

type Props = {
    articlesObject?: {
        [id: number]: Article
    }
}

const ArticlePage = ({
    articlesObject = getArticlesObject(ArticlesArray),
}: Props) => {
    const { id } = useParams()
    const article = articlesObject[parseInt(id!)]

    const isLiked = useAppSelector((store) => store.articlesLike[parseInt(id!)])
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
        <>
            <RemoveConfirmation
                open={isOpenModal}
                removeArticle={removeArticle}
                setOpen={setIsOpenModal}
            />

            {article.category}

            <div className="article-author">
                <Link to={'/'}>{article.author}</Link>
            </div>

            {article.title}
            <hr />
            {article.summary}

            <div className="article-date">
                {moment(article.date).format('MMM DD, YYYY')}
            </div>

            <IconButton
                aria-label="favorite"
                size="small"
                onClick={() => onLikeClick(parseInt(id!))}
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
            <div>
                <img src={article.image} alt="article image" />
            </div>
            <p
                dangerouslySetInnerHTML={{
                    __html: article.content!,
                }}
            ></p>
        </>
    )
}

export default ArticlePage
