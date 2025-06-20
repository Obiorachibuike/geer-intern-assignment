'use client';

import { use, useEffect, useState } from 'react';
import { Product } from '../../data/products';
import useInView from '../../hooks/useInView';
import Link from 'next/link';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetail({ params }: Props) {
  // ✅ Unwrap the promise
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const { ref, isVisible } = useInView();

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data: Product[]) => {
        const p = data.find((d) => d.id === id);
        setProduct(p ?? null);
      });
  }, [id]);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 p-6 font-sans">
        <p className="text-lg text-gray-600">Loading product details...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6 sm:p-10 md:p-12 font-sans">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/800x400?text=Image+Not+Available';
          }}
        />

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

      {/* Back to Products Button */}
      <Link href="/products" className="block text-center mt-8">
        <span
          className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-base sm:text-lg"
        >
          ← Back to Products
        </span>
      </Link>

      <footer className="mt-20 text-center text-gray-600 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</p>
      </footer>
    </main>
  );
}
