export type Article = {
    id: number
    title: string
    category: string
    author: string
    date: Date
    image: string
}

const ArticlesArray: Article[] = [
    {
        id: 1,
        title: 'The most popular photoshop styles of the year',
        category: 'Health',
        author: 'Michael',
        date: new Date('07.23.2022'),
        image: 'images/popular-photoshoots.jpeg',
    },
    {
        id: 2,
        title: 'Have good food taste then enjoy reading',
        category: 'Techno',
        author: 'Michael',
        date: new Date('07.24.2022'),
        image: 'images/enjoy_reading.jpg',
    },
    {
        id: 3,
        title: 'the Best Place to Celebrate Birthday and Music',
        category: 'Active',
        author: 'Michael',
        date: new Date('08.15.2021'),
        image: 'images/celebrate_music.jpg',
    },
    {
        id: 4,
        title: 'How to make your life routine more fun and eco-friendly',
        category: 'Sports',
        author: 'Michael',
        date: new Date('11.29.2022'),
        image: 'images/life_routine.webp',
    },
    {
        id: 5,
        title: '5 Holiday Outfit Ideas for Thanksgiving or Christmas',
        category: 'Sports',
        author: 'Michael',
        date: new Date('10.24.2022'),
        image: 'images/outfit_ideas.jpg',
    },
    {
        id: 6,
        title: '6 Romantic places You Want to Visit with Your Partner',
        category: 'Sports',
        author: 'Michael',
        date: new Date('08.03.2022'),
        image: 'images/places_to_visit.jpg',
    },
]

export default ArticlesArray
