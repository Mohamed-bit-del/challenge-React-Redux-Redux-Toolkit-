import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Currency from '../products/Currency';
import DataProduct from '../data/data.json';
import { useShoppingCart } from '../../context/ShoppingCard';

import ShoppingCard from '../../layOut/image/shopping-cart.png';

// Styles
import Style from './Modal.module.css';
import Styles from '../products/Card.module.css'

const Backdrop = ({ close }) => {
    return(
        <div className={Style.backdrop} onClick={close}></div>
    )
}

const Overlay = ( props ) => {

    const { id , quantity } = props;
    const { increaseCartQuantity, removeItem } = useShoppingCart();
    const items = DataProduct.find(item => item.id === id)
    if (items == null) return null;


    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.top} ${Style.top}`}>
                <img src={items.img} alt={items.name} />
            </div>
            <div className={`${Styles.bottom} ${Style.bottom}`}>
            {quantity === 0 ? (
                <div className={`${Styles.left} ${Style.left}`}>
                    <div className={Styles.details}>
                        <h2>{items.name}</h2>
                        <h4>{Currency(items.price)}</h4>
                    </div>
                    <button className={Styles.buy} onClick={() => increaseCartQuantity(items.id)} >
                        <span className={Styles.materialIcons}>
                            <img src={ShoppingCard} alt={items.name} />
                        </span>
                    </button>
                </div>
            ) : (
                <>
                    <div className={Styles.right}>
                        <div className={Styles.done}>
                            <span className={Styles.materialIcons}>Done</span>
                        </div>
                        <button className={Styles.remove} onClick={() => removeItem(items.id)} >
                            <span className={Styles.materialIcons}>&times;</span>
                        </button>
                    </div>
                    <div className={Styles.rightDetails}>
                        <h1>{items.name}</h1>
                        <p>Added to your cart</p>
                    </div>
                </>
            )}
            </div>
        </div>
    ) 
}

const Modal = ( props ) => {
    const { showModal, closeModal } = props;
    const { items } = useShoppingCart();

    return (
        showModal && (
            <>
                {ReactDOM.createPortal (
                    <>
                        <Backdrop close={closeModal} />
                        <div className={Style.overLay}>
                            {items.map(item => (
                                <Overlay key={item.id} item={item} />
                            ))}
                        </div>

                    </>,
                    document.getElementById('modal')
                )
                }
            </>
        )
    )
}

export default Modal;