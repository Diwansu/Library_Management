import sequelize from "../config/database.js";
import Member from "./member.model.js";
import Membership from "./membership.model.js";
import Collection from "./collection.model.js";
import Category from "./category.model.js";
import Book from "./book.model.js";
import Issuance from "./issuance.model.js";


Member.hasOne(Membership, { foreignKey: "member_id" });
Membership.belongsTo(Member, { foreignKey: "member_id" });

Book.belongsTo(Category, { foreignKey: "book_cat_id" });
Category.hasMany(Book, { foreignKey: "book_cat_id" });

Book.belongsTo(Collection, { foreignKey: "book_collection_id" });
Collection.hasMany(Book, { foreignKey: "book_collection_id" });

Issuance.belongsTo(Member, { foreignKey: "issuance_member" });
Member.hasMany(Issuance, { foreignKey: "issuance_member" });

Issuance.belongsTo(Book, { foreignKey: "book_id" });
Book.hasMany(Issuance, { foreignKey: "book_id" });

const db = { sequelize, Member, Membership, Collection, Category, Book, Issuance };

export default db;
