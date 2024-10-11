import { jsonb, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const workflowTable = pgTable("workflows", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("workflow_name").notNull(),
  flowData: jsonb().notNull(),
});
