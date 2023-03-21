import { useParams } from 'react-router-dom'
import ArticlesArray, { Article, getArticlesObject } from 'utils/ArticlesArray'
import GetCategoryHelper from 'utils/GetCategoryHelper'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share'
import './ArticlePage.scss'
import { Avatar } from '@mui/material'

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
                date={article.date}
                image={article.image}
                summary={article.summary}
            />

            <Avatar
                alt="Remy Sharp"
                src="/images/Michael.jpg"
                sx={{ width: 75, height: 75 }}
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

                <EmailShareButton
                    url={
                        'https://www.makeuseof.com/add-social-share-buttons-in-react/'
                    }
                >
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </div>

            <div
                className="article-content"
                dangerouslySetInnerHTML={{
                    __html: article.content!,
                }}
            ></div>
        </div>
    )
}

export default ArticlePage
