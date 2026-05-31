import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const ComingSoon = ({ page }) => (
  <div className="max-w-6xl mx-auto px-4 py-8">
    <p className="text-gray-400 text-sm">{page} — coming soon.</p>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listings/new"
          element={
            <ProtectedRoute>
              <ComingSoon page="New Listing" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listings/:id"
          element={
            <ProtectedRoute>
              <ComingSoon page="Listing Detail" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-listings"
          element={
            <ProtectedRoute>
              <ComingSoon page="My Listings" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inquiries/inbox" 
          element={
            <ProtectedRoute>
              <ComingSoon page="Inbox" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inquiries/sent"
          element={
            <ProtectedRoute>
              <ComingSoon page="Sent Inquiries" />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;