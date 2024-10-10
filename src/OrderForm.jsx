import React from 'react';
import { useState } from "react";
import OrderInfo from './OrderInfo';

const OrderForm = () => {
    const productsList = [
        { productName: 'Intel Core i9', productPrice: 550 },
        { productName: 'AMD Ryzen 9', productPrice: 500 },
        { productName: 'Apple M1', productPrice: 700 }
    ];  
    
    const [selectedProduct, setSelectedProduct] = useState(productsList[0]);
    const [quantity, setQuantity] = useState(0);

    return (
        <>
            <h3>Select product</h3>
            <label>Product: </label>
            <select onChange={(e) => {
                const product = productsList.find(p => p.productName === e.target.value);
                setSelectedProduct(product);
            }}>
                {productsList.map(product => (
                    <option key={product.productName} value={product.productName}>
                        {product.productName} ({product.productPrice}€) {/* Shows on UI */}
                    </option>
                ))}
            </select><br></br>
            <label>Quantity: </label>
            <button onClick={() => setQuantity(Math.max(quantity - 1, 0))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <OrderInfo productName={selectedProduct.productName}
            productPrice={selectedProduct.productPrice}
            quantity={quantity}></OrderInfo>
        </>
    );
}

export default OrderForm;
