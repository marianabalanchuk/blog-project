import Logo from 'components/Logo/Logo'
import SocialMedia from 'components/SocialMedia/SocialMedia'
import './Footer.scss'

type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="footer">
            <Logo image="images/logo_white.png" />
            <div>
                <a href="http://">About Us</a>
                <a href="http://">Privacy Policy</a>
                <a href="http://">Forums</a>
            </div>
            <div>
                © Copyright 2021 Jellywp. All rights reserved powered by Jellywp
            </div>
            <SocialMedia />
        </div>
    )
}
export default Footer
