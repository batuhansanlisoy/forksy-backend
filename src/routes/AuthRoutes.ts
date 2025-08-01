import express from "express";
import bcrypt from "bcrypt";
import { createUser } from "../controllers/UserController";
import { loginUser } from "../controllers/AuthController";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { password, ...rest } = req.body;

    if (!password) {
      return res.status(400).json({ error: "Şifre Gerekli" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser({
      ...rest,
      password: hashedPassword,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Sunucu Hatası" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser({ email, password });

    res.json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
