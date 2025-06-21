// server/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const marketRoutes = require('./routes/market');
const StatsD = require('node-statsd'); // ✅ Add this

const app = express();

// StatsD client setup (Graphite default is 8125)
const statsdClient = new StatsD({
  host: 'localhost',
  port: 8125,
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/market', (req, res, next) => {
  statsdClient.increment('market.api.called'); // ✅ Track API call
  next(); // continue to actual route
});

app.use('/api/market', marketRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
