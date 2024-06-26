"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import MyUploadButton from "~/components/upload-button";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between border-b border-slate-400 bg-black p-4">
      <h1 className="text-2xl font-bold">Image Gallery</h1>
      <div className="flex flex-row space-x-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <MyUploadButton/>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();// refresh runs the route on the server and sends down the new data to update content 
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
