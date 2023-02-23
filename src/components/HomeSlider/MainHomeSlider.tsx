import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import moment from 'moment'
import ArticlesArray from 'utils/ArticlesArray'
import './MainHomeSlider.scss'

type Props = {
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
                    title,
                    category,
                    author,
                    date,
                    image,
                    mainslider,
                }: Props) => {
                    return (
                        <>
                            {mainslider && (
                                <SwiperSlide className="main-swiper-slider">
                                    <img src={image} alt="article image" />
                                    <div className="article-text">
                                        <div className="article-category">
                                            {category}
                                        </div>
                                        <div className="article-title">
                                            {title}
                                        </div>

                                        <div className="article-info">
                                            <div className="article-author">
                                                <a href="#">{author}</a>
                                            </div>
                                            <div className="article-date">
                                                {moment(date).format(
                                                    'MMM DD, YYYY'
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </>
                    )
                }
            )}
        </Swiper>
    )
}

export default MainHomeSlider
