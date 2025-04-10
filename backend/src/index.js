import express from "express";
import authroutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authroutes);

app.listen(port, (req, res) => {
  console.log(`Bckedn running on port ${port}`);
  connectDB();
});
