import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Member from "./member.model.js";

const Membership = sequelize.define("Membership", {
  membership_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  member_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Member,
      key: "mem_id",
    },
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Membership;
