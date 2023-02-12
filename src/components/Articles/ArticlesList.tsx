import { Grid } from '@mui/material'
import ArticlesArray from 'utils/ArticlesArray'
import ArticlesListItem from './ArticlesListItem'

type Props = {}

const ArticlesList = (props: Props) => {
    return (
        <div>
            <Grid container spacing={4}>
                {ArticlesArray.map(
                    ({ id, title, category, author, date, image }) => {
                        return (
                            <Grid item xs={12} sm={6} key={id}>
                                <ArticlesListItem
                                    title={title}
                                    category={category}
                                    author={author}
                                    date={date}
                                    image={image}
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
