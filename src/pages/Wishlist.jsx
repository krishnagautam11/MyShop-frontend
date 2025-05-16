import React from 'react';
import { useWishlist } from "./WishlistContext";
import { ProductCard } from '../components/ProductCard';
import { Footer } from "../components/Footer";

export const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-8">
        <h2 className="text-2xl font-bold mb-6">Your Wishlist ❤️</h2>
        {wishlist.length === 0 ? (
          <p className="text-gray-600">No items in your wishlist yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
