import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import postblogRoute from "./routes/blog";
import postmessageRoute from "./routes/message";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use("/api/v1/",postblogRoute);
app.use ("/api/v1/",postmessageRoute);
app.get('/', (req, res) =>{
    return res.status(200).json({

        status: 'OK',
        message:"welcome to my api server"
    })
})

export default app;