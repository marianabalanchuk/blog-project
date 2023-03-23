import CategoryConstants from './CategoryConstants'

export type Article = {
    id: number
    title: string
    category: string
    author: string
    date: Date
    image: string
    image2?: string
    summary: string
    mainslider: boolean
    sideslider: boolean
    content?: string
}

const ArticlesArray: Article[] = [
    {
        id: 1,
        title: 'The most popular photoshop styles of the year',
        category: CategoryConstants.HEALTH,
        author: 'Michael',
        date: new Date('07.23.2022'),
        image: '/images/article1.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
        content:
            '<p class="has-dropcap">Mauris mattis auctor cursus. <span class="underline">Phasellus tellus tellus, imperdiet ut imperdiet eu</span>, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. <span class="yellow-underline">Cras vitae mi erat, posuere</span> mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit.</p>Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a <span class="yellow-underline">magna at diam consequat semper</span> eu vitae elit. In hac habitasse platea dictumst.</p> <blockquote class="quote"><div><p class="quote-text">Many of life’s failures are people who did not realize how close they were to success when they gave up</p> <figcaption class="quote-author">Thomas A. Edison</figcaption></div></blockquote> <h3 class="sub-heading">Find the Best Tour for This Summer</h3> <p>Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis Praesent pharetra semper purus, a vehicula massa interdum in. Nulla a magna at diam consequat semper eu vitae elit.</p> <img src="/images/article-backup.jpeg" /><p>Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in.</p><p>Sed feugiat posuere semper Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in. Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.</p>',
    },
    {
        id: 2,
        title: 'Have good food taste then enjoy reading',
        category: CategoryConstants.BUSINESS,
        author: 'Anna',
        date: new Date('07.24.2022'),
        image: '/images/article2.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
        content:
            'Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit.Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst. Many of life’s failures are people who did not realize how close they were to success when they gave up Find the Best Tour for This Summer Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis Praesent pharetra semper purus, a vehicula massa interdum in. Nulla a magna at diam consequat semper eu vitae elit. Thomas A. Edison Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in. Sed feugiat posuere semper Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in. Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.',
    },
    {
        id: 3,
        title: 'the Best Place to Celebrate Birthday and Music',
        category: CategoryConstants.INSPIRATION,
        author: 'John',
        date: new Date('08.15.2021'),
        image: '/images/article3.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: true,
        content:
            'Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit.Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst. Many of life’s failures are people who did not realize how close they were to success when they gave up Find the Best Tour for This Summer Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis Praesent pharetra semper purus, a vehicula massa interdum in. Nulla a magna at diam consequat semper eu vitae elit. Thomas A. Edison Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in. Sed feugiat posuere semper Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in. Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.',
    },
    {
        id: 4,
        title: 'How to make your life routine more fun and eco-friendly',
        category: CategoryConstants.SPORT,
        author: 'Michael',
        date: new Date('11.29.2022'),
        image: '/images/article4.webp',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: true,
        sideslider: false,
        content:
            'Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit.Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst. Many of life’s failures are people who did not realize how close they were to success when they gave up Find the Best Tour for This Summer Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis Praesent pharetra semper purus, a vehicula massa interdum in. Nulla a magna at diam consequat semper eu vitae elit. Thomas A. Edison Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in. Sed feugiat posuere semper Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in. Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.',
    },
    {
        id: 5,
        title: '5 Holiday Outfit Ideas for Thanksgiving or Christmas',
        category: CategoryConstants.HEALTH,
        author: 'John',
        date: new Date('10.24.2022'),
        image: '/images/article5.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
        content:
            'Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit.Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst. Many of life’s failures are people who did not realize how close they were to success when they gave up Find the Best Tour for This Summer Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis Praesent pharetra semper purus, a vehicula massa interdum in. Nulla a magna at diam consequat semper eu vitae elit. Thomas A. Edison Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in. Sed feugiat posuere semper Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in. Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.',
    },
    {
        id: 6,
        title: '6 Romantic places You Want to Visit with Your Partner',
        category: CategoryConstants.BUSINESS,
        author: 'John',
        date: new Date('08.03.2022'),
        image: '/images/article6.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 7,
        title: 'The Dress Style Influencers are Wearing Right Now',
        category: CategoryConstants.INSPIRATION,
        author: 'John',
        date: new Date('10.19.2022'),
        image: '/images/article7.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: true,
        sideslider: false,
    },
    {
        id: 8,
        title: 'This is the Best Camera for Short Minimal Style',
        category: CategoryConstants.SPORT,
        author: 'Anna',
        date: new Date('02.11.2022'),
        image: '/images/article8.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: true,
    },
    {
        id: 9,
        title: '5 Simple Steps To A Happier, Healthier You',
        category: CategoryConstants.HEALTH,
        author: 'John',
        date: new Date('05.27.2022'),
        image: '/images/article9.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 10,
        title: 'It Really Great Holiday and Enjoy with the Fashion Style',
        category: CategoryConstants.BUSINESS,
        author: 'Anna',
        date: new Date('06.02.2022'),
        image: '/images/article10.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 11,
        title: 'Nice Photo, Nice Colors and i Cant Wait to Try',
        category: CategoryConstants.INSPIRATION,
        author: 'Anna',
        date: new Date('12.19.2022'),
        image: '/images/article11.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 12,
        title: 'Hiding face is great way make you unique',
        category: CategoryConstants.SPORT,
        author: 'John',
        date: new Date('08.30.2022'),
        image: '/images/article12.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: true,
    },
    {
        id: 13,
        title: 'Music will be more attractive if have guitar',
        category: CategoryConstants.HEALTH,
        author: 'Michael',
        date: new Date('04.23.2022'),
        image: '/images/article13.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: true,
    },
    {
        id: 14,
        title: 'Having fun with DJ and the best music drop',
        category: CategoryConstants.BUSINESS,
        author: 'Anna',
        date: new Date('05.08.2022'),
        image: '/images/article14.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: true,
        sideslider: false,
    },
    {
        id: 15,
        title: 'Five Quick, Easy Healthy Breakfast Ideas',
        category: CategoryConstants.INSPIRATION,
        author: 'John',
        date: new Date('05.16.2022'),
        image: '/images/article15.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 16,
        title: 'Creative photography ideas from smart devices',
        category: CategoryConstants.SPORT,
        author: 'Michael',
        date: new Date('09.01.2022'),
        image: '/images/article16.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: true,
    },
    {
        id: 17,
        title: 'It really have good feeling when you enjoy nature',
        category: CategoryConstants.HEALTH,
        author: 'Anna',
        date: new Date('09.17.2022'),
        image: '/images/article17.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 18,
        title: 'the Best Place to Celebrate Birthday and Music',
        category: CategoryConstants.BUSINESS,
        author: 'John',
        date: new Date('02.22.2021'),
        image: '/images/article18.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 19,
        title: 'The Easiest Way to Plan a Trip on Any Budget',
        category: CategoryConstants.INSPIRATION,
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: '/images/article19.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: true,
        sideslider: false,
    },
    {
        id: 20,
        title: 'The No Sugar Challenge That Almost Broke Me',
        category: CategoryConstants.SPORT,
        author: 'Anna',
        date: new Date('09.22.2021'),
        image: '/images/article20.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: true,
    },
    {
        id: 21,
        title: 'Life Lately + My Favorite Shoes for the New Year',
        category: CategoryConstants.HEALTH,
        author: 'John',
        date: new Date('05.05.2021'),
        image: '/images/article21.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 22,
        title: 'New Year Inspo - What Im loving so far in 2019!',
        category: CategoryConstants.BUSINESS,
        author: 'Michael',
        date: new Date('10.30.2020'),
        image: '/images/article22.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 23,
        title: 'Gift Ideas for Every Dad and Any Budget',
        category: CategoryConstants.INSPIRATION,
        author: 'Anna',
        date: new Date('01.21.2021'),
        image: '/images/article23.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 24,
        title: 'Good Day To Take A Photo With Your Favorite Style',
        category: CategoryConstants.SPORT,
        author: 'John',
        date: new Date('01.21.2021'),
        image: '/images/article24.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 25,
        title: 'My Favorite Skincare Gift Sets On Holiday Sale',
        category: CategoryConstants.HEALTH,
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: '/images/article25.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: true,
    },
    {
        id: 26,
        title: 'Its Always Fun Time and Smile in the Summer',
        category: CategoryConstants.BUSINESS,
        author: 'Anna',
        date: new Date('01.21.2021'),
        image: '/images/article26.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 27,
        title: 'Best inspire dark photo in the winter season',
        category: CategoryConstants.INSPIRATION,
        author: 'John',
        date: new Date('01.21.2021'),
        image: '/images/article27.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 28,
        title: '7 Steps to Get Professional Facial Results At Home',
        category: CategoryConstants.SPORT,
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: '/images/article28.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: true,
    },
    {
        id: 29,
        title: 'Best Ever Stuffing Recipe for Crock Pot or Oven',
        category: CategoryConstants.HEALTH,
        author: 'Anna',
        date: new Date('01.21.2021'),
        image: '/images/article29.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 30,
        title: 'Your job will be perfect if you concentrate',
        category: CategoryConstants.BUSINESS,
        author: 'John',
        date: new Date('01.21.2021'),
        image: '/images/article30.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: true,
        sideslider: false,
    },
    {
        id: 31,
        title: 'This is a Good Place for Concentrate Project',
        category: CategoryConstants.INSPIRATION,
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: '/images/article31.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 32,
        title: 'Best Lighting For Outdoor Photo Shoot Style',
        category: CategoryConstants.SPORT,
        author: 'Anna',
        date: new Date('01.21.2021'),
        image: '/images/article32.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 33,
        title: 'Sometime Reading can me you Feel Relaxed',
        category: CategoryConstants.HEALTH,
        author: 'John',
        date: new Date('01.21.2021'),
        image: '/images/article33.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 34,
        title: 'If You Struggle To Hit Your Goals, Try This Instead',
        category: CategoryConstants.BUSINESS,
        author: 'Michael',
        date: new Date('01.21.2021'),
        image: '/images/article34.jpg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: true,
    },
    {
        id: 35,
        title: 'Outdoor Photo Shooting With clean and Beautiful',
        category: CategoryConstants.INSPIRATION,
        author: 'Anna',
        date: new Date('01.21.2021'),
        image: '/images/article35.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
    {
        id: 36,
        title: 'Enjoy the best time with a special person',
        category: CategoryConstants.BUSINESS,
        author: 'John',
        date: new Date('01.21.2021'),
        image: '/images/article36.jpeg',
        summary:
            'Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.',
        mainslider: false,
        sideslider: false,
    },
]

export const getArticlesObject = (array: Article[]) =>
    array.reduce(
        (object, article) => ({ ...object, [article.id]: article }),
        {}
    )

export default ArticlesArray
