import './defaultTextBlock.scss';

const DefaultTextBlock = ({head, content}) => {
    return (
        <div className='default__text'>
            <div className="head">{head}</div>
            <div className="content">{content}</div>
        </div>
    )
}

export default DefaultTextBlock;