import Button from '../button/Button';

import './footerList.scss';

const FooterList = ({listTitle, listItems}) => {

    const list = listItems.map((item, i) => (
        <li key={i} className='list__item'>
            <Button
                content={item}
                type='button'
                className='secondary'
            />
        </li>
    ))

    return (
        <div className='list'>
            <div className='list__title'>{listTitle}</div>
            <ul className='list__items'>
                {list}
            </ul>
        </div>
    )
}

export default FooterList;