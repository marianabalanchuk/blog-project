import { IconButton } from '@mui/material'
import moment from 'moment'
import { Link } from 'react-router-dom'
import ArticlesArray from 'utils/ArticlesArray'
import CategoryConstants from 'utils/CategoryConstants'
import './CategoryPage.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import GetCategoryHelper from 'utils/GetCategoryHelper'

type Props = {
    addLikedArticles: () => void
}

const HealthPage = (props: Props) => {
    const healthArticles = ArticlesArray.filter((article) => {
        return article.category === CategoryConstants.HEALTH
    })

    return (
        <div>
            {healthArticles.map(
                ({ id, image, title, author, date, summary, category }) => {
                    return (
                        <div className="article" key={id}>
                            <img src={image} alt="article image" />

                            <div
                                className="article-category"
                                style={{
                                    backgroundColor:
                                        GetCategoryHelper(category).color,
                                }}
                            >
                                {category}
                            </div>

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
                                    onClick={props.addLikedArticles}
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
            )}
        </div>
    )
}

export default HealthPage
