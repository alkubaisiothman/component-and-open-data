import React, { useEffect, useState } from 'react';
import DrinkDetails from './DrinkDetails'; // Tuodaan uusi komponentti
import IngredientList from './IngredientList'; // Tuodaan uusi komponentti

const OpenData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.drinks[0]); // Oletetaan, että saadaan yksi drinkki
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <DrinkDetails data={data} />
            <IngredientList data={data} />
        </div>
    );
};

export default OpenData;
