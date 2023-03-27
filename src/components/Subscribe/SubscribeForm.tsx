import { Button, FormControlLabel, Modal } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useState } from 'react'
import './Subscribe.scss'
import SubscribeModal from 'components/Subscribe/SubscribeModal'

type Props = {}

type Subscribe = {
    name: string
    email: string
    checkbox: boolean
}

const SubscribeForm = (props: Props) => {
    const [isSubmitClicked, setIsSubmitClicked] = useState(false)

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

        checkbox: Yup.boolean()
            .required('The terms and conditions must be accepted.')
            .oneOf([true], 'The terms and conditions must be accepted.'),
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Subscribe>({
        resolver: yupResolver(validationSchema),
    })

    const onSubmit = (values: FieldValues) => {
        reset({
            name: '',
            email: '',
            checkbox: false,
        })
        setIsSubmitClicked(false)
        setIsOpenModal(true)
    }

    const onError = (values: FieldValues) => {
        setIsSubmitClicked(true)
    }

    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit, onError)}
                className="subscribe-form"
            >
                <h3>Never Miss A Post!</h3>

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
                <div>
                    <FormControlLabel
                        control={
                            <input
                                type="checkbox"
                                className="checkbox"
                                {...register('checkbox')}
                            />
                        }
                        label="I consent to the terms and conditions"
                        className="agree-block"
                    />
                    <p className="error">
                        {isSubmitClicked && (
                            <span>{errors.checkbox?.message}</span>
                        )}
                    </p>
                </div>
                <Button type="submit" className="post-btn">
                    Subscribe
                </Button>
            </form>

            <SubscribeModal open={isOpenModal} setOpen={setIsOpenModal} />
        </>
    )
}

export default SubscribeForm
