import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="container mx-auto p-4 flex flex-col md:flex-row">
        <FilterSidebar />
        <div className="flex-1 ml-0 md:ml-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">New Releases (2025)</h1>
            <div>
              <button className="text-blue-500 mr-4">Hide Filters</button>
              <select className="border p-1 rounded">
                <option>Sort By: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center text-gray-500">Loading products...</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;