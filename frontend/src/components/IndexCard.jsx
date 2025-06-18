// client/src/components/IndexCard.js
import React from 'react';

const IndexCard = ({ index }) => {
  const isPositive = index.changePercent >= 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-transform hover:scale-105">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {index.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {index.symbol}
          </p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            isPositive
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}
        >
          {isPositive ? '↑' : '↓'} {Math.abs(index.changePercent).toFixed(2)}%
        </span>
      </div>
      
      <div className="mt-4">
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          ${index.price.toFixed(2)}
        </p>
        <p
          className={`text-sm ${
            isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`}
        >
          {isPositive ? '+' : ''}
          {index.change.toFixed(2)} ({isPositive ? '+' : ''}
          {index.changePercent.toFixed(2)}%)
        </p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
          <span>High: ${index.high.toFixed(2)}</span>
          <span>Low: ${index.low.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default IndexCard;