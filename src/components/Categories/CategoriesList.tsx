import CategoriesArray from 'utils/CategoriesArray'
import './Categories.scss'
import CategoryListItem from './CategoryListItem'

type Props = {}

const CategoriesList = (props: Props) => {
    return (
        <>
            {CategoriesArray.map(({ id, title, route, image, count }) => {
                return (
                    <div key={id}>
                        <CategoryListItem
                            title={title}
                            route={route}
                            count={count}
                            image={image}
                        />
                    </div>
                )
            })}
        </>
    )
}
export default CategoriesList
