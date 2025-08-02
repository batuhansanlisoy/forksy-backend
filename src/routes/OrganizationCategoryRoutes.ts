import { Router } from "express";
import { OrganizationCategoryController } from "../controllers/OrganizationCategoryController";

const router = Router();
const controller = new OrganizationCategoryController();

router.post("/", controller.create.bind(controller));
router.post("/bulk", controller.bulkCreate.bind(controller));
router.get("/:organizationId", controller.findByOrganizationId.bind(controller));
router.get("/names/:organizationId", controller.getCategoryNames.bind(controller));
export default router;