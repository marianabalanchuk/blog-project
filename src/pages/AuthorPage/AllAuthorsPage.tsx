import { Grid } from '@mui/material'
import AuthorListItem from 'components/Author/AuthorListItem'
import AuthorsArray from 'utils/AuthorsArray'
import SocialMediaConstants from 'utils/SocialMediaConstants'

type Props = {}

const AllAuthorsPage = (props: Props) => {
    return (
        <div>
            {AuthorsArray.map(({ id, name, image, route, count, about }) => {
                return (
                    <Grid item xs={12} sm={6} key={id}>
                        <AuthorListItem
                            id={id}
                            name={name}
                            image={image}
                            about={about}
                            route={route}
                            count={count}
                            socialMediaPosition={SocialMediaConstants.LEFT}
                        />
                    </Grid>
                )
            })}
        </div>
    )
}

export default AllAuthorsPage
