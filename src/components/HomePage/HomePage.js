import React from 'react';
import FreeDeliverySection from './FreeDeliverySection';
import Landing from './Landing';
import Suggestions from './Suggestions';
import TopPicks from './TopPicks';


const HomePage = () => {
    return (
        <>
            <Landing />
            <Suggestions />
            <TopPicks />
            <FreeDeliverySection />
        </>
    );
}
 
export default HomePage;