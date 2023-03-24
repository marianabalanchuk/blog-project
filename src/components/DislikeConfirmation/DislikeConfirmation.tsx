import { Box, Button, Modal } from '@mui/material'
import './DislikeConfirmation.scss'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
    open: boolean
    removeArticle: (isConfirmed: boolean) => void
    setOpen: (isTrue: boolean) => void
}

const RemoveConfirmation = (props: Props) => {
    const close = (isTrue: boolean) => {
        props.removeArticle(isTrue)
        props.setOpen(false)
    }
    return (
        <Modal
            open={props.open}
            onClose={() => close(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal-block"
        >
            <Box>
                <div className="confirmation-pop-up">
                    <CloseIcon
                        className="close-modal"
                        onClick={() => close(false)}
                    />

                    <p className="confirmation-question">
                        Do you really want to remove this article from
                        favorites?
                    </p>
                    <div className="confirmation-btns">
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
