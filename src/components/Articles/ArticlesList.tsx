import { Grid } from '@mui/material'
import ArticlesArray from 'utils/ArticlesArray'
import GetAuthorHelper from 'utils/GetAuthorHelper'
import GetCategoryHelper from 'utils/GetCategoryHelper'
import ArticlesListItem from './ArticlesListItem'

type Props = {}

const ArticlesList = (props: Props) => {
    return (
        <div>
            <Grid container spacing={4} alignItems="center">
                {ArticlesArray.map(
                    ({ id, title, category, author, date, image, summary }) => {
                        return (
                            <Grid item xs={12} sm={6} key={id}>
                                <ArticlesListItem
                                    id={id}
                                    title={title}
                                    category={GetCategoryHelper(category)}
                                    author={GetAuthorHelper(author)}
                                    date={date}
                                    image={image}
                                    summary={summary}
                                />
                            </Grid>
                        )
                    }
                )}
            </Grid>
        </div>
    )
}

export default ArticlesList
