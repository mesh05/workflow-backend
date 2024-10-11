import express from "express";
import dotenv from "dotenv";
import apiRouterV1 from "./routes";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
const corsOptions = {
  credentials: true,
  origin: ["http://localhost:5173"], // Whitelist the domains you want to allow
};

app.use(express.json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// API routes
app.use("/api/v1", apiRouterV1);

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
