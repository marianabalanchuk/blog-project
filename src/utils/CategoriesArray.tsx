import CountCategoryHelper from './CountCategoriesHelper'

export type Category = {
    id: number
    title: string
    image: string
    count: number
    route: string
    color: string
}

const CategoriesArray: Category[] = [
    {
        id: 1,
        count: CountCategoryHelper('Business'),
        title: 'Business',
        image: 'images/business-category.jpg',
        route: '/business',
        color: '#E8391E',
    },
    {
        id: 2,
        count: CountCategoryHelper('Inspiration'),
        title: 'Inspiration',
        image: 'images/inspiration-category.jpeg',
        route: '/inspiration',
        color: '#0061e0',
    },
    {
        id: 3,
        count: CountCategoryHelper('Health'),
        title: 'Health',
        image: 'images/health-category.jpg',
        route: '/health',
        color: '#00C1AE',
    },
    {
        id: 4,
        count: CountCategoryHelper('Sport'),
        title: 'Sport',
        image: 'images/sport-category.jpg',
        route: '/sport',
        color: '#92d822',
    },
]

export default CategoriesArray
