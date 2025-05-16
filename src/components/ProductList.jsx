import React from "react";
import { ProductCard } from "../components/ProductCard";
import Tshirt from "../assets/Tshirt.jpg";
import jeans from "../assets/jeans.jpg";
import Formals from "../assets/Formals.jpg";
import sweatshirt from "../assets/sweatshirt.jpg";
import kurta from "../assets/kurta.jpg";

const Products = [
      {
         id: 1,
         name: 'Stylish 2 T-shirts',
         price: 400,
         image: Tshirt
      },
      {
         id: 3,
         name: '4 Jeans Combo',
         price: 400,
         image: jeans
      },
      {
         id: 2,
         name: 'Black Royal Wedding Suit',
         price: 400,
         image: Formals
      },
      {
         id: 4,
         name: '5 Sweatshirts',
         price: 400,
         image: sweatshirt
      },
      {
         id: 5,
         name: 'Silver Male Kurta',
         price: 400,
         image: kurta
      },

   ]

   export const ProductList = () =>{
 return (
     <div className="p-8 bg-teal-800 ">
         <h2 className="font-bold text-white text-2xl mb-6">Trending Products</h2>
         <div className="grid grid-cols-5 gap-5">
            {Products.map((product) => (
               <ProductCard key={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
               />
            ))}

         </div>
      </div>
 )
   }
  

   