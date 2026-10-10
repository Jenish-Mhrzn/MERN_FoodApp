import express from "express";
import {
  createEmail,
  deleteEmailById,
  getEmail,
  getEmailById,
} from "./controller/EmailController.js";

const router = express.Router();

//get api for email
app.get("/", getEmail);

// GET email by ID
app.get("/:id", getEmailById);

// POST email
app.post("/", createEmail);

// DELETE email by ID
app.delete("/:id", deleteEmailById);

export default router;
