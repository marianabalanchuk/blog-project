import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <CssBaseline>
                <Header />
                <Main />
                <Footer />
            </CssBaseline>
        </>
    )
}
export default App;
