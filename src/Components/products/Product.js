import React from 'react';

// Component
import Currency from './Currency';
import { useShoppingCart } from '../../context/ShoppingCard';

// Styel
import Styles from './Card.module.css';

//  Image
import ShoppingCard from '../../layOut/image/shopping-cart.png';


const Product = (props) => {
    const { id, img, name, price, btn_modal } = props;

    const { getItemQuantity, increaseCartQuantity, removeItem, openModal } = useShoppingCart();
    const quentity = getItemQuantity(id);

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.top}>
                <img src={img} alt={name} />
            </div>
            <div className={Styles.overLay}>
                <button className={Styles.btnAction} onClick={() => openModal(id)}>{ btn_modal }</button>
            </div>
            <div className={Styles.bottom}>
            {quentity === 0 ? (
                <div className={Styles.left}>
                    <div className={Styles.details}>
                        <h2>{name}</h2>
                        <h4>{Currency(price)}</h4>
                    </div>
                    <button className={Styles.buy} onClick={() => increaseCartQuantity(id)} >
                        <span className={Styles.materialIcons}>
                            <img src={ShoppingCard} alt={name} />
                        </span>
                    </button>
                </div>
            ) : (
                <>
                    <div className={Styles.right}>
                        <div className={Styles.done}>
                            <span className={Styles.materialIcons}>Done</span>
                        </div>
                        <button className={Styles.remove} onClick={() => removeItem(id)} >
                            <span className={Styles.materialIcons}>&times;</span>
                        </button>
                    </div>
                    <div className={Styles.rightDetails}>
                        <h1>{name}</h1>
                        <p>Added to your cart</p>
                    </div>
                </>
            )}
            </div>
        </div>
    )
}

export default Product