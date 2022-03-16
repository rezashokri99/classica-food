import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productsProvider } from '../contexts/ProductsContext';
import styles from "./ProductDetails.module.scss";
import { FaStar } from "react-icons/fa";



const ProductDetails = () => {

    const [quantity, setQuantity] = useState(1);

    const products = useContext(productsProvider);
    const { id } = useParams();
    const productSeleted = products.find((product) => product.id === (+id));


    const changeQuantityHandler = (e) => {
        if ((+e.target.value) > 0) {
            setQuantity((+e.target.value))
        }
    }

    const submitHanlder = (e) => {
        e.preventDefault();
        const productPurchased = {...productSeleted, quantity: quantity };
        
        const cartlistLS = JSON.parse(localStorage.getItem("cartList"));
        let cartlist = cartlistLS ? cartlistLS : [];

        const oldProductIndex = cartlist.findIndex(product => product.id === productPurchased.id);
        let oldProduct = cartlist.find((product) => product.id === productPurchased.id);
        
        if (oldProduct) {
            oldProduct.quantity += quantity;
            cartlist[oldProductIndex] = oldProduct;
            localStorage.setItem("cartList", JSON.stringify(cartlist));
        } else {
            cartlist.push(productPurchased);
            localStorage.setItem("cartList", JSON.stringify(cartlist));
        }

    }


    return (
        <div className={styles.productDetailsContainer}>

            <div className={styles.menuLanding}>
                <div className={styles.backgroundImage}></div>
                <div className={styles.content}>
                    <h1>Menu</h1>    
                    <div className={styles.breadcrumb}>
                        <Link to="/">Home </Link> <span>/</span> <Link to="/shop">Shop</Link> <span>/</span> <span>Product Details</span>
                        {/* <Link to="/">Home <span>/</span> <Link to="/shop">Shop</Link> <span>/</span> <span>Product Details</span> </Link> */}
                    </div>
                </div>
            </div>

            <div className={styles.container}>

                <div className={styles.row}>

                    <div className={styles.col_4}>
                        <div className={styles.productImage}>
                            <img src={productSeleted.image} alt="productImage" />
                        </div>
                    </div>
                    
                    <div className={styles.col_8}>
                        
                        <h2 className={styles.productTitle}>{productSeleted.name}</h2>

                        <div className={styles.ratingContainer}>
                            <div className={styles.productRating}>
                                <FaStar className={styles.activeRating} />  
                                <FaStar className={styles.activeRating} />
                                <FaStar className={styles.activeRating} />
                                <FaStar className={styles.activeRating} />
                                <FaStar /><span>(16 ratings)</span>
                            </div>
                        </div>

                        <div className={styles.priceContainer}>
                            <p>{productSeleted.price}</p>
                        </div>

                        <p className={styles.productDescription}>{productSeleted.description} {productSeleted.description}</p>

                        <div className={styles.productVariations}>
                            <div>
                                <label>Bun</label>
                                <select className={styles.bunSelect} onChange>
                                    <option value="">Select a Bun</option>
                                    <option value="oat">Oat Bun</option>
                                    <option value="whole-wheat">Whole Wheat</option>
                                    <option value="milk">Milk Bun</option>
                                </select>
                            </div>
                            
                            <div>
                                <label>Sauce</label>
                                <select className={styles.sanceSelect} onChange>
                                    <option value="">Select a Sauce</option>
                                    <option value="mayonaise">Mayonaise</option>
                                    <option value="thousand-island">Thousand Island</option>
                                    <option value="ketchup">Ketchup</option>
                                </select>
                            </div>

                        </div>
                        
                        <form className={styles.countProductContainer} onSubmit={submitHanlder}>
                            <div>
                                <label>Quantity</label>
                                <input type="number" onChange={changeQuantityHandler} name="quantity" value={quantity} />
                            </div>

                            <button type="submit" name="button"> Add to Cart </button>

                        </form>

                        <ul className={styles.productCategori}>
                            <li>
                                <span>Categories: </span>
                                <p>Burger</p>
                            </li>
                            <li>
                                <span>Tags: </span>
                                <div>
                                    <p>Food, </p>
                                    <p>Foodie, </p>
                                    <p>Buns, </p>
                                    <p>Fish, </p>
                                </div>
                            </li>
                        </ul>


                    </div>

                </div>

                <div className={styles.productInfo}></div>

            </div>
        </div>
    );
}
 
export default ProductDetails;