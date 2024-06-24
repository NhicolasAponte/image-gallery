import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
    return (
      <nav className="flex items-center justify-between border-b border-slate-400 bg-black p-4">
        <h1 className="text-2xl font-bold">Image Gallery</h1>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
  }