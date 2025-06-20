'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    imageUrl: '',
    category: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [useUpload, setUseUpload] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      const localUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, imageUrl: localUrl }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

    const payload = {
      ...formData,
      price: parseFloat(formData.price),
    };

    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSuccess('✅ Product added successfully!');
      setFormData({
        name: '',
        price: '',
        imageUrl: '',
        category: '',
      });
      setImageFile(null);
      setTimeout(() => router.push('/products'), 1500);
    } else {
      alert('❌ Error adding product.');
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-6 font-sans">
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          ➕ Add New Product
        </h1>

        {success && (
          <p className="text-green-600 text-center mb-6 font-semibold">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Product Name</label>
            <input
              name="name"
              type="text"
              placeholder="e.g. iPhone 14 Pro"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              value={formData.name || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Price (USD)</label>
            <input
              name="price"
              type="number"
              placeholder="e.g. 999"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              value={formData.price || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Product Image</label>
            <div className="flex items-center gap-4 mb-2">
              <button
                type="button"
                onClick={() => setUseUpload(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  !useUpload
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-indigo-600 border border-indigo-500'
                } transition`}
              >
                Use Image URL
              </button>
              <button
                type="button"
                onClick={() => setUseUpload(true)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  useUpload
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-indigo-600 border border-indigo-500'
                } transition`}
              >
                Upload Image
              </button>
            </div>

            {useUpload ? (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                required
              />
            ) : (
              <input
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                value={formData.imageUrl || ''}
                onChange={handleChange}
                required
              />
            )}
          </div>

          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg border border-gray-300"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/400x200?text=Invalid+Image';
              }}
            />
          )}

          <div>
            <label className="block text-gray-700 mb-1">Category</label>
            <select
              name="category"
              value={formData.category || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select Category</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Laptop">Laptop</option>
              <option value="Audio">Audio</option>
              <option value="Wearable">Wearable</option>
              <option value="Tablet">Tablet</option>
              <option value="Display">Display</option>
              <option value="Streaming">Streaming</option>
              <option value="Tracker">Tracker</option>
              <option value="Accessory">Accessory</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            {loading ? 'Submitting...' : 'Add Product'}
          </button>
        </form>
      </div>
    </main>
  );
}
