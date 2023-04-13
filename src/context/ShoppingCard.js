import { createContext, useContext, useState, useEffect } from "react";

// Componenets
import Dropdown from '../Components/header/cartItem/Dropdown';
import Modal from "../Components/modal/Modal";
import Data from "../Components/data/data.json";
import Currency from "../Components/products/Currency";
// Styles
import Styles from "../Components/products/Card.module.css";
import imageCard from "../layOut/image/shopping-cart.png";

const ShoppingCard = createContext({});
const initialCart = localStorage.getItem("Product-cart") ? JSON.parse(localStorage.getItem("Product-cart")) : [];

const ShoppingCardProvider = ({ children }) => {

    const [ open, setOpen ] = useState(false)
    const [ items, setItems ] = useState(initialCart)
    const [ showModal, setShowModal ] = useState(false);


    const openModal = (id) => {
        setShowModal(true)
        // setItems((currentItem) => currentItem.filter((item) => item.id === id))
    }

    const closeModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        localStorage.setItem("Product-cart", JSON.stringify(items))
    }, [items])

    const openCart = (id) => {
        setOpen(true);
        setItems((currentItem) => {
            if (currentItem.filter( item => item.id === id) == null) {
                return [ ...currentItem, { id ,quantity : 1 } ];
            } else {
                return currentItem.map( item => {
                    if (item.id === id) {
                        return { ...item, quentity : item.quentity + 1};
                    } else {
                        return item;
                    }
                })
            }
        });
    }

    const closeCart = () => {
        setOpen(false);
    }

    const cartQuantity = items.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    const getItemQuantity = (id) => {
        return items.find((item) => item.id === id)?.quantity || 0;
    }

    const increaseCartQuantity = (id) => {
        setItems((currentItem) => {
            if (currentItem.find( item => item.id === id) == null) {
                return [ ...currentItem, { id ,quantity : 1 } ];
            } else {
                return currentItem.map( item => {
                    if (item.id === id) {
                        return { ...item, quentity : item.quentity + 1};
                    } else {
                        return item;
                    }
                })
            }
        });
    }

    const decreaseCartQuantity = (id) => {
        setItems((currentItem) => {
            if (currentItem.find((item) => item.id === id)?.quantity === null) {
                return currentItem.filter((item) => item.id !== id)
            } else {
                return currentItem.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity : item.quantity - 1}
                    } else {
                        return item;
                    }
                })
            }
        })
    };

    const removeItem = (id) => {
        setItems((currentItem) => currentItem.filter((item) => item.id !== id))
    }

    const handleFilter = (id) => {
        setItems((currentItem) => currentItem.filter((item) => item.id === id))

    }

    return (
        <ShoppingCard.Provider value={{
            items,
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeItem,
            openCart,
            closeCart,
            cartQuantity,
            openModal,
            closeModal,
            handleFilter
        }}>
            {children}
            <Dropdown open={open} />
            <Modal showModal={showModal} closeModal={closeModal} >
                {Data.map(item => {
                    return(
                        <div key={item.id} className={Styles.wrapper}>
                            <div className={Styles.top}>
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className={Styles.bottom}>
                            {cartQuantity === 0 ? (
                                <div className={Styles.left}>
                                    <div className={Styles.details}>
                                        <h2>{item.name}</h2>
                                        <h4>{Currency(item.price)}</h4>
                                    </div>
                                    <button className={Styles.buy} onClick={() => increaseCartQuantity(item.id)} >
                                        <span className={Styles.materialIcons}>
                                            <img src={imageCard} alt={item.name} />
                                        </span>
                                    </button>
                                </div>
                            ) : ( 
                                <>
                                    <div className={Styles.right}>
                                        <div className={Styles.done}>
                                            <span className={Styles.materialIcons}>Done</span>
                                        </div>
                                        <button className={Styles.remove} onClick={() => removeItem(item.id)} >
                                            <span className={Styles.materialIcons}>&times;</span>
                                        </button>
                                    </div>
                                    <div className={Styles.rightDetails}>
                                        <h1>{item.name}</h1>
                                        <p>Added to your cart</p>
                                    </div>
                                </>
                            )}
                            </div>
                        </div>
                )})}
            </Modal>
        </ShoppingCard.Provider>
    )
}

export default ShoppingCardProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCard)
}