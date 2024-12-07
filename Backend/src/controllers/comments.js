import Comments from "../models/comments.js"

export const createComment = async (req, res)=>{
    const {userId, postId, body} = req.body

    const comment = new Comments ({
        userId,
        postId,
        body
    })
    await comment.save()
    res.status(201).json({
        message: "COMMENT CREATED SUCCESSFULLY",
        comment
    })
}
export const viewComment = async (req, res)=>{
    const viewallcomment = await Comments.find()
    res.json(viewallcomment)
}
export const commentId = async (req,res)=>{
    const particularComment = await Comments.findById(req.params.id)
    res.json(particularComment)
}