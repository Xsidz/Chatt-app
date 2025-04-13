import express from "express";
import authroutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());


dotenv.config();
const port = process.env.PORT;
app.use("/api/auth", authroutes);
app.use("/api/message", messageRoute);

app.listen(port, (req, res) => {
  console.log(`Bckedn running on port ${port}`);
  connectDB();
});
