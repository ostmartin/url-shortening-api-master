import FooterList from '../footerList/FooterList';
import SocialLinks from '../socialLinks/SocialLinks';

import Logo from '../../images/logo-white.svg';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__logo'>
                <a href="#">
                <img src={Logo} alt="Logo"/>
                </a>
            </div>
            <div className='footer__lists'>
                <FooterList 
                    listTitle='Features'
                    listItems={['Link Shortening', 'Branded Links', 'Analytics']}
                />
                <FooterList 
                    listTitle='Resources'
                    listItems={['Blog', 'Developers', 'Support']}
                />
                <FooterList 
                    listTitle='Company'
                    listItems={['About', 'Our Team', 'Careers', 'Contact']}
                />
            </div>
            <SocialLinks/>
        </div>
    )
}

export default Footer;