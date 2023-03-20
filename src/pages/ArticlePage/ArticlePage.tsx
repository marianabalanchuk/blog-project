import { useParams } from 'react-router-dom'
import ArticlesArray, { Article, getArticlesObject } from 'utils/ArticlesArray'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { useState } from 'react'
import { addToFavorites, removeFromFavorites } from 'redux/likeReducer'
import GetCategoryHelper from 'utils/GetCategoryHelper'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import {
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share'

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
            <ArticlesListItem
                id={parseInt(id!)}
                title={article.title}
                category={GetCategoryHelper(article.category)}
                author={article.author}
                date={article.date}
                image={article.image}
                summary={article.summary}
            />
            <div className="share_btns">
                <FacebookShareButton
                    url={'http://localhost:3000/article/1'}
                    quote={'Dummy text!'}
                    hashtag="#muo"
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton url={'http://localhost:3000/article/1'}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
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
