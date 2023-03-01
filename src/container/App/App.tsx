import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import { StyledEngineProvider } from '@mui/material'
import './App.scss'
import Home from 'pages/Home'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Header />
                <Home />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
