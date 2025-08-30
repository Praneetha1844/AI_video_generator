import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
/*if (!process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL) {
  throw new Error("Environment variable NEXT_PUBLIC_DRIZZLE_DATABASE_URL is not defined");
}*/
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);
const db = drizzle({ client: sql });