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
                const response = await axios.get('http://localhost:5000/dashboard', {
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
                
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
                    {/* Income Card */}
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <FaDollarSign className="h-6 w-6 text-green-500" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Total Income</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">
                                                ₹{dashboardData.total_income.toFixed(2)}
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Expenses Card */}
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <FaRegChartBar className="h-6 w-6 text-red-500" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Total Expenses</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">
                                                ₹{dashboardData.total_expenses.toFixed(2)}
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="mt-8">
                    <div className="bg-white shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                Recent Transactions
                            </h3>
                            {dashboardData.recent_transactions.length > 0 ? (
                                <div className="flow-root">
                                    <ul className="-my-5 divide-y divide-gray-200">
                                        {dashboardData.recent_transactions.map(transaction => (
                                            <li key={transaction.id} className="py-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate">
                                                            {transaction.description}
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {new Date(transaction.date).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                            transaction.type === 'income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                        }`}>
                                                            ₹{transaction.amount.toFixed(2)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <p className="text-gray-500 text-center py-4">No recent transactions available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
