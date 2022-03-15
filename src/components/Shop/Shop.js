import React, { useContext, useState } from 'react';
import styles from "./Shop.module.scss";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import image10 from "../../images/10.png";
import { productsProvider } from '../contexts/ProductsContext';


const Shop = () => {

    const products = useContext(productsProvider);
    const [burgers, setBurgers] = useState(products.filter((product) => product.type === "burgers"));
    const [showFood, setShowFood] = useState("grid");


    return (
        <div className={styles.shopContainer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col_8}>
                        
                        <div className={styles.filterContainer}>
                            <p className={styles.active}><BsFillGrid3X3GapFill /></p>
                            <p><FaThList /></p>
                        </div>

                        <div className={styles.productContainer}>

                            {showFood === "grid" && <>
                                {
                                    burgers.map((product) => (
                                        <div className={styles.col_6} key={product.id}>
                                            <div className={styles.productImageContainer}>
                                                <a href="#1">
                                                    <img src={product.image} alt="productImage" className={styles.image} />
                                                </a>
                                            </div>  
                                            <div className={styles.productInfo}>
                                                <h5 className={styles.productTitle}><a href="#1">{product.name}</a></h5>
                                                <p className={styles.productPrice}>{product.price}</p>
                                                <p className={styles.productText}>{product.description}</p>
                                            </div>
                                        </div>
                                    ))
                                    
                                }
                            </>}
                            
                            {showFood === "grid" && <>
                                {
                                    burgers.map((product) => (
                                        <div className={styles.col_6} key={product.id}>
                                            <div className={styles.productImageContainer}>
                                                <a href="#1">
                                                    <img src={product.image} alt="productImage" className={styles.image} />
                                                </a>
                                            </div>  
                                            <div className={styles.productInfo}>
                                                <h5 className={styles.productTitle}><a href="#1">{product.name}</a></h5>
                                                <p className={styles.productPrice}>{product.price}</p>
                                                <p className={styles.productText}>{product.description}</p>
                                            </div>
                                        </div>
                                    ))
                                    
                                }
                            </>}

                        </div>

                    </div>
                    <div className={styles.col_4}>
                        <div className={styles.sidebar}>

                            <div className={styles.searchContainer}>
                                <h5>Search</h5>
                                <input type="text" placeholder='Search' />
                            </div>

                            <div className={styles.filterAndCategoryContainer}>
                                <h5>Filter by Category</h5>
                                <ul>
                                    
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Shop;