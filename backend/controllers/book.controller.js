import db from "../models/index.js";

const { Book } = db;

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ error: "Failed to fetch book" });
  }
};

export const createBook = async (req, res) => {
  try {
    const {
      book_name,
      book_cat_id,
      book_collection_id,
      book_launch_date,
      book_publisher,
    } = req.body;

    if (
      !book_name ||
      !book_cat_id ||
      !book_collection_id ||
      !book_launch_date ||
      !book_publisher
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newBook = await Book.create({
      book_name,
      book_cat_id,
      book_collection_id,
      book_launch_date,
      book_publisher,
    });

    res.status(201).json({
      status: 1,
      message: "Book added successfully",
      newBook,
    });
  } catch (error) {
    console.error("Book creation error:", error);
    res.status(400).json({ error: "Failed to create book" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ error: "Book not found" });

    const updatedInfo = await book.update(req.body);
    res.status(200).json({
      status: 1,
      message: "Book info updated",
      updatedInfo,
    });
  } catch (error) {
    console.error("Book update error:", error);
    res.status(400).json({ error: "Failed to update book" });
  }
};
