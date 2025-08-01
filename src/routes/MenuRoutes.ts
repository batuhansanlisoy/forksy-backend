import { Router } from "express";
import { MenuController } from "../controllers/MenuController";

const router = Router();
const controller = new MenuController();

router.get("/", controller.getAll.bind(controller));

export default router;