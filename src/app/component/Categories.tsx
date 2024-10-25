import React from 'react';

const Categories = () => {
  return (
    <section className="p-5 bg-red-600 text-center">
      <h2 className="text-white text-2xl">Shop by Categories</h2>
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        <div className="py-2 px-5 bg-gray-200 rounded-md cursor-pointer transition duration-300 hover:bg-green-200">Electronics</div>
        <div className="py-2 px-5 bg-gray-200 rounded-md cursor-pointer transition duration-300 hover:bg-green-200">Clothing</div>
        <div className="py-2 px-5 bg-gray-200 rounded-md cursor-pointer transition duration-300 hover:bg-green-200">Home & Kitchen</div>
        <div className="py-2 px-5 bg-gray-200 rounded-md cursor-pointer transition duration-300 hover:bg-green-200">Beauty & Personal Care</div>
      </div>
    </section>
  );
};

export default Categories;
