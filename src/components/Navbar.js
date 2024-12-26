import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyNavbar = ({ isAuthenticated, username, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        onLogout();
        setIsOpen(false);
        navigate('/');
    };

    return (
        <nav className="bg-indigo-600 shadow-lg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <span className="text-white text-xl font-bold">SpendScope</span>
                        </Link>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        {isAuthenticated ? (
                            <>
                                <Link to="/dashboard" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                    Dashboard
                                </Link>
                                <Link to="/entries" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                    Entry List
                                </Link>
                                <Link to="/add" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                    Add Entry
                                </Link>
                                <Link to="/about" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                    About Us
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                    Login
                                </Link>
                                <Link to="/register" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                    Register
                                </Link>
                                <Link to="/about" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                    About Us
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div 
                className={`${
                    isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                } absolute top-16 inset-x-0 transition-all transform duration-300 ease-in-out md:hidden bg-indigo-600 shadow-lg z-50`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-indigo-500">
                    {isAuthenticated ? (
                        <>
                            <Link 
                                to="/dashboard" 
                                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Dashboard
                            </Link>
                            <Link 
                                to="/entries" 
                                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Entry List
                            </Link>
                            <Link 
                                to="/add" 
                                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Add Entry
                            </Link>
                            <Link 
                                to="/about" 
                                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-white hover:bg-indigo-500 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link 
                                to="/login" 
                                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </Link>
                            <Link 
                                to="/register" 
                                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Register
                            </Link>
                            <Link 
                                to="/about" 
                                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default MyNavbar;
