import express from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
} from "../controller/book.controller.js";

import checkEmptyBody from "../middleware/checkEmptyBody.js";

const router = express.Router();

router.get("/", getAllBooks);

router.get("/:id", getBookById);

router.post("/", checkEmptyBody, createBook);

router.put("/:id", checkEmptyBody, updateBook);

export default router;
