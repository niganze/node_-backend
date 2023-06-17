import {blogPost} from "../controllers/blog"

import express from "express"

const router= express.Router()

router.post("/blogPost", blogPost);

export default router;