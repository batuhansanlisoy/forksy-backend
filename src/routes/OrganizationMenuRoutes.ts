import { Router } from "express";
import { OrganizationMenuController } from "../controllers/OrganizationMenuController";

const router = Router();
const controller = new OrganizationMenuController();

router.post("/", controller.create.bind(controller));                          
router.get("/:organizationId", controller.getByOrganization.bind(controller));
router.delete("/:id", controller.delete.bind(controller));  

export default router;