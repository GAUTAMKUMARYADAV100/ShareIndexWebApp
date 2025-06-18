// client/src/components/ErrorMessage.js
import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const ErrorMessage = ({ message }) => {
  return (
    <div className="rounded-md bg-red-50 dark:bg-red-900/30 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon 
            className="h-5 w-5 text-red-400 dark:text-red-300" 
            aria-hidden="true" 
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
            Error loading data
          </h3>
          <div className="mt-2 text-sm text-red-700 dark:text-red-300">
            <p>{message || 'Failed to fetch market data. Please try again later.'}</p>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="rounded-md bg-red-50 dark:bg-red-900/40 px-2 py-1.5 text-sm font-medium text-red-800 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-900/60 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;