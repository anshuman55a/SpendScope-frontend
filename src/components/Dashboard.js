import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaDollarSign, FaRegChartBar } from 'react-icons/fa';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        total_income: 0,
        total_expenses: 0,
        recent_transactions: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://spendscope-backend.onrender.com/dashboard', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("Dashboard Data:", response.data);
                setDashboardData(response.data);
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
                    <h5 className="mt-4 text-lg text-gray-600">Loading Dashboard...</h5>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4 w-full max-w-2xl">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">Error Loading Dashboard</h3>
                            <p className="mt-2 text-sm text-red-700">{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Financial Dashboard</h1>
                
                <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
                    {/* Income Card */}
                    <div className="bg-white overflow-hidden shadow rounded-lg p-4 sm:p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <FaDollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                            </div>
                            <div className="ml-3 sm:ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">Total Income</dt>
                                    <dd className="flex items-baseline">
                                        <div className="text-xl sm:text-2xl font-semibold text-gray-900">
                                            ₹{dashboardData.total_income.toFixed(2)}
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>

                    {/* Expenses Card */}
                    <div className="bg-white overflow-hidden shadow rounded-lg p-4 sm:p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <FaRegChartBar className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                            </div>
                            <div className="ml-3 sm:ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">Total Expenses</dt>
                                    <dd className="flex items-baseline">
                                        <div className="text-xl sm:text-2xl font-semibold text-gray-900">
                                            ₹{dashboardData.total_expenses.toFixed(2)}
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="mt-8">
                    <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">Recent Transactions</h2>
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            {dashboardData.recent_transactions.map((transaction, index) => (
                                <li key={index} className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-indigo-600 truncate">
                                                {transaction.description}
                                            </p>
                                            <p className="mt-1 text-xs sm:text-sm text-gray-500">
                                                {new Date(transaction.date).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="ml-4">
                                            <span className={`inline-flex text-sm sm:text-base font-semibold ${
                                                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                                {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
