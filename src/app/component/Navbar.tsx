import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="flex justify-between items-center px-6">
        <div className="text-2xl text-gray-200">TrendShop</div>
        <ul className="flex gap-5">
          <li><Link href={"/"} className="text-white underline decoration-red-500 hover:text-red-500">Home</Link></li>
          <li><Link href={"/categories"} className="text-white underline decoration-red-500 hover:text-red-500">Categories</Link></li>
          <li><Link href={"/products" }className="text-white underline decoration-red-500 hover:text-red-500">Products</Link></li>
          <li><Link href={"/contact-us"} className="text-white underline decoration-red-500 hover:text-red-500">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
