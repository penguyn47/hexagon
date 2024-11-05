import ExploreArea from "./ExploreArea";
import MainBanner from "./MainBanner";
import SocialArea from "./SocialArea";
import SubscribeArea from "./SubscribeArea";

import '../../assets/css/bootstrap.min.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/templatemo-hexashop.css';
import '../../assets/css/owl-carousel.css';
import '../../assets/css/lightbox.css';


function HomePage() {
    return (
        <>
            <MainBanner />
            <ExploreArea />
            <SocialArea />
            <SubscribeArea />
        </>
    )
}

export default HomePage;
