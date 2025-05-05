
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getNewArrivals } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';

const NewArrivalsPage = () => {
  const newArrivals = getNewArrivals();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    if (product.inStock) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
      });
      
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

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
            <li className="font-medium">New Arrivals</li>
          </ol>
        </nav>
        
        <h1 className="text-3xl font-bold mb-8">New Arrivals</h1>
        
        {newArrivals.length === 0 ? (
          <div className="bg-white p-12 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-3">No new arrivals found</h3>
            <p className="text-gray-600 mb-6">Check back soon for our latest collection.</p>
            <Button asChild>
              <Link to="/watches">Browse All Watches</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-gold text-white text-xs font-semibold px-2 py-1 rounded">
                    NEW
                  </div>
                  {!product.inStock && (
                    <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                      OUT OF STOCK
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      SALE
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.brand}</p>
                  <div className="flex items-center space-x-2">
                    <p className="font-bold text-lg">${product.price.toLocaleString()}</p>
                    {product.originalPrice && (
                      <p className="text-gray-500 line-through text-sm">
                        ${product.originalPrice.toLocaleString()}
                      </p>
                    )}
                  </div>
                  <Button 
                    className="w-full mt-4 bg-navy hover:bg-blue-900 flex items-center justify-center gap-2"
                    disabled={!product.inStock}
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewArrivalsPage;
