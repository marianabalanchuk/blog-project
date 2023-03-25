import { A11y, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './SideHomeSlider.scss'
import ArticlesArray from 'utils/ArticlesArray'
import SwiperCore, { Mousewheel } from 'swiper'
import GetCategoryHelper from 'utils/GetCategoryHelper'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import GetAuthorHelper from 'utils/GetAuthorHelper'

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
                                    <ArticlesListItem
                                        id={id}
                                        title={title}
                                        category={GetCategoryHelper(category)}
                                        author={GetAuthorHelper(author)}
                                        date={date}
                                        image={image}
                                        sideslider={sideslider}
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
