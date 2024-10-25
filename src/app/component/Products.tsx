import React from 'react';
import Image from 'next/image';

const Products = () => {
  return (
    <section className="p-5 text-center">
      <h2 className="text-2xl">Featured Products</h2>
      <div className="flex justify-center flex-wrap gap-5 mt-4">
        <div className="bg-white border-2 border-red-500 rounded-lg p-4 w-[150px] text-center transition-transform duration-300 hover:scale-105">
          <Image 
            src="https://m.media-amazon.com/images/I/61oAh3XrX+L._AC_SY300_SX300_.jpg" 
            alt="Laptop" 
            className="rounded-md" 
            width={150} 
            height={150} 
          />
          <p className="mt-2">HP Notebook Laptop</p>
        </div>
        <div className="bg-white border-2 border-red-500 rounded-lg p-4 w-[150px] text-center transition-transform duration-300 hover:scale-105">
          <Image 
            src="https://m.media-amazon.com/images/I/61MtMX72I9L._AC_SX425_.jpg" 
            alt="Long Sleeve T-shirt" 
            className="rounded-md" 
            width={150} 
            height={150} 
          />
          <p className="mt-2">Long Sleeve Unisex T-Shirt</p>
        </div>
        <div className="bg-white border-2 border-red-500 rounded-lg p-4 w-[150px] text-center transition-transform duration-300 hover:scale-105">
          <Image 
            src="https://m.media-amazon.com/images/I/81ky0potEEL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
            alt="Sandwich Maker" 
            className="rounded-md" 
            width={150} 
            height={150} 
          />
          <p className="mt-2">Breakfast Sandwich Maker</p>
        </div>
        <div className="bg-white border-2 border-red-500 rounded-lg p-4 w-[150px] text-center transition-transform duration-300 hover:scale-105">
          <Image 
            src="https://m.media-amazon.com/images/I/41znPIiXnjL._SY445_SX342_QL70_FMwebp_.jpg" 
            alt="Night Cream" 
            className="rounded-md" 
            width={150} 
            height={150} 
          />
          <p className="mt-2">Anti-Aging Firming Face Cream</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
