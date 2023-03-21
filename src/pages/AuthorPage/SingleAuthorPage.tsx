import ArticlesArray from 'utils/ArticlesArray'
import GetCategoryHelper from 'utils/GetCategoryHelper'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import GetAuthorHelper from 'utils/GetAuthorHelper'

type Props = {
    authorName: string
}

const SingleAuthorPage = (props: Props) => {
    const authorArticles = ArticlesArray.filter((article) => {
        return article.author === props.authorName
    })

    return (
        <div className="author-pg-container">
            {authorArticles.map(
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
    )
}

export default SingleAuthorPage
