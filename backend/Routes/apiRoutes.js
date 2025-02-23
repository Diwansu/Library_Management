import express from "express";
import memberRoutes from "./member.routes.js";

const router = express.Router();


router.use("/members", memberRoutes);

export default router;
