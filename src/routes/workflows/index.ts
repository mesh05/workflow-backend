import express from "express";
const router = express.Router();
import workflowController from "../../controllers/workflows";

// Use controllers to get the required response

router.get("/", (req, res) => {
  const result = workflowController.getAllWorkflows(req, res);
  res.send(result);
});

router.get(["/", "/:id"], (req, res) => {
  const result = workflowController.getWorkflowById(req, res);
  res.send(result);
});

export default router;
