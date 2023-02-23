import ArticlesArray from './ArticlesArray'
import CountCategoryHelper from './CountCategoriesHelper'

export type Category = {
    id: number
    title: string
    image: string
    count: number
    route: string
}

const CategoriesArray: Category[] = [
    {
        id: 1,
        count: CountCategoryHelper(ArticlesArray, 'Business'),
        title: 'Business',
        image: 'images/business-category.jpg',
        route: '/',
    },
    {
        id: 2,
        count: CountCategoryHelper(ArticlesArray, 'Inspiration'),
        title: 'Inspiration',
        image: 'images/inspiration-category.jpeg',
        route: '/',
    },
    {
        id: 3,
        count: CountCategoryHelper(ArticlesArray, 'Health'),
        title: 'Health',
        image: 'images/health-category.jpg',
        route: '/',
    },
    {
        id: 4,
        count: CountCategoryHelper(ArticlesArray, 'Sport'),
        title: 'Sport',
        image: 'images/sport-category.jpg',
        route: '/',
    },
]

export default CategoriesArray
