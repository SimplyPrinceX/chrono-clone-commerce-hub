
import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { products, brands, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart } from 'lucide-react';

const ProductListingPage = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const brandFilter = searchParams.get('brand');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(brandFilter ? [brandFilter] : []);
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [sortOption, setSortOption] = useState('featured');
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category if provided
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    
    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Filter by price range
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered = filtered.filter(product => product.isNewArrival).concat(
          filtered.filter(product => !product.isNewArrival)
        );
        break;
      case 'bestselling':
        filtered = filtered.filter(product => product.isBestSeller).concat(
          filtered.filter(product => !product.isBestSeller)
        );
        break;
      default:
        // featured - no additional sorting
        break;
    }
    
    setFilteredProducts(filtered);
  }, [category, selectedBrands, priceRange, sortOption]);
  
  const toggleBrandFilter = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  
  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
  };

  const getCategoryName = () => {
    if (!category) return "All Watches";
    
    const categoryObj = categories.find(cat => cat.slug === category);
    return categoryObj ? categoryObj.name : "Watches";
  };

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
            <li className="font-medium">{getCategoryName()}</li>
          </ol>
        </nav>
        
        <h1 className="text-3xl font-bold mb-8">{getCategoryName()}</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="font-bold text-lg mb-4">Brands</h2>
              <div className="space-y-2">
                {brands.map(brand => (
                  <div key={brand.id} className="flex items-center">
                    <Checkbox
                      id={`brand-${brand.id}`}
                      checked={selectedBrands.includes(brand.name)}
                      onCheckedChange={() => toggleBrandFilter(brand.name)}
                    />
                    <label htmlFor={`brand-${brand.id}`} className="ml-2 text-sm font-medium">
                      {brand.name} ({brand.count})
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-bold text-lg mb-4">Price Range</h2>
              <Slider 
                defaultValue={[0, 30000]} 
                max={30000} 
                step={100}
                value={priceRange}
                onValueChange={handlePriceChange}
                className="mb-6"
              />
              <div className="flex justify-between">
                <span className="text-sm">${priceRange[0].toLocaleString()}</span>
                <span className="text-sm">${priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </aside>
          
          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">{filteredProducts.length} products</p>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="text-sm mr-2">Sort by:</label>
                <select 
                  id="sort" 
                  className="text-sm border rounded-md py-1 px-2"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="bestselling">Best Selling</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold mb-3">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters to find products.</p>
                <Button 
                  onClick={() => {
                    setSelectedBrands([]);
                    setPriceRange([0, 30000]);
                    setSortOption('featured');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
                    <div className="aspect-square overflow-hidden relative">
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
                      {!product.inStock && (
                        <div className="absolute top-3 right-3 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                          OUT OF STOCK
                        </div>
                      )}
                      {product.originalPrice && (
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
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
      </div>
    </div>
  );
};

export default ProductListingPage;
