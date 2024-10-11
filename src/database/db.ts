import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const queryClient = postgres(
  "postgresql://superchatdb_owner:jbeY5UGraf3Z@ep-withered-flower-a1xwpakq.ap-southeast-1.aws.neon.tech/superchatdb?sslmode=require",
);

const db = drizzle(queryClient, { schema, logger: true });

export default db;
