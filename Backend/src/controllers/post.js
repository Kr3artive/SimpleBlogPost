import Posts from "../models/post.js"

export const createPost = async (req, res)=>{
    const {userId, title, image, body} = req.body

    const post = new Posts({
        userId,
        title, 
        body, 
        image
    })
    await post.save()
    res.status(201).json({
        message: "POST CREATED SUCCESSFULLY",
        post
    })
}
export const viewPost = async (req, res)=>{
    const viewallpost = await Posts.find()
    res.json(viewallpost)
}
export const postId = async (req,res)=>{
    const particularPost = await Posts.findById(req.params.id)
    res.json(particularPost)
}