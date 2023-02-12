import Home from 'pages/Home'
import { Container } from '@mui/material'
import './Main.scss'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container className="main-container">
            <div>
                <Home />
            </div>
        </Container>
    )
}
export default Main
