import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import { formatPrice } from '../utils/formatPrice';
import { timeAgo } from '../utils/timeAgo';

const CATEGORIES = [
  'All',
  'Books',
  'Lab Equipment',
  'Electronics',
  'Uniform',
  'Furniture',
  'Others',
];

const CONDITIONS = ['All', 'Brand New', 'Like New', 'Good', 'Fair'];

const HomePage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    fetchListings();
  }, [search, category, condition, sort, page]);

  const fetchListings = async () => {
    setLoading(true);
    try {
      const params = { page, sort };
      if (search) params.search = search;
      if (category) params.category = category;
      if (condition) params.condition = condition;

      const { data } = await api.get('/listings', { params });
      setListings(data.listings || []);
      setPagination(data.pagination || null);
    } catch (err) {
      console.error('fetchListings error:', err);
      setListings([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput);
  };

  const handleCategory = (cat) => {
    setPage(1);
    setCategory(cat === 'All' ? '' : cat);
  };

  const handleCondition = (e) => {
    setPage(1);
    setCondition(e.target.value === 'All' ? '' : e.target.value);
  };

  const handleSort = (e) => {
    setPage(1);
    setSort(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Campus Marketplace
        </h1>
        <p className="text-sm text-gray-500">
          Buy and sell within the BPSU community
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search listings..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition"
        >
          Search
        </button>
      </form>

      <div className="flex flex-wrap gap-2 mb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition border ${
              (cat === 'All' && !category) || category === cat
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-gray-600 border-gray-300 hover:border-green-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-6">
        <select
          value={condition || 'All'}
          onChange={handleCondition}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {CONDITIONS.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select
          value={sort}
          onChange={handleSort}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>

        {pagination && (
          <span className="text-sm text-gray-400 ml-auto">
            {pagination.total} listing{pagination.total !== 1 ? 's' : ''} found
          </span>
        )}
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse"
            >
              <div className="bg-gray-200 h-48 w-full" />
              <div className="p-3 flex flex-col gap-2">
                <div className="bg-gray-200 h-4 rounded w-3/4" />
                <div className="bg-gray-200 h-4 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : listings.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-sm">No listings found.</p>
          <Link
            to="/listings/new"
            className="text-green-600 text-sm hover:underline mt-2 inline-block"
          >
            Be the first to post one
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {listings.map((listing) => (
            <Link
              key={listing._id}
              to={`/listings/${listing._id}`}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition group"
            >
              <div className="h-48 bg-gray-100 overflow-hidden">
                {listing.images?.length > 0 ? (
                  <img
                    src={listing.images[0].url}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
                    No image
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {listing.title}
                </p>
                <p className="text-green-600 font-bold text-sm mt-0.5">
                  {formatPrice(listing.price)}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                    {listing.condition}
                  </span>
                  <span className="text-xs text-gray-400">
                    {timeAgo(listing.createdAt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {pagination && pagination.pages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg disabled:opacity-40 hover:border-green-500 transition"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-sm text-gray-500">
            Page {page} of {pagination.pages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, pagination.pages))}
            disabled={page === pagination.pages}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg disabled:opacity-40 hover:border-green-500 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;