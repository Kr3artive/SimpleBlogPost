import { Router } from "express";
import { createComment, commentId, viewComment } from "../controllers/comments.js";


const router = Router();

router.post("/createPost", createComment);
router.get("/posts", viewComment)
router.get("/posts/:id", commentId)
export default router;
