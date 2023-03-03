import ArticlesList from 'components/Articles/ArticlesList'
import CategoriesList from 'components/Categories/CategoriesList'
import MainHomeSlider from 'components/HomeSlider/MainHomeSlider'
import SideHomeSlider from 'components/HomeSlider/SideHomeSlider'

type Props = {
    addLikedArticles: () => void
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
            <ArticlesList addLikedArticles={props.addLikedArticles} />
        </div>
    )
}
export default Home
