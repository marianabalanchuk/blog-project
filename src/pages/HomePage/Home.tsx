import ArticlesList from 'components/Articles/ArticlesList'
import CategoriesList from 'components/Categories/CategoriesList'
import MainHomeSlider from 'components/HomeSlider/MainHomeSlider'
import SideHomeSlider from 'components/HomeSlider/SideHomeSlider'
import RightSidebar from 'components/RightSidebar/RightSidebar'
import SubscribeSidebar from 'components/Subscribe/SubscribeSidebar'

type Props = {}
const Home = (props: Props) => {
    return (
        <div>
            <div className="home-sliders-container">
                <MainHomeSlider />
                <SideHomeSlider />
            </div>

            <CategoriesList />
            <SubscribeSidebar />
            <div className="articles-sidebar-container">
                <ArticlesList />
                <RightSidebar />
            </div>
        </div>
    )
}
export default Home
