
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, brands, getBestSellers, getNewArrivals } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';

const HomePage = () => {
  const bestSellers = getBestSellers();
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
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg')] bg-cover bg-center opacity-40"></div>
        <div className="watch-container relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Exceptional Timepieces</h1>
            <p className="text-lg mb-8">
              Explore our curated collection of premium watches from Chronova - the world's most prestigious watch brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-gold hover:bg-amber-600 text-white px-6 py-3 rounded-md">
                <Link to="/watches">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-3 rounded-md">
                <Link to="/brands">Explore Brands</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="watch-container">
          <h2 className="text-3xl font-bold mb-10 text-center">Shop By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/watches/men" className="group relative h-80 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg" 
                alt="Men's Watches" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Men's Collection</h3>
                  <p className="text-white/80">Sophisticated timepieces for the modern gentleman</p>
                </div>
              </div>
            </Link>
            <Link to="/watches/women" className="group relative h-80 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg" 
                alt="Women's Watches" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Women's Collection</h3>
                  <p className="text-white/80">Elegant watches combining style and precision</p>
                </div>
              </div>
            </Link>
            <Link to="/watches/luxury" className="group relative h-80 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg" 
                alt="Luxury Watches" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Luxury Collection</h3>
                  <p className="text-white/80">Exclusive timepieces for the distinguished collector</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16">
        <div className="watch-container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Best Sellers</h2>
            <Link to="/watches" className="text-gold hover:text-amber-600 flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4 relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNewArrival && (
                    <div className="absolute top-3 right-3 bg-gold text-white text-xs font-semibold px-2 py-1 rounded">
                      NEW
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.brand}</p>
                <p className="font-bold text-lg mb-2">${product.price.toLocaleString()}</p>
                <Button 
                  className="w-full bg-navy hover:bg-blue-900 flex items-center justify-center gap-2"
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="watch-container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link to="/new-arrivals" className="text-gold hover:text-amber-600 flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.slice(0, 4).map((product) => (
              <div key={product.id} className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4 relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-gold text-white text-xs font-semibold px-2 py-1 rounded">NEW</div>
                </div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.brand}</p>
                <p className="font-bold text-lg mb-2">${product.price.toLocaleString()}</p>
                <Button 
                  className="w-full bg-navy hover:bg-blue-900 flex items-center justify-center gap-2"
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
