import Promo from '../promo/Promo';
import Header from '../header/Header';
import Statistics from "../statistics/Statistics";
import Boost from "../boost/Boost";

const MainContent = () => {
    return (
        <main>
            <Header/>
            <Promo/>
            <Statistics/>
            <Boost/>
        </main>
    )
}

export default MainContent;