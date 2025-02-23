# Library Management System

## 📌 Overview
The **Library Management System** is a full-stack application designed to manage library operations such as member registration, book issuance, and return tracking. The backend is built using **Node.js, Express, Sequelize ORM, and PostgreSQL (Supabase)**, while the frontend leverages **React** for a seamless user experience.

## 🚀 Features
- 📚 **Book Management**: Add, update, delete, and list books.
- 👥 **Member Management**: Register, update, delete, and list members.
- 🔄 **Book Issuance & Returns**: Track books issued and pending returns.
- 🔑 **API Security**: Secure API endpoints using API keys.
- 📊 **Dashboard**: View overdue book returns with a clean UI.
- 📏 **Rate Limiting**: Prevent abuse using middleware.

## 🏗️ Tech Stack
### **Backend:**
- **Node.js** & **Express.js** - For handling API requests
- **Sequelize ORM** - Database interaction
- **PostgreSQL (Supabase)** - Database storage
- **JWT Authentication (Optional)** - Secure user sessions
- **Middleware** - API key authentication, rate limiting

### **Frontend:**
- **React.js** - Component-based UI
- **Axios** - API requests

## 📂 Folder Structure
```
backend/
│── config/          # Database & environment configurations
│── controllers/     # Business logic for routes
│── models/          # Sequelize models & relationships
│── routes/         # API endpoints
│── middlewares/     # API security, rate limiting
│── utils/           # Helper functions
│── server.js        # Express app entry point
│── package.json     # Dependencies & scripts

frontend/
│── src/
│   │── components/  # Reusable UI components
│   │── pages/       # Screens and views
│   │── services/    # API calls (Axios)
│   │── App.js       # Main React app
│── package.json     # Frontend dependencies
```

## 🛠️ Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Diwansu/Library_Management.git
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
```

#### **Configure Environment Variables**
Create a `.env` file in the `backend` directory:
```
SUPABASE_DB_URL=your_database_url
API_KEY=your_secure_api_key
NODE_ENV=development
```

#### **Run Backend**
```sh
node server.js
```

### **3️⃣ Frontend Setup**
```sh
cd frontend
npm install
npm start
```

## 🔒 API Security
- **API Key Authentication**: All endpoints under `/api/*` require a valid API key.
- **Rate Limiting**: Prevents excessive requests to the API.

## 📌 Future Enhancements
✅ Implement JWT-based authentication (optional).  
✅ Add email notifications for due book returns.  
✅ Improve analytics on book borrowing trends.  

## 💡 Contribution
Want to contribute? Feel free to submit a pull request! 🎉

## 📜 License
This project is licensed under the **MIT License**.

