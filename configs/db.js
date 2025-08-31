import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'; // adjust path
/*if (!process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL) {
  throw new Error("Environment variable NEXT_PUBLIC_DRIZZLE_DATABASE_URL is not defined");
}*/
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);
export const db = drizzle({ client: sql });