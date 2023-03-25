import ArticlesArray from './ArticlesArray'

function CountAuthorsHelper(authorName: string): number {
    let authorCount: number = 0

    ArticlesArray.forEach((item) => {
        if (item.author === authorName) authorCount++
    })

    return authorCount
}

export default CountAuthorsHelper
