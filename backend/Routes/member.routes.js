import express from "express";
import {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
} from "../controller/member.controller.js";

const router = express.Router();

router.get("/", getAllMembers);

router.get("/:id", getMemberById);

router.post("/", createMember);


router.put("/:id", updateMember);

export default router;
