import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from "./ProductDetails.module.scss";
import { FaStar } from "react-icons/fa";
import { asideMenuProvider, cartListProvider } from '../../App';
import { productsProvider } from '../contexts/ProductsContext';



const ProductDetails = () => {

    const [showAsideMenu, setShowAsideMenu] = useContext(asideMenuProvider);
    const [quantity, setQuantity] = useState(1);
    const cartlistContext = useContext(productsProvider);
    const [cartList, dispatch] = useContext(cartListProvider);

    const [bunSelect, setBunSelect] = useState("");
    const [sanceSelect, setSanceSelect] = useState("");

    const changeBunSelectHandler = (e) => {
        setBunSelect(e.target.value);
    }
    const changeSanceSelectHandler = (e) => {
        setSanceSelect(e.target.value);
    }



    const { id } = useParams();
    const productInLS = cartList.find((product) => product.id === (+id));
    const productInContext = cartlistContext.find((product) => product.id === (+id));
    const [productSeleted, setProductSeleted] = useState(productInLS ? productInLS : productInContext);
    // const [productSeleted, setProductSeleted] = useState(cartlistContext.find((product) => product.id === (+id)));
    
    useEffect(() => {
        const cartlistLS = JSON.parse(localStorage.getItem("cartList"));
        let product = cartlistLS.find((product) => product.id === (+id));
        if (!product) {
            const a = cartList.find((product) => product.id === productSeleted.id)
            if (!a) {
                const product = {...productSeleted, quantity: 0 }
                setProductSeleted(product);
            }
        }
    },[cartList])

    useEffect(() => {
        window.scrollTo("0px", "0px");
        setShowAsideMenu(false);
    }, [])

    // useEffect(() => {
    //     setProductSeleted((cartList.length > 0 ? cartList :cartlistContext).find((product) => product.id === (+id)))
    // }, [])



    const changeQuantityHandler = (e) => {
        if ((+e.target.value) > 0) {
            setQuantity((+e.target.value))
        }else if(e.target.value === "") {
            setQuantity(e.target.value)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const productInLS = cartList.find((product) => product.id === (+id));
        
        if (productInLS) {
            let productforSend = productSeleted.quantity + quantity;
            let productForPost = {...productSeleted, quantity: productforSend};
            productForPost.quantity--;

            dispatch({type: "upQuantity", product: productForPost});
            setProductSeleted(productForPost);
        }else {
            let productforSend = productSeleted.quantity + quantity;
            let productForPost = {...productSeleted, quantity: productforSend};

            dispatch({type: "add", product: productForPost});
            setProductSeleted(productForPost);
        }
        // if (productSeleted.quantity >= 1) {
        //     let productforSend = productSeleted.quantity + quantity;
        //     let productForPost = {...productSeleted, quantity: productforSend};
        //     productForPost.quantity--;

        //     dispatch({type: "upQuantity", product: productForPost});
        //     setProductSeleted(productForPost);

        // }else {
        //     let productforSend = productSeleted.quantity + quantity;
        //     let productForPost = {...productSeleted, quantity: productforSend};

        //     dispatch({type: "add", product: productForPost});
        //     setProductSeleted(productForPost);
        // }
    }


    // const submitHanlder = (e) => {
    //     // e.preventDefault();
    //     const productPurchased = {...productSeleted, quantity: quantity };
    //     let cartListCopy = [];
    //     if (cartList) {
    //         cartListCopy = cartList;
    //     }

    //     let oldProduct = cartListCopy.find((product) => product.id === productPurchased.id);
    //     if (oldProduct) {
    //         const oldProductIndex = cartListCopy.findIndex(product => product.id === productPurchased.id);
            
    //         oldProduct.quantity += quantity;
    //         cartListCopy[oldProductIndex] = oldProduct;
    //         localStorage.setItem("cartList", JSON.stringify(cartListCopy));
    //         // setCartList(cartListCopy);
    //     }else {
    //         cartListCopy.push(productPurchased);
    //         localStorage.setItem("cartList", JSON.stringify(cartListCopy));
    //         // setCartList(cartList);
    //     }
    //     let oldProductss = cartList.find((product) => product.id === productPurchased.id);

    //     setProductSeleted({...productPurchased, quantity: oldProductss.quantity});

    // }



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
                        
                        <div className={styles.productHeader}>
                            <h2 className={styles.productTitle}>{productSeleted.name}</h2>
                            <p><span>{productSeleted.quantity}</span> is in the cart</p>
                        </div>

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
                                <select className={styles.bunSelect} value={bunSelect} label="status" onChange={changeBunSelectHandler}>
                                    <option value="">Select a Bun</option>
                                    <option value="oat">Oat Bun</option>
                                    <option value="whole-wheat">Whole Wheat</option>
                                    <option value="milk">Milk Bun</option>
                                </select>
                            </div>
                            
                            <div>
                                <label>Sauce</label>
                                <select className={styles.sanceSelect} value={sanceSelect} label="status" onChange={changeSanceSelectHandler}>
                                    <option value="">Select a Sauce</option>
                                    <option value="mayonaise">Mayonaise</option>
                                    <option value="thousand-island">Thousand Island</option>
                                    <option value="ketchup">Ketchup</option>
                                </select>
                            </div>

                        </div>
                        
                        <form onSubmit={(e) => submitHandler(e)} className={styles.countProductContainer} >
                            <div>
                                <label>Quantity</label>
                                <input type="number" onChange={changeQuantityHandler} name="quantity" value={quantity} />
                            </div>

                            <a href='#1' onClick={(e) => submitHandler(e)} type="submit" name="button"> Add to Cart </a>

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