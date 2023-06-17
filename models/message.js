import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: [true, "title can not be empty"],
  },

  phonenumber: {
    type: "String",
    required: [true, "description can not be empty"],
  },
  email: {
    type: "String",
    required: [true, "email can not be empty"],
  },
  MessageEvent: {
    type: "String",
    required: [true, "message can not be empty"],
  },

  
});

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;
