import express from "express";
import dotenv from "dotenv";
import apiRouterV1 from "./routes";

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

// API routes
app.use("/api/v1", apiRouterV1);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
