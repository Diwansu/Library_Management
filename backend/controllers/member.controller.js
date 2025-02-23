import db from "../models/index.js";
import { isValidEmail, isValidPhone } from "../utils/validator.js";

const { Member } = db;

export const getAllMembers = async (req, res) => {
  try {
    const members = await Member.findAll();
    res.status(200).json(members);
  } catch (error) {
    console.log("Error searching all the memebr:", error);
    res.status(500).json({ error: "Failed to fetch members" });
  }
};

export const getMemberById = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await Member.findByPk(id);
    if (!member) return res.status(404).json({ error: "Member not found" });

    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch member" });
  }
};

export const createMember = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ error: "All fields (name, email, phone) are required." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    if (!isValidPhone(phone)) {
      return res
        .status(400)
        .json({ error: "Phone number must have at least 10 digits." });
    }

    const memeberInfo = {
      mem_name: name,
      mem_phone: phone,
      mem_email: email,
    };

    const newMember = await Member.create(memeberInfo);
    res.status(201).json({
      status: 1,
      message: "Memebr created suscessfully",
      newMember,
    });
  } catch (error) {
    console.log("Member creation error", error);
    res.status(400).json({ error: "Failed to create member" });
  }
};

export const updateMember = async (req, res) => {
  try {
    const updatedMemberInfo = req.body;

    const member = await Member.findByPk(req.params.id);

    if (!member) return res.status(404).json({ error: "Member not found" });

    if (
      updatedMemberInfo?.mem_email &&
      !isValidEmail(updatedMemberInfo.mem_email)
    ) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    if (
      updatedMemberInfo?.mem_phone &&
      !isValidPhone(updatedMemberInfo.mem_phone)
    ) {
      return res
        .status(400)
        .json({ error: "Phone number must have at least 10 digits." });
    }

    const updatedInfo = await member.update(updatedMemberInfo);

    res.status(200).json({
      status: 1,
      message: "member info updated",
      updatedInfo,
    });
  } catch (error) {
    console.log("member updation error", error);
    res.status(400).json({ error: "Failed to update member" });
  }
};
