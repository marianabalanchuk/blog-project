type Props = {
    title: string
    image: string
    count: number
    route: string
}

const CategoryListItem = ({ title, count, route, image }: Props) => {
    return (
        <div className="category-item">
            <img src={image} alt="category image" />
            <div className="category-text">
                <a href={route} className="category-title">
                    <p>{title}</p>
                </a>
                <p className="category-count">{count}</p>
            </div>
        </div>
    )
}

export default CategoryListItem
