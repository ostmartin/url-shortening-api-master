import { useRef } from "react";

import NavBar from "../navBar/NavBar";

import './header.scss';
import logo from '../../images/logo.svg';

const Header = () => {
    const burger = useRef();
    const menu = useRef();
    
    const openMenu = () => {
        burger.current.classList.toggle('active');
        menu.current.classList.toggle('active');
    }

    return (
        <div className="header">
            <div className="header__content">
                <div className="header__logo">
                    <a href="#" className="logo">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="header__menu" ref={menu}>
                    <NavBar/>
                </div>
                <div className="burger" ref={burger} onClick={openMenu}>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Header;