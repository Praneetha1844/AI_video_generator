import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <SignedIn>
        <h1 className="text-2xl font-bold">Welcome to your Dashboard 🎉</h1>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
