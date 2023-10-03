import Button from '../button/Button';
import DefaultTextBlock from '../defaultTextBlock/DefaultTextBlock';

import './promo.scss';
import PromoImage from '../../images/illustration-working.svg';

const Promo = () => {
    return (
        <div className='promo'>
            <div className='promo__text'>
                <DefaultTextBlock
                    head='More than just shorter links'
                    content='Build your brand’s recognition and get detailed insights 
                    on how your links are performing.' />
                <Button
                    content='Get Started'
                    type='button'
                    className='primary' />
            </div>
            <div className='promo__image'>
                <img src={PromoImage} alt="Promo Image" />
            </div>
        </div>
    )
}

export default Promo;