import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = ({ isAuthenticated }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-indigo-900 mb-6">
            Welcome to SpendScope
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Take control of your finances with our powerful expense tracking and budgeting tools.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-indigo-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Track Expenses</h3>
              <p className="text-gray-600">
                Easily log and categorize your daily expenses
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-indigo-600 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Budget Smart</h3>
              <p className="text-gray-600">
                Create and manage budgets that work for you
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-indigo-600 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Insights</h3>
              <p className="text-gray-600">
                Get detailed analytics of your spending habits
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center gap-6">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
                >
                  View Dashboard
                </Link>
                <Link
                  to="/add"
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                >
                  Add Entry
                </Link>
                <Link
                  to="/entries"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Entries
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </motion.div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
            Why Choose SpendScope?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔒",
                title: "Secure",
                description: "Your financial data is encrypted and safe",
              },
              {
                icon: "🚀",
                title: "Easy to Use",
                description: "Intuitive interface for seamless experience",
              },
              {
                icon: "📱",
                title: "Mobile Ready",
                description: "Access your data anywhere, anytime",
              },
              {
                icon: "🎯",
                title: "Goal Tracking",
                description: "Set and achieve your financial goals",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/50 p-6 rounded-lg text-center"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
