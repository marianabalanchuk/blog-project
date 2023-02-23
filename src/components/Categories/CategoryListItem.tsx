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
            <div className="category">
                <img src={image} alt="category image" />
                <a href={route} className="category-title">
                    <p>{title}</p>
                </a>
                <div>{count}</div>
            </div>
        )
    }
}
export default CategoryListItem
