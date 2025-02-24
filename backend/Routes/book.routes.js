import express from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
} from "../controllers/book.controller.js";

import checkEmptyBody from "../middleware/checkEmptyBody.js";

const router = express.Router();

router.get("/", getAllBooks);

router.get("/:id", getBookById);

router.post("/createBook", checkEmptyBody, createBook);

router.put("/updateBook/:id", checkEmptyBody, updateBook);

export default router;
