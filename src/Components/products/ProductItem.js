import React from 'react';

// Component 
import DataProduct from '../data/data.json';
import Product from './Product';

// Css
import Styles from './Card.module.css';

const ProductItem = () => {
    return (
        <section className='container'>
            <div className={Styles.cards}>
                {DataProduct.map((item) => (
                    <div key={item.id}>
                        <Product {...item} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductItem;
