import ArticlesArray from './ArticlesArray'

function CountCategoryHelper(categoryTitle: string): number {
    let categoryCount: number = 0

    ArticlesArray.forEach((item) => {
        if (item.category === categoryTitle) categoryCount++
    })

    return categoryCount
}

export default CountCategoryHelper
