import { Request, Response } from "express";
import workflowService from "../../services/workflows";

async function getAllWorkflows(req: Request, res: Response) {
  const result = await workflowService.getAllWorkflows();
  res.send({ data: result });
}

async function getWorkflowById(req: Request, res: Response) {
  const id = req.params.id;
  const result = await workflowService.getWorkflowById(id);
  res.send({ data: result });
}

async function newWorkflow(req: Request, res: Response) {
  const result = await workflowService.newWorkflow(req.body);
  res.send({ data: result });
}

async function updateWorkflow(req: Request, res: Response) {
  const result = await workflowService.updateWorkflow(req.body);
  res.send({ data: result });
}

export default {
  getAllWorkflows,
  getWorkflowById,
  newWorkflow,
  updateWorkflow,
};
