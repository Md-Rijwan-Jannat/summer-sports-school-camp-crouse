import { Helmet } from "react-helmet-async";
import Container from "../../../components/Container/Container";
import SliderBanner from "../SliderBanner/SliderBanner";


const Home = () => {
    return (
        <Container>
            <Helmet><title>Summer Sports Camp | Home</title></Helmet>
            <SliderBanner/>
        </Container>
    );
};

export default Home;