import { useState, useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { Link, useLocation} from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }


  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-5 md:py-6">
        <h1 className="font-bold text-blue-600 text-3xl">Blogify</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
          <a href="https://github.com/AshrithVarghese/blogify-frontend" target="_blank">GitHub</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X className="size-10 cursor-pointer" onClick={toggleMenu} />
          ) : (
            <Menu className="size-10 cursor-pointer" onClick={toggleMenu} />
          )}
        </div>

        {/* Desktop Buttons */}
        { isLoggedIn ? (
          <div className="hidden md:flex items-center gap-3 text-lg font-medium">
            <Link to="/profile">
              <button className="bg-blue-600 text-white w-[100px] h-[40px] text-xl rounded-[5px] hover:text-[#0F172A] hover:bg-white hover:border hover:border-[#0F172A] transition-all duration-500">
                Profile
              </button>
            </Link>
            <Link to="/" onClick={handleLogout}>
              <button className="bg-white text-red-600 w-auto h-[40px] text-xl rounded-[5px] hover:text-black transition-all duration-500 flex items-center">
                <LogOut />
              </button>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-3 text-lg font-medium">
            <Link to="/login">
              <button className="bg-blue-600 text-white w-[100px] h-[40px] text-xl rounded-[5px] hover:text-[#0F172A] hover:bg-white hover:border hover:border-[#0F172A] transition-all duration-500">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-white border border-blue-600 text-blue-600 w-[100px] h-[40px] text-xl rounded-[5px] hover:text-white hover:bg-blue-600 transition-all duration-500">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Slide Down Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex text-center flex-col gap-4 px-4 pb-4 text-lg font-medium w-full">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/blogs" onClick={toggleMenu}>Blogs</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <a href="https://github.com/AshrithVarghese/blogify-frontend" target="_blank" onClick={toggleMenu}>GitHub</a>
          { isLoggedIn ? (
            <div>
              <Link to="/profile" onClick={toggleMenu}>
                <button className="bg-blue-600 text-white w-full h-[40px] text-xl rounded-[5px] mb-2 hover:text-[#0F172A] hover:bg-white hover:border hover:border-[#0F172A] transition-all duration-500">
                  Profile
                </button>
              </Link>
              <Link to="/" onClick={handleLogout}>
                <button className="bg-red-600 text-white w-full h-[40px] text-xl rounded-[5px] hover:text-[#0F172A] hover:bg-white hover:border hover:border-[#0F172A] transition-all duration-500">
                  Logout
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login" onClick={toggleMenu}>
                <button className="bg-blue-600 text-white w-full h-[40px] text-xl rounded-[5px] mb-2 hover:text-[#0F172A] hover:bg-white hover:border hover:border-[#0F172A] transition-all duration-500">
                  Login
                </button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <button className="bg-white border border-blue-600 text-blue-600 w-full h-[40px] text-xl rounded-[5px] hover:text-white hover:bg-blue-600 transition-all duration-500">
                  Register
                </button>
              </Link>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
