import { Request, Response } from "express";

function getAllWorkflows(req: Request, res: Response) {
  // DB call to get all workflows handled by a service
  res.send("All workflows");
}

function getWorkflowById(req: Request, res: Response) {
  // DB call to get workflows by id handled by a service
  res.send("Workflows by id");
}

export default { getAllWorkflows, getWorkflowById };
