import Logo from 'components/Logo/Logo'
import SocialMedia from 'components/SocialMedia/SocialMedia'
import './Footer.scss'

type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="footer">
            <Logo image="images/logo_white.png" width={200} />
            <div>
                <a href="/about" className="doc-link">
                    About Us
                </a>
                <a href="/privacypolicy" className="doc-link">
                    Privacy Policy
                </a>
                <a href="/subscribe" className="doc-link">
                    Subscribe
                </a>
            </div>
            <div>
                © Copyright 2021 Jellywp. All rights reserved powered by Jellywp
            </div>
            <SocialMedia />
        </div>
    )
}
export default Footer
