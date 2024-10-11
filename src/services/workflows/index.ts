import db from "../../database/db";
import { workflowTable } from "../../database/schema";
import { eq } from "drizzle-orm";

async function getAllWorkflows() {
  const result = await db.select().from(workflowTable);
  console.log(result);
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
  const insertData = { id: data.id, name: data.name, flowData: {} };
  const result = await db.insert(workflowTable).values(data);
  return result;
}

export default { getAllWorkflows, getWorkflowById, newWorkflow };
