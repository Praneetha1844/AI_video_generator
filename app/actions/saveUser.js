"use server";

import { db } from "@/configs/db";
import { users } from "@/configs/schema";
import { eq } from "drizzle-orm";

export async function saveUser(user) {
  try {
    const existing = await db
      .select()
      .from(users)
      .where(eq(users.clerkId, user.id));

    if (!existing[0]) {
      await db.insert(users).values({
        clerkId: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        name: user.fullName,
        imageUrl: user.profileImageUrl,
      });
      console.log("User saved to database successfully");
    } else {
      console.log("User already exists in database");
    }
  } catch (error) {
    console.error("Error saving user:", error);
    throw error;
  }
}
