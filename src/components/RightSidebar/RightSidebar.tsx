import { Grid } from '@mui/material'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import CategoriesList from 'components/Categories/CategoriesList'
import moment from 'moment'
import ArticlesArray from 'utils/ArticlesArray'
import GetAuthorHelper from 'utils/GetAuthorHelper'
import GetCategoryHelper from 'utils/GetCategoryHelper'
import './RightSidebar.scss'

type Props = {}

const RightSidebar = (props: Props) => {
    const sortedArticlesArray = ArticlesArray.sort(
        (objA, objB) => +moment(objB.date) - +moment(objA.date)
    )

    const slicedArray = sortedArticlesArray.slice(0, 3)

    return (
        <>
            <div className="sidebar-categories">
                <h6>CATEGORIES</h6>
                <hr />
                <CategoriesList />
            </div>
            <div className="latest-posts">
                <h6>LATEST POSTS</h6>
                <hr />
                <Grid container spacing={4} alignItems="center">
                    {slicedArray.map(
                        ({
                            id,
                            title,
                            category,
                            author,
                            date,
                            image,
                            summary,
                        }) => {
                            return (
                                <Grid item xs={12} sm={6} key={id}>
                                    <ArticlesListItem
                                        id={id}
                                        title={title}
                                        author={GetAuthorHelper(author)}
                                        date={date}
                                        image={image}
                                    />
                                </Grid>
                            )
                        }
                    )}
                </Grid>
            </div>
        </>
    )
}

export default RightSidebar
