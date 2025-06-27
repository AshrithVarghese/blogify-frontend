import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <img src="/images/caveman.gif" alt="404" className="w-150 mb-3 mt-3" />
      <h1 className="text-5xl font-bold text-blue-600 mb-2">404</h1>
      <h1 className="text-3xl font-bold text-blue-600 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6">Sorry, we couldn't find what you were looking for.</p>
      <Link to="/">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Go to Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
