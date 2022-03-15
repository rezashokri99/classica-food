import React from 'react';
import styles from "./Suggestions.module.scss";
import burgerImage from "../../images/1.jpg";
import friesImage from "../../images/2.jpg";
import dessertImage from "../../images/3.jpg";


const Suggestions = () => {
    return (
        <div className={styles.suggestionsContainer}>
            <div className={styles.suggestionsContent}>
                
                <div className={styles.col_6}>
                    <a href='#3' className={styles.burgerSuggestion}>
                        <img src={burgerImage} alt="burger_image" />
                        <div className={styles.titleSuggestion}>
                            <h5>Burgers</h5>
                            <h4>Just perfect</h4>
                        </div>
                    </a>
                </div>

                <div className={styles.col_6}>
                    <a href='#3' className={styles.friesSuggestion}>
                        <img src={friesImage} alt="burger_image" />
                        <div className={styles.titleSuggestion}>
                            <h5>Fries</h5>
                            <h4>Crunchy delight</h4>    
                        </div>
                    </a>
                    <a href='#3' className={styles.dessertSuggestion}>
                        <img src={dessertImage} alt="burger_image" />
                        <div className={styles.titleSuggestion}>
                            <h5>Desserts</h5>
                            <h4>Mouth watering</h4>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
}
 
export default Suggestions;