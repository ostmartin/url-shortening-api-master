import MainTextBlock from "../mainTextBlock/MainTextBlock";
import Header from '../header/Header';
import Statistics from "../statistics/Statistics";
import Boost from "../boost/Boost";

const MainContent = () => {
    return (
        <main>
            <Header/>
            <MainTextBlock/>
            <Statistics/>
            <Boost/>
        </main>
    )
}

export default MainContent;