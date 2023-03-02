import { A11y, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import moment from 'moment'
import './SideHomeSlider.scss'
import ArticlesArray from 'utils/ArticlesArray'
import SwiperCore, { Mousewheel } from 'swiper'
import GetCategoryHelper from 'utils/GetCategoryHelper'

SwiperCore.use([Mousewheel])

type Props = {
    id: number
    title: string
    category: string
    author: string
    date: Date
    image: string
    sideslider: boolean
}
function SideHomeSlider() {
    return (
        <Swiper
            modules={[Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            scrollbar={{ draggable: true, hide: true }}
            direction="vertical"
            className="side-slider"
            mousewheel={{ sensitivity: 15 }}
            speed={200}
        >
            {ArticlesArray.map(
                ({
                    id,
                    title,
                    category,
                    author,
                    date,
                    image,
                    sideslider,
                }: Props) => {
                    return (
                        <>
                            {sideslider && (
                                <SwiperSlide
                                    className="side-swiper-slide"
                                    key={id}
                                >
                                    <div className="article-text">
                                        <div
                                            className="article-category"
                                            style={{
                                                backgroundColor:
                                                    GetCategoryHelper(category)
                                                        .color,
                                            }}
                                        >
                                            {GetCategoryHelper(category).title}
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
                                    <img
                                        src={image}
                                        alt="article image"
                                        width={100}
                                        height={100}
                                    />
                                </SwiperSlide>
                            )}
                        </>
                    )
                }
            )}
        </Swiper>
    )
}

export default SideHomeSlider
