import express from "express";
import {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
} from "../controllers/member.controller.js";

import checkEmptyBody from "../middleware/checkEmptyBody.js";

const router = express.Router();

router.get("/", getAllMembers);

router.get("/:id", getMemberById);

router.post("/createMember", checkEmptyBody, createMember);

router.put("/updateMember/:id", checkEmptyBody, updateMember);

export default router;
