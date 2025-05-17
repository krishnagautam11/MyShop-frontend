import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';

const getImageUrl = (url) => {
  if (!url) return "";
  return url.replace('http://localhost:5000', import.meta.env.VITE_API_URL);
};

export const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products?category=${categoryName}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [categoryName]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 capitalize">{categoryName} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p>No products found for this category.</p>
        ) : (
          products.map((product, index) => (
            <ProductCard
              key={index}
              image={getImageUrl(product.image)}  
              name={product.name}
              price={product.price}
            />
          ))
        )}
      </div>
    </div>
  );
};
