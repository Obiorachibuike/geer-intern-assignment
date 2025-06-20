'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description?: string;
}

export default function ProductDetail() {
  const { id } = useParams() as { id: string };
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) throw new Error('Product fetch failed');
        const data = await res.json();
        setProduct(data);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // animation delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 p-6 font-sans">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
          <p className="text-lg text-gray-600">Loading product details...</p>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 p-6 font-sans">
        <p className="text-lg text-red-600 font-semibold">❌ Product not found</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6 sm:p-10 md:p-12 font-sans">
      <div
        className={`max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-full aspect-[3/2] overflow-hidden group">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://placehold.co/800x400?text=Image+Not+Available';
            }}
          />
        </div>

        <div className="p-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-gray-700 mb-6">${product.price}</p>
          <p className="text-gray-600 leading-relaxed text-base">
            {product.description || 'No description provided for this product.'}
          </p>
        </div>
      </div>

      <Link href="/products" className="block text-center mt-8">
        <span className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-base sm:text-lg">
          ← Back to Products
        </span>
      </Link>

      <footer className="mt-20 text-center text-gray-600 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</p>
      </footer>
    </main>
  );
}