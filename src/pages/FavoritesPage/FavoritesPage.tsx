import ArticlesListItem from 'components/Articles/ArticlesListItem'
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
    )
}
export default FavouritesPage
