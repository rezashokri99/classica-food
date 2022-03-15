import React, { useEffect, useState } from 'react';
import { FiShoppingBag } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import styles from "./Navbar.module.scss";
import logo from "../images/logo.png";


const Navbar = () => {


    const [navState, setNavState] = useState(false)
    

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener('scroll');
        }
    }, [])
    
    const handleScroll= () => {
        if (window.pageYOffset > 140) {
            if(!navState){
                setNavState(true);
            }
        }else{
            if(navState){
                setNavState(false);
            }
        }

    }





    return (
        <header className={`${styles.headerContainer} ${navState && styles.Nav__black}`}>
            <div className={styles.navbarContainer}>
                <img src={logo} alt="logo" />
                <ul className={styles.menuContainer}>
                    <li><a href="#1" className={styles.clicked}>Home Pages</a></li>
                    <li><a href="#1">Menu</a></li>
                    <li><a href="#1">Shop</a></li>
                    <li><a href="#1">Pages</a></li>
                    <li><a href="#1">Blog</a></li>
                    <li><a href="#1">Contact Us</a></li>
                </ul>
                <ul className={styles.cartANDsearchContainer}>
                    <li className={styles.cartContent}><FiShoppingBag /></li>
                    <li className={styles.searchContent}><FiSearch /></li>
                </ul>
            </div>  
        </header>
    );
}
 
export default Navbar;