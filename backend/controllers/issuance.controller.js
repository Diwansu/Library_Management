import db from "../models/index.js";

const { Issuance, Book, Member } = db;

export const getAllIssuances = async (req, res) => {
  try {
    const issuances = await Issuance.findAll({
      include: [
        { model: Book, attributes: ["book_id", "book_name"] },
        { model: Member, attributes: ["mem_id", "mem_name"] },
      ],
    });

    res.status(200).json(issuances);
  } catch (error) {
    console.error("Error fetching issuances:", error);
    res.status(500).json({ error: "Failed to fetch issuances" });
  }
};

export const getIssuanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const issuance = await Issuance.findByPk(id, {
      include: [
        { model: Book, attributes: ["book_id", "book_name"] },
        { model: Member, attributes: ["mem_id", "mem_name"] },
      ],
    });

    if (!issuance) return res.status(404).json({ error: "Issuance not found" });

    res.status(200).json(issuance);
  } catch (error) {
    console.error("Error fetching issuance:", error);
    res.status(500).json({ error: "Failed to fetch issuance" });
  }
};

export const createIssuance = async (req, res) => {
  try {
    const { book_id, issuance_member, issued_by, target_return_date } =
      req.body;

    if (!book_id || !issuance_member || !issued_by || !target_return_date) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const book = await Book.findByPk(book_id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    const member = await Member.findByPk(issuance_member);
    if (!member) return res.status(404).json({ error: "Member not found" });

    const newIssuance = await Issuance.create({
      book_id,
      issuance_member,
      issued_by,
      issuance_date: new Date(),
      target_return_date,
      issuance_status: "Issued",
    });

    res.status(201).json({
      status: 1,
      message: "Book issued successfully",
      newIssuance,
    });
  } catch (error) {
    console.error("Error creating issuance:", error);
    res.status(500).json({ error: "Failed to issue book" });
  }
};

export const updateIssuance = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const issuance = await Issuance.findByPk(id);
    if (!issuance) return res.status(404).json({ error: "Issuance not found" });

    const updatedIssuance = await issuance.update(updatedData);

    res.status(200).json({
      status: 1,
      message: "Issuance record updated",
      updatedIssuance,
    });
  } catch (error) {
    console.error("Error updating issuance:", error);
    res.status(500).json({ error: "Failed to update issuance" });
  }
};
