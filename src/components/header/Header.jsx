import NavBar from "../navBar/NavBar";
import LoginBlock from "../loginBlock/LoginBlock";

import './header.scss';
import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <header>
            <a href="#" className="logo">
                <img src={logo} alt="Logo" />
            </a>
            <div className="menu">
                <NavBar/>
                <LoginBlock/>
            </div>
        </header>
    )
}

export default Header;