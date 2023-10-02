import DefaultTextBlock from "../defaultTextBlock/DefaultTextBlock";

import './statCard.scss';

const StatCard = ({icon, head, content}) => {
    return (
        <div className="card">
            <div className="card__icon">
                <img src={icon} alt={head}/>
            </div>
            <DefaultTextBlock
                head={head}
                content={content}/>
        </div>
    )
}

export default StatCard;