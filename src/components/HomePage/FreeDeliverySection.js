import React from 'react';
import styles from "./FreeDeliverySection.module.scss";
import { GiHamburger } from "react-icons/gi";
import { MdLiquor } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";


const FreeDeliverySection = () => {
    return (
        <div className={styles.freeDeliverySection}>
            <div className={styles.freeDeliveryBackground}>
            </div>
            <div className={styles.freeDeliveryContent}>
                    <div className={styles.freeDeliveryTitleContainer}>
                        <h5>Free Delivery</h5>    
                        <h2>Deal of the Day</h2>    
                    </div>

                    
                    <div className={styles.productContainer}>

                        <div className={styles.productPrice}>
                            <p>12 <span>99$</span></p>
                        </div>

                        <div className={styles.iconsContainer}>
                            <div>
                                <p className={styles.active}><GiHamburger /> <span>Burger of Choice</span></p>
                            </div>
                            <span>+</span>
                            <div>
                                <p className={styles.active}><MdLiquor /> <span>Free Drink</span></p>
                            </div>
                        </div>

                        <a className={styles.orderBtn} href='#1'>Order Now <BsArrowRightShort /></a>
                    </div>
                    

                </div>
        </div>
    );
}
 
export default FreeDeliverySection;