import Logo from 'components/Logo/Logo'
import SocialMedia from 'components/SocialMedia/SocialMedia'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="footer">
            <Logo image="/images/logo_white.png" width={200} />
            <div>
                <NavLink to="/about" className="doc-link">
                    About Us
                </NavLink>
                <NavLink to="/privacypolicy" className="doc-link">
                    Privacy Policy
                </NavLink>
                <NavLink to="/subscribe" className="doc-link">
                    Subscribe
                </NavLink>
            </div>
            <div>
                © Copyright 2021 Jellywp. All rights reserved powered by Jellywp
            </div>
            <SocialMedia />
        </div>
    )
}
export default Footer
