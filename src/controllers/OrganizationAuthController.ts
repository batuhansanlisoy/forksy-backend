import { Request, Response } from "express";
import { loginOrganization } from "../service/LoginOrganizationService";

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const result = await loginOrganization({ email, password });

    return res.json(result);
  } catch (error: any) {
    return res.status(401).json({ error: error.message });
  }
};
