import express from "express";
import {
  createEmail,
  deleteEmailById,
  getEmail,
  getEmailById,
} from "../controller/EmailController.js";

const router = express.Router();

//get api for email
router.get("/", getEmail);

// GET email by ID
router.get("/:id", getEmailById);

// POST email
router.post("/", createEmail);

// DELETE email by ID
router.delete("/:id", deleteEmailById);

export default router;
