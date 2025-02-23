import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Membership = sequelize.define("Membership", {
  membership_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  member_id: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
});

export default Membership;
