import React from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = ({ isAuthenticated, username, onLogout }) => {
    return (
        <nav className="bg-indigo-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex items-center px-2 py-2">
                            <span className="text-white text-xl font-bold">SpendScope</span>
                        </Link>
                    </div>
                    
                    <div className="flex items-center">
                        {isAuthenticated ? (
                            <div className="flex space-x-4">
                                <Link to="/dashboard" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                                    Dashboard
                                </Link>
                                <Link to="/entries" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                                    Entry List
                                </Link>
                                <Link to="/add" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                                    Add Entry
                                </Link>
                                <Link to="/about" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                                    About Us
                                </Link>
                                <button
                                    onClick={onLogout}
                                    className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex space-x-4">
                                <Link to="/login" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                                    Login
                                </Link>
                                <Link to="/register" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                                    Register
                                </Link>
                                <Link to="/about" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                                    About Us
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MyNavbar;
