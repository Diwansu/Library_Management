import express from "express";
import memberRoutes from "./member.routes.js";
import issuanceRoutes from "./issuance.routes.js";
import bookRoutes from "./book.routes.js";

const router = express.Router();

router.use("/members", memberRoutes);
router.use("/issuances", issuanceRoutes);
router.use("/books", bookRoutes);

export default router;

