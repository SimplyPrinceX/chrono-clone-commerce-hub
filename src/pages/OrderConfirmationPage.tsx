
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  
  // Generate a random order number
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  
  // Get some random products for the "You might also like" section
  const recommendedProducts = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="watch-container">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-lg mb-2">Thank you for your purchase.</p>
          <p className="text-gray-600 mb-6">Your order #{orderNumber} has been placed successfully.</p>
          
          <p className="mb-8">
            We've sent a confirmation email with your order details.<br />
            You will receive another email when your order ships.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-white"
              onClick={() => navigate('/account/orders')}
            >
              Track Order
            </Button>
            <Button
              className="bg-navy hover:bg-blue-900"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-sm overflow-hidden group cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${product.images[0]}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.brand}</p>
                  <p className="font-bold text-lg">${product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
