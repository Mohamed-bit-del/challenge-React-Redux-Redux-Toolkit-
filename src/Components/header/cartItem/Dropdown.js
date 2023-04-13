import React from 'react';

// Component
import { useShoppingCart } from '../../../context/ShoppingCard';
import CartItem from './CartItem';

// Style
import Styles from './Dropdown.module.css'

const Dropdown = ({open}) => {

    const { items, closeCart } = useShoppingCart()

    return (
        <>
            { open &&
                <ul onClick={closeCart} className={Styles.dropdown}>
                    {items.map(item =>  (
                        <CartItem key={item.id} {...item} /> 
                    ))}
                </ul>
            }
        </>
    )
}

export default Dropdown;