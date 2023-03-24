import CategoriesArray from 'utils/CategoriesArray'
import './Categories.scss'
import CategoryListItem from './CategoryListItem'

type Props = {}

const CategoriesList = (props: Props) => {
    return (
        <div className="categories">
            {CategoriesArray.map(
                ({ id, title, route, image, count, color }) => {
                    return (
                        <div key={id}>
                            <CategoryListItem
                                title={title}
                                route={route}
                                count={count}
                                image={image}
                                color={color}
                            />
                        </div>
                    )
                }
            )}
        </div>
    )
}
export default CategoriesList
