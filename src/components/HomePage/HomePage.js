import React, { useContext, useEffect } from 'react';
import { asideMenuProvider } from '../../App';
import FreeDeliverySection from './FreeDeliverySection';
import Landing from './Landing';
import Suggestions from './Suggestions';
import TopPicks from './TopPicks';


const HomePage = () => {

    const [showAsideMenu, setShowAsideMenu] = useContext(asideMenuProvider);

    useEffect(() => {
        setShowAsideMenu(false);

    }, [])


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