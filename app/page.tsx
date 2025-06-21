'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 text-gray-900 p-4 sm:p-6 md:p-8 font-sans">

      <div className="max-w-5xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 text-center border border-indigo-200">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 drop-shadow-sm">
          Welcome to <span className="block lg:inline">ElectroShop</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Your ultimate destination for cutting-edge electronics. Discover our curated collection
          of devices, from powerful laptops to innovative smart gadgets, designed to elevate your everyday.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/products"
            className="
              bg-indigo-600 text-white font-semibold py-4 px-10 rounded-full shadow-xl
              hover:bg-indigo-700 hover:shadow-2xl transition-all duration-300 ease-in-out
              transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300
              text-lg sm:text-xl whitespace-nowrap
            "
          >
            Browse All Products &rarr;
          </Link>

          <Link
            href="/add-product"
            className="
              border-2 border-indigo-600 text-indigo-600 font-semibold py-4 px-10 rounded-full
              hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 ease-in-out
              transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-200
              text-lg sm:text-xl whitespace-nowrap
            "
          >
            Add New Product +
          </Link>
        </div>
      </div>

      <div className="mt-16 max-w-6xl w-full">
        <img
          src="https://images.unsplash.com/photo-1510511459019-5da7094ed48f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern electronics showcase"
          className="rounded-3xl shadow-2xl max-w-full h-auto object-cover border border-gray-200"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = `https://placehold.co/1200x600/cccccc/333333?text=Image+Not+Available`;
          }}
        />
      </div>

      <footer className="mt-20 text-gray-600 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</p>
      </footer>
    </main>
  );
}