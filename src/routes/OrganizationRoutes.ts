import express from "express";
import {
    getAllOrganizations,
    getOrganizationById,
    createOrganization,
    updateOrganization,
    deleteOrganization
} from "../controllers/OrganizationController";

const router = express.Router();

router.get("/", async(req, res) => { // tüm organizasyon bilgilerini getirir
    try {
        const orgs = await getAllOrganizations();
        res.json(orgs);
    } catch (error) {
        res.status(500).json({ error: "Sunucus hatası" });
    }
});

router.get("/:id", async(req, res) => {
    try {
        const id = Number(req.params.id);
        const org = await getOrganizationById(id);
        if (!org) return res.status(404).json({ error:"Organizasyon bulunamadı" });
        res.json(org);
    } catch(error) {
        res.status(500).json({ error: "sunucu hatası" });
    }
});

router.post("/", async(req, res) => {
    try {
        const newOrg = await createOrganization(req.body);
        res.status(201).json(newOrg);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "sunucu hatası" });
    }
});

router.put("/:id", async (req, res) => { // güncelleme işlemi
  try {
    const id = Number(req.params.id);
    const updatedCount = await updateOrganization(id, req.body);
    if (updatedCount === 0) return res.status(404).json({ error: "Organizasyon bulunamadı" });
    res.json({ message: "Güncellendi" });
  } catch (error) {
    res.status(500).json({ error: "Sunucu hatası" });
  }
});

router.delete("/:id", async(req, res) => {
    try {
        const id = Number(req.params.id);
        const deleteCount = await deleteOrganization(id);
        if (deleteCount === 0) return res.status(404).json({ error: "Organizasyon Bulunamadı" });
        res.json({ message: "Silindi" });
    } catch (error) {
        res.status(500).json({ error: "Sunucu Hatası" });
    }
});

export default router;

