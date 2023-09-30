import Button from "../button/Button";

import './navBar.scss';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Button
                        content='Features'
                        type='button'
                        className='secondary'/>
                </li>
                <li>
                    <Button
                        content='Pricing'
                        type='button'
                        className='secondary' />
                </li>
                <li>
                    <Button
                        content='Resources'
                        type='button'
                        className='secondary' />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;