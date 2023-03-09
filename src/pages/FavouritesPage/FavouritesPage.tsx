import ArticlesListItem from 'components/Articles/ArticlesListItem'
import ArticlesArray, { Article, getArticlesObject } from 'utils/ArticlesArray'
import GetCategoryHelper from 'utils/GetCategoryHelper'

type Props = {
    favoriteArticles: {
        [id: number]: number
    }
    articlesObject?: {
        [id: number]: Article
    }
    addFavoriteArticle: (id: number) => void
    removeFavoriteArticle: (id: number) => void
}
const FavouritesPage = ({
    favoriteArticles,
    articlesObject = getArticlesObject(ArticlesArray),
    addFavoriteArticle,
    removeFavoriteArticle,
}: Props) => {
    return (
        <>
            {Object.keys(favoriteArticles).map((id) => (
                <>
                    <ArticlesListItem
                        id={articlesObject[parseInt(id)].id}
                        title={articlesObject[parseInt(id)].title}
                        category={GetCategoryHelper(
                            articlesObject[parseInt(id)].category
                        )}
                        author={articlesObject[parseInt(id)].author}
                        date={articlesObject[parseInt(id)].date}
                        image={articlesObject[parseInt(id)].image}
                        summary={articlesObject[parseInt(id)].summary}
                        addFavoriteArticle={addFavoriteArticle}
                        removeFavoriteArticle={removeFavoriteArticle}
                        favoriteArticles={favoriteArticles}
                    />
                </>
            ))}
        </>
    )
}
export default FavouritesPage
