
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const productId = parseInt(id || '0', 10);
  const product = getProductById(productId);
  const relatedProducts = getRelatedProducts(productId);
  
  if (!product) {
    return (
      <div className="watch-container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">Sorry, the product you are looking for does not exist.</p>
        <Button asChild>
          <Link to="/watches">Continue Shopping</Link>
        </Button>
      </div>
    );
  }
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} (${quantity}) has been added to your cart.`,
    });
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
            <li className="text-gray-500 hover:text-gray-700">
              <Link to="/watches">Watches</Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="font-medium">{product.name}</li>
          </ol>
        </nav>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Images */}
            <div>
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img 
                  src={`https://images.unsplash.com/${product.images[selectedImage]}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button 
                    key={index} 
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      index === selectedImage ? 'border-gold' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={`https://images.unsplash.com/${image}`}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gold font-semibold text-lg mb-6">{product.brand}</p>
              
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold">${product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-lg">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {product.inStock ? (
                  <p className="text-green-600 mt-2">In Stock</p>
                ) : (
                  <p className="text-red-600 mt-2">Out of Stock</p>
                )}
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {product.inStock && (
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <span className="mr-4">Quantity:</span>
                    <div className="flex border rounded-md">
                      <button 
                        className="px-3 py-1" 
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-6 py-1 border-x flex items-center justify-center min-w-[3rem]">
                        {quantity}
                      </span>
                      <button 
                        className="px-3 py-1" 
                        onClick={increaseQuantity}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      className="flex-1 bg-navy hover:bg-blue-900"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </Button>
                    <Button 
                      className="flex-1 bg-gold hover:bg-amber-600"
                      onClick={() => {
                        handleAddToCart();
                        navigate('/cart');
                      }}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Product Features */}
              <div className="border-t border-gray-200 pt-6 mt-8">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Specifications */}
        <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex">
                <span className="font-semibold w-1/3">Case</span>
                <span className="text-gray-700">{product.specifications.case}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-1/3">Movement</span>
                <span className="text-gray-700">{product.specifications.movement}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-1/3">Dial</span>
                <span className="text-gray-700">{product.specifications.dial}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex">
                <span className="font-semibold w-1/3">Bracelet</span>
                <span className="text-gray-700">{product.specifications.bracelet}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-1/3">Water Resistance</span>
                <span className="text-gray-700">{product.specifications.water_resistance}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">You Might Also Like</h2>
              <Link to="/watches" className="text-gold hover:text-amber-600 flex items-center">
                View All <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-sm overflow-hidden group">
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
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
