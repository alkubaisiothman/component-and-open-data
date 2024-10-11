import React from 'react';

const IngredientList = ({ data }) => {
    if (!data) return null; // Tarkistetaan, että data on olemassa

    const ingredients = Object.keys(data)
        .filter(key => key.startsWith('strIngredient') && data[key]) // Suodatetaan vain ainesosat

    return (
        <div id="ingredientList">
            {ingredients.map((ingredient, index) => (
                <div key={index}>{data[ingredient]}</div>
            ))}
        </div>
    );
};

export default IngredientList;
