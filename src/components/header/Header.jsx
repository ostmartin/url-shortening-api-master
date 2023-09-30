import NavBar from "../navBar/NavBar";
import LoginBlock from "../loginBlock/LoginBlock";

import './header.scss';
import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <NavBar/>
            <LoginBlock/>
        </header>
    )
}

export default Header;