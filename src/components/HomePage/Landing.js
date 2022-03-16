import React, { useEffect } from 'react';
import styles from "./Landing.module.scss";
import { BsArrowRightShort } from "react-icons/bs";


const Landing = () => {

    useEffect(() => {
        window.scrollTo("0px", "0px");
        // window.scrollTo()
    }, [])
    return (
        <div className={styles.landingContainer}>
            <div className={styles.landingbackground}>
            </div>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Meet the <span>Juicy Lucy</span></h1>
                <p className={styles.titleMute}>
                    Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak
                </p>
                <a href='#1' className={styles.orderBtn}>
                    Order Now
                    <BsArrowRightShort />
                </a>
            </div>
        </div>
    );
}
 
export default Landing;