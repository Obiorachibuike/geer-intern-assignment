'use client';
import Link from 'next/link';

export default function Home() {
  return (
    // Main container for the entire page.
    // Utilizes a subtle gradient background for a modern feel.
    // 'min-h-screen' ensures the page takes up at least the full height of the viewport.
    // 'flex flex-col' for vertical stacking of elements, 'items-center justify-center' for central alignment.
    // 'p-4 sm:p-6 md:p-8' provides responsive padding around the content.
    // 'font-sans' sets a default sans-serif font, assuming 'Inter' is configured globally.
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 text-gray-900 p-4 sm:p-6 md:p-8 font-sans">

      {/* Hero section: Central content area with a refined look. */}
      {/* 'max-w-5xl' sets a comfortable maximum width for readability. */}
      {/* 'bg-white/80' creates a semi-transparent white background, 'backdrop-blur-sm' adds a subtle blur effect. */}
      {/* 'rounded-3xl' for significantly rounded corners, 'shadow-2xl' for a strong, soft shadow. */}
      {/* 'p-8 sm:p-12 md:p-16' provides generous responsive padding within the card. */}
      {/* 'border border-indigo-200' adds a light border for definition. */}
      <div className="max-w-5xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 text-center border border-indigo-200">

        {/* Main heading of the welcome page. */}
        {/* 'text-4xl sm:text-5xl lg:text-7xl' for highly responsive font sizing. */}
        {/* 'font-extrabold' for strong visual impact, 'leading-tight' for compact line height. */}
        {/* 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' creates a vibrant text gradient. */}
        {/* 'mb-6' provides spacing below the heading. */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 drop-shadow-sm">
          Welcome to <span className="block lg:inline">ElectroShop</span>
        </h1>

        {/* Subtitle/description for the e-commerce platform. */}
        {/* 'text-lg sm:text-xl lg:text-2xl' for responsive text sizing. */}
        {/* 'text-gray-700' for good contrast and readability. */}
        {/* 'mb-10' provides ample spacing below the description. */}
        {/* 'max-w-3xl mx-auto' centers the paragraph and limits its width for better readability. */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Your ultimate destination for cutting-edge electronics. Discover our curated collection
          of devices, from powerful laptops to innovative smart gadgets, designed to elevate your everyday.
        </p>

        {/* Container for navigation buttons. */}
        {/* 'flex flex-col sm:flex-row' ensures buttons stack on small screens and go side-by-side on larger ones. */}
        {/* 'gap-6' provides generous spacing between buttons. */}
        {/* 'justify-center' centers the buttons horizontally. */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">

          {/* Button to navigate to the product listing page. */}
          {/* 'bg-indigo-600 text-white' for a primary, inviting color scheme. */}
          {/* 'py-4 px-10' for large, easy-to-tap buttons, 'rounded-full' for a modern pill shape. */}
          {/* 'shadow-xl' for a pronounced shadow, 'hover:bg-indigo-700 hover:shadow-2xl' for strong hover effects. */}
          {/* 'transition-all duration-300' for smooth animations. */}
          {/* 'transform hover:-translate-y-1' for a subtle lift on hover, 'focus:ring' for accessibility. */}
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

          {/* Button to navigate to the add product page. */}
          {/* 'border-2 border-indigo-600 text-indigo-600' for a secondary, outline style. */}
          {/* Same padding, rounded-full, and transition effects for consistency. */}
          {/* 'hover:bg-indigo-50 hover:text-indigo-700' for a distinct hover effect. */}
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

      {/* Decorative image section below the hero. */}
      {/* 'mt-16' for significant top margin. */}
      {/* 'max-w-6xl w-full' ensures it spans wider and is fully responsive. */}
      {/* 'rounded-3xl' for consistency with the card, 'shadow-2xl' for depth. */}
      {/* 'border border-gray-200' for a subtle outline. */}
      <div className="mt-16 max-w-6xl w-full">
        <img
          src="https://images.unsplash.com/photo-1510511459019-5da7094ed48f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern electronics showcase"
          className="rounded-3xl shadow-2xl max-w-full h-auto object-cover border border-gray-200"
          // Fallback for image loading errors, uses a more neutral placeholder.
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/1200x600/cccccc/333333?text=Image+Not+Available`;
          }}
        />
      </div>

      {/* Simple footer for copyright information. */}
      {/* 'mt-20' for ample top margin, 'text-gray-600' for a softer text color. */}
      {/* 'text-sm' for smaller text, 'font-light' for lighter weight. */}
      <footer className="mt-20 text-gray-600 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</p>
      </footer>
    </main>
  );
}
