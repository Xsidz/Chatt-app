import express from "express";
import authroutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

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
