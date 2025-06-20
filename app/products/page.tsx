'use client';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  description?: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const uniqueCategories = ['All', ...new Set(products.map((p) => p.category))];

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 font-sans text-gray-900 p-4 md:p-8">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-md">
        🛍️ Discover Our Collection
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 mb-10 bg-white p-7 rounded-2xl shadow-xl border border-gray-100">
        <input
          type="text"
          placeholder="Search products by name..."
          className="w-full md:w-1/2 border-2 border-gray-200 rounded-xl px-5 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-400 transition-all duration-300 shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/3 border-2 border-gray-200 rounded-xl px-5 py-3 text-lg bg-white appearance-none cursor-pointer shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-400 transition-all duration-300"
        >
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'All' ? 'All Categories' : cat}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center text-2xl text-indigo-600 mt-20 flex flex-col items-center">
          <svg className="animate-spin h-10 w-10 text-indigo-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          Fetching amazing products...
        </div>
      ) : error ? (
        <p className="text-center text-red-600 text-xl mt-20 bg-red-100 p-4 rounded-lg shadow-md max-w-lg mx-auto">
          {error}
        </p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-600 text-xl mt-20 bg-white p-4 rounded-lg shadow-md max-w-lg mx-auto">
          No products found matching your criteria.
        </p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-5">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
