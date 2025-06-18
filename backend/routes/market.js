// server/routes/market.js
const express = require('express');
const router = express.Router();
const marketService = require('../services/marketService');

// Get major indices data
router.get('/indices', async (req, res) => {
  try {
    const indices = await marketService.getMarketIndices();
    res.json(indices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get trending stocks
router.get('/trending', async (req, res) => {
  try {
    const trending = await marketService.getTrendingStocks();
    res.json(trending);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;