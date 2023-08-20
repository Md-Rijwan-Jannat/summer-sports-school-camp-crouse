import { Helmet } from "react-helmet-async";
import Container from "../../../components/Container/Container";
import SliderBanner from "../SliderBanner/SliderBanner";
import PopularClasses from "../PopularClasses/PopularClasses";
import Instructor from "../PopularInstructor/PopularInstructors";
import UserReviews from "../UserReviews/UserReviews";
import Gallery from "../Gallery/Gallery";
import Camping from "../Camping/Camping";


const Home = () => {

    return (
        <Container>
            <Helmet><title>Summer Sports Camp | Home</title></Helmet>
            <SliderBanner />
            <Gallery />
            <PopularClasses />
            <Instructor />
            <Camping />
            <UserReviews />
        </Container>
    );
};

export default Home;

