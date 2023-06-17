import blogModel from "../models/blog";

export const blogPost = async(req, res)=>{
try {
    const blog = new blogModel(req.body);
    const newBlog = await blog.save();

    return res.status(201).json({

        status:"success",
        messsage:"Blog saved successfully",
        newBlog: newBlog,
    }
    )
} catch (error) {
    return res.status(500).json({
 status: "error",
 messsage: error.message
    })
}
}