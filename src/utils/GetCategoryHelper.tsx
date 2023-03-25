import CategoriesArray, { Category } from './CategoriesArray'

function GetCategoryHelper(categoryTitle: string): Category {
    let category: Category = CategoriesArray[0]
    category =
        CategoriesArray.find((element) => element.title === categoryTitle) ??
        CategoriesArray[0]

    return category
}

export default GetCategoryHelper
