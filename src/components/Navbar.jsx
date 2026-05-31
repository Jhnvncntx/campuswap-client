import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <nav className='bg-white border-b border-gray-200 sticky top-0 z-50'>
            <div className='max-w-6xl mx-auto px-4 h-16 flex items-center justify-between'>
                <Link to="/" className='txt-xl font-bold text-green-600'>
                    CampuSwap
                </Link>

                <div className='flex items-center gap-4'>
                    { user ? (
                        <>
                            <Link
                                to='/listings/new'
                                className='bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition'
                            >
                                + Post Item
                            </Link>
                            <Link
                                to="/inquiries/inbox"
                                className='text-sm text-gray-600 hover:text-gray-900'
                            >
                                Inbox
                            </Link>
                            <Link
                                to="/my-lisings"
                                className='text-sm text-gray-600 hover:text-gray-900'
                            >
                                My Listings
                            </Link>
                            <button
                                onClick={handleLogout}
                                className='text-sm text-gray-500 hover:text-red-500 transition'
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to='/login'
                                className='text-sm text-gray-600 hover:text-gray-900'
                            >
                                Login
                            </Link>
                            <Link
                                to='/register'
                                className='bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition'
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;