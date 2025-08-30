import { boolean } from "drizzle-orm/gel-core";

export const Users=pgTable("users",{
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
    email:text("email").notNull().unique(),
    imageUrl:varchar("image_url",{length:2048}),
    subscription:boolean("subscription").default(false).notNull(),
})