import Image from "next/image";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative min-h-screen flex items-center justify-center h-screen bg-gradient-to-br from-gray-700 via-black to-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl relative z-10">
        
        {/* Left column with image + overlay */}
        <div className="relative flex items-center justify-center p-6">
          <Image
            src="/signin.jpeg"
            alt="Sign in illustration"
            width={800}
            height={1000}
            className="rounded-lg shadow-2xl"
          />
          {/* Dark overlay on top of the image */}
          <div className="absolute inset-0 rounded-lg" />
        </div>

        {/* Right column with glassmorphism SignIn */}
        <div className="flex items-center justify-center p-6">
          <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-8">
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
          </div>
        </div>
      </div>
    </div>
  );
}
