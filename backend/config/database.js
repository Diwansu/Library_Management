import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.SUPABASE_DB_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: process.env.NODE_ENV === "development" ? console.log : false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to Database");
  } catch (err) {
    console.error("❌ Database connection error:", err);
  }
};

export { sequelize, connectDB };
