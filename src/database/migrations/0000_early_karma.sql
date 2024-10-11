CREATE TABLE IF NOT EXISTS "workflows" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"workflow_name" varchar NOT NULL,
	"flowData" jsonb NOT NULL
);
