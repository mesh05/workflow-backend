import express from "express";
import workflowRouter from "./workflows";

const router = express.Router();

router.use("/workflows", workflowRouter);

export default router;
