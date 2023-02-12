import { IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Component } from 'react'
import './ArticleListItem.scss'
const moment = require('moment')

type Props = {
    title: string
    category: string
    author: string
    date: Date
    image: string
    summary: string
}

class ArticlesListItem extends Component<Props> {
    render() {
        const { title, category, author, date, image, summary } = this.props
        return (
            <div className="article">
                <img src={image} alt="article image" />
                <div className="article-title">{title}</div>
                <div className="article-category">{category}</div>
                <div className="article-info">
                    <div className="article-author">
                        <a href="#">{author}</a>
                    </div>
                    <div className="article-date">
                        {moment(date).format('MMM DD, YYYY')}
                    </div>
                    <IconButton aria-label="favorite" size="small">
                        <FavoriteBorderIcon fontSize="inherit" />
                    </IconButton>
                </div>
                <p className="article-summary">{summary}</p>
            </div>
        )
    }
}

export default ArticlesListItem
