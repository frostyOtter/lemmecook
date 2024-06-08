import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

// database
mongoose
    .connect(process.env.mongo_uri as string)
//
const port_number = 6969
const app = express();
app.use(express.json());
app.use(cors())

app.get("/test", async (req: Request, res:Response ) => {
    res.json({message: "hello world!"});
});

app.listen(port_number, () => {
    console.log("Server run on")
    console.log({port_number})
})