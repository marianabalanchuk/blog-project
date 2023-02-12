import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material'
import './App.scss'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline>
                    <Header />
                    <Main />
                    <Footer />
                </CssBaseline>
            </StyledEngineProvider>
        </>
    )
}
export default App
