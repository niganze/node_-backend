import { messagePost } from "../controllers/message";

import express from "express";

const router = express.Router();

router.post("/messagePost", messagePost);

export default router;
