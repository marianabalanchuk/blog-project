import ArticlesListItem from 'components/Articles/ArticlesListItem'
import CategoriesList from 'components/Categories/CategoriesList'
import moment from 'moment'
import ArticlesArray from 'utils/ArticlesArray'
import GetAuthorHelper from 'utils/GetAuthorHelper'
import './RightSidebar.scss'

type Props = {}

const RightSidebar = (props: Props) => {
    const sortedArticlesArray = ArticlesArray.sort(
        (objA, objB) => +moment(objB.date) - +moment(objA.date)
    )

    const slicedArray = sortedArticlesArray.slice(0, 3)

    return (
        <div className="right-sidebar">
            <div className="sticky">
                <div className="sidebar-categories">
                    <h3>CATEGORIES</h3>
                    <hr />
                    <CategoriesList />
                </div>

                <div className="latest-posts">
                    <h3>LATEST POSTS</h3>
                    <hr />

                    {slicedArray.map(({ id, title, author, date, image }) => {
                        return (
                            <ArticlesListItem
                                id={id}
                                title={title}
                                author={GetAuthorHelper(author)}
                                date={date}
                                image={image}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
