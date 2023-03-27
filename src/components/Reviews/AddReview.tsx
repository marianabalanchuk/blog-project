import { Button, TextareaAutosize } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addReview, Review } from 'redux/reviewsReducer'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import './AddReview.scss'
import { useState } from 'react'

type Props = {
    articleId: number
}

const AddReview = (props: Props) => {
    const dispatch = useAppDispatch()
    const arrReviews = useAppSelector((state) => state.reviews)
    const [isSubmitClicked, setIsSubmitClicked] = useState(false)

    const ids = arrReviews.map((object) => {
        return object.id
    })

    const nextMaxId = Math.max(...ids) + 1

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')

            .matches(
                /^[a-z0-9](\.?[a-z0-9]){1,}@gmail\.com$/i,
                'Only valid gmail.com emails are accepted.'
            ),

        name: Yup.string()
            .required('Name is required')
            .test('len', 'Name is too short', (val) => val.length > 3),

        comment: Yup.string()
            .required('Comment is required')
            .test('len', 'Comment is too short', (val) => val.length > 20),
    })
    const formOptions = { resolver: yupResolver(validationSchema) }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Review>(formOptions)

    const onSubmit = (values: FieldValues) => {
        values.id = nextMaxId
        values.articleId = props.articleId
        dispatch(addReview(values))
        reset({
            id: props.articleId,
            articleId: props.articleId,
            name: '',
            email: '',
            comment: '',
        })
        setIsSubmitClicked(false)
    }

    const onError = (values: FieldValues) => {
        setIsSubmitClicked(true)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit, onError)}
                className="review-form"
            >
                <h3>Leave a Comment</h3>
                <p>
                    Your Email Address Will Not Be Published. Required Fields
                    Are Marked *
                </p>

                <div className="textarea-error">
                    <TextareaAutosize
                        className="comment-field"
                        minRows={12}
                        placeholder="Comment*"
                        {...register('comment', {
                            required: true,
                        })}
                    />
                    <p className="error">
                        {isSubmitClicked && (
                            <span>{errors.comment?.message}</span>
                        )}
                    </p>
                </div>
                <div className="name-email-block">
                    <div className="name-error">
                        <input
                            className="name-field"
                            placeholder="Name*"
                            {...register('name', {
                                required: true,
                            })}
                        />
                        <p className="error">
                            {isSubmitClicked && (
                                <span>{errors.name?.message}</span>
                            )}
                        </p>
                    </div>
                    <div className="email-error">
                        <input
                            className={`email-field ${
                                errors.email ? 'is-invalid' : ''
                            }`}
                            placeholder="Email Address*"
                            {...register('email', {
                                required: true,
                            })}
                        />
                        <p className="error">
                            {isSubmitClicked && (
                                <span>{errors.email?.message}</span>
                            )}
                        </p>
                    </div>
                </div>
                <Button type="submit" className="post-btn">
                    Post Comment
                </Button>
            </form>
        </>
    )
}

export default AddReview
