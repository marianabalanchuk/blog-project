import ArticlesArray from 'utils/ArticlesArray'
import './CategoryPage.scss'
import GetCategoryHelper from 'utils/GetCategoryHelper'
import ArticlesListItem from 'components/Articles/ArticlesListItem'

type Props = {
    categoryTitle: string
}

const CategoryPage = (props: Props) => {
    const categoryArticles = ArticlesArray.filter((article) => {
        return article.category === props.categoryTitle
    })

    return (
        <div className="category-pg-container">
            {categoryArticles.map(
                ({ id, image, title, author, date, summary, category }) => {
                    return (
                        <div key={id}>
                            <ArticlesListItem
                                id={id}
                                title={title}
                                category={GetCategoryHelper(category)}
                                author={author}
                                date={date}
                                image={image}
                                summary={summary}
                            />
                        </div>
                    )
                }
            )}
        </div>
    )
}

export default CategoryPage
