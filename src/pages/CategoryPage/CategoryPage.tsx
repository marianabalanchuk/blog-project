import ArticlesArray from 'utils/ArticlesArray'
import './CategoryPage.scss'
import GetCategoryHelper from 'utils/GetCategoryHelper'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import GetAuthorHelper from 'utils/GetAuthorHelper'
import RightSidebar from 'components/RightSidebar/RightSidebar'

type Props = {
    categoryTitle: string
}

const CategoryPage = (props: Props) => {
    const categoryArticles = ArticlesArray.filter((article) => {
        return article.category === props.categoryTitle
    })

    return (
        <div className="category-pg-container">
            <div>
                {categoryArticles.map(
                    ({ id, image, title, author, date, summary, category }) => {
                        return (
                            <div key={id}>
                                <ArticlesListItem
                                    id={id}
                                    title={title}
                                    category={GetCategoryHelper(category)}
                                    author={GetAuthorHelper(author)}
                                    date={date}
                                    image={image}
                                    summary={summary}
                                />
                            </div>
                        )
                    }
                )}
            </div>

            <RightSidebar />
        </div>
    )
}

export default CategoryPage
