import CountAuthorsHelper from './CountAuthorsHelper'

export type Author = {
    id: number
    name: string
    about: string
    count: number
    image: string
    route: string
}

const AuthorsArray: Author[] = [
    {
        id: 1,
        name: 'Michael',
        about: 'Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius.Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni.',
        image: 'images/Michael.jpg',
        route: `/michael`,
        count: CountAuthorsHelper('Michael'),
    },
    {
        id: 2,
        name: 'Anna',
        about: 'Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius.Eget etiam aenean nisi montes felis pretium donec veni. ',
        image: 'images/Anna.jpg',
        route: `/anna`,
        count: CountAuthorsHelper('Anna'),
    },
    {
        id: 3,
        name: 'John',
        about: 'Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius.',
        image: 'images/John.jpg',
        route: `/john`,
        count: CountAuthorsHelper('John'),
    },
]
export default AuthorsArray
