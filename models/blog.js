import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: "String",
    required: [true, "title can not be empty"],
  },

  description: {
    type: "String",
    required: [true, "description can not be empty"],
  },
});

const blogModel = mongoose.model("Blog", blogSchema);

export default blogModel;
