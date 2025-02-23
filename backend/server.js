import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize, connectDB } from "./config/database.js"; 
import apiRoutes from "./Routes/apiRoutes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", apiRoutes);

const startServer = async () => {
  try {
    await connectDB();

    await sequelize.sync(); 
    console.log("✅ Database & tables synced");

    const PORT = process.env.PORT || 5001;
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
