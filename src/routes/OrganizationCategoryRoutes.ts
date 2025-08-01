import { Router } from "express";
import { OrganizationCategoryController } from "../controllers/OrganizationCategoryController";

const router = Router();
const controller = new OrganizationCategoryController();

router.post("/", controller.create.bind(controller));

export default router;