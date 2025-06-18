// client/src/components/Footer.jsx
import React from 'react';
import { 
  GlobeAltIcon,
  EnvelopeIcon,
  CodeBracketIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <ChartBarIcon className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
              Market Dashboard
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Real-time financial data and market insights. Tracking major indices and trending stocks to help you stay informed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Market Overview
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Indices
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Trending Stocks
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Data Sources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Data Sources
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <GlobeAltIcon className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Financial Modeling Prep
                </span>
              </li>
              <li className="flex items-center">
                <GlobeAltIcon className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Alpha Vantage
                </span>
              </li>
              <li className="flex items-center">
                <GlobeAltIcon className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Yahoo Finance API
                </span>
              </li>
            </ul>
          </div>

          {/* Contact/Developer */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <EnvelopeIcon className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                <a 
                  href="mailto:support@marketdashboard.com" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  support@marketdashboard.com
                </a>
              </li>
              <li className="flex items-center">
                <CodeBracketIcon className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                <a 
                  href="https://github.com/yourusername/market-dashboard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Market Dashboard. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 md:mt-0">
            Data is provided for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;