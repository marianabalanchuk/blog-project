import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import ArticlesArray from 'utils/ArticlesArray'
import './MainHomeSlider.scss'
import GetCategoryHelper from 'utils/GetCategoryHelper'
import GetAuthorHelper from 'utils/GetAuthorHelper'
import ArticlesListItem from 'components/Articles/ArticlesListItem'

type Props = {
    id: number
    title: string
    category: string
    author: string
    date: Date
    image: string
    mainslider: boolean
}
function MainHomeSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            mousewheel={true}
            className="main-slider"
        >
            {ArticlesArray.map(
                ({
                    id,
                    title,
                    category,
                    author,
                    date,
                    image,
                    mainslider,
                }: Props) => {
                    return (
                        <div key={id}>
                            {mainslider && (
                                <SwiperSlide className="main-swiper-slider">
                                    <ArticlesListItem
                                        id={id}
                                        title={title}
                                        category={GetCategoryHelper(category)}
                                        author={GetAuthorHelper(author)}
                                        date={date}
                                        image={image}
                                        mainslider={mainslider}
                                    />
                                </SwiperSlide>
                            )}
                        </div>
                    )
                }
            )}
        </Swiper>
    )
}

export default MainHomeSlider
