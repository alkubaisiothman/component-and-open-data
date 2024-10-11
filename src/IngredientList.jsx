import React from 'react';

const IngredientList = ({ data }) => {
    return (
        <div>
            <h3>Ingredients:</h3>
            <ul>
                {Object.keys(data)
                    .filter(key => key.startsWith('strIngredient') && data[key]) 
                    .map((key, index) => (
                        <li key={index}>{data[key]}</li>
                    ))}
            </ul>
        </div>
    );
};

export default IngredientList;
