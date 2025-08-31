"use server";

import { db } from "@/configs/db";
import { users } from "@/configs/schema";
import { eq } from "drizzle-orm";

export async function saveUser(user) {
  try {
    const existing = await db
      .select()
      .from(users)
      .where(eq(users.email, user.primaryEmailAddress?.emailAddress));

    if (!existing[0]) {
      await db.insert(users).values({
        email: user.primaryEmailAddress?.emailAddress,
        name: user.fullName,
        clerkId: user.id,
        profileImageUrl: user.profileImageUrl,
      });
    }
  } catch (error) {
    console.error("Error saving user:", error);
  }
}
