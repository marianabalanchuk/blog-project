import { Box, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import './Subscribe.scss'

type Props = {
    open: boolean
    setOpen: (isTrue: boolean) => void
}

const SubscribeModal = (props: Props) => {
    const close = (isTrue: boolean) => {
        props.setOpen(false)
    }
    return (
        <div>
            <Modal
                open={props.open}
                onClose={() => close(true)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="subscribed-modal-block"
            >
                <Box>
                    <div className="subscribed-pop-up">
                        <CloseIcon
                            className="close-modal"
                            onClick={() => close(true)}
                        />

                        <div>
                            <h3 className="confirmation-heading">Thank you!</h3>
                            <p>
                                Thank you for signing up to receive the
                                Newsletters. Please check your inbox to confirm
                                subscription.
                            </p>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default SubscribeModal
