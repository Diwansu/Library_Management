const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize, connectDB } = require("./config/database"); 
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const startServer = async () => {
  try {
    await connectDB();

    await sequelize.sync(); 
    console.log("✅ Database & tables synced");

    const PORT = process.env.PORT || 5000;
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });

    module.exports = { app, server };
  } catch (err) {
    console.error("❌ Error starting server:", err);
    process.exit(1); 
  }
};

startServer();
