import { Helmet } from "react-helmet-async";
import Container from "../../../components/Container/Container";
import SliderBanner from "../SliderBanner/SliderBanner";
import PopularClasses from "../PopularClasses/PopularClasses";
import Instructor from "../PopularInstructor/PopularInstructors";


const Home = () => {
    return (
        <Container>
            <Helmet><title>Summer Sports Camp | Home</title></Helmet>
            <SliderBanner/>
            <PopularClasses/>
            <Instructor/>
        </Container>
    );
};

export default Home;