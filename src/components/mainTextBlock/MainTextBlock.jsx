import Button from '../button/Button';
import DefaultTextBlock from '../defaultTextBlock/DefaultTextBlock';

import './mainTextBlock.scss'

const MainTextBlock = () => {
    return (
        <div className='main__text'>
            <DefaultTextBlock
                head='More than just shorter links'
                content='Build your brand’s recognition and get detailed insights 
                on how your links are performing.' />
            <Button
                content='Get Started'
                type='button'
                className='primary' />
        </div>
    )
}

export default MainTextBlock;
