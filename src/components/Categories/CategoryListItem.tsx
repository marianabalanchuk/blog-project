import { Component } from 'react'

type Props = {
    title: string
    image: string
    count: number
    route: string
}
class CategoryListItem extends Component<Props> {
    render() {
        const { title, count, route, image } = this.props
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
}
export default CategoryListItem
