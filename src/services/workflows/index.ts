import db from "../../database/db";
import { workflowTable } from "../../database/schema";
import { eq } from "drizzle-orm";

async function getAllWorkflows() {
  const result = await db.select().from(workflowTable);
  return result;
}

async function getWorkflowById(id: string) {
  const result = await db
    .select()
    .from(workflowTable)
    .where(eq(workflowTable.id, id));
  return result;
}

async function newWorkflow(data: any) {
  console.log("data", data);
  const insertData = {
    id: data.id,
    workflow_name: data.name,
    flowData: data.flowData,
  };
  const result = await db.insert(workflowTable).values(data);
  return result;
}

async function updateWorkflow(data: any) {
  const result = await db
    .update(workflowTable)
    .set({ flowData: data.workflow.flowData })
    .where(eq(workflowTable.id, data.workflow.id));
  return result;
}

export default {
  getAllWorkflows,
  getWorkflowById,
  newWorkflow,
  updateWorkflow,
};
