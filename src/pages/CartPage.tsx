
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';
import { getBestSellers } from '@/data/products';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const recommendedProducts = getBestSellers().slice(0, 4);
  
  const handleCheckout = () => {
    // In a real app, this would navigate to checkout
    toast({
      title: "Checkout Process",
      description: "This would proceed to the checkout page in a real e-commerce site.",
    });
    navigate('/checkout');
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="watch-container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="mb-8">Looks like you haven't added any watches to your cart yet.</p>
        <Button asChild>
          <Link to="/watches">Continue Shopping</Link>
        </Button>
        
        {/* Recommended Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">You Might Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
                  <img
                    src={`https://images.unsplash.com/${product.images[0]}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.brand}</p>
                <p className="font-bold text-lg">${product.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 1000 ? 0 : 19.99;
  const total = subtotal + shipping;
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="watch-container">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4">Product</th>
                    <th className="text-center p-4 hidden md:table-cell">Price</th>
                    <th className="text-center p-4">Quantity</th>
                    <th className="text-right p-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className="w-20 h-20 rounded-md overflow-hidden mr-4">
                            <img 
                              src={`https://images.unsplash.com/${item.image}`}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">
                              <Link to={`/product/${item.id}`} className="hover:text-gold">
                                {item.name}
                              </Link>
                            </h3>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 text-sm flex items-center mt-2"
                            >
                              <Trash2 className="h-3 w-3 mr-1" /> Remove
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center hidden md:table-cell">
                        ${item.price.toLocaleString()}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center">
                          <button 
                            className="p-1 rounded border"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="mx-3">{item.quantity}</span>
                          <button 
                            className="p-1 rounded border"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </td>
                      <td className="p-4 text-right font-semibold">
                        ${(item.price * item.quantity).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="p-4 flex justify-between border-t">
                <Button variant="outline" asChild>
                  <Link to="/watches">Continue Shopping</Link>
                </Button>
                <Button variant="ghost" className="text-red-500 hover:text-red-700" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
                <div className="border-t pt-3 mt-3 font-bold text-lg flex justify-between">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
              
              <Button className="w-full bg-gold hover:bg-amber-600" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
              
              <div className="mt-6 text-sm text-gray-600">
                <p className="mb-2">We accept:</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 border rounded">Visa</span>
                  <span className="px-2 py-1 border rounded">Mastercard</span>
                  <span className="px-2 py-1 border rounded">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
