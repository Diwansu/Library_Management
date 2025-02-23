import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Book = sequelize.define("Book", {
  book_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  book_name: { type: DataTypes.STRING, allowNull: false },
  book_cat_id: { type: DataTypes.INTEGER, allowNull: false }, // foreign key (category model priary key)
  book_collection_id: { type: DataTypes.INTEGER, allowNull: false }, // this should be the foreign key (collection model primary)
  book_launch_date: { type: DataTypes.DATE, allowNull: false },
  book_publisher: { type: DataTypes.STRING, allowNull: false },
});

export default Book;

