import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import { Container, StyledEngineProvider } from '@mui/material'
import './App.scss'
import Home from 'pages/Home'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Header />
                <Container className="main-container">
                    <Home />
                </Container>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
