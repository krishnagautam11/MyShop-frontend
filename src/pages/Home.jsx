import React from "react";
import { Navbar } from "./Navbar";
import { HeroSection } from "../components/HeroSection";
import { ProductList } from "../components/ProductList";
import { CategoryCard } from "../components/CategoryCard";
import { Footer } from "../components/Footer";


export const Home = () => {

   
   return <>
   
      <HeroSection />
      <ProductList/>
      <CategoryCard/>
      <Footer/>
   
     
   </>
}

