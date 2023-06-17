import messageModel from "../models/message";

export const messagePost = async (req, res) => {
  try {
    const message = new messageModel(req.body);
    const newMessage = await message.save();

    return res.status(201).json({
      status: "success",
      messsage: "message sent  successfully",
      newMessage: newMessage,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      messsage: error.message,
    });
  }
};
