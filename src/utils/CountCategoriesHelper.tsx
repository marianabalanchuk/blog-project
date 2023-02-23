import { Article } from './ArticlesArray'

function CountCategoryHelper(
    articleArray: Article[],
    category: string
): number {
    let categoryCount: number = 0

    articleArray.forEach((item) => {
        if (item.category === category) categoryCount++
    })

    return categoryCount
}

export default CountCategoryHelper
