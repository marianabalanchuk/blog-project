import { Button, TextareaAutosize, TextField } from '@mui/material'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addReview, Review } from 'redux/reviewsReducer'

type Props = {
    articleId: number
}

const AddReview = (props: Props) => {
    const dispatch = useAppDispatch()
    const arrReviews = useAppSelector((state) => state.reviews)

    const ids = arrReviews.map((object) => {
        return object.id
    })

    const nextMaxId = Math.max(...ids) + 1

    const [newReview, setNewReview] = useState<Review>({
        id: nextMaxId,
        articleId: props.articleId,
        comment: '',
        name: '',
        email: '',
    })

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: event.target.value,
        }))
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            email: event.target.value,
        }))
    }

    const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            comment: event.target.value,
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addReview(newReview))
        setNewReview({
            id: nextMaxId,
            articleId: props.articleId,
            comment: '',
            name: '',
            email: '',
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Leave a Reply</h3>
                <p>
                    Your Email Address Will Not Be Published. Required Fields
                    Are Marked *
                </p>

                <div>
                    <TextareaAutosize
                        minRows={10}
                        placeholder="Comment*"
                        required
                        value={newReview.comment}
                        onChange={handleText}
                    />
                </div>
                <div>
                    <TextField
                        placeholder="Full Name*"
                        required
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <TextField
                        type="email"
                        placeholder="Email Address*"
                        required
                        value={newReview.email}
                        onChange={handleEmail}
                    />
                </div>

                <Button variant="outlined" type="submit">
                    Post Comment
                </Button>
            </form>
        </>
    )
}

export default AddReview
