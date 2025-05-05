
import React from 'react';
import { Link } from 'react-router-dom';
import { brands } from '@/data/products';

const BrandsPage = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="watch-container">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex text-sm">
            <li className="text-gray-500 hover:text-gray-700">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="font-medium">Brands</li>
          </ol>
        </nav>
        
        <h1 className="text-3xl font-bold mb-8">Our Watch Brands</h1>
        
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Discover an exceptional collection of timepieces from the world's most prestigious watchmakers. 
          Each brand represents a unique heritage of craftsmanship and design excellence.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/watches?brand=${brand.name}`}
              className="group bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-2">{brand.name}</h2>
                <p className="text-gray-600 mb-4">{brand.count} watches</p>
                <span className="text-gold font-medium group-hover:underline">Browse Collection</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
