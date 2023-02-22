import ArticlesList from 'components/Articles/ArticlesList'
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
            <ArticlesList />
        </div>
    )
}
export default Home
