import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, User as UserIcon, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">a</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                aasara AI
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary">
              Home
            </Link>
            <Link to="/directory" className="text-slate-600 hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary">
              Partner Directory
            </Link>
            {user && (
              <Link to="/dashboard" className="text-slate-600 hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary">
                Dashboard
              </Link>
            )}
            <Link to="/protocols" className="text-slate-600 hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary">
              Acts & Protocols
            </Link>
            <Link to="/faq" className="text-slate-600 hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary">
              FAQs
            </Link>

            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 pl-4">
                  <Link to="/profile" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <UserIcon className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-sm">{user.name}</span>
                  </Link>
                  <button onClick={handleLogout} className="text-slate-500 hover:text-red-500 transition-colors">
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="text-slate-600 hover:text-primary font-medium dark:text-slate-300">
                    Login
                  </Link>
                  <Link to="/register" className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg shadow-primary/30">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <Link to="/" className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200">
              Home
            </Link>
            <Link to="/directory" className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200">
              Partner Directory
            </Link>
            <Link to="/protocols" className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200">
              Acts & Protocols
            </Link>
            <Link to="/faq" className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200">
              FAQs
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200">My Profile</Link>
                <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-base font-medium text-red-600">Logout</button>
              </>
            ) : (
              <Link to="/login" className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
