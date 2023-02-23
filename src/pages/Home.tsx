import ArticlesList from 'components/Articles/ArticlesList'
import CategoriesList from 'components/Categories/CategoriesList'
import MainHomeSlider from 'components/HomeSlider/MainHomeSlider'
import SideHomeSlider from 'components/HomeSlider/SideHomeSlider'

type Props = {}
const Home = (props: Props) => {
    return (
        <div>
            <div className="home-sliders-container">
                <MainHomeSlider />
                <SideHomeSlider />
            </div>
            <CategoriesList />
            <ArticlesList />
        </div>
    )
}
export default Home
