import { useParams } from 'react-router-dom'
import ArticlesArray, { Article, getArticlesObject } from 'utils/ArticlesArray'
import GetCategoryHelper from 'utils/GetCategoryHelper'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import {
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share'
import './ArticlePage.scss'

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
    return (
        <div className="article-page-container">
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
                    url={
                        'https://www.makeuseof.com/add-social-share-buttons-in-react/'
                    }
                    quote={'Dummy text!'}
                    hashtag="#muo"
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton
                    url={
                        'https://www.makeuseof.com/add-social-share-buttons-in-react/'
                    }
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            </div>

            <p
                dangerouslySetInnerHTML={{
                    __html: article.content!,
                }}
            ></p>
        </div>
    )
}

export default ArticlePage
