import React from 'react';
import { Helmet } from "react-helmet-async";
const Container = React.lazy(() => import('../../../components/Container/Container'));
const SliderBanner = React.lazy(() => import('../SliderBanner/SliderBanner'));
const PopularClasses = React.lazy(() => import('../PopularClasses/PopularClasses'));
const Instructor = React.lazy(() => import('../PopularInstructor/PopularInstructors'));
const UserReviews = React.lazy(() => import('../UserReviews/UserReviews'));
const Gallery = React.lazy(() => import('../Gallery/Gallery'));
const Camping = React.lazy(() => import('../Camping/Camping'));
import { Suspense } from "react";


const Home = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Container>
                <Helmet><title>Summer Sports Camp | Home</title></Helmet>
                <SliderBanner />
                <Gallery />
                <PopularClasses />
                <Instructor />
                <Camping />
                <UserReviews />
            </Container>
        </Suspense>
    );
};

export default Home;

