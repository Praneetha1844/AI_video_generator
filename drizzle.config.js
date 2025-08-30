import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials: {
   url: "postgresql://neondb_owner:npg_pBS1KN0VHZPt@ep-hidden-haze-a4bb494o-pooler.us-east-1.aws.neon.tech/shorts_generator?sslmode=require&channel_binding=require"
  },
});