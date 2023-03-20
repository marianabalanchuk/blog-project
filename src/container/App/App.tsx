import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import { Container, StyledEngineProvider } from '@mui/material'
import './App.scss'
import Home from 'pages/HomePage/Home'
import { Route, Routes } from 'react-router-dom'
import PrivacyPolicyPage from 'pages/PrivacyPolicyPage/PrivacyPolicyPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage'
import SubscribePage from 'pages/SubscribePage/SubscribePage'
import CategoryConstants from 'utils/CategoryConstants'
import CategoryPage from 'pages/CategoryPage/CategoryPage'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Header />
                <Container className="main-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/privacypolicy"
                            element={<PrivacyPolicyPage />}
                        />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/subscribe" element={<SubscribePage />} />
                        <Route path="/favourites" element={<FavoritesPage />} />
                        <Route
                            path={CategoryConstants.HEALTH.toLowerCase()}
                            element={
                                <CategoryPage
                                    categoryTitle={CategoryConstants.HEALTH}
                                />
                            }
                        />

                        <Route
                            path={CategoryConstants.BUSINESS.toLowerCase()}
                            element={
                                <CategoryPage
                                    categoryTitle={CategoryConstants.BUSINESS}
                                />
                            }
                        />
                        <Route
                            path={CategoryConstants.INSPIRATION.toLowerCase()}
                            element={
                                <CategoryPage
                                    categoryTitle={
                                        CategoryConstants.INSPIRATION
                                    }
                                />
                            }
                        />
                        <Route
                            path={CategoryConstants.SPORT.toLowerCase()}
                            element={
                                <CategoryPage
                                    categoryTitle={CategoryConstants.SPORT}
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
