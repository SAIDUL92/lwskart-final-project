'use client'
import { useState } from "react";

const QuantityUpdate = ({ productId, userId, dictionary }) => {
    const [quantity, setQuantity] = useState(4);

    const updateQuantity = async (newQuantity) => {
        try {
            const response = await fetch('/api/cart', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, productId, quantity: newQuantity }),
            });

            console.log(response, "response")

            if (!response.ok) {
                throw new Error('Failed to update quantity');
            }

            const data = await response.json();
            console.log('Quantity updated', data);
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateQuantity(newQuantity);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateQuantity(newQuantity);
        }
    };

    return (
        <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1"> {dictionary.Quantity}</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                <button
                    className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                    onClick={handleDecrement}
                >
                    -
                </button>
                <span className="h-8 w-8 text-base flex items-center justify-center">
                    {quantity}
                </span>
                <button
                    className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                    onClick={handleIncrement}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default QuantityUpdate;


