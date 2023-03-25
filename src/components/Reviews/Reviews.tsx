import { Card, CardContent } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import './AddReview.scss'

type Props = {
    articleId: number
}

const Reviews = (props: Props) => {
    const arrReviews = useAppSelector((state) => state.reviews)

    const articleReviews = arrReviews.filter((review) => {
        return review.articleId === props.articleId
    })

    return (
        <div>
            {articleReviews.map(({ id, comment, name }) => {
                return (
                    <Card variant="outlined" key={id} className="review">
                        <CardContent>
                            <div className="review-name">{name}:</div>
                            <div className="review-text">{comment}</div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export default Reviews
