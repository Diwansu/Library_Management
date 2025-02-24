import express from "express";
import {
  getAllIssuances,
  getIssuanceById,
  createIssuance,
  updateIssuance,
} from "../controllers/issuance.controller.js";

import checkEmptyBody from "../middleware/checkEmptyBody.js";

const router = express.Router();

router.get("/", getAllIssuances);

router.get("/:id", getIssuanceById);

router.post("/createIssuance", checkEmptyBody, createIssuance);

router.put("/updateIssuance/:id", checkEmptyBody, updateIssuance);

export default router;
