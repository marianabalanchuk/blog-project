import CategoryConstants from './CategoryConstants'
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
        count: CountCategoryHelper(CategoryConstants.BUSINESS),
        title: CategoryConstants.BUSINESS,
        image: '/images/business-category.jpg',
        route: `/${CategoryConstants.BUSINESS.toLowerCase()}`,
        color: '#E8391E',
    },
    {
        id: 2,
        count: CountCategoryHelper(CategoryConstants.INSPIRATION),
        title: CategoryConstants.INSPIRATION,
        image: '/images/inspiration-category.jpeg',
        route: `/${CategoryConstants.INSPIRATION.toLowerCase()}`,
        color: '#0061e0',
    },
    {
        id: 3,
        count: CountCategoryHelper(CategoryConstants.HEALTH),
        title: CategoryConstants.HEALTH,
        image: '/images/health-category.jpg',
        route: `/${CategoryConstants.HEALTH.toLowerCase()}`,
        color: '#00C1AE',
    },
    {
        id: 4,
        count: CountCategoryHelper(CategoryConstants.SPORT),
        title: CategoryConstants.SPORT,
        image: '/images/sport-category.jpg',
        route: `/${CategoryConstants.SPORT.toLowerCase()}`,
        color: '#92d822',
    },
]

export default CategoriesArray
