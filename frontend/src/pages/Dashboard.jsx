// client/src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import IndexCard from '../components/IndexCard';
import StockTable from '../components/StockTable';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Dashboard = () => {
  const [indices, setIndices] = useState([]);
  const [trendingStocks, setTrendingStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // In Dashboard.jsx
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050';

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch market indices
      const indicesResponse = await fetch(`${API_BASE_URL}/api/market/indices`);
      if (!indicesResponse.ok) {
        throw new Error(`HTTP error! status: ${indicesResponse.status}`);
      }
      const indicesData = await indicesResponse.json();
      setIndices(indicesData);
      
      // Fetch trending stocks
      const trendingResponse = await fetch(`${API_BASE_URL}/api/market/trending`);
      if (!trendingResponse.ok) {
        throw new Error(`HTTP error! status: ${trendingResponse.status}`);
      }
      const trendingData = await trendingResponse.json();
      setTrendingStocks(trendingData);
      
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  fetchData();
}, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Market Overview
      </h1>
      
      {/* Market Indices Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Major Indices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {indices.map((index) => (
            <IndexCard key={index.symbol} index={index} />
          ))}
        </div>
      </section>
      
      {/* Trending Stocks Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Today's Top Gainers
        </h2>
        <StockTable stocks={trendingStocks} />
      </section>
    </div>
  );
};

export default Dashboard;