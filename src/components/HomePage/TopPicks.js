import React, { useContext, useEffect, useState } from "react";
import styles from "./TopPicks.module.scss";
import { GiFrenchFries } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { MdLiquor } from "react-icons/md";
import { productsProvider } from "../contexts/ProductsContext";
import { Link, useNavigate } from "react-router-dom";


const TopPicks = () => {

  const products = useContext(productsProvider);
  const [showFood, setShowFood] = useState("appetizers");
  const [appetizers, setAppetizers] = useState(products.filter((product) => product.type === "appetizers"));
  const [burgers, setBurgers] = useState(products.filter((product) => product.type === "burgers"));
  const [drinks, setDrinks] = useState(products.filter((product) => product.type === "drinks"));
  


  const changeTab = (tabName) => {
    setShowFood(tabName);
  }

  const navigate = useNavigate();

  const goProductDetailsHandler = (id) => {
    navigate(`/product-details/${id}`);
  }



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
                <a href="#1" onClick={() => changeTab("appetizers")} className={`${showFood === "appetizers" && styles.active}`}><GiFrenchFries /> <span>Appetizers</span></a>
            </li>

            <li>
                <a href="#1" onClick={() => changeTab("burgers")} className={`${showFood === "burgers" && styles.active}`}><GiHamburger /> Burgers</a>
            </li>

            <li>
                <a href="#1" onClick={() => changeTab("drinks")} className={`${showFood === "drinks" && styles.active}`}><MdLiquor /> Drinks</a>
            </li>

        </ul>

        <div className={styles.tabContent}>

          {showFood === "appetizers" && <div id={styles.menu_appetizers}>
            <div className={styles.row}>
              {
                appetizers.map((product) => (
                  <div className={styles.col_4} key={product.id} onClick={() => goProductDetailsHandler(product.id)}>
                    <div className={styles.productImageContainer}>
                      <Link to={`/product-details${product.id}`}>
                        <img src={product.image} alt="productImage" className={styles.image} />
                      </Link>
                    </div>  
                    <div className={styles.productInfo}>
                      <h5 className={styles.productTitle}><Link to={`/product-details${product.id}`}>{product.name}</Link></h5>
                      <p className={styles.productPrice}>{product.price}</p>
                      <p className={styles.productText}>{product.description}</p>
                    </div>
                  </div>    
                ))
              }

            </div>  
          </div>}

          {showFood === "burgers" && <div id={styles.menu_burgers}>
            <div className={styles.row}>

              {
                burgers.map((product) => (
                  <div className={styles.col_4} key={product.id} onClick={() => goProductDetailsHandler(product.id)}>
                    <div className={styles.productImageContainer}>
                      <Link to={`/product-details${product.id}`}>
                        <img src={product.image} alt="productImage" className={styles.image} />
                      </Link>
                    </div>  
                    <div className={styles.productInfo}>
                      <h5 className={styles.productTitle}><Link to={`/product-details${product.id}`}>{product.name}</Link></h5>
                      <p className={styles.productPrice}>{product.price}</p>
                      <p className={styles.productText}>{product.description}</p>
                    </div>
                  </div>    
                ))
              }

            </div>  
          </div>}

          {showFood === "drinks" && <div id={styles.menu_drinks}>
            <div className={styles.row}>

              {
                drinks.map((product) => (
                  <div className={styles.col_4} key={product.id} onClick={() => goProductDetailsHandler(product.id)}>
                    <div className={styles.productImageContainer}>
                      <Link to={`/product-details${product.id}`}>
                        <img src={product.image} alt="productImage" className={styles.image} />
                      </Link>
                    </div>  
                    <div className={styles.productInfo}>
                      <h5 className={styles.productTitle}><Link to={`/product-details${product.id}`}>{product.name}</Link></h5>
                      <p className={styles.productPrice}>{product.price}</p>
                      <p className={styles.productText}>{product.description}</p>
                    </div>
                  </div>    
                ))
              }

            </div>  
          </div>}


        </div>
      </div>
    </div>
  );
};

export default TopPicks;
