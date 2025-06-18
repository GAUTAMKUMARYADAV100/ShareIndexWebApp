// server/services/marketService.js
const axios = require('axios');

// Using Financial Modeling Prep's free API
const API_KEY = process.env.FMP_API_KEY || 'demo'; // Note: Free tier has limited access

const getMarketIndices = async () => {
  try {
    // First try with US-only indices (free tier limitation)
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/quote/SPY,DIA,QQQ,IWM?apikey=${API_KEY}`
    );
    
    if (!response.data || response.data.length === 0) {
      throw new Error('No data returned from API');
    }

    
    // Map ETF symbols to their index equivalents
    return response.data.map(etf => {
      const indexMap = {
        'SPY': { symbol: '^GSPC', name: 'S&P 500' },
        'DIA': { symbol: '^DJI', name: 'Dow Jones Industrial Average' },
        'QQQ': { symbol: '^IXIC', name: 'NASDAQ Composite' },
        'IWM': { symbol: '^RUT', name: 'Russell 2000' }
      };
      
      const indexInfo = indexMap[etf.symbol] || { symbol: etf.symbol, name: etf.symbol };
      
      return {
        symbol: indexInfo.symbol,
        name: indexInfo.name,
        price: etf.price,
        change: etf.change,
        changePercent: etf.changesPercentage,
        high: etf.dayHigh,
        low: etf.dayLow
      };
    });
  } catch (error) {
    console.error('Error fetching market indices:', error);
    
    // Fallback data for development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Using fallback mock data for indices');
      return getMockIndices();
    }
    
    throw new Error('Failed to fetch market indices. Please check your API key or try again later.');
  }
};

const getTrendingStocks = async () => {
  try {
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${API_KEY}`
    );
    
    if (!response.data || response.data.length === 0) {
      throw new Error('No data returned from API');
    }

    
    
    return response.data.map(stock => ({
      symbol: stock.symbol,
      name: stock.name,
      price: stock.price,
      change: stock.change,
      changePercent: stock.changesPercentage
    }));
  } catch (error) {
    console.error('Error fetching trending stocks:', error);
    
    // Fallback data for development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Using fallback mock data for trending stocks');
      return getMockTrendingStocks();
    }
    
    throw new Error('Failed to fetch trending stocks. Please check your API key or try again later.');
  }
};

// Helper functions
const getMockIndices = () => {
  return [
    {
      symbol: '^GSPC',
      name: 'S&P 500',
      price: 4500.32,
      change: 12.45,
      changePercent: 0.28,
      high: 4512.76,
      low: 4489.21
    },
    {
      symbol: '^DJI',
      name: 'Dow Jones Industrial Average',
      price: 34567.89,
      change: 123.45,
      changePercent: 0.36,
      high: 34600.12,
      low: 34500.34
    },
    {
      symbol: '^IXIC',
      name: 'NASDAQ Composite',
      price: 13789.01,
      change: 45.67,
      changePercent: 0.33,
      high: 13800.45,
      low: 13750.23
    },
    {
      symbol: '^RUT',
      name: 'Russell 2000',
      price: 1890.45,
      change: 8.90,
      changePercent: 0.47,
      high: 1895.67,
      low: 1885.12
    }
  ];
};

const getMockTrendingStocks = () => {
  return [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 175.34,
      change: 3.45,
      changePercent: 2.01
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 265.78,
      change: 12.34,
      changePercent: 4.87
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      price: 435.67,
      change: 23.45,
      changePercent: 5.69
    }
  ];
};

const getIndexName = (symbol) => {
  const names = {
    '^GSPC': 'S&P 500',
    '^DJI': 'Dow Jones Industrial Average',
    '^IXIC': 'NASDAQ Composite',
    '^RUT': 'Russell 2000'
  };
  return names[symbol] || symbol;
};

module.exports = {
  getMarketIndices,
  getTrendingStocks
};