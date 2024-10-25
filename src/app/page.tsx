import React from 'react';
import Navbar from "@/app/component/Navbar";
import Categories from "@/app/component/Categories";
import Products from "@/app/component/Products";
import Footer from "@/app/component/Footer";

const HomePage = () => {
  return (
    <>
      
      <main>
        <Navbar/>
        <Categories />
        <Products />
      </main>
      <Footer/>
    </>
  );
};

export default HomePage;
