import { Button } from '@mui/material'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import RightSidebar from 'components/RightSidebar/RightSidebar'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import ArticlesArray, { Article, getArticlesObject } from 'utils/ArticlesArray'
import GetAuthorHelper from 'utils/GetAuthorHelper'
import GetCategoryHelper from 'utils/GetCategoryHelper'
import './FavoritesPage.scss'

type Props = {
    articlesObject?: {
        [id: number]: Article
    }
}
const FavouritesPage = ({
    articlesObject = getArticlesObject(ArticlesArray),
}: Props) => {
    const favoriteArticles = useAppSelector((store) => store.articlesLike)
    return (
        <div className="favorites-pg-container">
            <div className="favorites-pg-content">
                {Object.keys(favoriteArticles).length === 0 ? (
                    <div className="no-favorites">
                        <p> No articles have been added Favorites yet.</p>
                        <Link to={'/'}>
                            <Button className="explore-btn">Explore</Button>
                        </Link>
                    </div>
                ) : (
                    <h2>Your Favorite Articles</h2>
                )}

                {Object.keys(favoriteArticles).map((id) => (
                    <div key={id}>
                        <ArticlesListItem
                            id={articlesObject[parseInt(id)].id}
                            title={articlesObject[parseInt(id)].title}
                            category={GetCategoryHelper(
                                articlesObject[parseInt(id)].category
                            )}
                            author={GetAuthorHelper(
                                articlesObject[parseInt(id)].author
                            )}
                            date={articlesObject[parseInt(id)].date}
                            image={articlesObject[parseInt(id)].image}
                            summary={articlesObject[parseInt(id)].summary}
                        />
                    </div>
                ))}
            </div>

            <RightSidebar />
        </div>
    )
}
export default FavouritesPage
