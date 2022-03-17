import React, { useContext, useEffect, useState } from 'react';
import { FiShoppingBag } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import styles from "./Navbar.module.scss";
import logo from "../../images/logo.png";
import { Link, useLocation } from 'react-router-dom';
import { asideMenuProvider, showCartProvider } from '../../App';


const Navbar = () => {

    const [showAsideMenu, setShowAsideMenu] = useContext(asideMenuProvider);
    const [showCart, setShowCart] = useContext(showCartProvider);
    const [navState, setNavState] = useState(false);
    
    const menuRef = React.useRef();
    const pathLocation = useLocation().pathname;


    
    const handleScroll= () => {
        
        if (window.pageYOffset > 100) {
            if(!navState){
                setNavState(() => true);
            }
        }else{
            if(navState){
                setNavState(false);
            }
        }

    }

    window.addEventListener("scroll", handleScroll);
    useEffect(() => {

        return () => {
            window.removeEventListener('scroll');
        }
    }, [])



    // window.addEventListener("click", function () {
    //     let humbergerMenu = document.getElementById("humbergerMenu");
    //     // addEventListener("blue", function () {
    //     //     console.log("object");
    //     // })
    //     let isClickedOnHumberMenu = false;
        
    //     function changeIsClicked() {isClickedOnHumberMenu = true}
    //     humbergerMenu.onclick = changeIsClicked();
    //     console.log(isClickedOnHumberMenu);
    //     if (isClickedOnHumberMenu) {
    //         isClickedOnHumberMenu = false;
    //         console.log("click");
    //         return;
    //     }else {
    //         // if (showAsideMenu) {
    //         //     console.log(showAsideMenu);
    //         //     setShowAsideMenu(false);
    //         // }
    //     }
    //     return 
    // });




    return (
        <header className={`${styles.headerContainer} ${navState === true && styles.Nav__black}`}>
            <div className={styles.navbarContainer}>
                <img src={logo} alt="logo" />
                <ul ref={menuRef} className={styles.menuContainer}>
                <li><Link to={"/"}  className={pathLocation === "/" ? styles.clicked : ""}>Home Pages</Link></li>
                <li><Link to={"/menu"}  className={pathLocation === "/menu" ? styles.clicked : ""}>Menu</Link></li>
                <li><Link to={"/shop"}  className={pathLocation === "/shop" ? styles.clicked : ""}>Shop</Link></li>
                <li><a href="#1"  className={pathLocation === "/pages" ? styles.clicked : ""}>Pages</a></li>
                <li><a href="#1"  className={pathLocation === "/blog" ? styles.clicked : ""}>Blog</a></li>
                <li><a href="#1"  className={pathLocation === "/contact-us" ? styles.clicked : ""}>Contact Us</a></li>
                </ul>
                <ul className={styles.cartANDsearchContainer}>
                    <li className={styles.cartContent}><FiShoppingBag onClick={() => setShowCart((prevShowCart) => (!prevShowCart))} /></li>
                    <li className={styles.searchContent}><FiSearch /></li>
                    <div id="humbergerMenu" className={styles.humbergerMenu} onClick={() => setShowAsideMenu((prevShowCart) => (!prevShowCart))} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </ul>
                
            </div>  
        </header>
    );
}
 
export default Navbar;