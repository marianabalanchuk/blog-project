import ArticlesList from 'components/Articles/ArticlesList'
import CategoriesList from 'components/Categories/CategoriesList'
import MainHomeSlider from 'components/HomeSlider/MainHomeSlider'
import SideHomeSlider from 'components/HomeSlider/SideHomeSlider'

type Props = {
    addFavoriteArticle: (id: number) => void
    removeFavoriteArticle: (id: number) => void
    favoriteArticles: {
        [id: number]: number
    }
}
const Home = (props: Props) => {
    return (
        <div>
            <div className="home-sliders-container">
                <MainHomeSlider />
                <SideHomeSlider />
            </div>

            <div className="categories">
                <CategoriesList />
            </div>
            <ArticlesList
                addFavoriteArticle={props.addFavoriteArticle}
                removeFavoriteArticle={props.removeFavoriteArticle}
                favoriteArticles={props.favoriteArticles}
            />
        </div>
    )
}
export default Home
