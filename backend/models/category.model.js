import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Category = sequelize.define("Category", {
  cat_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cat_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sub_cat_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Category;
