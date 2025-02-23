import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize, connectDB } from "./config/database.js"; 
import apiRoutes from "./Routes/apiRoutes.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", apiRoutes);


app.listen(PORT , async(err)=>{
   try {
    await connectDB();
    await sequelize.sync(); 
     if(err){
         console.log("Error starting the server");
     }else{
         console.log(`server is running at port: ${PORT}`)
     }
   } catch (error) {
    console.log("some error found",error);
   }
})

// const startServer = async () => {
//   try {
//     // await connectDB();

//     // await sequelize.sync(); 
//     console.log("✅ Database & tables synced");

//     const PORT = process.env.PORT || 5001;
//     const server = app.listen(PORT, () => {
//       console.log(`🚀 Server is running on port ${PORT}`);
//     });

//     module.exports = { app, server };
//   } catch (err) {
//     console.error("❌ Error starting server:", err);
//     // process.exit(1); 
//   }
// };


// startServer();
