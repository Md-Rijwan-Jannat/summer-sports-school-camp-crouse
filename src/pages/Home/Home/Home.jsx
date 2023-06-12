import { Helmet } from "react-helmet-async";
import Container from "../../../components/Container/Container";
import SliderBanner from "../SliderBanner/SliderBanner";
import PopularClasses from "../PopularClasses/PopularClasses";
import Instructor from "../PopularInstructor/PopularInstructors";
import UserFeedback from "../UserFeedback/UserFeedback";
import DashboardIcon from "../../../components/DashboardIcon";


const Home = () => {

    return (
        <Container>
            <Helmet><title>Summer Sports Camp | Home</title></Helmet>
            <SliderBanner />
            <DashboardIcon/>
            <PopularClasses />
            <Instructor />
            <UserFeedback />
        </Container>
    );
};

export default Home;

