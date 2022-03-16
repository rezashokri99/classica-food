import React, { useContext, useEffect, useState } from 'react';
import styles from "./Shop.module.scss";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { productsProvider } from '../contexts/ProductsContext';
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Shop = () => {

    const products = useContext(productsProvider);
    const [showFood, setShowFood] = useState("grid");
    const [searchValue, setSearchValue] = useState("");
    const [burgers, setBurgers] = useState(products);
    const [topBurgers, setTopBurgers] = useState(() => burgers.slice(0, 3));


    useEffect(() => {
        setBurgers(products.filter((product) => (product.name).toLowerCase().includes(searchValue.toLowerCase())));
    }, [searchValue])


    const changeTab = (typeName) => {
        setShowFood(typeName);
    }


    return (
        <div className={styles.shopContainer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    
                    <div className={styles.col_8}>
                        
                        <div className={styles.filterContainer}>
                            <p onClick={() => changeTab("grid")} className={`${showFood === "grid" && styles.active}`}><BsFillGrid3X3GapFill /></p>
                            <p onClick={() => changeTab("list")} className={`${showFood === "list" && styles.active}`}><FaThList /></p>
                        </div>

                        <div className={styles.productContainer}>

                            {showFood === "grid" && <>
                                {
                                    burgers.map((product) => (
                                        <div className={styles.col_6} key={product.id}>
                                            <div className={styles.productImageContainer}>
                                                <Link to={`/product-details/${product.id}`}>
                                                    <img src={product.image} alt="productImage" className={styles.image} />
                                                </Link>
                                            </div>  
                                            <div className={styles.productInfo}>
                                                <h5 className={styles.productTitle}><Link to={`/product-details/${product.id}`}>{product.name}</Link></h5>
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
                                                <Link to={`/product-details/${product.id}`}>
                                                    <img src={product.image} alt="productImage" className={styles.image} />
                                                </Link>
                                            </div>  
                                            <div className={styles.productInfo}>
                                                <h5 className={styles.productTitle}><Link to={`/product-details/${product.id}`}>{product.name}</Link></h5>
                                                <p className={styles.productPrice}>{product.price}</p>
                                                <p className={styles.productText}>{product.description}</p>
                                            </div>
                                        </div>
                                    ))
                                    
                                }
                            </>}


                            {showFood === "list" && <>
                                {
                                    burgers.map((product) => (
                                        <div className={styles.product} key={product.id}>
                                            <Link to={`/product-details/${product.id}`} className={styles.productImage}>
                                                <img src={product.image} alt="image10" />
                                            </Link>
                                            <div>
                                                
                                                <h6 className={styles.productName}><Link to={`/product-details/${product.id}`}>{product.name}</Link></h6>
                                                <p className={styles.productPrice}>{product.price}</p>
                                                <p className={styles.productDescription}>{product.description}</p>
                                            </div>
                                        </div>
                                    ))
                                    
                                }
                            </>}
                            {showFood === "list" && <>
                                {
                                    burgers.map((product) => (
                                        <div className={styles.product} key={product.id}>
                                            <Link to={`/product-details/${product.id}`} className={styles.productImage}>
                                                <img src={product.image} alt="image10" />
                                            </Link>
                                            <div>
                                                <h6 className={styles.productName}><Link to={`/product-details/${product.id}`}>{product.name}</Link></h6>
                                                <p className={styles.productPrice}>{product.price}</p>
                                                <p className={styles.productDescription}>{product.description}</p>
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
                                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Search' />
                            </div>

                            <div className={styles.CategoryContainer}>
                                <h5>Filter by Category</h5>
                                <ul>
                                    <li><a href='#1'><p>Burgers <span>(24)</span></p><GoChevronRight /></a></li>
                                    <li><a href='#1'><p>Meat <span>(16)</span></p><GoChevronRight /></a></li>
                                    <li><a href='#1'><p>Chicken <span>(32)</span></p><GoChevronRight /></a></li>
                                    <li><a href='#1'><p>Fish <span>(22)</span></p><GoChevronRight /></a></li>
                                    <li><a href='#1'><p>New arrivals <span>(15)</span></p><GoChevronRight /></a></li>
                                    <li><a href='#1'><p>Combos <span>(8)</span></p><GoChevronRight /></a></li>
                                </ul>
                            </div>
                            
                            <div className={styles.tagContainer}>
                                <h5>Filter by Tags</h5>
                                <div>
                                    <a href='#1'>Food</a>
                                    <a href='#1'>Foodie</a>
                                    <a href='#1'>Chicken</a>
                                    <a href='#1'>Meat</a>
                                    <a href='#1'>Health</a>
                                    <a href='#1'>Vegan</a>
                                    <a href='#1'>Fit</a>
                                    <a href='#1'>Fruit</a>
                                </div>
                            </div>

                            <div className={styles.topProductsContainer}>
                                <h5>Top Rated Products</h5>

                                {
                                    topBurgers.map((product) => (
                                        <div className={styles.product} key={product.id}>
                                            <Link to={`/product-details/${product.id}`} className={styles.productImage}>
                                                <img src={product.image} alt="image10" />
                                            </Link>
                                            <div>
                                                <h6>
                                                    <Link to={`/product-details/${product.id}`}>
                                                        {product.name} Coated With Butter and Thyme
                                                    </Link>
                                                </h6>
                                                <div className={styles.productRating}>
                                                    <FaStar className={styles.activeRating} />    
                                                    <FaStar className={styles.activeRating} />    
                                                    <FaStar className={styles.activeRating} />    
                                                    <FaStar className={styles.activeRating} />    
                                                    <FaStar />    
                                                </div>
                                                <p>January 22, 2020</p>
                                            </div>
                                        </div>
                                    ))
                                }
                                
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
 
export default Shop;



