import React, { useContext, useEffect, useState } from 'react';
import { FiShoppingBag } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import styles from "./Navbar.module.scss";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import { showCartProvider } from '../../App';


const Navbar = () => {

    const [showCart, setShowCart] = useContext(showCartProvider);
    const [navActive, setNavActive] = useState("homePages");
    const [navState, setNavState] = useState(false);
    
    const menuRef = React.useRef()

    
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

    
    
    // window.addEventListener('resize', function() {
    //     console.log(menuRef.current.style.display === "none");
    //     if (window.innerWidth <= 991) {
    //         menuRef.current.style.display = "none";
    //     } else {
    //         if(menuRef.current.style.display === "none") {
    //             menuRef.current.style.display = "flex";
    //         }
    //     }
        
    // }, true);

    window.addEventListener("scroll", handleScroll);
    useEffect(() => {

        return () => {
            window.removeEventListener('scroll');
        }
    }, [])




    const changeNav = (navName) => {
        setNavActive(navName);
    }



    return (
        <header className={`${styles.headerContainer} ${navState === true && styles.Nav__black}`}>
            <div className={styles.navbarContainer}>
                <img src={logo} alt="logo" />
                <ul ref={menuRef} className={styles.menuContainer}>
                    <li><Link to={"/"} onClick={() => changeNav("homePages")} className={`${navActive === "homePages" && styles.clicked}`}>Home Pages</Link></li>
                    <li><Link to={"/menu"} onClick={() => changeNav("menu")} className={`${navActive === "menu" && styles.clicked}`}>Menu</Link></li>
                    <li><Link to={"/shop"} onClick={() => changeNav("shop")} className={`${navActive === "shop" && styles.clicked}`}>Shop</Link></li>
                    <li><a href="#1" onClick={() => changeNav("pages")} className={`${navActive === "pages" && styles.clicked}`}>Pages</a></li>
                    <li><a href="#1" onClick={() => changeNav("blog")} className={`${navActive === "blog" && styles.clicked}`}>Blog</a></li>
                    <li><a href="#1" onClick={() => changeNav("contactUs")} className={`${navActive === "contactUs" && styles.clicked}`}>Contact Us</a></li>
                </ul>
                <ul className={styles.cartANDsearchContainer}>
                    <li className={styles.cartContent}><FiShoppingBag onClick={() => setShowCart((prevShowCart) => (!prevShowCart))} /></li>
                    <li className={styles.searchContent}><FiSearch /></li>
                    <div className={styles.humbergerMenu}>
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