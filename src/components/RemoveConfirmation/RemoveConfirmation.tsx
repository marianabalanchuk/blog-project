import { Box, Button, Modal } from '@mui/material'
import { useEffect, useState } from 'react'
import './RemoveConfirmation.scss'

type Props = {
    open: boolean
    removeArticle: (isConfirmed: boolean) => void
}

const RemoveConfirmation = (props: Props) => {
    const [open, setOpen] = useState(props.open)

    useEffect(() => {
        if (props.open) {
            setOpen(props.open)
        }
    }, [props.open])

    const close = (isTrue: boolean) => {
        props.removeArticle(isTrue)
        setOpen(false)
    }
    return (
        <Modal
            open={open}
            onClose={() => close(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <div className="confirmation-pop-up">
                    <p className="confirmation-question">
                        Do you really want to remove this article from
                        favorites?
                    </p>
                    <div>
                        <Button
                            className="confirmation-btn"
                            onClick={() => close(true)}
                        >
                            Yes
                        </Button>
                        <Button
                            className="confirmation-btn"
                            onClick={() => close(false)}
                        >
                            No
                        </Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default RemoveConfirmation
