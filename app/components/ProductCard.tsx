'use client';
import Link from 'next/link';
import { Product } from '../types/Product';
import useInView from '../hooks/useInView';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`cursor-pointer bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-2xl border-b border-gray-100"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `https://placehold.co/400x300/e0e0e0/555555?text=Image+Unavailable`;
        }}
      />
      <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 truncate">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-3 flex-grow">
            {product.description}
          </p>
        )}

        <p className="text-gray-700 text-base font-medium mb-4">
          Category: <span className="text-purple-600">{product.category}</span>
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-3xl font-extrabold text-indigo-700">
            ${product.price.toFixed(2)}
          </span>
          <Link href={`/products/${product.id}`}>
            <span className="text-sm text-indigo-500 font-medium hover:underline">
              View →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
