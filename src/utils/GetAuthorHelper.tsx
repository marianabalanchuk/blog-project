import AuthorsArray, { Author } from './AuthorsArray'

function GetAuthorHelper(authorName: string): Author {
    let author: Author = AuthorsArray[0]
    author =
        AuthorsArray.find((element) => element.name == authorName) ??
        AuthorsArray[0]

    return author
}

export default GetAuthorHelper
