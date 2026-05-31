import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <div className='min-h-sreen bg-gray-50'>
      <Navbar />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <div className='max-width-6xl mx-auto px-4 py-8'>
                <p className='text-gray-500'>Home page coming soon...</p>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App
