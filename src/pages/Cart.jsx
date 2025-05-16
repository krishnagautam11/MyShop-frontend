import React from "react";
import { useCart } from "./CartContext";
import { ProductCard } from "../components/ProductCard";
import { Footer } from "../components/Footer";

export const Cart = () => {
  const { cart, removeCart } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-8">
        <h2 className="text-2xl font-bold mb-6">Your Cart 🛒</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty. Add some products!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.map((product, index) => (
              <div key={index} className="relative">
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  showAddToCart={false} // hides "Add to Cart" button
                />
                <div className="text-center mt-2">
                  <button
                    onClick={() => removeCart(product.name)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
