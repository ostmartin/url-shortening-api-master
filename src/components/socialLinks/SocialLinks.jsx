import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './socialLinks.scss';
import { faSquareFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
    return (
        <div className='social'>
            <a href="#">
                <FontAwesomeIcon icon={faSquareFacebook} style={{color: "#ffffff",}}/></a>
            <a href="#">
                <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faPinterest} style={{color: "#ffffff",}} />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
            </a> 
        </div>
    )
}

export default SocialLinks;