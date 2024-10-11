import express from "express";
const router = express.Router();
import workflowController from "../../controllers/workflows";

// Use controllers to get the required response

router.get("/", workflowController.getAllWorkflows);

router.post(["/", "/:id"], workflowController.newWorkflow);

router.get(["/", "/:id"], workflowController.getWorkflowById);

export default router;
