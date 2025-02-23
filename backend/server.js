import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize, connectDB } from "./config/database.js";
import apiRoutes from "./Routes/apiRoutes.js";
import apiKeyMiddleware from "./middleware/apiKeyMiddleware.js";
import rateLimit from "express-rate-limit";


dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



app.use("/", apiRoutes);

app.listen(PORT, async (err) => {
  try {
    await connectDB();
    await sequelize.sync();
    if (err) {
      console.log("Error starting the server");
    } else {
      console.log(`server is running at port: ${PORT}`);
    }
  } catch (error) {
    console.log("some error found", error);
  }
});

