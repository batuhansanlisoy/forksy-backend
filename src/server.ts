import express from "express";
import cors from "cors";
import userRoutes from "./routes/UserRoutes";
import organizationRoutes from "./routes/OrganizationRoutes";
import authRoutes from "./routes/AuthRoutes";
import organizationAuthRoutes from "./routes/organizationAuthRoutes";
import categoryRoutes from "./routes/CategoryRoutes";
import menuRoutes from "./routes/MenuRoutes";
import organizationMenuRoutes from "./routes/OrganizationMenuRoutes"
import organizationCategoryRoutes from "./routes/OrganizationCategoryRoutes"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/organizations', organizationRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use("/organization-auth", organizationAuthRoutes);
app.use("/categories", categoryRoutes);
app.use("/menu", menuRoutes);
app.use("/organization-menus", organizationMenuRoutes);
app.use("/organization-category", organizationCategoryRoutes);
export default app;