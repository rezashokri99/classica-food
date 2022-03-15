import React, { useContext, useState } from 'react';
import styles from "./Menu.module.scss";
import image10 from "../../images/10.png";
import image11 from "../../images/11.png";
import image12 from "../../images/12.png";
import image13 from "../../images/13.png";
import image14 from "../../images/14.png";
import image15 from "../../images/15.png";
import image16 from "../../images/16.png";
import image17 from "../../images/17.png";
import image18 from "../../images/18.png";
import { productsProvider } from "../contexts/ProductsContext";



const Menu = () => {

    const products = useContext(productsProvider)
    const [showFood, setShowFood] = useState("all");
    const [appetizers, setAppetizers] = useState(products.filter((product) => product.type === "appetizers"));
    const [burgers, setBurgers] = useState(products.filter((product) => product.type === "burgers"));
    const [drinks, setDrinks] = useState(products.filter((product) => product.type === "drinks"));
  
    const changeTab = (tabName) => {
        setShowFood(tabName);
      }


    return (
        <div className={styles.menuContainer}>

            <div className={styles.menuLanding}>
                <div className={styles.backgroundImage}></div>
                <div className={styles.content}>
                    <h1>Menu</h1>    
                    <div className={styles.breadcrumb}>
                        <p>Home / <span>Menu</span></p>
                    </div>
                </div>
            </div>

            <div className={styles.suggestionsContainer}>
                <div className={styles.container}>
                    <ul>
                        <li><a href='#1' onClick={() => changeTab("all")} className={`${showFood === "all" && styles.active}`}>All</a></li>
                        <li><a href='#1' onClick={() => changeTab("appetizers")} className={`${showFood === "appetizers" && styles.active}`}>Appetizers</a></li>
                        <li><a href='#1' onClick={() => changeTab("burgers")} className={`${showFood === "burgers" && styles.active}`}>Burgers</a></li>
                        <li><a href='#1' onClick={() => changeTab("drinks")} className={`${showFood === "drinks" && styles.active}`}>Drinks</a></li>
                    </ul>

                    <div className={styles.tabContent}>

                        {showFood === "all" && <div className={styles.rowAppetizers}>
                            {
                                products.map((product) => (
                                <div className={styles.product} key={product.id}>
                                    <img src={product.image} alt="image10" />
                                    <div className={styles.productInfo}>
                                        <div className={styles.productHeader}>
                                            <h5><a href='#2'>{product.name}</a></h5>
                                            <p>{product.price}</p>
                                        </div>
                                        <p className={styles.productText}>
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                                ))
                            }
                        </div>}

                        {showFood === "appetizers" && <div className={styles.rowAppetizers}>
                            {
                                appetizers.map((product) => (
                                <div className={styles.product} key={product.id}>
                                    <img src={product.image} alt="image10" />
                                    <div className={styles.productInfo}>
                                        <div className={styles.productHeader}>
                                            <h5><a href='#2'>{product.name}</a></h5>
                                            <p>{product.price}</p>
                                        </div>
                                        <p className={styles.productText}>
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                                ))
                            }
                        </div>}
                        
                        {showFood === "burgers" && <div className={styles.rowAppetizers}>
                            {
                                burgers.map((product) => (
                                <div className={styles.product} key={product.id}>
                                    <img src={product.image} alt="image10" />
                                    <div className={styles.productInfo}>
                                        <div className={styles.productHeader}>
                                            <h5><a href='#2'>{product.name}</a></h5>
                                            <p>{product.price}</p>
                                        </div>
                                        <p className={styles.productText}>
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                                ))
                            }
                        </div>}

                        {showFood === "drinks" && <div className={styles.rowAppetizers}>
                            {
                                drinks.map((product) => (
                                <div className={styles.product} key={product.id}>
                                    <img src={product.image} alt="image10" />
                                    <div className={styles.productInfo}>
                                        <div className={styles.productHeader}>
                                            <h5><a href='#2'>{product.name}</a></h5>
                                            <p>{product.price}</p>
                                        </div>
                                        <p className={styles.productText}>
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                                ))
                            }
                        </div>}


                            
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Menu;