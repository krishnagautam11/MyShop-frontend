import React from "react";

export const Category = ({name, image}) =>{

    return(
        <>
        <div className="flex flex-col justify-center items-center w-full h-full hover:scale-105 transition-all duration-500">
            <img src={image} alt="" className="mt-4 w-80 h-40 object-cover overflow-hidden rounded-md mb-2" />
            <p className="text-xl font-bold">{name}</p>
        </div>
        </>
    )

} 