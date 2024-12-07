import { Router } from "express";
import { createPost, postId, viewPost } from "../controllers/post.js";
import Auth from "../middleware/auth.js"


const router = Router();

router.post("/createPost", Auth, createPost);
router.get("/posts", viewPost)
router.get("/posts/:id", postId)
export default router;
