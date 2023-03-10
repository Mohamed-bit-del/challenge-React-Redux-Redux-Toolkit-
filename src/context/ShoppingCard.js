import { createContext, useContext, useState, useEffect } from "react";
import Dropdown from '../Components/header/cartItem/Dropdown'
import Modal from "../Components/modal/Modal";

const ShoppingCard = createContext({});
const initialCart = localStorage.getItem("Product-cart") ? JSON.parse(localStorage.getItem("Product-cart")) : [];

const ShoppingCardProvider = ({ children }) => {

    const [ open, setOpen ] = useState(false)
    const [ items, setItems ] = useState(initialCart)
    const [ showModal, setShowModal ] = useState(false);

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        localStorage.setItem("Product-cart", JSON.stringify(items))
    }, [items])

    const openCart = () => {
        setOpen(true);
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
            closeModal
        }}>
            {children}
            <Dropdown open={open} />
            <Modal showModal={showModal} closeModal={closeModal} />
        </ShoppingCard.Provider>
    )
}

export default ShoppingCardProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCard)
}