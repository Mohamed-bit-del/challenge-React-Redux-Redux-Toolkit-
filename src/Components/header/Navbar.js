import React from 'react';

// Component
import { useShoppingCart } from '../../context/ShoppingCard';

// CSS Files
import Styles from './Navbar.module.css';

// Image
import Logo from '../../layOut/image/product.svg';
import Shopping from '../../layOut/image/shopping.png';

const Navbar = () => {

    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <nav className={Styles.navbar}>
            <div className='container'>
                <div className={Styles.ParentNav}>
                    <div className={`${Styles.navbarLink} ${Styles.parentImg}`}>
                        <img src={Logo} alt='Logo' /> 
                    </div>

                    <ul className={Styles.navbarList}>
                        <li className={Styles.navbarLink}>Home</li>
                        <li className={Styles.navbarLink}>About</li>
                        <li className={Styles.navbarLink}>Store</li>
                    </ul>
                        <div className={Styles.shipping} onClick={openCart}>
                            { cartQuantity > 0 && ( <span className={Styles.numCart}>{ cartQuantity }</span> ) } 
                            <img src={Shopping} alt='Shopping Card' />
                        </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;