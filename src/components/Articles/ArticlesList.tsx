import { Grid } from '@mui/material'
import ArticlesArray from 'utils/ArticlesArray'
import GetCategoryHelper from 'utils/GetCategoryHelper'
import ArticlesListItem from './ArticlesListItem'

type Props = {
    addFavoriteArticle: (id: number) => void
    removeFavoriteArticle: (id: number) => void
    favoriteArticles: {
        [id: number]: number
    }
}

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
                                    author={author}
                                    date={date}
                                    image={image}
                                    summary={summary}
                                    addFavoriteArticle={
                                        props.addFavoriteArticle
                                    }
                                    removeFavoriteArticle={
                                        props.removeFavoriteArticle
                                    }
                                    favoriteArticles={props.favoriteArticles}
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
