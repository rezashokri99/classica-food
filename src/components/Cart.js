import React, { useContext, useEffect, useState } from 'react';
import styles from "./Cart.module.scss";
import image15 from "../images/15.png";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Scroll from 'react-scroll';
import { cartListProvider, showCartProvider } from '../App';
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

const Cart = () => {


    const [showCart, setShowCart] = useContext(showCartProvider);
    const [cartList, setCartList] = useContext(cartListProvider);
    

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    },[])

  const scrollToTop = () => {
    scroll.scrollToTop();
  }


  const priceHandler = (price) => {
    if (price.split("-").length === 2) {
    let priceArray = price.split("-");
    return (+priceArray[0].split("$")[0]);
    }
    else {
    let priceArray = price.split("$");
    return (+priceArray[0].split("$")[0])
    }
  }

  const subtractHandler = (id) => {
    const cartListCopy = [...cartList];
    const productIndex = cartListCopy.findIndex(product => product.id === id);
    let product = cartListCopy.find((product) => product.id === id);

    if (product.quantity > 1) {
        product.quantity--;
        cartListCopy[productIndex] = product;
        localStorage.setItem("cartList", JSON.stringify(cartListCopy));
        setCartList(JSON.parse(localStorage.getItem("cartList")));
    }else {
        cartListCopy.splice(productIndex, 1);
        localStorage.setItem("cartList", JSON.stringify(cartListCopy));
        setCartList(JSON.parse(localStorage.getItem("cartList")));
    }


  }

  const addHandler = (id) => {
    const cartListCopy = [...cartList];
    const productIndex = cartListCopy.findIndex(product => product.id === id);
    let product = cartListCopy.find((product) => product.id === id);

    product.quantity++;
    cartListCopy[productIndex] = product;
    localStorage.setItem("cartList", JSON.stringify(cartListCopy));
    setCartList(JSON.parse(localStorage.getItem("cartList")));
  }

  
  const deleteHandler = (id) => {
    const cartListCopy = [...cartList];
    const productIndex = cartListCopy.findIndex(product => product.id === id);
    
    cartListCopy.splice(productIndex, 1);

    localStorage.setItem("cartList", JSON.stringify(cartListCopy));
    setCartList(JSON.parse(localStorage.getItem("cartList")));
  }




    return (
        <div className={styles.cartContainer} style={showCart ? {right: "0px"} : {right: "-1200px"}}>
            
            <div className={styles.cartHeader}>
                <h3>Your Cart</h3>
                <div className={styles.closeBtn} onClick={() => setShowCart((prevShowCart) => (!prevShowCart))}>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className={styles.cartBody}>

                <Element name="test7" className="element" id="containerElement" style={{
                    position: 'relative',
                    height: 'fitContent',
                    minHeight: "780px",
                    overflow: 'scroll',
                    marginBottom: '100px'
                }}>
                    <div className={styles.cartList}>
                        {
                            cartList.length > 0 ? 
                                cartList.map((product) => (
                                    <Element name="firstInsideContainer" key={product.id} style={{
                                        marginBottom: '0px'
                                    }}>
                                        <div className={styles.cartItemInfo} >
                                            

                                            <div className={styles.cartItemImage}>
                                                <a href="#1"><img src={product.image} alt="product" /></a>
                                                <div className={styles.cartItemName}>
                                                    <h5> <a href="#1">{product.name}</a> </h5>
                                                    <span>{product.quantity} * {priceHandler(product.price)}$</span>
                                                </div>
                                            </div>

                                            <div className={styles.cartItemQuantity}>
                                                <span className={styles.subtractQty} onClick={() => subtractHandler(product.id)}> <FaMinus /> </span>
                                                <p>{product.quantity}</p>
                                                <span className={styles.addQty} onClick={() => addHandler(product.id)}> <FaPlus /> </span>
                                            </div>

                                            <div className={styles.cartItemPrice}>{product.quantity * priceHandler(product.price)} $</div>
                                            
                                            <div className={styles.closeBtn} onClick={() => deleteHandler(product.id)}>
                                                <span></span>
                                                <span></span>
                                            </div>


                                        </div>
                                    </Element>
                                ))
                            
                            : ""
                        }
                        
                    </div>

                
                </Element>
                {/* <div className={styles.cartList}> */}
                    {/* <div className={styles.cartItemInfo}>
                        <div className={styles.cartItemImage}>
                            <a href="#1"><img src={image15} alt="product" /></a>
                            <div className={styles.cartItemName}>
                                <h5> <a href="#1">Juicy Lucy</a> </h5>
                                <span>4x 9.99$</span>
                            </div>
                        </div>
                        <div className={styles.cartItemQuantity}>
                            <span className={styles.subtractQty}> <FaMinus /> </span>
                            <input type="text" value="1" />
                            <span className={styles.addQty}> <FaPlus /> </span>
                        </div>
                        <div className={styles.cartItemPrice}>36.99$</div>
                        <div className={styles.closeBtn}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div> */}
            </div>

            <div className={styles.cartFooter}>
                <h4>Total: <span>299.99$</span></h4>
                <a href="#1" className={styles.checkoutBtn}>Checkout</a>
            </div>

        </div>
    );

    


}
 
export default Cart;