import React from "react";
import { Link } from "react-router-dom";
import { Category } from "./Category";
import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import extra from "../assets/extra.jpg";


const categories = [
    {
        id: 1,
        name: 'Men',
        image: men
    },
    {
        id: 2,
        name: 'Women',
        image: women
    },
    {
        id: 3,
        name: 'Accessories',
        image: extra
    },
]



export const CategoryCard = () => {

    return (
        <div className="p-8 bg-stone-300 w-full h-full ">
            <div className="grid grid-cols-3">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        to={`/category/${category.name.toLowerCase()}`}
                        className="hover:scale-105 transition-all"
                    >
                        <Category image={category.image} name={category.name} />
                    </Link>
                ))}
            </div>
        </div>
    )


}