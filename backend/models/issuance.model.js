import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Book from "./book.model.js";
import Member from "./member.model.js";

const Issuance = sequelize.define("Issuance", {
  issuance_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  book_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Book,
      key: "book_id",
    },
    allowNull: false,
  },

  issuance_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  issuance_member: {
    type: DataTypes.INTEGER,
    references: {
      model: Member,
      key: "mem_id",
    },
    allowNull: false,
  },
  issued_by: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  target_return_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  issuance_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Issuance;
