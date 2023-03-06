import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import { Container, StyledEngineProvider } from '@mui/material'
import './App.scss'
import Home from 'pages/HomePage/Home'
import { Route, Routes } from 'react-router-dom'
import PrivacyPolicyPage from 'pages/PrivacyPolicyPage/PrivacyPolicyPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import FavouritesPage from 'pages/FavouritesPage/FavouritesPage'
import SubscribePage from 'pages/SubscribePage/SubscribePage'
import { useState } from 'react'
import HealthPage from 'pages/CategoryPage/HealthPage'
import CategoryConstants from 'utils/CategoryConstants'

type Props = {}
const App = (props: Props) => {
    const [likedArticles, setLikedArticles] = useState(0)

    const addLikedArticles = () => {
        setLikedArticles((prevState) => prevState + 1)
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Header likedArticles={likedArticles} />
                <Container className="main-container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home addLikedArticles={addLikedArticles} />
                            }
                        />
                        <Route
                            path="/privacypolicy"
                            element={<PrivacyPolicyPage />}
                        />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/subscribe" element={<SubscribePage />} />
                        <Route
                            path="/favourites"
                            element={<FavouritesPage />}
                        />
                        <Route
                            path={CategoryConstants.HEALTH.toLowerCase()}
                            element={
                                <HealthPage
                                    addLikedArticles={addLikedArticles}
                                />
                            }
                        />
                    </Routes>
                </Container>

                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
