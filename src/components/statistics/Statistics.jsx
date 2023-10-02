import StatCard from "../statCard/StatCard";
import DefaultTextBlock from "../defaultTextBlock/DefaultTextBlock";
import ShortenFormPanel from "../shortenFormPanel/ShortenFormPanel";
import IconBrandRec from '../../images/icon-brand-recognition.svg';
import IconDetRecs from '../../images/icon-detailed-records.svg';
import IconFullyCustom from '../../images/icon-fully-customizable.svg';

import './statistics.scss';

const Statistics = () => {
    return (
        <div className="stat">
            <ShortenFormPanel/>
            <DefaultTextBlock
                head='Advanced Statistics'
                content='Track how your links are performing across the web with our 
                advanced statistics dashboard.'/>
            <div className="stat__cards">
                <StatCard
                    icon={IconBrandRec}
                    head='Brand Recognition'
                    content='Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.'/>
                <StatCard
                    icon={IconDetRecs}
                    head='Detailed Records'
                    content='Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.'/>
                <StatCard
                    icon={IconFullyCustom}
                    head='Fully Customizable'
                    content='Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.'/>
            </div>   
        </div>
    )
}

export default Statistics;