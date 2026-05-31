import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="text-gray-500 text-sm">Page not found.</p>
      <Link to="/" className="text-green-600 text-sm hover:underline">
        Go home
      </Link>
    </div>
  );
};

export default NotFoundPage;