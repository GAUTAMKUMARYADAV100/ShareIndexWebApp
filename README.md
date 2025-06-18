# 📊 ShareIndexWebApp

A **real-time financial dashboard** that tracks major market indices and trending IPOs/stocks. Built with modern web technologies to provide investors with up-to-date market information in a clean, intuitive interface.

---

## 🌟 Key Features

- **Live Market Data**: Real-time updates of major indices (S&P 500, Dow Jones, NASDAQ)
- **Trending Stocks**: Today’s top gainers with performance metrics
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Dark/Light Mode**: Theme adapts to user preference
- **Interactive Charts**: Visual representation of market movements
- **API-Driven**: Uses reliable financial data sources

---

## 🛠️ Technology Stack

### Frontend
- ⚛️ **React.js (Vite)** – Fast and modern UI framework
- 🎨 **Tailwind CSS** – Utility-first CSS framework
- 📈 **Chart.js** – For interactive visualizations
- 🔗 **Axios** – HTTP client for API requests

### Backend
- 🟢 **Node.js** – JavaScript runtime
- 🚂 **Express.js** – Web server framework
- 🔗 **Axios** – Server-side API requests
- 🔐 **CORS** – Cross-origin support

### APIs Used
- 🧮 **Financial Modeling Prep** (Primary)
- 🧪 **Alpha Vantage** (Fallback)
- 📊 **Yahoo Finance** (Alternative)

---

## 🚀 Installation

### Prerequisites

- ✅ Node.js (v18+)
- ✅ npm (v9+)
- ✅ API keys from [Financial Modeling Prep](https://financialmodelingprep.com/)

---

### 📦 Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ipo-market-dashboard.git
cd ipo-market-dashboard
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
cp .env.example .env
# Add your API keys to .env
npm start
3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
4. Access the Application
Frontend: http://localhost:5173

Backend API: http://localhost:5000

📁 Project Structure
bash
Copy
Edit
ipo-market-dashboard/
├── backend/               # Node.js server
│   ├── routes/            # API endpoints
│   ├── services/          # Business logic
│   ├── app.js             # Server configuration
│   └── .env               # Environment variables
├── frontend/              # React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Main views
│   │   ├── styles/        # CSS/Tailwind config
│   │   └── App.js         # Root component
│   └── vite.config.js     # Vite configuration
└── README.md              # This file
🌐 API Endpoints
Endpoint	Method	Description
/api/market/indices	GET	Get major market indices data
/api/market/trending	GET	Get today's top gaining stocks

🔧 Configuration
Backend .env File
env
Copy
Edit
PORT=5000
FMP_API_KEY=your_api_key
ALPHA_VANTAGE_API_KEY=your_api_key
NODE_ENV=development
Frontend .env File
env
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000
🤝 Contributing
Fork the project

Create your feature branch:
git checkout -b feature/AmazingFeature

Commit your changes:
git commit -m 'Add some amazing feature'

Push to the branch:
git push origin feature/AmazingFeature

Open a Pull Request
