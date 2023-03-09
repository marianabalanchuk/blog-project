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
import CategoryConstants from 'utils/CategoryConstants'
import CategoryPage from 'pages/CategoryPage/CategoryPage'
import { omit } from 'lodash'

type Props = {}

type FavoriteArticlesType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [favoriteArticles, setFavoriteArticles] =
        useState<FavoriteArticlesType>({})

    const addFavoriteArticle = (id: number) => {
        setFavoriteArticles((prevState) => ({
            ...prevState,
            [id]: id,
        }))
    }

    const removeFavoriteArticle = (id: number) => {
        setFavoriteArticles((prevState) => omit(prevState, id))
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Header favoriteArticles={favoriteArticles} />
                <Container className="main-container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    removeFavoriteArticle={
                                        removeFavoriteArticle
                                    }
                                    addFavoriteArticle={addFavoriteArticle}
                                    favoriteArticles={favoriteArticles}
                                />
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
                            element={
                                <FavouritesPage
                                    favoriteArticles={favoriteArticles}
                                    addFavoriteArticle={addFavoriteArticle}
                                    removeFavoriteArticle={
                                        removeFavoriteArticle
                                    }
                                />
                            }
                        />
                        <Route
                            path={CategoryConstants.HEALTH.toLowerCase()}
                            element={
                                <CategoryPage
                                    addFavoriteArticle={addFavoriteArticle}
                                    categoryTitle={CategoryConstants.HEALTH}
                                />
                            }
                        />

                        <Route
                            path={CategoryConstants.BUSINESS.toLowerCase()}
                            element={
                                <CategoryPage
                                    addFavoriteArticle={addFavoriteArticle}
                                    categoryTitle={CategoryConstants.BUSINESS}
                                />
                            }
                        />
                        <Route
                            path={CategoryConstants.INSPIRATION.toLowerCase()}
                            element={
                                <CategoryPage
                                    addFavoriteArticle={addFavoriteArticle}
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
                                    addFavoriteArticle={addFavoriteArticle}
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
