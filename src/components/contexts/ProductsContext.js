import React, { useState } from 'react';
import image10 from "../../images/10.png";
import image11 from "../../images/11.png";
import image12 from "../../images/12.png";
import image13 from "../../images/13.png";
import image14 from "../../images/14.png";
import image15 from "../../images/15.png";
import image16 from "../../images/16.png";
import image17 from "../../images/17.png";
import image18 from "../../images/18.png";


export const productsProvider = React.createContext();
const ProductsContext = ({children}) => {

    const [products, setProducts] = useState([
        {
        id: 1,
        type: "appetizers",
        image: image10,
        name: "Nuggets",
        price: "8.99$",
        description: "Freshly baked buns with tomatoes, mayonaise, lettuce, bacon, 250 oz beef patties...",
        quantity: 0
        },
        {
        id: 2,
        type: "appetizers",
        image: image11,
        name: "Onion Rings",
        price: "12.00$ - 24.00$",
        description: "Freshly baked buns with tomatoes, mayonaise, lettuce, bacon, 250 oz beef patties...",
        quantity: 0
        },
        {
        id: 3,
        type: "appetizers",
        image: image12,
        name: "Quesadillas",
        price: "32.00$ - 48.00$",
        description: "Freshly baked buns with tomatoes, mayonaise, lettuce, bacon, 250 oz beef patties...",
        quantity: 0
        },
    
        {
        id: 4,
        type: "burgers",
        image: image13,
        name: "Crusty Dusty",
        price: "8.99$",
        description: "Freshly baked buns with tomatoes, mayonaise, lettuce, bacon, 250 oz beef patties...",
        quantity: 0
        },
        {
        id: 5,
        type: "burgers",
        image: image14,
        name: "Cheesy Bomb",
        price: "12.00$ - 24.00$",
        description: "Freshly baked buns with tomatoes, mayonaise, lettuce, bacon, 250 oz beef patties...",
        quantity: 0
        },
        {
        id: 6,
        type: "burgers",
        image: image15,
        name: "Fish Burger",
        price: "32.00$ - 48.00$",
        description: "Freshly baked buns with tomatoes, mayonaise, lettuce, bacon, 250 oz beef patties...",
        quantity: 0
        },
    
        {
        id: 7,
        type: "drinks",
        image: image16,
        name: "Iced Tea",
        price: "8.99$",
        description: "Freshly baked buns with tomatoes, mayonaise, lettuce, bacon, 250 oz beef patties...",
        quantity: 0
        },
        {
        id: 8,
        type: "drinks",
        image: image17,
        name: "Mint & Lemon",
        price: "12.00$ - 24.00$",
        description: "Freshly baked buns with tomatoes, mayonaise, lettuce, bacon, 250 oz beef patties...",
        quantity: 0
        },
        {
        id: 9,
        type: "drinks",
        image: image18,
        name: "Orange Juice",
        price: "32.00$ - 48.00$",
        description: "Freshly baked buns with tomatoes, mayonaise, lettuce, bacon, 250 oz beef patties...",
        quantity: 0
        },
    ])


    return (
        <productsProvider.Provider value={products}>
            {children}
        </productsProvider.Provider>
    );
}
 
export default ProductsContext;