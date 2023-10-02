import Button from "../button/Button";

import './boost.scss';

const Boost = () => {
    return (
        <div className="boost">
            <div className="boost__head">Boost your links today</div>
            <Button
                content='Get Started'
                type='button'
                className='primary'
            />
        </div>
    )
}

export default Boost;