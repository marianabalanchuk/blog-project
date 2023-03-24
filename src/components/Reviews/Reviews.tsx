import { Card, CardContent } from '@mui/material'
import { useAppSelector } from 'redux/hooks'

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
            {articleReviews.map(({ id, comment, name, email }) => {
                return (
                    <Card variant="outlined" key={id}>
                        <CardContent>
                            <div>{name}:</div>
                            <div>{email}</div>
                            <div>{comment}</div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export default Reviews
