import express from "express";
import { authenticateToken } from "../middleware/authMiddeleware";

const router = express.Router();

router.get("/profile", authenticateToken, (req, res) => {
  res.json({ user: req.user }); // token’dan gelen kullanıcı bilgisi
});

export default router;
