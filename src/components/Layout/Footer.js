import React from 'react';
import styles from "./Footer.module.scss";
import logo from "../../images/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import insta1 from "../../images/insta1.jpg";
import insta2 from "../../images/insta2.jpg";
import insta3 from "../../images/insta3.jpg";
import insta4 from "../../images/insta4.jpg";
import insta5 from "../../images/insta5.jpg";
import insta6 from "../../images/insta6.jpg";
import { FaAngleRight } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";




const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            
            <div className={styles.footerContent}>

                <div className={styles.socialsContainer}>
                    <div className={styles.footerLogo}>
                        <img src={logo} alt="logoImage" />    
                    </div>    
                    <p>I provide new recipes with a twist on daily basis. I also post blog posts about fun ideas to do in the kitchen</p>
                    <ul>
                        <li><a href='https://www.instagram.com/reza_shokri99/'><FaInstagram /></a></li>
                        <li><a href='https://github.com/rezashokri99?tab=repositories'><FaGithub /></a></li>
                        <li><a href='#1'><FaPinterestP /></a></li>
                        <li><a href='#1'><FaLinkedinIn /></a></li>
                    </ul>
                </div>

                <div className={styles.topItemsContainer}>
                    <h5>Top Items</h5>
                    <ul>
                        <li><a href='#1'><FaAngleRight />Juicy Lucy</a></li>
                        <li><a href='#1'><FaAngleRight />Angus Beef Burger</a></li>
                        <li><a href='#1'><FaAngleRight />Cheesy Bomb</a></li>
                        <li><a href='#1'><FaAngleRight />Crusty Dusty</a></li>
                        <li><a href='#1'><FaAngleRight />King Henry</a></li>
                    </ul>
                </div>

                <div className={styles.legalsContainer}>
                    <h5>Legal</h5>
                    <ul>
                        <li><a href='#1'><FaAngleRight />Privacy Policy</a></li>
                        <li><a href='#1'><FaAngleRight />Refund Policy</a></li>
                        <li><a href='#1'><FaAngleRight />Cookie Policy</a></li>
                        <li><a href='#1'><FaAngleRight />Order Policy</a></li>
                        <li><a href='#1'><FaAngleRight />Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className={styles.instagramContainer}>
                    <h5>Instagram</h5>
                    <div className={styles.imagesContainer}>
                        <div>
                            <img src={insta1} alt="image1" />
                            <img src={insta2} alt="image2" />
                            <img src={insta3} alt="image3" />
                        </div>
                        <div>
                            <img src={insta4} alt="image4" />
                            <img src={insta5} alt="image5" />
                            <img src={insta6} alt="image6" />
                        </div>
                    </div>
                </div>

            </div>


            <div className={styles.footerBottom}>
                <p>Made with <AiFillHeart /> by <a href='https://www.instagram.com/reza_shokri99/'> reza shokri</a> © 2020</p>
                <ul>
                    <li><a href='#1'>Contact Us</a></li>
                    <li><a href='#1'>About Us</a></li>
                    <li><a href='#1'>Menu</a></li>
                </ul>
            </div>

        </footer>
    );
}
 
export default Footer;