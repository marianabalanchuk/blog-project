import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {}

const ScrollToTop = (props: Props) => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}
export default ScrollToTop
