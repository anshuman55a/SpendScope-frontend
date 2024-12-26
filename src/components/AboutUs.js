import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About SpendScope</h1>
        
        <div className="space-y-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is SpendScope?</h2>
              <p className="text-gray-600 text-lg">
                SpendScope is a powerful financial management application designed to help you take control of your finances. 
                With our intuitive interface, you can easily track your income and expenses, gain valuable insights into your 
                spending habits, and make informed financial decisions.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Monitor your spending habits with detailed tracking</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Set and track budget goals effectively</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Analyze income and expenses with intuitive visualizations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Make informed decisions for a secure financial future</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Get Started</h2>
              <ol className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white text-sm font-medium mr-2">1</span>
                  <span><strong>Create an Account:</strong> Sign up to start tracking your finances</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white text-sm font-medium mr-2">2</span>
                  <span><strong>Add Entries:</strong> Record your income and expenses</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white text-sm font-medium mr-2">3</span>
                  <span><strong>View Dashboard:</strong> Get insights into your financial status</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white text-sm font-medium mr-2">4</span>
                  <span><strong>Manage Entries:</strong> Edit or delete transactions as needed</span>
                </li>
              </ol>
            </div>
          </div>

          {!isAuthenticated && (
            <div className="text-center mt-8">
              <button
                onClick={() => navigate('/register')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get Started Now
                <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
