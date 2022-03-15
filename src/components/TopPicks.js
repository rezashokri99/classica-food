import React from "react";
import styles from "./TopPicks.module.scss";
import { GiFrenchFries } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { MdLiquor } from "react-icons/md";
import image10 from "../images/10.png";
import image11 from "../images/11.png";
import image12 from "../images/12.png";



const TopPicks = () => {
  return (
    <div className={styles.topPicksContainer}>
      <div className={styles.topPicksContent}>
        
        <div className={styles.titleContainer}>
          <h5>Top Picks</h5>
          <h2>Choose your Meal</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        <ul className={styles.productTabsContainer}>
            <li>
                <a href="#1" className={styles.active}><GiFrenchFries /> <span>Appetizers</span></a>
            </li>

            <li>
                <a href="#1"><GiHamburger /> Burgers</a>
            </li>

            <li>
                <a href="#1"><MdLiquor /> Drinks</a>
            </li>

        </ul>

        <div className={styles.tabContent}>
          <div id={styles.menu_appetizers}>
            <div className={styles.row}>

              <div className={styles.col_4}>
                <div className={styles.productImageContainer}>
                  <a href="#1">
                    <img src={image10} alt="productImage" className={styles.image} />
                  </a>
                </div>  
                <div className={styles.productInfo}>
                  <h5 className={styles.productTitle}><a href="#1">Nuggets</a></h5>
                  <p className={styles.productPrice}>8.99$</p>
                  <p className={styles.productText}>Freshly baked buns with tomatoes, mayonaise, lettuce, bacon, 250 oz beef patties...</p>
                </div>
              </div>  

              <div className={styles.col_4}>
                <div className={styles.productImageContainer}>
                  <a href="#1">
                    <img src={image11} alt="productImage" className={styles.image} />
                  </a>
                </div>  
                <div className={styles.productInfo}>
                  <h5 className={styles.productTitle}><a href="#1">Onion Rings</a></h5>
                  <p className={styles.productPrice}>12.00$ - 24.00$</p>
                  <p className={styles.productText}>Freshly baked buns with tomatoes, mayonaise, lettuce, bacon, 250 oz beef patties...</p>
                </div>
              </div>  

              <div className={styles.col_4}>
                <div className={styles.productImageContainer}>
                  <a href="#1">
                    <img src={image12} alt="productImage" className={styles.image} />
                  </a>
                </div>  
                <div className={styles.productInfo}>
                  <h5 className={styles.productTitle}><a href="#1">Quesadillas</a></h5>
                  <p className={styles.productPrice}>32.00$ - 48.00$</p>
                  <p className={styles.productText}>Freshly baked buns with tomatoes, mayonaise, lettuce, bacon, 250 oz beef patties...</p>
                </div>
              </div>  

            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
