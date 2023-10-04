import Button from "../button/Button";
import LoginBlock from "../loginBlock/LoginBlock";

import './navBar.scss';

const NavBar = () => {
    return (
        <ul className="header__list">
            <li className="header__list-item">
                <Button
                    content='Features'
                    type='button'
                    className='secondary'/>
            </li>
            <li className="header__list-item">
                <Button
                    content='Pricing'
                    type='button'
                    className='secondary' />
            </li>
            <li className="header__list-item">
                <Button
                    content='Resources'
                    type='button'
                    className='secondary' />
            </li>
            <li className="header__list-item">
                <LoginBlock/>
            </li>
        </ul>
    )
}

export default NavBar;