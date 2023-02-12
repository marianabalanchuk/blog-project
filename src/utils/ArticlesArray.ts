export type Article = {
    id: number
    title: string
    category: string
    author: string
    date: Date
    image: string
    summary: string
}

const ArticlesArray: Article[] = [
    {
        id: 1,
        title: 'The most popular photoshop styles of the year',
        category: 'Health',
        author: 'Michael',
        date: new Date('07.23.2022'),
        image: 'images/article1.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 2,
        title: 'Have good food taste then enjoy reading',
        category: 'Techno',
        author: 'Michael',
        date: new Date('07.24.2022'),
        image: 'images/article2.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 3,
        title: 'the Best Place to Celebrate Birthday and Music',
        category: 'Active',
        author: 'Michael',
        date: new Date('08.15.2021'),
        image: 'images/article3.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 4,
        title: 'How to make your life routine more fun and eco-friendly',
        category: 'Sports',
        author: 'Michael',
        date: new Date('11.29.2022'),
        image: 'images/article4.webp',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 5,
        title: '5 Holiday Outfit Ideas for Thanksgiving or Christmas',
        category: 'Sports',
        author: 'Michael',
        date: new Date('10.24.2022'),
        image: 'images/article5.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 6,
        title: '6 Romantic places You Want to Visit with Your Partner',
        category: 'Sports',
        author: 'Michael',
        date: new Date('08.03.2022'),
        image: 'images/article6.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 7,
        title: 'The Dress Style Influencers are Wearing Right Now',
        category: 'Inspiration',
        author: 'Michael',
        date: new Date('10.19.2022'),
        image: 'images/article7.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 8,
        title: 'This is the Best Camera for Short Minimal Style',
        category: 'Inspiration',
        author: 'Michael',
        date: new Date('02.11.2022'),
        image: 'images/article8.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 9,
        title: '5 Simple Steps To A Happier, Healthier You',
        category: 'Health',
        author: 'Michael',
        date: new Date('05.27.2022'),
        image: 'images/article9.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 10,
        title: 'It Really Great Holiday and Enjoy with the Fashion Style',
        category: 'Sports',
        author: 'Michael',
        date: new Date('06.02.2022'),
        image: 'images/article10.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 11,
        title: 'Nice Photo, Nice Colors and i Cant Wait to Try',
        category: 'Health',
        author: 'Michael',
        date: new Date('12.19.2022'),
        image: 'images/article11.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 12,
        title: 'Hiding face is great way make you unique',
        category: 'Sports',
        author: 'Michael',
        date: new Date('08.30.2022'),
        image: 'images/article12.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 13,
        title: 'Music will be more attractive if have guitar',
        category: 'Health',
        author: 'Michael',
        date: new Date('04.23.2022'),
        image: 'images/article13.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 14,
        title: 'Having fun with DJ and the best music drop',
        category: 'Sports',
        author: 'Michael',
        date: new Date('05.08.2022'),
        image: 'images/article14.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 15,
        title: 'Five Quick, Easy Healthy Breakfast Ideas',
        category: 'Inspiration',
        author: 'Michael',
        date: new Date('05.16.2022'),
        image: 'images/article15.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 16,
        title: 'Creative photography ideas from smart devices',
        category: 'Health',
        author: 'Michael',
        date: new Date('09.01.2022'),
        image: 'images/article16.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 17,
        title: 'It really have good feeling when you enjoy nature',
        category: 'Inspiration',
        author: 'Michael',
        date: new Date('09.17.2022'),
        image: 'images/article17.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 18,
        title: 'the Best Place to Celebrate Birthday and Music',
        category: 'Health',
        author: 'Michael',
        date: new Date('02.22.2021'),
        image: 'images/article18.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 19,
        title: 'The Easiest Way to Plan a Trip on Any Budget',
        category: 'Inspiration',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article19.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 20,
        title: 'The No Sugar Challenge That Almost Broke Me',
        category: 'Health',
        author: 'Michael',
        date: new Date('09.22.2021'),
        image: 'images/article20.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 21,
        title: 'Life Lately + My Favorite Shoes for the New Year',
        category: 'Inspiration',
        author: 'Michael',
        date: new Date('05.05.2021'),
        image: 'images/article21.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 22,
        title: 'New Year Inspo - What Im loving so far in 2019!',
        category: 'Inspiration',
        author: 'Michael',
        date: new Date('10.30.2020'),
        image: 'images/article22.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 23,
        title: 'Gift Ideas for Every Dad and Any Budget',
        category: 'Inspiration',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article23.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 24,
        title: 'Good Day To Take A Photo With Your Favorite Style',
        category: 'Business',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article24.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 25,
        title: 'My Favorite Skincare Gift Sets On Holiday Sale',
        category: 'Business',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article25.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 26,
        title: 'Its Always Fun Time and Smile in the Summer',
        category: 'Business',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article26.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 27,
        title: 'Best inspire dark photo in the winter season',
        category: 'Business',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article27.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 28,
        title: '7 Steps to Get Professional Facial Results At Home',
        category: 'Inspiration',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article28.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 29,
        title: 'Best Ever Stuffing Recipe for Crock Pot or Oven',
        category: 'Inspiration',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article29.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 30,
        title: 'Your job will be perfect if you concentrate',
        category: 'Business',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article30.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 31,
        title: 'This is a Good Place for Concentrate Project',
        category: 'Business',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article31.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 32,
        title: 'Best Lighting For Outdoor Photo Shoot Style',
        category: 'Business',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article32.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 33,
        title: 'Sometime Reading can me you Feel Relaxed',
        category: 'Business',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article33.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 34,
        title: 'If You Struggle To Hit Your Goals, Try This Instead',
        category: 'Business',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article34.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 35,
        title: 'Outdoor Photo Shooting With clean and Beautiful',
        category: 'Business',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article35.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
    {
        id: 36,
        title: 'Enjoy the best time with a special person',
        category: 'Business',
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: 'images/article36.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
    },
]

export default ArticlesArray
