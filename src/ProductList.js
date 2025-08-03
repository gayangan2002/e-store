import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://localhost:3001/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = async (product) => {
        try {
            await axios.post('http://localhost:3001/cart', product);
            alert(`${product.name} added to cart!`)
        } catch(error) {
            console.error('Error adding to cart:', error);
        }
    };

    if(loading) return <div>Loading....</div>;

    return(
        <div className="product-list">
            <h1>Our Products</h1>
            <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;