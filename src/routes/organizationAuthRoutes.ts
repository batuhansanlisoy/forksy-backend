import express from "express";
import { login } from "../controllers/OrganizationAuthController";
 
const router = express.Router();

router.post("/login", login);

export default router;
