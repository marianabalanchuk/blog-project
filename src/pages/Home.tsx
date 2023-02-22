import ArticlesList from 'components/Articles/ArticlesList'
import HomeSlider from 'components/HomeSlider/HomeSlider'

type Props = {}
const Home = (props: Props) => {
    return (
        <div>
            <HomeSlider />
            <ArticlesList />
        </div>
    )
}
export default Home
