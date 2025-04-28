
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, brands, getBestSellers, getNewArrivals } from '@/data/products';

const HomePage = () => {
  const bestSellers = getBestSellers();
  const newArrivals = getNewArrivals();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0')] bg-cover bg-center opacity-40"></div>
        <div className="watch-container relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Exceptional Timepieces</h1>
            <p className="text-lg mb-8">
              Explore our curated collection of premium watches from the world's most prestigious brands.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/watches/men" className="group relative h-80 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3" 
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
                src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56" 
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
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49" 
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
      </section>

      {/* Featured Brands */}
      <section className="py-16 bg-gray-50">
        <div className="watch-container">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.slice(0, 4).map((brand) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.name.toLowerCase().replace(' ', '-')}`}
                className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                <div className="h-24 w-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={`https://images.unsplash.com/${brand.image}`}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">{brand.name}</h3>
                <p className="text-sm text-gray-600">{brand.count} models</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-gold text-navy hover:bg-gold hover:text-white">
              <Link to="/brands">View All Brands</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="watch-container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link to="/new-arrivals" className="text-gold hover:text-amber-600 flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4 relative">
                  <img
                    src={`https://images.unsplash.com/${product.images[0]}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-gold text-white text-xs font-semibold px-2 py-1 rounded">NEW</div>
                </div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.brand}</p>
                <p className="font-bold text-lg">${product.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Feature */}
      <section className="py-16 bg-navy text-white">
        <div className="watch-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-4">The Finest Craftsmanship</h2>
              <p className="mb-6 text-gray-300">
                Each timepiece in our collection represents the pinnacle of watchmaking art.
                From the precision of Swiss movement to the elegance of hand-polished cases,
                we curate only the finest watches that stand the test of time.
              </p>
              <Button asChild className="bg-gold hover:bg-amber-600 text-white">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1539874754764-5a96559165b0"
                  alt="Watch craftsmanship"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
