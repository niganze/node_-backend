import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_Database)
  .then(() => {
    console.log("Database connected");
  })

  .catch((err) => {
    console.log("error: " + err);
  });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`The database is connected on port number called ${PORT}`);
});

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "welcome to my api server",
  });
});

export default app;
