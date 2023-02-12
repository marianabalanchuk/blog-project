import Logo from 'components/Logo/Logo'
import SocialMedia from 'components/SocialMedia/SocialMedia'
import './Footer.scss'

type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="footer">
            <Logo image="images/logo_white.png" width={200} />
            <div>
                <a href="#" className="doc-link">
                    About Us
                </a>
                <a href="#" className="doc-link">
                    Privacy Policy
                </a>
                <a href="#" className="doc-link">
                    Forums
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
