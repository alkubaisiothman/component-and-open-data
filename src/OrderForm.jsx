import React, { useState } from 'react';
import OrderInfo from './OrderInfo';

const OrderForm = () => {
    const productsList = [
        { productName: 'Intel Core i9', productPrice: 550 },
        { productName: 'AMD Ryzen 9', productPrice: 500 },
        { productName: 'Apple M1', productPrice: 700 }
    ];

    const [selectedProductIndex, setSelectedProductIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const selectedProduct = productsList[selectedProductIndex];

    return (
        <>
            <h3>Select product</h3>
            <label>Product: </label>
            <select 
                value={selectedProductIndex} 
                onChange={(e) => setSelectedProductIndex(Number(e.target.value))}
            >
                {productsList.map((product, index) => (
                    <option key={product.productName} value={index}>
                        {product.productName} ({product.productPrice}€)
                    </option>
                ))}
            </select><br/>

            <label>Quantity: </label>
            <button onClick={() => setQuantity(Math.max(quantity - 1, 0))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>

            <OrderInfo 
                productName={selectedProduct.productName}
                productPrice={selectedProduct.productPrice}
                quantity={quantity}
            />
        </>
    );
};

export default OrderForm;
