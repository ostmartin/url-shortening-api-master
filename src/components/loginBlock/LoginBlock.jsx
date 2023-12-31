import Button from "../button/Button";

import './loginBlock.scss';

const LoginBlock = () => {
    return (
        <div className='header__login'>
            <Button
                content='Login'
                type='button'
                className='secondary' />
            <Button 
                content='Sign Up' 
                type='button' 
                className='primary' />
        </div>
    )
}

export default LoginBlock;