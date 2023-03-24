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
import { IconButton } from '@mui/material'
import AuthorListItem from 'components/Author/AuthorListItem'
import GetAuthorHelper from 'utils/GetAuthorHelper'
import SocialMediaConstants from 'utils/SocialMediaConstants'
import { log } from 'console'
import RightSidebar from 'components/RightSidebar/RightSidebar'

type Props = {
    articlesObject?: {
        [id: number]: Article
    }
}

const ArticlePage = ({
    articlesObject = getArticlesObject(ArticlesArray),
}: Props) => {
    const { id } = useParams()
    const theLastArticleId =
        Object.keys(articlesObject)[Object.keys(articlesObject).length - 1]
    const theFirstArticleId = Object.keys(articlesObject)[0]
    const article = articlesObject[parseInt(id!)]
    const articleNext =
        articlesObject[
            parseInt(id!) === parseInt(theLastArticleId!)
                ? parseInt(theFirstArticleId!)
                : parseInt(id!) + 1
        ]
    const articlePrev =
        articlesObject[
            parseInt(id!) - 1 === 0
                ? parseInt(theLastArticleId!)
                : parseInt(id!) - 1
        ]

    const author = GetAuthorHelper(article.author)
    return (
        <div className="article-page-container">
            <div className="main-pg-content">
                <ArticlesListItem
                    id={parseInt(id!)}
                    title={article.title}
                    category={GetCategoryHelper(article.category)}
                    date={article.date}
                    image={article.image}
                    summary={article.summary}
                />

                <div className="author-content">
                    <div className="author-share-sidebar">
                        <div className="sticky">
                            <AuthorListItem
                                image={author.image}
                                name={author.name}
                                route={author.route}
                                id={author.id}
                            />

                            <div className="share_btns">
                                Share To:
                                <FacebookShareButton
                                    url={
                                        'https://www.makeuseof.com/add-social-share-buttons-in-react/'
                                    }
                                    quote={'Dummy text!'}
                                    hashtag="#muo"
                                >
                                    <IconButton className="sm-icon-btn">
                                        <FacebookIcon size={22} round />
                                    </IconButton>
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={
                                        'https://www.makeuseof.com/add-social-share-buttons-in-react/'
                                    }
                                >
                                    <IconButton className="sm-icon-btn">
                                        <TwitterIcon size={22} round />
                                    </IconButton>
                                </TwitterShareButton>
                                <EmailShareButton
                                    url={
                                        'https://www.makeuseof.com/add-social-share-buttons-in-react/'
                                    }
                                >
                                    <IconButton className="sm-icon-btn">
                                        <EmailIcon size={22} round />
                                    </IconButton>
                                </EmailShareButton>
                            </div>
                        </div>
                    </div>

                    <div
                        className="article-content"
                        dangerouslySetInnerHTML={{
                            __html: article.content!,
                        }}
                    ></div>
                </div>
                <hr />

                <div className="post-navigation">
                    <div className="prev-post">
                        <p>Previous post:</p>
                        <ArticlesListItem
                            id={articlePrev.id}
                            title={articlePrev.title}
                            image={articlePrev.image}
                        />
                    </div>
                    <div className="next-post">
                        <p>Next post:</p>
                        <ArticlesListItem
                            id={articleNext.id}
                            title={articleNext.title}
                            image={articleNext.image}
                        />
                    </div>
                </div>
                <div className="author-bottom-block">
                    <AuthorListItem
                        image={author.image}
                        name={author.name}
                        route={author.route}
                        id={author.id}
                        about={author.about}
                        socialMediaPosition={SocialMediaConstants.LEFT}
                    />
                </div>
            </div>
            <RightSidebar />
        </div>
    )
}

export default ArticlePage
