import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from "./AsideMenu.module.scss";
import logo from "../../images/logo.png";
import { Link, useLocation } from 'react-router-dom';
import { asideMenuProvider } from '../../App';



const AsideMenu = () => {

    const pathLocation = useLocation().pathname;
    
    const asideRef = useRef();

    const [showAsideMenu, setShowAsideMenu] = useContext(asideMenuProvider);

    
    window.addEventListener('resize', function() {
        if (window.window.innerWidth > 991) {
            setShowAsideMenu(false);
        }
    }, true);


//   const [humbergerMenu, setHumbergerMenu] = useState("");
//   useEffect(() => {
//     // asideMenu = document.getElementById("asideMenuContainer");
  
//     setHumbergerMenu(document.getElementById("humbergerMenu"));
//     // humbergerMenu = document.getElementById("humbergerMenu");
  
//     console.log(document);
//     console.log(document.querySelector("#humbergerMenu"));
//     console.log(humbergerMenu);
  
//     // closeBtnAsideMenu = document.getElementById("closeBtnAsideMenu");
//   }, [humbergerMenu, showAsideMenu])






    return (
        <div ref={asideRef} id="asideMenuContainer" className={styles.asideMenuContainer} style={showAsideMenu ? {left: "0px"} : {left: "-270px"}}>
            <div className={styles.asideMenuHeader}>
                <img src={logo} alt="logo" />
                <div id="closeBtnAsideMenu" className={styles.closeBtn} onClick={() => setShowAsideMenu(false)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className={styles.asideMenuContent}>
                <li><Link to={"/"} className={pathLocation === "/" ? styles.clicked : ""}>Home Pages</Link></li>
                <li><Link to={"/menu"} className={pathLocation === "/menu" ? styles.clicked : ""}>Menu</Link></li>
                <li><Link to={"/shop"} className={pathLocation === "/shop" ? styles.clicked : ""}>Shop</Link></li>
                <li><a href="#1" className={pathLocation === "/pages" ? styles.clicked : ""}>Pages</a></li>
                <li><a href="#1" className={pathLocation === "/blog" ? styles.clicked : ""}>Blog</a></li>
                <li><a href="#1" className={pathLocation === "/contact-us" ? styles.clicked : ""}>Contact Us</a></li>
            </ul>

        </div>
    );
}
 
export default AsideMenu;