"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { saveUser } from "@/app/actions/saveUser";

export default function UserSaver() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user) {
      // Save user to database when they sign in
      saveUser(user)
        .then(() => {
          console.log("User saved to database successfully");
        })
        .catch((error) => {
          console.error("Failed to save user:", error);
        });
    }
  }, [user, isLoaded]);

  // This component doesn't render anything visible
  return null;
}
