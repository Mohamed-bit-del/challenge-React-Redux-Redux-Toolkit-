import React from 'react';

// Component
import Data from '../../data/data.json';
import { useShoppingCart } from '../../../context/ShoppingCard';

// Style
import Styles from './Dropdown.module.css';

const CartItem = ({ id, quantity }) => {

    const { removeItem } = useShoppingCart()

    const items = Data.find(item => item.id === id)
    if (items == null) return null;

    return (
        <li className={Styles.dropdownItem}>
            <span className={Styles.dropdownLogo}>
                <img src={items.img} alt={items.name} />
            </span>
            <span className={Styles.dropdownText}>{items.name} </span>
            <span className={Styles.removeItem} onClick={() => removeItem (items.id)}>&times;</span>
        </li>
    )
}

export default CartItem;