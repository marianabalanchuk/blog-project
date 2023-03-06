import { Link} from 'react-router-dom'

type Props = {
    title: string
    image: string
    count: number
    route: string
    color: string
}

const CategoryListItem = ({ title, count, route, image, color }: Props) => {
    return (
        <div className="category-item">
            <Link to={route}>
                <img src={image} alt="category image" />
                <div className="category-text">
                    <p className="category-title">{title}</p>
                    <p
                        className="category-count"
                        style={{
                            backgroundColor: color,
                        }}
                    >
                        {count}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default CategoryListItem
